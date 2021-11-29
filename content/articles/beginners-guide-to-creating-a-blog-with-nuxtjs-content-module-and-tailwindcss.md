---
title: Beginners Guide to Creating a Blog with Nuxt js, Content module and Tailwind css
description: I have been using Eleventy for my blog for quite sometime now, but due to it's several shortcomings I have decided to switch to Nuxt Content which has better features that are either lacking or hard to implement in Eleventy.
img: nuxt-content-blog.png
alt: nuxt dark svg logo
---

## What is Nuxt js

Before I start writing any code in Nuxt it's import I explain what it is to those who might not know about it yet.
I will quote from the official docs.

> Nuxt.js is a higher-level framework built on top of the Vue ecosystem which provides an etremely streamlined development experience for writing universal Vue applications.

## Why Nuxt Content

By using Nuxt Content, we get the flexibility of including HTML and even Vue components inside the Markdown files. Just see how amazing this is. 
It gives you the ability to author awesome content without needing a separate Content Management System (CMS).
Did I also mention that it is easy to pick up and use? By the time you reach the bottom of this articl you will have learnt enough to publish your own professional-looking blog.

## Content Folder Structure

<!--![ nuxt.js content folder structure](/folder-structure.png)-->
<img class="w-auto rounded-md mx-auto" src="/folder-structure.png" alt="folder structure" />

- **pages**:
    Here will be the routing links. Any .vue file created inside this folder will resolve to a url link.
    For example if you wish to add About Us page in your example.com site just create about.vue file and add content into it. Boom! example.com/about will be a functioning link

- **content**:
    The Content folder simply contains your content. Your will author your articles inside this folder in Markdown .md format.
    This folder is specific to the Content module and you will not find it in vanill Nuxt.
    You will find hello.md example which you can get started with.

- **static**:
    All files in this folder will be available in the production directory without being hashed.

- **assets**:
    Files in this folder will be compiled with the build tool, in this case Webpack.
    Can be Sass files, fonts, SVGs or images.
