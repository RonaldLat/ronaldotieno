<script>
export default {
  layout: 'bloglayout',
}
</script>

<template>
  <div>
    <div
      class="w-full m-0   bg-gray-300 p-0 bg-cover bg-bottom"
      style="
        min-height: 50vh;
      "
    >
      <div
        class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal"
      >
        <!--Title-->
        <p class="text-white font-extrabold text-3xl md:text-5xl">
          👻 Ronald Otieno
        </p>
        <p class="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
      </div>
    </div>

    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <!--Nav-->
        <nav class="mt-0 w-full">
          <div class="container mx-auto flex items-center">
            <div class="flex w-1/2 pl-4 text-sm">
              <ul
                class="list-reset flex justify-between flex-1 md:flex-none items-center"
              >
                <li class="mr-2">
                  <a
                    class="inline-block uppercase py-2 px-2  no-underline hover:underline"
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

    <Subscribe />
  </div>
</template>
