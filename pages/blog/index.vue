<script>
export default {
  layout: 'bloglayout',
}
</script>

<template>
  <div class="w-full pb-16 lg:pb-20">
    <div
      class="w-full min-h-[50vh] bg-cover-bg-bottom bg-violet-500 text-gray-200"
    >
      <div
        class="container max-w-4xl py-16 mx-auto text-center break-normal md:py-36"
      >
        <!--Title-->
        <p class="text-3xl font-extrabold text-white md:text-5xl">
          👻 Ronald Otieno
        </p>
        <p class="mt-4 mb-8 text-xl text-gray-200 md:text-2xl">Welcome to my Blog</p>
      </div>
    </div>

    <div
      class="container w-full max-w-6xl px-2 mx-auto -mt-32 sm:px-4 md:px-24 lg:px-8 lg:max-w-screen-xl"
    >
      <div>
        <!--Nav-->
        <nav class="flex items-center justify-between w-full mt-0 gap-2">
          <ul class="flex items-center text-gray-100 ">
            <li >
              <a
                class="inline-block px-2 py-2 no-underline uppercase hover:text-gray-200 hover:underline"
                href="/blog/allposts"
                >all articles</a
              >
            </li>
            <li >
              <a
                class="inline-block px-2 py-2 no-underline uppercase hover:text-gray-200 hover:underline"
                href="#"
                >tags</a
              >
            </li>
          </ul>

          <div class="pr-4">
            <div
              class="flex items-center text-gray-300 space-x-4 sm:mt-2"
            >
              <a
                href="/"
                class="text-gray-300 transition-colors duration-300 hover:text-violet-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-300 transition-colors duration-300 hover:text-violet-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-300 transition-colors duration-300 hover:text-violet-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="w-11/12 mx-auto md:max-w-xl lg:max-w-3xl">
      <Subscribe />
    </div>
    <div class="w-full px-2 py-16 grid grid-cols-1 sm:px-4 md:px-24 lg:pb-8">
      <HomePosts />
    </div>

      <div class="text-center ">
        <a
          href="/blog/allposts"
          aria-label=""
          class="inline-flex items-center font-semibold text-violet-500 transition-colors duration-200 hover:text-violet-800"
        >
          See more
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            ></path>
          </svg>
        </a>
      </div>

  </div>
</template>
