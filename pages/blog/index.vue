<script>
export default {
  layout: 'bloglayout',
}
</script>

<template>
  <div
    class="w-full px-2 sm:px-4 pb-16 mx-auto sm:max-w-xl bg-gray-300 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
  >
    <div
      class="w-full min-h-1/2 bg-cover-bg-bottom bg-purple-500 text-gray-200"
    >
      <div
        class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal"
      >
        <!--Title-->
        <p class="text-white font-extrabold text-3xl md:text-5xl">
          👻 Ronald Otieno
        </p>
        <p class="text-xl md:text-2xl text-gray-200">Welcome to my Blog</p>
      </div>
    </div>

    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <!--Nav-->
        <nav class="mt-0 w-full">
          <div class="container mx-auto flex items-center">
            <div class="flex w-1/2 pl-0 text-sm">
              <ul
                class="list-reset flex justify-between flex-1 md:flex-none items-center"
              >
                <li class="mr-2">
                  <a
                    class="inline-block uppercase py-2 px-2 no-underline hover:underline"
                    href="/blog/allposts"
                    >all articles</a
                  >
                </li>
                <li class="mr-2">
                  <a
                    class="inline-block uppercase text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                    href="#"
                    >tags</a
                  >
                </li>
                <li class="mr-2">
                  <a
                    class="inline-block text-gray-600 uppercase no-underline hover:text-gray-200 hover:underline py-2 px-2"
                    href="#"
                    >LINK</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="md:max-w-xl  w-11/12 lg:max-w-3xl mx-auto">
      <Subscribe />
    </div>
<div class=" grid py-16 w-full grid-cols-1">
    <HomePosts />
</div>
  </div>
</template>
