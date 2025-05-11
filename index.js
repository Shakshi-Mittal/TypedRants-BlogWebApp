import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))



// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

let posts = [
  {
    id: 1,
    title: "Why Coffee is Overrated",
    summary: "Because the world needed another opinion on coffee.",
    content: "Let's get this out of the way: I'm not saying you can't enjoy your cup of overpriced bean juice. You do you. But maybe—just maybe—it's time we all stop pretending that coffee is the sacred fuel of human productivity and personality. You know the type. The ones who say things like “Don't talk to me until I've had my coffee.” As if skipping caffeine turns them into a misunderstood villain from a low-budget horror film. Here's a thought: if your personality is entirely dependent on a beverage, maybe its not the beverage that needs adjusting. And can we talk about the taste? We've convinced ourselves that bitter, burnt sludge is a delicacy—as long as it's poured by someone with a handlebar mustache and costs more than a full meal. Even with all the syrups, milk alternatives, and whipped cream towers, most people are masking the flavor of what essentially tastes like roasted regret. Then there's the identity cult. Coffee is no longer a drink—it's a lifestyle, a personality trait, a social media filter. “Oh, you like books, rainy days, and black coffee? So edgy. So original.” We've romanticized caffeine dependency into some aesthetic of sophistication, when in reality, it's just a worldwide addiction with branding. Also, ever try quitting coffee? That headache isn't withdrawal—it's your brain staging a protest march for not being bathed in dopamine anymore. If a drink can hold your brain hostage, maybe that's a red flag. In the end, I get it. Coffee is warm. It's routine. It's social. But let's stop pretending it's a magical elixir brewed by the gods. Sometimes, it's just a hot beverage in a fancy cup that gives you the illusion of getting your life together. Typed, not shouted. —A thoroughly uncaffeinated soul",
    createdAt: "2025-05-10T09:10:29",
    tags: ["ChaosAndCoffee", "OverratedThings", "UnpopularOpinion"]
  },
  {
    id: 2,
    title: "Why I hate Mondays",
    summary: "Another unoriginal rant about Mondays.",
    content: "Yes, I know hating Mondays is the most cliché thing since pineapple-on-pizza debates. But clichés exist for a reason—and in this case, it's because Mondays actually suck. Monday is the rude awakening after two days of pretending life is under control. It's the alarm clock’s smug little buzz reminding you that freedom was fleeting and joy is conditional. Suddenly, your weekend self—the optimistic version of you who made to-do lists, meal prepped, and said “this week, I’ll be productive”—is gone. All that remains is weekday-you, questioning every life decision between sips of lukewarm coffee. Let’s talk about the energy. Or rather, the complete lack of it. Mondays feel like walking through wet concrete while someone emails you about a meeting that “could’ve been a Slack message.” Your brain is still in Saturday mode, your soul is still on the couch watching Netflix, and your body? It’s just physically present, not emotionally involved. And the forced positivity? Even worse. “Happy Monday!” they say, cheerfully lying to your face. No one is happy on a Monday, Janet. We're all just pretending to function so HR doesn’t notice we’re spiraling. But what really gets me is that Mondays come back. Every. Single. Week. Like an unpaid internship from the universe, showing up uninvited, demanding effort in exchange for existential dread. Is it childish to blame a day of the week for my problems? Absolutely. Am I going to stop? Not a chance. Because ranting about Mondays is the only tradition more sacred than Sunday night anxiety. Typed with zero enthusiasm.",
    createdAt: "2025-05-02T08:02:29",
    tags: ["9to5Nonsense", "RelatableAF", "AdultingIsHard"]
  },
  {
    id: 3,
    title: "The Case Against Pineapple Pizza",
    summary: "Sweet and savory? More like sweet and sorry.",
    content: "Let’s just rip the bandage off: pineapple does not belong on pizza. I’m not saying it’s illegal—but maybe it should be. Because what kind of culinary chaos led us to believe that warm, juicy fruit and molten cheese belong on the same slice of bread? People say it’s about “contrast”—the sweet and salty combo, the balance of flavors. Newsflash: not all contrasts are good. For example, toothpaste and orange juice. Chaos and order. Crocs and socks. Pineapple on pizza falls firmly into this category of bad ideas that somehow escaped the group chat. And let’s talk texture. Pizza is supposed to be crispy, chewy, cheesy perfection. Then someone comes along and dumps a can of tropical sugar cubes on top, turning it into a soggy mess that tastes like a fruit salad crashed a pizza party uninvited. You wouldn’t put ketchup on cake just because you like both. Some lines shouldn’t be crossed. Now, I know the defenders are sharpening their pitchforks. “But it’s a Hawaiian pizza! It’s a classic!” First of all, it was invented in Canada. Second, just because it’s been around doesn’t mean it’s right. We’ve had crocs since 2002—doesn’t make them fashionable. Pineapple pizza isn’t just a bad topping—it’s a divisive wedge tearing friendships apart, one slice at a time. And no, saying “don’t like it, don’t eat it” doesn’t count. I’m still forced to see it—sitting there in the box, steaming like a crime scene. Mocking me. This isn’t just an opinion. It’s a public service announcement. Some heroes fight crime. I write aggressively-worded rants about controversial food choices. We all do our part. Typed with pineapple-free fingers, —A firm believer in pizza justice",
    createdAt: "2025-05-03T01:03:12",
    tags: ["UnpopularOpinion", "KeyboardWarrior", "SarcasmTherapy"]
  },
  {
    id: 4,
    title: "The Truth About Cats",
    summary: "Spoiler: They don't care about you.",
    content: "Let’s stop lying to ourselves: cats are not your best friends. They’re barely your roommates. If anything, you’re a live-in butler whose only job is to refill the bowl, clean up poop, and act as a heating pad on demand. People love to say cats are “independent.” That’s a cute way of saying emotionally unavailable and mildly judgmental. You walk in the door after a long day, hoping for some affection, and what do you get? A side-eye and a tail flick as they walk away from you like you just offended their ancestors. Try petting a cat. One second they’re purring, the next you’ve been bitten, scratched, or both. No warning. No logic. Just vibes. It’s like cuddling with a landmine. And don’t even get me started on the 3 a.m. parkour sessions. Cats have two speeds: dead asleep or possessed. One minute they’re curled up like a peaceful loaf of bread, and the next they’re using your stomach as a launchpad to fight ghosts in the hallway. If you wanted peace and quiet, you should’ve adopted a brick. But here's the catch: we still love them. Why? No idea. Stockholm Syndrome? Feline mind control? Their tiny toe beans? Probably all of the above. They ignore us, abuse us, and make us feel lucky when they grace us with their presence. And somehow, we accept it. We call it “mysterious” instead of “cold-blooded.” So yes, the truth about cats is simple: they don’t care about you. But for some cursed reason… we care about them anyway. Typed while being watched by a furry dictator, —A human owned by a cat",
    createdAt: "2025-05-04T01:03:11",
    tags: ["InstagramVsReality", "Mildly Interesting", "RelatableAF"]
  },
  {
    id: 5,
    title: "Why I Regret Updating My Phone",
    summary: "I updated  my phone and lost all faith in technology.",
    content: "There I was—naively tapping “Update Now” like a fool, full of hope and trust. The tech gods smiled… and then immediately cursed me. Because what followed wasn’t innovation. It was sabotage. First of all, nothing works the same anymore. Everything is either moved, missing, or magically worse. The keyboard has the sensitivity of a caffeinated squirrel, autocorrect now insists I talk like a Victorian poet, and the camera app? Congratulations, it now takes five extra taps to do the one thing it used to do instantly. Progress! Oh, and let’s talk about the battery. Before the update: a solid day of use. After the update: I unplug it at 8am and by 10:17am it’s gasping for life support like it just ran a marathon. But sure—go ahead and tell me “we’ve improved efficiency.” And then come the bugs. Glitches. Freezes. That charming little moment where the whole screen goes black for fun. Apps crash like they’re on strike. Bluetooth doesn’t connect to anything anymore unless I whisper sweet nothings to it and hold my phone at a 47-degree angle. Also, who asked for these new features? I now get daily “screen time reminders” telling me I have a problem. You know what else I didn’t have before this update? Judgmental notifications. Thanks for the unsolicited therapy, iOS/Android. In conclusion: I clicked a button and my phone went from sleek tool to sadistic prank device. Next time I see “Update Available”? I’ll wait until the bitter end. Typed while fighting lag, —A bitter victim of software betrayal",
    createdAt: "2025-05-06T01:03:12",
    tags: ["tech", "TechFail"],
    featured: true
  },

  {
    id: 6,
    title: "Autocorrect Ruined My Life (and My Job Interview)",
    summary: "A single autocorrect turned 'dedicated' into 'decapitated'.",
    content: "I was excited. An actual human recruiter had replied to my application. A miracle in itself, right? I spent 20 minutes crafting a perfect message on my phone—polished, professional, and confident. I typed: 'I’m a dedicated professional with years of experience in tech support and client communication.' I hit send. Smiled. Closed my phone.Two hours later, I checked my email again… and my soul left my body. The message I actually sent? 'I’m a decapitated professional with years of experience in tech support and client communication.' I stared in horror. Spellcheck didn’t just ruin my message—it assassinated my credibility. No follow-up email. No polite “thank you for applying.” Just pure, career-ending silence. What’s worse? I didn’t even get a chance to explain. How do you recover from something like that? Hi, sorry, I actually have a head. That was autocorrect. Technology was supposed to help us, not humiliate us in front of potential employers.",
    createdAt: "2025-05-09T01:03:12",
    tags: ["CtrlAltDelMyLife", "WhyMe"],
  },
  {
    id: 6,
    title: "My Smart Fridge is Judging Me",
    summary: "When even your appliances start fat-shaming you.",
    content: "Look, I never asked for a fridge with Wi-Fi. All I wanted was cold milk and the occasional ice cube. But no—modern problems require overengineered solutions, and now I have a “smart” fridge that sends notifications to my phone. Last week, I got this gem: “You’ve opened the fridge 17 times today. Consider hydration instead.” Excuse me? And then it suggested recipes based on what’s inside: “Try making a salad with your spinach before it wilts again.” It said “again.” As in, it remembers that I let it die last time. My fridge has memory. And opinions. Now I’m sneaking into my own kitchen like I’m on a stealth mission. I feel judged every time I grab a slice of cheese at midnight. At this point, I’m ready to trade it for a dumb icebox and my dignity.",
    createdAt: "2025-06-11T01:56:03",
    tags: ["SarcasmTherapy", "CertifiedMess"],
  }
  
];

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

//for start reading new post
app.get("/allPosts", (req, res) => {
  const recentPosts = posts
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
   res.render("allPosts.ejs", {posts: recentPosts,});
})


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