<template>
  <div class="relative flex flex-col-reverse w-full py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div
      class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
    >
      <svg
        class="absolute left-0 hidden h-full text-gray-400 transform -translate-x-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>
      <img
        class="object-cover w-full bg-gray-400 rounded shadow-lg h-96 lg:rounded-none lg:shadow-none md:h-auto lg:h-full"
        src="/lat2-smaller.png"
        alt=""
      />
    </div>
    <div
      class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
    >
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <p
          class="inline-block w-full py-px mb-4 text-xs font-semibold tracking-wider  uppercase"
        >
          who am i?
        </p>
        <h2
          class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          Web developer<br class="hidden md:block" />
          based in
          <span class="inline-block text-deep-purple-accent-400">Kisumu</span>
        </h2>
        <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          I'm <span class="text-purple-500">Ronald Otieno</span> — a web developer based in Kisumu, Kenya specializing in building, Websites and Web Applications that get you desired results.
        </p>

        <SubscribeMini />

        <div class="flex items-center">
          <a
            href="/"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white text-gray-600 transition duration-200 bg-gray-200 border-2 border-purple-400 rounded shadow-lg hover:bg-purple-400 focus:shadow-outline focus:outline-none"
          >
            Hire me
          </a>
          <a
            href="/blog/allposts"
            aria-label=""
            class="inline-flex items-center font-semibold text-gray-800 text-purple-700 transition-colors duration-200"
            >My articles</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
