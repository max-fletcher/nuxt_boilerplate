<template>
  <div class="">
    <div class="w-full max-h-[650px] overflow-y-hidden relative">
      <img class="grayscale-[80%]" src="/common_imgs/laptop1.jpg" alt="Main Image" />
      <div class="absolute top-[40%] left-[35%] translate-y-[-50%] translate-x-[-50%]">
          <div class="text-3xl sm:text-6xl text-cyan-300">Code that actually matters</div>
          <div class="text-1xl sm:text-1xl md:text-2xl mt-5 text-cyan-300">Striving for excellenct, I don't just build. I try to perfect</div>
      </div>
    </div>
    <div class="grid grid-cols-2 justify-items-center py-5 px-40 gap-5">
      <div class="relative group">
        <div class="absolute inset-0 bg-center rounded-xl dark:bg-black"></div>
        <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img src="/common_imgs/code2.jpg" class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out 
              group-hover:-translate-y-2 group-hover:block group-hover:translate-x-5 group-hover:scale-110"
            >
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Security</h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl pr-10">Making sure no one can access your data & application but you</h1>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute inset-0 bg-center rounded-xl dark:bg-black"></div>
        <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img src="/common_imgs/code2.jpg" class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out 
              group-hover:-translate-y-2 group-hover:block group-hover:translate-x-5 group-hover:scale-110"
            >
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Optimization</h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl pr-10">Making sure no one can access your data & application but you</h1>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute inset-0 bg-center rounded-xl dark:bg-black"></div>
        <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img src="/common_imgs/code2.jpg" class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out 
              group-hover:-translate-y-2 group-hover:block group-hover:translate-x-5 group-hover:scale-110"
            >
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Optimization</h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl pr-10">Making sure no one can access your data & application but you</h1>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute inset-0 bg-center rounded-xl dark:bg-black"></div>
        <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img src="/common_imgs/code2.jpg" class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out 
              group-hover:-translate-y-1 group-hover:block group-hover:translate-x-3 group-hover:scale-110"
            >
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Transparency</h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    // NOTICE THAT THE LAYOUT COMPONENT IS NAMED MainLayout BUT HERE WE ARE CALLING IT main-layout. THIS IS BECAUSE WE CAN'T USE UNDERSCORES AND CAPITALS HERE AND ANY CAMELCASE IS PARSED AS 
    // KEBAB-CASE BY NUXT FOR DEFINE-COMPOSABLES
    layout: 'main-layout',
  })

  // onMounted(async () => {
  //   try {
  //     await $generalStore.getAllUsersAndPosts()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })
</script>
