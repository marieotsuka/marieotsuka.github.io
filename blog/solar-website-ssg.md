# How to Build a Low-tech Website: Design Techniques and Process

## Part 2: Process
This article is a continuation of a series of articles covering the redesign process of Kris De Decker's Low-tech Magazine and its [solar-powered redesign](https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website.html). Here we cover the process of static site generation in general, and how that's applied in Low-tech Magazine's workflow specificially. For an introduction to the project and front-end techniques, see [part 1]()

### The Infrastructure

[!the web ecosystem](http://motsuka.com/blog/img/ltm_ecosystem.png)

Here are some of the basic components of the Low-tech Magazine website's ecosystem. 

A. The website is powered by a solar panel installed outside of Kris's apartment in Barcelona. When active, it also charges a battery that can be used during periods without sun.

B. The server serves up a static website.

C. Visitors access these files rendered within their browsers.

You can find more technical details of the backend hardware here. While B & C are matter-of-fact components of website acces, I reiterate them here, because the average end user rarely considers the roles the server & browser play in their day-to-day browsing. The design of the website is intended to expose and emphasize the software and hardware on which website access depends - and the implictions of this: things like how the browser plays a role in the design of a website, or how the way a website is generated impacts energy use. 


### The basics of Static Site Generators

To begin, let's clarify the terms "dynamic" and "static": "Dynamic" here points to a specific way the site is created, rather than describing a particularly active look and feel. You can have a dynamically generated site feel quite simple and un-dynamic. Similarly, a "static" site doesn't mean it's boring.

Websites consist of repeated and variable components. A basic page often has a header (usually with the logotype and navigation) and a footer that is the same across all pages. The content (such as the article text) changes across pages. Anyone who has manually hand-coded a site would know the tedium of having to change repeated code (for the navigation menu, for example) on many different pages so that they are consistent.

That's where content management systems (CMS) come in place. You determine what goes into these modular components — what repeats and and what's different. The system then puts together each webpage by pulling the part for the header, the content, and footer accordingly. This information needs to be stored, whether in a database or file, and accessed via some form of script. Many content management systems rely on server-side scripting (such as PHP, Ruby, Python, server-side JS) to serve up webpages. Whenever a user accesses a page, the CMS generates that page on-demand on the server. The page is thus generated "dynamically." 

[!img](Wordpress)

A large number of CMSes live online — most notably WordPress, in that all this generation process happens online, by the server. But there are [a variety of systems](https://www.staticgen.com/) that offload that work to compile pages offline. Static site generation works similar to dynamic CMSes, but just uses one's own computer to generate the site instead of a live server.  That is, the CMS is installed on a computer, and the site is generated locally. The server only deals with serving up the resulting "static" pre-compiled site that the CMS outputs. You can read up more about static site generators here.

### Static site generation: the Low-tech Magazine process

As mentioned above, the redesign of Low-tech Magazine was going to involve not only an overhaul to the look and feel, but also to how it's hosted: the website is now going to live on a small mini-computer powered by a solar panel. Minimizing the amount of work this server should do was critical. So going with a static site generator gave us several advantages. You can read more about our choice of static Site generation on the [Software & Hardware overview](https://homebrewserver.club/low-tech-website-howto.html#pelican-static-site-design). For further reading on the pros and cons of static sites generation, see [Smashing Magazine's overview](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/).

To summarize, static site generation offered the following benefits:
- Minimized server energy use. All the server does is serve up a collection of website files, since all of the pages are pre-compiled locally. This allows for a small-scale solar setup to power the website, even through a surprising surge of visitor traffic.
- Offline content creation. Earlier, editing and creating content for the website required internet access. Now, content can be written / edited offline, and pushed onto the live site when connected. Reducing time online contributes to reduced energy use.
- Automatic offline archive and content portability. Writing content in Markdown 


In terms of the specific article, 

1. The editor edits his articles in [markdown](https://www.markdownguide.org/getting-started/), which allows him to format his posts without knowing HTML code. Using the [Sublime Text](https://www.sublimetext.com/) editor (which has a Markdown Preview plugin available.)
2. These files are synced to a shared repository
3. The content (.md) files are processed along with the theme template files (.html, .css, .js) via the [Pelican CMS system](http://docs.getpelican.com/en/stable/). Pelican plugins (written in python), including the [dithering plugin](), customizes this site generation. The dithering plugin, for example, compresses the images using a six-tone black & white palette in this process.
4. The output from Pelican is a collection of static files (.html, .css, .js) that can be directly transferred onto the server.


### The problem with Static Site Generators

A static website limits us to certain functions — we cannot do anything that involves server work. It can't do is things like getting input from a website vistor and changing pages on the fly. But there are workarounds to this (perhaps I'll dive into this for Part 3 in the future.)

The larger problem here is that compared to tools like Wordpress, running a blog through a static site generator poses a steep learning curve. Unfortunately with our current tools, it's a large leap from designing how a site looks and feels to understanding backend generation. 

Systems like Wordpress are extremely robust, with a wonderfully large community behind the tool developing plugins to accomodate a comprehensive range of user scenarios. But because of this, they often comes with features unnecessary for the purpose at hand. This is what we call "bloat." Although these large, bloated systems are resource-heavy, they do enable the non-technical user to publish content online within minutes. They take care of all the nitty-gritty mechanics that goes into compiling a website.

So the gap between systems like Wordpress and static site generation is only to be expected: once you break it down, there are countless processes that happen under the hood that we often don't see. Even if you're fluent in HTML / CSS / JS, there's a whole slew of new technologies to learn between coding a static website and setting up a static site generator. This includes:
- getting used to using Terminal
- setting up a Virtual Environment 
- installing dependencies
- familarizing yourself with the language use in your CMS (i.e. Python, Pelican commands)
- familarizing yourself with the templating language (i.e. Jinja2)

Moreover, projects often involve more than one contributor. This can be addressed through the git version control system, but this also adds:
- installing git
- make an account on Github / Gitlab
- understanding git commands

Kris notes: "I have replaced a dependency on Typepad by a dependency on web developers." 

### Considerations

So what's the point of going through all of this to develop a more customized infrastructure? In my opinion, it's still a critical task to consider the way the content is generated and the workflow it entails. Dan Michaelson from the New York studio, LinkedbyAir, describes this as well in [an interview at Digital Strategies in Genre-Defining Magazines](https://digital-strategies.ma-ad.ch/interview/interview-with-dan-michaelson/). More so than we realize, the design and content of the website is heavily interrelated to the way it's constructed and used. For better or for worse, a Wordpress site, no matter how customized, will always produce a website filtered by the underying assumptions and values embedded within the Wordpress CMS. Same with Squarespace. It's important that as designers of platforms, we are aware of the assumptions we are propagating through their use.

Then, do we all need to know how to code? What are the alternatives? Perhaps it's a bit of both: these tools can be made more accessible, but baseline code literacy should be improved — not only among designers, but among all users. 

Improving the accessibility of static site generators:
After this process, I am considering developing a static site generator with a GUI. Please feel free to get in touch if you have any suggestions around this.

Improving general code literacy:
A baseline understanding of programming, no matter what language, gives you the confidence to try to figure out ways to build something yourself. 

Having taught web programming at Rhode Island School Design for the past three years, I'm already seeing the average comfort level with code is increasing — and it's great that students are being introduced earlier in school curriculum. But the internet is also an endless resource: we just need the motivation and guidance to know where to look. 

The more simplified and bare-bones of a process, we can use, the more we are free from the assumptions embedded in the design. The result may not be perfect, but it's an empowering exercise in considering an alternative.
