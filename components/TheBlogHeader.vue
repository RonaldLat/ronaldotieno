<template>
  <header
    class="w-full px-0 px-2 mx-auto text-gray-200 sm:px-4 bg-violet-500 md:max-w-full md:px-24 lg:px-8"
  >
    <nav
      class="flex items-center justify-between w-full px-3 py-4 mx-auto text-gray-200 lg:max-w-screen-xl bg-violet-500"
    >
      <ul class="flex text-sm text-gray-100 uppercase capitalize text-blog gap-6">
        <li><a href="/">home</a></li>
        <li><a href="/blog">blog</a></li>
        <li><a href="/blog/tags">tags</a></li>
      </ul>
      <div class="w-32 sm:w-36 md:w-52">
        <SearchInput />
      </div>
    </nav>
  </header>
</template>
