# How to Build a Low-tech Website: Design Techniques and Process
Marie Otsuka

Low-tech Magazine is a technology website that looks at sustainable historical alternatives to modern-day tech. A radical redesign, intended to minimize the energy used to access its content, recently launched at [solar.lowtechmagazine.com](https://solar.lowtechmagazine.com/).

This article / wiki focuses on the front-end efforts involved in this project, and is a compendium to [How to Build a Low-tech Website](https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website.html), which summarizes our primary design decisions and motivations, and [How to build a Low-Tech website: Software & Hardware](https://homebrewserver.club/low-tech-website-howto.html), which documents the back-end technical details. It's written as an introductory text for those with basic knowledge of front-end languages (HTML, CSS, JS.)

Part 1 reviews some specific techniques used in the design. Part 2 delves into the process of static site generation and development, and how that fits into the larger ecosystem of the internet.

Some background: the website is a static site generated with [Pelican](http://docs.getpelican.com/en/stable/), and the theme stylesheets were developed using [SCSS](https://sass-lang.com/). 

# Part 1: Design

A core part of the design process was to interrogate which design elements and features can be sacrificed and which are absolutely necessary for the site's purposes. What kind of changes in user experience can question our relationship to the internet, while still being functional? 

In considering internet sustainability, the design of a website constitutes the majority of energy use. "[F]rontend components—JavaScript, images, CSS/ HTML, and other assets, plus page rendering tasks a browser must perform—comprised between 76 to 92% of total page load time. Because design decisions drive so much of what happens on the frontend, designers clearly have a critical role to play in creating optimized solutions." (Tim Frick, *Designing for Sustainability*.) Considering this, our design approach was to prioritize using the least amount of resources to enable a website that can be powered from a small-scale solar panel.


## Logo

Low-tech’s mission is to look to technologies of past for inspiration for our future. In keeping with their approach, we decided on a simple typographic move instead of a logo: a left-facing arrow as the hyphen. LOW←TECH MAGAZINE, in all forms it takes across platforms, is our identity. The arrow also draws from Low-tech’s previous image masthead of a spear, as a low-tech weapon against prevailing the claims of high-tech progress.

Specifically, it uses the unicode: `&larr;` or `U+02190`, which, if not included in the default typeface, will use any symbol font available to the user to render it. 

As some have noted, it’s possible to embed inline SVGs with minimal overhead on websites, since SVGs are a scalable and lightweight image format. But once a logotype is set in vector form, it needs to be distributed accordingly. Logos are now required for any form of representation, often involving a zipped package with eps, ai, png, and jpeg files all in order to ensure that the end-user has a program to use at least one of them. (If you think about it, using a letter / symbol is the equivalent of inline SVGs in print form...)

This approach avoids the need to distribute these assets but also strengthens the identity as a versatile, medium-specific voice. The identity calls for conceptual consistency over visual uniformity.


## Default typeface

In the early decades of the web, we only saw system fonts used on the web. System fonts such as Arial, Times New Roman, Georgia, and Verdana were most likely to be available on all operating systems, whether Windows / Mac or other. This ensured that the website will more or less look consistent for the majority of users. 

Now, with the `@font-face` rule and webfont distributors, it's extremely easy to embed a typeface within a website. But they come at a cost: custom fonts impact performance, often adding several seconds of load time to a page. Several strategies by name of [FOUT, FOIT, or FOFT](https://css-tricks.com/fout-foit-foft/) address this issue. (An unintentional side effect was also that it led to enabling mass piracy of typefaces.) 

With customized typefaces all over the web, it's often easy to overlook the fact that even before the website's CSS kicks in, the "user-agent" stylesheet, or your browser settings, applies styles to the website. One of the first things we learn as front-end designers is that all the website-specific styling we see is simply overriding these browser defaults.

This design leverages these defaults, as it does not declare a `font-family` at all. This not only avoids having to load more assets, but also reiterates the role of the browser in website access. Moreover, only one weight (regular) of a font is used, demonstrating that typographic hierarchy that can be established without loading multiple typefaces and weights. 

The lack of a `font-family` declaration also empowers the user to customize the look / feel to their own choosing: if users dislike the typeface displayed on the site, they can go into their browser settings to change this. Below are screenshots of this process in commonly used browsers.

#### Firefox
Go to Preferences, and in General, scroll to Language and Appearance to see Fonts & Colors  `about:preferences`

![firefox](img/firefox.png)

#### Chrome
Go to Settings, and scroll down to Appearance, then select Customize Fonts `chrome://settings/fonts`

![chrome](img/chrome.png)

#### Safari
It looks like newer version of Safari have removed the font customization feature, which used to be in the Appearance tab of Preferences. The latest version barely has any out-of-the box controls, although it looks like it allows you to use your own stylesheet if you know CSS.
	
![safari](img/safari.png)



## Images
The lightest websites would exist without any images or graphical elements. That said, imagery is an important part of communicating content. We used several techniques for compressing


### Dithered images
Instead of using full-color high-resolution images, we chose to convert all images to black and white, with 4 levels of gray in-between via a custom [dithering plugin](https://homebrewserver.club/low-tech-website-howto.html#image-compression).

As several readers have noted, certain images are better suited for other forms of compression. But our goal was to not only compress images, but also to call to attention this act of compression. And considering that the majority of articles feature archival black and white imagery, compressing into a file format with indexed color (in which the number of colors determines its weight) was most appropriate for the limited color palette.

Moreover, we found that dithered images can be stretched beyond their actual image size to emphasize its distinct aesthetic, and that these artifacts of compression can become an integral part of the design. 

It's common practice today to generate multiple sizes of the same image in order to display the appropriate size for the platform (desktop, tablet, mobile.) Here, however, we opted to use the same image file for both thumbnail and featured images to prioritize the browser's cache of the loaded image, even if it means that the initial listing pages may be a bit heavier.

These black and white images are then colored according to the pertaining content category (Low-tech Solution, High-tech Problems, or Obsolete Technology) via [CSS blend-modes](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode). The `hard-light` overlay technique allows only the white parts of the image against its background, allowing the color behind the image to colorize it.

For background images, we can use the `background-color`. For content images in articles, we will need it in a wrapper (coloring the `img` background does not work.) Fortunately, the format in which the articles are written – in markdown — automatically wraps images specfied in a paragraph tag. These image-wrapping paragraphs were captured via the [addressable a Pelican plugin](https://github.com/lowtechmag/solar-plugins/tree/master/addressable_paragraphs) in order to colorize the images.

Original image ![original image](img/stoneferry-detail.png)

Compressed image ![black and white](img/bw.png)

Colorized image ![colorized](img/colored.png)

For thumbnail images on an article listings page:

CSS
```css
.featured-img {
	background-blend-mode: hard-light;
}

```
HTML
```html
<div class="featured-img" style="background-image: url('path/to/image')"></div>
```

For images in an article:

CSS
```css
p.img {
	background-color: $color_low;
}

img {
	mix-blend-mode: hard-light;
}
```

HTML
```html
<p class="img"><img alt="image alt tag" src="path/to/image"/></p>
```


### SVG

SVGs can be used either as an image file (`externalfile.svg`) or pasted into the html file as inline code (`<svg></svg>`). Any application capable of producing vector drawings should be able to export in SVG format, and simply opening the file in a text editor reveals its code. Inline SVGs allow us to prevent load requests for images. While there may be advantages to caching loaded images, inline SVGs also have another benefit: they can be styled with css classes. Thus, any icon that would require hover states are in inline SVG format. (One note: because SVGs are essentially images, the syntax for SVGS differs from styling HTML elements. Read more on [SVGs at MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial).)

Inline SVG

```html
<a href="https://solar.lowtechmagazine.com/power.html">This is a solar-powered website, which means it sometimes goes offline 
	<svg class="icon" viewBox="0 0 500 500"><title>Solar</title><circle class="svg_fill" cx="248.48" cy="252.55" r="97.03"></circle><rect class="svg_fill" x="234.53" y="17.45" width="27.9" height="112.39"></rect><rect class="svg_fill" x="234.53" y="375.25" width="27.9" height="112.39"></rect><rect class="svg_fill" x="413.42" y="196.35" width="27.9" height="112.39" transform="translate(679.92 -174.83) rotate(90)"></rect><rect class="svg_fill" x="55.63" y="196.35" width="27.9" height="112.39" transform="translate(322.12 182.97) rotate(90)"></rect><rect class="svg_fill" x="361.03" y="69.85" width="27.9" height="112.39" transform="translate(198.96 -228.23) rotate(45)"></rect><rect class="svg_fill" x="108.03" y="322.85" width="27.9" height="112.39" transform="translate(303.75 24.77) rotate(45)"></rect><rect class="svg_fill" x="361.03" y="322.85" width="27.9" height="112.39" transform="translate(908.15 381.93) rotate(135)"></rect><rect class="svg_fill" x="108.03" y="69.85" width="27.9" height="112.39" transform="translate(297.35 128.93) rotate(135)"></rect></svg>
</a>

```

SCSS
```scss
.svg_stroke{
	fill:none;
	stroke: black;
	stroke-miterlimit:10;
	stroke-width:33px;
}

.svg_fill{
	fill: black;
}

a:hover {
	.svg_stroke{
		stroke: grey;
	}
	.svg_fill{
		fill: grey;
	}
}
```

### Image sprites
Another technique to minimize server requests is the use of [image sprites](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS), which combines multiple small images into one to minimize HTTP requests.
Storage-wise, six image files (150 x 150 each) totalled 9KB, whereas the combined image (150 x 900) is a 6KB file that only loads once.

JavaScript adds weather-specific CSS classes read from the existing server stats, which pulls weather information from DarkSky.net(https://darksky.net/forecast/41.3829,2.1774/us12/en). 
The CSS file then sets up the image as a background and adjusts which part of the image to display according to the class.

```js
var weather_ignore = ["snow", "sleet", "wind", "fog"]; //because Barcelona is paradise
var weather_data = ["today", "tomorrow", "day_after_t"];
var weather_days = ["today", "tomorrow", "day after tomorrow"];
var forecast = "";

//build forecast string to show weather icons
for (i = 0; i < weather_data.length; i++) {
    var key = weather_data[i]; //for each day
    var icon_name = key + "_icon"; //today_icon, etc
    var text = data[key]; //weather description

    var weather_icon;
    //use cloud icon for all overcast weather
    if(weather_ignore.includes(data[icon_name])){
      weather_icon = "cloudy";
    }else{
      weather_icon = data[icon_name];
    }
    forecast += '<span class="weather_day" id="' + key + '" title="' + text + '">' + weather_days[i] + '</span><span class="weather_icon ' + weather_icon +'"> </span><span class="weather_text"> ' + text + '</span>';
}

//add it to wherever there is class "forecast" 
var weatherinfo = document.querySelectorAll('.forecast');
[].forEach.call(weatherinfo, function(target) {
    target.innerHTML = forecast;
});
```

![icon sprite](img/weather_sprite.png)

```css
.weather_icon {
  background: url(/extra/weather_sprite.png);
  display: inline-block;
  height: 1rem;
  width: 1rem;
  position: relative;
  top: 3px;
  background-size: 6rem;
	background-position: -2rem 0;
}

.partly-cloudy-day {
  background-position: -1rem 0;
}
.clear-day {
  background-position: 0 0;
}
.clear-night {
  background-position: -3rem 0;
}
.partly-cloudy-night {
  background-position: -4rem 0;
}
.rain {
  background-position: -5rem 0;
}
```


# JS

Similar to images, any external files for script are additional requests to the server.
Instead of including robust but often excessive libraries such as jQuery, any JavaScript required was written in native JavaScript to avoid external dependencies. Scripts were also limited to the page used, so that they are only loaded whenever necessary. For example, the archive page allows users to rearrange the long listing, thanks to TinySort[https://github.com/Sjeiti/TinySort], a lightweight sorting plugin.


## Visible Infrastructure

### Battery Meter
The design features a background color that indicates the capacity of the solar-charged battery for the website server. It's designed to always display the relationship of the energy powering the website and the visitor traffic consuming it. Decreasing height of the bar indicates that the remaining time that the website is up is limited. 

#### HTML
The meter consists of two fixed-position elements, allowing content to overlap on top of it.
While the percentage indicator (`<div id="bat_data>"`)was originally part of the same background layer, it's now separated and pushed up into the foreground to be clickable.

```html
<body>
<div id="bat_data" class="bat_status">
  <a href="/power.html" title="Battery Capacity">
    <span id="charge_icon"></span>
    <span id="level">0%</span></a>
</div>
<div id="battery">
</div>
...
```

#### CSS

SCSS
```css
/*
BACKGROUND and BATTERY METER
*/
#battery {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	background: $color_bg;
}

#bat_data {
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 100;
	font-size: 0.75rem;
	text-align: right;
	padding: 3px .5rem 0 0;
	border-top: 1px solid $color;
}
```

#### JavaScript
The JS reads in server stats that lives on a .json file. The battery capacity data is given as a percentage, which sets the height of the bar (`#battery`) and position of the indicator(`#bat_data`).

```js
var level = data.bat_capacity; //i.e. 33%
document.getElementById('battery').style.height = level; //uses battery percentage for CSS percentage units
document.getElementById('bat_data').style.top = 100 - parseInt(level.slice(0, -1)) + "vh";
//converts to battery percentage to viewport height units from the top
```

There is also some JS to indicate whether or not the meter is charging. When the website is powered directly with the solar panels (and the battery is charging,) it displays a sun icon. Otherwise, when running on battery, it displays a battery icon.

```js
if (data.ac_power == "0W") {
    power = data.bat_power;
    charge_icon = battery_icon;
} else {
    power = data.ac_power;
    charge_icon = solar_icon;
    bat_text = "charging battery";
}
```

The icons are stored as inline SVGs and written into the page along with the other server statistics.


### Server dashboard

In addition to the battery level, other information about the website server is visible with a statistics dashboard — these stats are simply pulled from the json. This includes contextual information of the server's location in Barcelona: the time, the current sky conditions, the upcoming forecast, and the duration since the server last shut down due to insufficient power. This is another effort to make the backend context of the website visible.


## Print Styles

The new version of the website features printer-friendly styling.
Styling for printing is similar to styling for mobile devices — but instead of setting rules by break point, we use [print media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/Printing).

```css
@media print {

}
```
Among various typographic adjustments for print, a large modification was to condense the text into a 2-column layout to maximizes page width while maintaining a reasonable measure (width of paragraph.)

```css
	.entry-content {
		columns: 2; //number of columns to divide up the content
		column-gap: 20pt; //gutter
	}

```

Some other considerations include avoiding images to break across pages. (This property has mixed browser support; some browsers inherently avoid this even without this css. )
```
	p.img {
		page-break-inside: avoid;
	}

```
and displaying the URLs to linked texts — a technique borrowed from [CSS tricks](https://css-tricks.com/snippets/css/print-url-after-links/).

```
	a:after{
		content:" (" attr(href) ") ";
		font-size: 0.8rem;
		font-weight:normal;
	}

```



### Sources

- Frick, Tim. Designing for Sustainability: A Guide to Building Greener Digital Products and Services. O’Reilly Media, August 2016. <http://shop.oreilly.com/product/0636920043904.do>
- Christie, James. "Sustainable Web Design." <https://alistapart.com/article/sustainable-web-design>

