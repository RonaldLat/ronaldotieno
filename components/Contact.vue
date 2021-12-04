<template>
<div>
        <div class="max-w-xl mb-6 px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div>
            <p
              class="inline-block w-full px-3  pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-teal-900 uppercase rounded-full"
            >
              contact
            </p>
          </div>
          </div>

  <div
    class="relative md:grid grid-cols-2 place-items-center  px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
  >

<ContactDetails />

    <form class=" w-full space-y-2 md:space-y-4  md:bg-gray-400 lg:px-8 py-4 md:py-20  lg:py-4 px-2  mx-auto xs:pt-4">
    <h3 class="text-xl tracking-wide font-bold">Send me a message:</h3>
      <div class="flex flex-col ">
        <label
          for="name"
          type="text"
          class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >Name</label
        >
        <input
          id="email"
          class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="Enter your name"
        />
      </div>
      <div class="flex flex-col ">
        <label
          for="email"
          class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >Email</label
        >
        <input
          id="email"
          class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="Enter email"
        />
      </div>

      <div class="flex flex-col ">
        <label
          for="phone"
          type="tel"
          class="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >Phone</label
        >
        <input
          id="email"
          class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="Placeholder"
        />
      </div>

      <div class="flex flex-col">
        <label class="text-sm  font-semibold text-gray-800 mb-2" for="message"
          >Message</label
        >
        <textarea
          id="message"
          placeholder=""
          name="message"
          class="border-gray-300 w-full border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
          rows="8"
        ></textarea>
      </div>
      <button
        class="bg-purple-600 hover:bg-purple-400 gap-4 text-gray-200 font-bold py-2 px-4 rounded inline-flex w-full justify-center items-center"
      >
        <!-- Please refer: https://github.com/shubhamjain/svg-loader -->
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
        <span class="text-gray-200 ">Send message</span>
      </button>
    </form>
  </div>
</div>
</template>
