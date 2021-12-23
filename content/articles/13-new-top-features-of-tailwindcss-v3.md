---
title: 13 new top features of Tailwind CSS v3.0
description: Overview of the top features of Tailwind v3.0
img: tailwindv3.webp
alt: tailwind v3.0
tags: 
      - tailwind
      - ui
---

Good news is here, and that is the launch of Tailwind CC v3.0. 

It packs a ton of new features, immense workflow improvement and performance gains that are going to make the lives of developers easier and faster.

Let's see some of the improvements we are gifted with:

1. ### JIT - Just-in-Time mode

In Tailwind v2.xx, JIT was available through configuring `tailwind.config.js` file and setting `mode: 'jit'`.

But in this latest release Just-in-Time is the only mode, and it comes out of the box. But what is it's advantage?

The JIT engine brings with it a big boost in performance as it only generates CSS on demand. 
Previously, CSS was pre-complied which resulted in a huge file that made build time take longer. 

Some 'less important' classes had to left out because including everything could result in even larger CSS file. But now every variant, responsive and more color classes have been included and the performance is way better than that of the previous version.

2. ### Additional color pallete

Color options were limited before Tailwind v3.0 because the file size of CSS had to be limited in development.

Thanks to on-demand CSS generation but JIT engine, every single color in the extended color pallete is enabled out the box.

Some of these colors are;
- lime 
- cyan 
- sky 
- fuchsia 
- rose 
- and various shades of gray

3. ### Colored box shadows

Box shadows look great, but colored box shadows look amazing.

You can now control the color of a box shadow by applying any of the default colors or a custom one. 

Simply use the `shadow-{color}` utility class to modify the color of an existing box shadow. 

Use opacity modifier to fine-tune the opacity of the colored shadows as it set to 100% by default. Example, `shadow-md shadow-amber/400/50`. 

`/50` will make the shadow's opacity 50%.

4. ### Snap scrolling

An easy way to build a carousel on your website if you don't want to use JavaScript is through snap scrolling.

This can be done with pure CSS but the previous version of Tailwind CSS was lacking the utilities to implement this feature. 

In this latest release a set of utilities have been added for the CSS snap scrolling that can be used directly in the HTML, and they work like charm.

You can use Scroll Margin utilities too to offset snapping items in a container so that they become visually appealing.

Scroll offset can also be used on the items to set the scroll offset around the items to customize your design more to your liking.

5. ### Newspaper or Multi-column layout

Columns, like the ones used in newspaper are included in this version.

This could be done in v2.x, but you had to adjust the layout and add several `div`s or `section`s. 

But now you  can use the `columns-{count}` directly in your `p` or any other tag, and that's it.

To modify the space between columns, use `gap-x` utilities.

6. ### Print style rules

If you create content on your website that you wish to be printed you will find this feature very useful.

The `print` modifier lets you define the styles that will dictate how your site should appear when it is printed.

7. ### Form styling control

Accent-color property, and modifier for styling file input buttons have been added to make sure your website is branded accordingly.

Styling the checkbox is now a breeze. Just add `accent{color}-{saturation}` and you are done.
Example, `accent-indigo-500`.

For the case of file input button styling, use the `file:` modifier on your utilities.
Example, `file:bg-sky-600`.

8. ### Aspect ratio API

At times you may want some elements to maintain their aspect ratios at different screen sizes. Calculating the width and height is possible with vanilla CSS, but it very challenging and error-prone.

With the new `aspect-ratio` utility available, maintain YouTube videos or images aspect ratios is now hot knife through butter.

9. ### Underline styles

Text decoration through underlining can be easily done with the `underline` utility.

The underline thickness can be changed with `decoration-{n}`,

decoration style with, `decoration-wavy` or `decoration-dotted`

and finally the decoration color with `decoration-{color}-saturation`.

10. ### RTL and LTR direction designs

Though not popular yet, you might want to use RTL, Right-to-Left layout direction. I have both bad and good news about this feature. 

The good news is, you can start using it right now with `ltr: ...` and `rtl: ...` modifiers. 

And the bad news is, this is not a stable feature at the time of this writing so it is not advisable to use it in production.

Tailwind CSS has made a lot of progress even on implementing challenging features, I am sure this won't take that long to be stable.

11. ### Arbitrary or custom properties

Tailwind is too good be true, but lucky for us developers it. 

Apart from giving us carefully handcrafted values and styles, it also allows us to add our own arbitrary CSS. 

The best part is, these arbitrary CSS can be combine with the Tailwind CSS utilities seamlessly. Forget about inline styles. 

For example you want to set your nav to `50v`, just write `h-[50vh]`. Amazing. Right?

> This is what inline styles want to be when they grow up.

12. ### Play CDN

![](/tailwind-play-cdn.webp)

A JavaScript library is available is available to test every Tailwind CSS feature right from the browser. You don't need to install anything.

```
<script src="https://cdn.tailwindcss.com/"></script>
```

Note this is meant for development and testing purposes only. Though it is useful for demos and quick prototyping.

13. ### Portrait and landscape modifiers

These modifiers do exactly what they say. They determine the style that will be applied on the respective screen orientation.

We have covered the main new features. But these are also worth mentioning;

- Scroll-behavior

- Text-indent

- Flex-basis

- Will-change

This is enough you need to know about Tailwind CSS v3.0. 
For a detailed list of all the changes, visit the [changelog](https://github.com/tailwindlabs/tailwindcss/blob/master/CHANGELOG.md) on GitHub.
