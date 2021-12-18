<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Dudi Resort website',
          url: '',
          img: 'dr-portofolio.png',
          alt: 'screenshot of Dudi Resort Website',
          git: '',
          link: '',
        },

        {
          name: 'Milly Cakes website',
          url: '',
          img: 'mc-portofolio.png',
          alt: 'screenshot of Dudi Resort Website',
          git: '',
          link: '',
        },
      ],
    }
  },
}
</script>
<template>
  <div
    class="px-4 py-16 mx-auto overflow-x-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div>
      <p
        class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left uppercase font-[Belleza]] rounded-full text-gray-700"
      >
        work
      </p>
    </div>

    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="max-w-lg font-[Belleza] mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
      >
        <span class="inline-block mb-1 sm:mb-4"> Things I have built </span>
        <div
          class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"
        ></div>
      </h2>
      <p class="text-gray-700 md:text-lg">
        Some of personal and professional projects I have worked on.
      </p>
    </div>

    <ul
      class="flex mb-8 overflow-x-auto snap-x lg:grid lg:gap-6 gap-8 lg:row-gap-5 lg:grid-cols-3 lg:row-gap-6 lg:grid-cols-2"
    >
      <li
        v-for="project of projects"
        :key="project.name"
        class="flex-shrink-0 w-[85%] scroll-ml-6 py-4 px-2 snap-center"
      >
        <div
          class="relative overflow-hidden rounded shadow-md shadow-purple-800 hover:shadow-purple-400 transition duration-200 transform hover:-translate-y-2 hover:shadow-lg"
        >
          <img
            class="object-contain w-full h-56 md:h-64 xl:h-80"
            :src="project.img"
            :alt="project.alt"
          />
          <div
            class="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75"
          >
            <p class="text-lg tracking-wide text-gray-200">
              {{ project.name }}
            </p>

            <ul class="flex text-gray-200 underline decoration-2 underline-offset-2 gap-2 ">
              <li>
                <a :href="project.visit" class="decoration-gray-300">visit</a>
              </li>
              <li class="">
                <a :href="project.git" class="decoration-gray-300">source code</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <a
        href="/"
        aria-label=""
        class="inline-flex items-center font-semibold text-purple-600 underline decoration-2 transition-colors duration-200 hover:text-purple-800"
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
