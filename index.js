import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))

const postsFilePath = path.join(process.cwd(), "data", "posts.json");
let posts = [];

try {
  const data = fs.readFileSync(postsFilePath, "utf-8");
  posts = JSON.parse(data);
} catch (err) {
  console.error("Error reading posts.json:", err);
}

let rants =[];

app.use((req, res, next) => {
  const allTags = new Set();
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => allTags.add(tag));
    }
  });
  rants.forEach(rant => {
    if (rant.tags && Array.isArray(rant.tags)) {
      rant.tags.forEach(tag => allTags.add(tag));
    }
  });
  res.locals.tags = Array.from(allTags);
  next();
});

//for latest rants section

app.get('/', (req, res) => {
  const recentPosts = [...posts, ...rants]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 5);
  const featuredPost = posts.find(p => p.featured) || posts[0];
   res.render("index.ejs", {posts: recentPosts, featuredPost});
})

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = [...posts, ...rants].find(p => p.id === postId);
  if (post) {
    res.render('post-detail.ejs', {post});
  } else {
    res.status(404).send("Post not found");
  }
})

app.get("/tags/:tag", (req, res) => {
  const tag =req.params.tag;
  const filteredPosts = [...posts, ...rants].filter(post => post.tags.includes(tag));
  res.render("tag-posts.ejs", {tag, posts: filteredPosts});
});

app.get('/about', (req, res) => {
  res.render("about.ejs");
})


//for reading new post

app.get("/allPosts", (req, res) => {
  const recentPosts = [...posts, ...rants]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.render("allPosts.ejs", {posts: recentPosts});
})

app.get("/featured", (req, res) => {
  const recentPosts = posts
  const featuredPost = recentPosts[0]; // Or any other logic you prefer
  res.render("featured", { posts: recentPosts, featuredPost });
});



// for submit a rant modal

app.get('/rants/new', (req, res) => {
  res.render("newRant.ejs");
})

app.post('/rants', (req, res) => {
  const { title,summary,content} = req.body;
  let tags = req.body.tags;
  if (!tags) tags = [];
  else if (!Array.isArray(tags)) tags = [tags];

  const newRant = {
    id: rants.length + posts.length + 1,
    title,
    summary,
    content,
    tags,
    createdAt: new Date()
  };
  rants.push(newRant);
  res.redirect('/rants');
});

app.get('/rants/:id', (req, res) => {
  const rantId = parseInt(req.params.id);
  const rant = rants.find(r => r.id === rantId);
  if (!rant) return res.status(404).send('Not found');
  res.render('rant.ejs', { rant });
});


app.get('/rants', (req, res) => {
  const tagFilter = req.query.tag;
  const sortOrder = req.query.sort === 'asc' ? 'asc' : 'desc';
  let filteredRants = tagFilter 
    ? rants.filter (r => r.tags.includes(tagFilter))
    :[...rants]; //shallow coly to avoid mutating original
  filteredRants.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  res.render("allRants.ejs", {
    rants: filteredRants, 
    allTags: res.locals.tags, 
    selectedTag: tagFilter, 
    sortOrder:req.query.sort || 'desc'});
});

app.get('/rants/:id/edit', (req,res) => {
  const rant = rants.find(r => r.id === parseInt(req.params.id));
  if(!rant) return res.status(404).send("Rant not found.");

  const allTags = [
    "Hot Take", "Overrated", "Mildly Interesting", "WhyMe", "Overthinking",
    "RelatableAF", "UnpopularOpinion", "9to5Nonsense", "CtrlAltDelMyLife",
    "OverratedThings", "AdultingIsHard", "ExistentialCrisis", "InstagramVsReality",
    "SarcasmTherapy", "CertifiedMess", "ChaosAndCoffee", "TrendingForNoReason", "KeyboardWarrior"
  ];
  res.render("editRant.ejs", {rant, allTags});
});

app.post('/rants/:id/update', (req, res) => {
  const rantId = parseInt(req.params.id);
  const rant = rants.find(r => r.id === rantId);

  if (!rant) return res.status(404).send("Rant not found.");

  const { title, summary, content } = req.body;
  let tags = req.body.tags;
  if (!tags) tags = [];
  else if (!Array.isArray(tags)) tags = [tags];

  rant.title = title;
  rant.summary = summary;
  rant.content = content;
  rant.tags = tags;
  rant.updatedAt = new Date();

  res.redirect(`/rants/${rantId}`);
});
app.post('/rants/:id/delete', (req, res) => {
  const index = rants.findIndex(r => r.id === parseInt(req.params.id));
  if (index !== -1) {
    rants.splice(index, 1);
  }
  res.redirect('/rants');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})