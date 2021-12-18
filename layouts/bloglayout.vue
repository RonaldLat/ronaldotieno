<template>
  <main class="font-[Poppins]  min-h-screen relative pb-96 bg-gray-300 w-full  overflow-x-hidden ">
    <TheBlogHeader />
  <Nuxt />
      <div class="absolute bottom-0 left-0 w-full">

  <footer class="flex flex-col w-full px-4 py-16 text-gray-200 bg-gray-900 sm:px-4 lg:px-8 md:px-24 lg:py-20 gap-2 ">
    <p class="text-sm font-bold tracking-wide text-gray-300 uppercase">
      subscribe
    </p>
    <p class="text-gray-400">
      Subscribe to my newsletter to get regular content I publish on my blog.
    </p>
    <div class="max-w-md pt-3">
      <SubscribeMiniDark />
    </div>
    <ul class="flex text-purple-300 capitalize gap-3">
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
