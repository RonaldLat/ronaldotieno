<template>
  <div>
    <div class="flex flex-col mb-6 lg:items-center lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
      >
        <span class="inline-block mb-1 sm:mb-4">
          All Articles, <span class="text-gray-500">Enjoying reading<br />
           and don't forget to</span> <span class="text-violet-500">subsribe</span>.
        </span>
        <div
          class="h-1 ml-auto rounded-md duration-300 origin-left transform bg-violet-400 scale-x-30 group-hover:scale-x-100"
        ></div>
      </h2>
      <p class="hidden text-gray-700 lg:text-sm lg:max-w-md">
        "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
        accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut perspiciatis
        unde omnis iste."
      </p>
      <div class="max-w-md">
        <SubscribeMini />
      </div>
    </div>
  </div>
</template>
