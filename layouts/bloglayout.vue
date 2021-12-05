<template>
  <main class="  min-h-screen relative pb-96 bg-gray-300 w-full  overflow-x-hidden ">
    <TheBlogHeader />
  <Nuxt />
      <div class="absolute w-full  left-0 bottom-0">

  <footer class="w-full px-4 sm:px-4 py-16 lg:px-8    md:px-24 lg:px-8 lg:py-20 text-gray-200 bg-gray-900 flex flex-col gap-2 ">
    <p class="uppercase text-gray-300 text-sm font-bold tracking-wide">
      subscribe
    </p>
    <p class="text-gray-400">
      Subscribe to my newsletter to get regular content I publish on my blog.
    </p>
    <div class="max-w-md pt-3">
      <SubscribeMiniDark />
    </div>
    <ul class="flex capitalize gap-3 text-purple-300">
      <li><a href="/">Home</a></li>
      <li><a href="/">Portofolio</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
    <SocialLinks />

    <p class="text-sm text-gray-500">
      ©2021 Ronald Otieno. All Rights Reserved.
    </p>
  </footer>
      </div>
  </main>
</template>
