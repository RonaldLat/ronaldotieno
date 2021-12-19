<script>
export default {
  data() {
    return {
      image: 'map.webp',
      address: 'Kisumu, Kenya',
      phone: '+254 712 973489',
      cell: '+254 712 973489',
      email: 'ronnlats@gmail.com',
    }
  },
}
</script>
<template>
  <div
    style="background-image: url(map.webp)"
    class="px-2 py-1 bg-violet-100 rounded-md md:rounded-tr-none md:rounded-br-none md:h-full md:py-8 lg:py-8"
  >
    <div class="relative py-1">
      <div class="relative xl:mx-auto xl:container">
        <div class="flex flex-wrap xl:mx-auto xl:container">
          <div
            class="relative w-full pl-0 mb-10 lg:w1/2 xl:mt-10 2xl:pr-24 2xl:pl-0 xl:pl-12"
          >
            <div
              class="relative z-20 flex flex-col items-start w-full px-4 py-4 xl:justify-start xl:px-0 xl:py-0"
            >
              <div class="w-full">
                <h1
                  class="w-full text-xl font-bold tracking-wider text-gray-800 md:text-3xl lg:text-4xl"
                >
                  Find me here
                </h1>
                <div class="w-full mt-3 md:w-10/12">
                  <h2
                    class="text-base tracking-wider text-gray-800 md:text-lg leading-8"
                  >
                    We believe digital innovation is at the heart of every
                    business success
                  </h2>
                  <div class="mt-4 md:mt-8">
                    <h2
                      class="flex text-sm font-bold text-gray-700 items center gap-2 md:text-base"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <span>Address </span>
                    </h2>
                    <h2
                      class="mt-2 text-base tracking-wider text-gray-800 md:text-lg leading-8"
                    >
                      {{ address }}
                    </h2>
                  </div>
                  <div class="mt-4 md:mt-8">
                    <h2
                      class="flex items-center text-sm font-semibold font-bold text-gray-700 gap-2 md:text-base"
                    >
                      <span class="inline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6"
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
                      class="mt-2 text-base tracking-wider text-gray-800 md:text-lg leading-8"
                    >
                      {{ phone }}
                    </h2>
                    <h2
                      class="hidden mt-2 text-base tracking-wider text-gray-800 md:text-lg leading-8"
                    >
                      {{ cell }} (Cell)
                    </h2>
                  </div>
                  <div class="mt-4 md:mt-8">
                    <h2
                      class="flex text-sm font-bold text-gray-700 gap-2 center-items md:text-base"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6"
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
                      class="mt-2 text-base tracking-wider text-gray-800 md:text-lg leading-8"
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
