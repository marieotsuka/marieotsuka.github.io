# How to Build a Low-tech Website: Design Techniques and Process
Marie Otsuka

## Part 2: Process

### The Infrastructure

Here are some of the basic components of the website's ecosystem. You can find more technical details of the backend hardware here (A & B.)

A. The website is powered by a solar panel installed outside of Kris De Decker's apartment in Barcelona. When active, it also charges a battery that can be used during periods without sun.

B. The server SD card
The 

C. The mini computer serves up the website files on visitors' browsers.


How the development process"

1. Kris edits his articles in [markdown](https://www.markdownguide.org/getting-started/), which allows him to format his posts without knowing HTML code. Using the [Sublime Text](https://www.sublimetext.com/) editor (which has a Markdown Preview plugin available.)
2. These files are synced to a shared repository to which Roel and I have access.
3. Image and markd down files are processed via the [Pelican CMS system](http://docs.getpelican.com/en/stable/).
    Roel's [dithering plugin]() compresses the images using a six-tone black & white palette.
4. The output of Pelican is a 

### The basics of Static Site Generators

Websites consist of repeated and variable components. A basic page often has a header (usually with the logotype and navigation) and a footer that is the same across all pages. The content (such as the article,) changes across pages. Anyone who has manually hand-coded a site would know the tedium of having to change the code for the navigation menu on all existing pages so that they are consistent.

That's where content management systems (CMS) come in place. You determine what goes into these modular components — what repeats and and what's different. The system then puts together each webpage by pulling the part for the header, the content, and footer, appropriately (and is thus called "dynamic.") So this information needs to be stored, whether in a database or file, and accessed via some form of script. Many content management systems rely on server-side scripting (such as PHP, Ruby, Python, server-side JS) to serve up webpages. Whenever a user accesses a page, the CMS generates that page on-demand on the server.  

But while a large number of CMSes live online — most notably WordPress — there are [a variety of systems](https://www.staticgen.com/) that offload that work to compile pages offline. That is, the CMS is installed on one's own computer, and the site is generated locally using its scripting power. The server only deals with serving up the resulting "static" site. 

Because we wanted to minimize how much work the server should do, going with a static site generator made the most sense. What it can't do is things like getting input from a website vistor and changing pages on the fly. You can read more about the benefits of 

### The problem with Static Site Generators

Unfortunately with our current tools, it's a large leap from designing how a site looks and feels to designing how it’s actually constructed and used, even though these are mutually interdependent. Setting up a workflow with a static site generator still has a pretty steep learning curve. And it’s only to be expected: once you break it down, there are so many processes that happen under the hood that we often don't see.

Systems like WordPress are extremely robust, with a large community behind the tool developing plugins to accomodate a comprehensive range of user scenarios. As a result, they suffer from "bloat" — it often comes with features unnecessary for the purpose at hand. But while they are resource-heavy, they do enable the non-technical user to publish content online within minutes.

Kris notes: "I have replaced a dependency on Typepad by a dependency on web developers." 

I see two areas 
1. Improve accessibility of static site generators
    This guide is an attempt to introduce . Even with an understanding of basic 
2. Improve general code literacy. 
    For better or for worse, softwares and systems will always come with assumptions on what should be made using it. Having a baseline understanding of programming, no matter what language, gives you confidence to try to figure out ways to build something different. It's empowering.


You can read more about the pros and cons of static sites generation in articles such as [Smashing Magazine's overview](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/).

It's a bit of both: baseline code literacy should be improved. But these tools can also be more accessible.


Even if one is fluent in HTML / CSS / JS, there's a whole slew of new processes to learn between coding a static website and setting up a static site generator. This includes:
- get used to using Terminal
- setup a Virtual Environment 
- install dependencies
- familarize yourself with the language use in your CMS (Python)
- familarize yourself with the templating language (Jinja2)

And if you're using, but often comes hand in hand:
- install git
- make an account on Github / Gitlab
- understand version control and the git workflow

I'm hoping to demystify this process a little here.



One of the challenges

Unlike posters and books, websites are live designs that must evolve with use. When designing a website, you’re designing You may add all the templates But the fact is that the infrastructure of how you generate, the platform, and it’s front-end design, is always closely related. The conceptual backbone of this website redesign is to merge the two: the infrastructure is also content .


In researching with colleague Lauren Traugott-Campbell, we found that recycled paper may not be the most sustainable option for printing books due to the bleach involved.
I'll begin by 


(This diagram is an overview of basic parts that work with each other. The first draft was originally drawn on a napkin at an Antwerp bar / cafe Witzli-Poetzli.) 
