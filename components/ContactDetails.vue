<script>
export default {
  data() {
    return {
      image: 'https://cdn.tuk.dev/assets/templates/radian/Back_Image.png',
      address: 'Kisumu, Kenya',
      phone: '+254 712 973489',
      cell: '+254 712 973489',
      email: 'ronnlats@gmail.com',
    }
  },
}
</script>
<template>
  <div class="bg-purple-100 py-1 md:h-full md:py-8 lg:py-8 px-2">
    <div class="py-1 relative">
      <img
        :src="image"
        class="h-2/5 lg:h-full w-full absolute inset-0 object-cover object-center xl:block hidden"
        alt="map"
      />
      <div class="xl:mx-auto xl:container relative">
        <div class="flex flex-wrap xl:mx-auto xl:container">
          <div
            class="w-full relative lg:w1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0"
          >
            <img
              :src="image"
              class="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
              alt="map"
            />
            <div
              class="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4"
            >
              <div class="w-full">
                <h1
                  class="text-xl w-full md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-800"
                >
                  Find me here
                </h1>
                <div class="w-full md:w-10/12 mt-3">
                  <h2
                    class="text-gray-800 text-base md:text-lg leading-8 tracking-wider"
                  >
                    We believe digital innovation is at the heart of every
                    business success
                  </h2>
                  <div class="mt-4 md:mt-8">
                    <h2
                      class="text-sm flex items center gap-2 md:text-base text-gray-700 font-bold"
                    >
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                    </span>
                     <span>Address </span>
                    </h2>
                    <h2
                      class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"
                    >
                      {{ address }}
                    </h2>
                  </div>
                  <div class="mt-4 md:mt-8">
                    <h2
                      class="text-sm flex items-center gap-2 md:text-base font-bold text-gray-700 font-semibold"
                    >
                      <span class="inline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                          />
                        </svg>
                      </span>
                      <span class="">Phone</span>
                    </h2>
                    <h2
                      class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"
                    >
                      {{ phone }}
                    </h2>
                    <h2
                      class="text-gray-800 hidden text-base md:text-lg leading-8 tracking-wider mt-2"
                    >
                      {{ cell }} (Cell)
                    </h2>
                  </div>
                  <div class="mt-4 md:mt-8">
                    <h2
                      class="text-sm flexgap-2 flex center-items  font-bold md:text-base text-gray-700 font-bold"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      Email
                    </h2>
                    <h2
                      class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2"
                    >
                      {{ email }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
