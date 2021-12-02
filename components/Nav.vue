<template>
  <div class="w-full max-w-full overflow-x-hidden bg-gray-300">
    <div class="max-w-full px-2 py-5">
      <div class="grid w-full max-w-full grid-cols-3">
        <div class="flex items-center col-span-2 pl-5">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center mr-8 md:mr-18"
          >
            <span
              class="text-xl font-bold tracking-wide text-gray-600 uppercase "
              >r.o</span
            >
          </a>
          <ul class="flex items-center space-x-2 text-xs text-purple-500 md:text-sm md:space-x-5 md">
            <li></li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                >About</a
              >
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                >Portofolio</a
              >
            </li>
            <li>
              <a
                href="/blog"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                >Blog</a
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-end">
          <a
            href="/"
            class="inline-flex items-center justify-center px-6 font-medium tracking-wide text-white transition duration-200 bg-purple-400 rounded shadow-md h-9 md:h-12 justify-self-end w-max hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Hire me"
          >
            Hire me
          </a>
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>
