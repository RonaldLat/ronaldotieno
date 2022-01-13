<script>
import { collection, addDoc } from 'firebase/firestore'
import { db } from '~/plugins/firebase.js'

export default {
  methods: {
    async writeToFirestore() {
      const submission = {
        text: 'Firebase 9 rocks!',
        name: 'Ronald Otieno',
        email: 'ronnlats@gmail.com',
        phone: '040357407',
        message: 'this is my message to you',
      }
      try {
       const docRef = await addDoc(collection(db, "formSubmission"),submission)
        alert(docRef.id)
      } catch (e) {
        alert('Error!')
        console.log(e)
      }
    },
  },
}
</script>

<template>
  <div class="pb-36">
    <button @click.prevent="writeToFirestore">write</button>
    <div
      class="px-4 py-4 mx-auto overflow-x-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div>
        <p
          class="inline-block w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left uppercase font-[Play] rounded-full text-gray-700"
        >
          contact
        </p>
      </div>

      <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2
          class="max-w-lg font-[Play] mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
        >
          <span class="inline-block mb-1 sm:mb-4">
            You have my undivided
            <span class="text-violet-500">attention </span></span
          >
          <div
            class="h-1 ml-auto duration-300 origin-left transform scale-x-30 group-hover:scale-x-100"
          ></div>
        </h2>
        <p class="text-gray-700 md:text-lg">
          Talk to me, and let's turn your idea into reality
        </p>
      </div>
    </div>

    <div
      class="relative px-4 py-0 mx-auto md:grid grid-cols-2 place-items-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <ContactDetails />

      <form
        class="w-full px-2 py-4 mx-auto space-y-2 md:space-y-4 md:bg-zinc-100 md:rounded-br-md md:rounded-tr-md lg:px-8 md:py-20 lg:py-4 xs:pt-4"
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
            class="flex items-center w-full h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-indigo-700"
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
            class="flex items-center w-full h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-indigo-700"
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
      const ref = doc(db, "formSubmission", "contact1")
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
          class="inline-flex items-center justify-center w-full px-4 py-2 font-bold text-gray-200 rounded bg-violet-600 hover:bg-violet-400 gap-4"
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
