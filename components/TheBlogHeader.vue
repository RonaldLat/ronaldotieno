<template>
  <header
    class="w-full   sm:px-4 px-2 mx-auto bg-purple-500 md:max-w-full md:px-24 lg:px-8 px-0 text-gray-200"
  >
    <nav
      class="flex items-center  lg:max-w-screen-xl mx-auto bg-purple-500 justify-between px-3 w-full py-4 text-gray-200"
    >
      <ul class="flex capitalize text-blog gap-6 text-gray-100  text-sm uppercase">
        <li><a href="/">home</a></li>
        <li><a href="/blog">blog</a></li>
        <li><a href="/blog/tags">tags</a></li>
      </ul>
      <div class="  w-32 sm:w-36 md:w-52">
        <SearchInput />
      </div>
    </nav>
  </header>
</template>
