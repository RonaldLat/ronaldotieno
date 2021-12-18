<template>
  <div class="pb-36">
    <div
      class="max-w-xl px-4 py-0 mx-auto mb-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div>
        <p
          class="inline-block w-full px-3 pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase rounded-full"
        >
          contact
        </p>
      </div>
    </div>

    <div
      class="relative px-4 py-0 mx-auto md:grid grid-cols-2 place-items-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <ContactDetails />

      <form
        class="w-full px-2 py-4 mx-auto space-y-2 md:space-y-4 md:bg-gray-400 lg:px-8 md:py-20 lg:py-4 xs:pt-4"
      >
        <h3 class="text-xl font-bold tracking-wide">Send me a message:</h3>
        <div class="flex flex-col">
          <label
            for="name"
            type="text"
            class="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800 dark:text-gray-100"
            >Name</label
          >
          <input
            id="name"
	    aria-label="name"
            class="flex items-center w-full h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800"
            placeholder="Enter your name"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="email"
            class="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800 dark:text-gray-100"
            >Email</label
          >
          <input
            id="email"
	    aria-label="email address"
            class="flex items-center w-full h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800"
            placeholder="Enter email"
          />
        </div>

        <div class="flex flex-col">
          <label
            for="phone"
            type="tel"
            class="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800 dark:text-gray-100"
            >Phone</label
          >
          <input
            id="phone"
	    aria-label="phone number"
            class="flex items-center w-full h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800"
            placeholder="Enter phone number"
          />
        </div>

        <div class="flex flex-col">
          <label class="mb-2 text-sm font-semibold text-gray-800" for="message"
            >Message</label
          >
          <textarea
            id="message"
	    aria-label="message"
            placeholder=""
            name="message"
            class="w-full px-3 py-2 mb-4 text-sm border border-gray-300 rounded outline-none resize-none focus:border focus:border-indigo-700"
            rows="8"
          ></textarea>
        </div>
        <button
          class="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-gray-200 bg-purple-600 rounded hover:bg-purple-400 gap-4"
        >
          <!-- Please refer: https://github.com/shubhamjain/svg-loader -->
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
          <span class="text-gray-200">Send message</span>
        </button>
      </form>
    </div>
  </div>
</template>
