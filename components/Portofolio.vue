<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Furniture Place Clone',
          url: 'https://frosty-hopper-d52530.netlify.app/',
          img: 'furniture-palace-clone-pc.webp',
          alt: 'screenshot of Furniture Palace clone Website',
          git: '',
        },

        {
          name: 'Ideal Sofas Website',
          url: 'https://happy-liskov-d56336.netlify.app/',
          img: 'ideal-sofas-pc.webp',
          alt: 'screenshot of Ideal Sofas Website',
          git: '',
        },

        {
          name: 'Dudi Resort website',
          url: '',
          img: 'dr-portofolio.webp',
          alt: 'screenshot of Dudi Resort Website',
          git: '',
        },

        {
          name: 'Milly Cakes website',
          url: '',
          img: 'mc-portofolio.webp',
          alt: 'screenshot of Dudi Resort Website',
          git: '',
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
        class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left uppercase font-[Play] rounded-full text-gray-700"
      >
        work
      </p>
    </div>

    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="max-w-lg font-[Play] mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
      >
        <span class="inline-block mb-1 sm:mb-4">
          Things I have <span class="text-violet-500">built </span></span
        >
        <div
          class="h-1 ml-auto duration-300 origin-left transform scale-x-30 group-hover:scale-x-100"
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
          class="relative overflow-hidden rounded shadow-md shadow-violet-800 hover:shadow-violet-400 transition duration-200 transform hover:-translate-y-2 hover:shadow-lg"
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

            <ul
              class="flex text-gray-200 underline decoration-2 underline-offset-2 gap-6"
            >
              <li class="text-sm">
                <a :href="project.url" class="decoration-gray-300 hover:text-violet-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                    />
                    <path
                      d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                    />
                  </svg>
                </a>
              </li>
              <li class="text-sm">
                <a :href="project.git" class="decoration-gray-300 hover:text-violet-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <a
        href="/portofolio"
        aria-label=""
        class="inline-flex items-center font-semibold underline text-violet-600 decoration-2 transition-colors duration-200 hover:text-violet-800"
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
