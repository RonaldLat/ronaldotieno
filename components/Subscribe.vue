<template>
  <div
    class="container p-4 mx-auto mt-8 font-sans text-center rounded bg-violet-100 md:p-24"
  >
    <h2 class="text-2xl font-bold break-normal md:text-4xl">
      Subscribe to my Newsletter
    </h2>
    <h3
      class="text-base font-normal font-bold text-gray-600 break-normal md:text-xl"
    >
      Get the latest posts delivered right to your inbox
    </h3>
    <div class="w-full pt-4 text-center">
      <form action="#">
        <div class="flex flex-wrap items-center max-w-xl p-1 pr-0 mx-auto gap-4">
          <input
            type="email"
            placeholder="youremail@example.com"
            class="flex-1 p-3 mr-2 text-gray-600 rounded shadow appearance-none focus:outline-none"
          />
          <button
            type="submit"
            class="flex-1 block px-1 py-4 text-base font-semibold tracking-wider text-white uppercase rounded shadow appearance-none bg-violet-500 md:inline-block hover:bg-violet-400"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
