<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div class="max-w-xl mb-6">
          <div>
            <p
              class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-teal-900 uppercase rounded-full"
            >
              tools
            </p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
          >
            A programmer is<br class="hidden md:block" />
            as good
            <span class="inline-block text-purple-400"
              >as the tools he use</span
            >
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            To be efficient and productive in what I do, I have carefully picked the tools that will help me accomplish my tasks fast.
          </p>
        </div>
        <div>
          <a
            href="/"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-purple-800"
          >
            Learn more
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
      <div
        class="  lg:pl-8"
      >
        <div class="grid grid-cols-1 grid-rows-3 px-0 gap-2 place-items-start">
          <img
            class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="js.svg"
            alt=""
          />

          <div class="flex gap-2">
            <img
              class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="favicon.ico"
              alt=""
            />
            <img
              class="object-contain row-start-3 w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="vue.svg"
              alt=""
            />
          </div>

          <div class="flex gap-2">
            <img
              class="object-cover w-20 h-20 rounded row-start-3 shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="ubuntu-4.svg"
              alt=""
            />
            <img
              class="object-contain w-20 h-20 row-start-2 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="css.svg"
              alt=""
            />

            <img
              class="object-contain w-20 h-20 row-start-3 col-start-3 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="nuxt-logo-dark.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
