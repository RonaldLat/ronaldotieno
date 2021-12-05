---
title: 10 Reasons to start using Tailwind CSS
description: Learn what Tailwind CSS is and the 10 best reasons to start using it in your projects
img: tailwind.svg
alt:
---

## What is Tailwind CSS?

Tailwind is a utility-first CSS framework that is used to quickly build modern user interface by using predefined utility classes.

This definition might be confusing at first but you will get the hang of it. You might be wondering what utility classes are. 
Utility classes are just class names that bring the effects or real CSS code.

One example of a Tailwind CSS utility class is `bg-black`. When used in a component it will translate to: 

```
.example{
  background-color: rgb(0,0,0);
}
```

There is a utility class in a nutshell.

Tailwind has a list of these utility classes that will allow you to easily create create beatiful and responsive user designs without ever writing a single line of CSS.

These are the top 10 reasons I use Tailwind CSS and why you too should:

## 1. Rest in peace Naming Problems

Coming up with names to name components is not easy as it sounds. What is even harder is rembering what it means means and why you named it like that when you are working on very large project with a compelex structure. 

Now imagine you are to revisit the same project some months or years later. You will be consumed by the compelexity you created your self. 

Speaking of compelexity, it now becomes a nightmare when you are trying to work on someone else's project that you are seeing for the first time. You will spend a lot time just trying to understand how everything first. 

But Tailwind comes to rescue, and this is one of my favourite feature about it. 
*I DON'T NEED TO NAME A DAMN THING. EVER*. How sweet does that sound? 

You jump into a project, you see a bunch of utility classes and you instantly know what they do. 

You jump into someone else's project whom hopefully uses Tailwind, the classes still mean the same thing. 

```
<div class="bg-red text-white px-0"> content </div>
```
The example above would mean:
* bg-red -> background is red 
* text-white -> text is white
* px-0 -> padding left and right is set to 0px

You will agree with that this is way better than coming up with random names, then jumping back and forth between css and html files. 
This is more efficient and saves us a lot of time. 

The first portofolio website I built for myself took more than a month to finish. I started rebuilding it from scratch again with a new design and I was done with it in less than a week.

## 2. No Ever-growing CSS files

When I was new to web development and was still using CSS like any other normal human being, my style files were so big that my old machine would lag while they loaded.

My CSS lines would avarage at least 500 lines for tiny projects which I did. 
As I coded I kept wishing that the lines could stop adding up, by they didn't. 

Then I discovered **Sass**, and I thought I had found the silver bullet to kill the many lines I had in my CSS files with. It helped a bit but it created another problem, I had to deal with a lot of files of the UI components. 

My typical SCSS file structure of a normal project would look like this:
* footer.scss 
* header.scss 
* pagination.scss 
* contact.scss 
* testimonials.scss
* blog.scss 
* carousel.scss 
* nav.scss 

You can imagine the headache I got while cyling through all these files and trying to make sense of each one of them. 

Another thing, when you making any adjustments to your designs it means adding more lines of CSS.
In Tailwind, for instance the class `bg-red` does only one thing which is to apply a red background.
When you use it 100 times the CSS file will not grow a bit. 

But with vanilla CSS, applying a red background means writing another line of CSS for a given class that you made up a name for. Keep making changes to your desing and your CSS file will never stop growing.

Dealing with CSS at it's rawest form is not a walk in the park. But Tailwind abstracts the compelexity and gives us utility classes to make our development lives easy.

## 3. No media queries

Responsive design is a must if you want to survive as a web web develper but creating it with media queries is not something I looked forward too.

Comprehending and writing media queries is hectic. Thanks to Tailwind CSS we don't have to deal with it again.

Almost all Tailwind utility classes can be applied conditionally at different screen breaking points. This means we don't have to create separate styling rules to make our designs responsive. 

Here are the default break points it offers: 
* xs: screens smaller than 640px
* sm: 640px
* md: 768px
* lg: 1024px
* xl: 1280px
* 2xl: 1536px

The abbreviations stand for extra-small, medium, large, extra-large and 2extra-large respectively. 

Let's see an example:

`<p class="text-sm md:text-lg"> Responsive text </p>`

Our paragraph text will have a size of **14px** `xs` and `sm` screens, but on reaching `md` screen size the font's size will grow to **18px**. 

This makes dealing with break points very easy and fast. If you are not happy with the defaults, Tailwind gives you an option to changes or modify them.

## 4. Speed


