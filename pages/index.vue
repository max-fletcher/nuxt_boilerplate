<template>
  <div class="">
    <!-- Banner -->
    <div class="w-full max-h-[650px] overflow-y-hidden relative">
      <img class="grayscale-[80%]" src="/common_imgs/laptop1.jpg" alt="Main Image" />
      <div class="absolute top-[40%] left-[35%] translate-y-[-50%] translate-x-[-50%]">
          <div class="text-3xl sm:text-6xl text-cyan-300">Code that actually matters</div>
          <div class="text-1xl sm:text-1xl md:text-2xl mt-5 text-cyan-300">Striving for excellence, I don't just build. I try to perfect</div>
      </div>
    </div>
    <!-- End Banner -->

    <!-- Intro -->
    <div class="bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
        <!-- Name section -->
        <section class="flex flex-col items-center justify-center px-2 lg:px-8">
            <div class="flex flex-col items-center justify-center text-center mt-8 mt-sm-0">
                <!-- image -->
                <img class="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                    src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg" alt="Max Fletcher">
                <h5 class="font-light text-2xl sm:text-3xl lg:text-4xl">Hello I am</h5>
                <h1 class="text-5xl sm:text-6xl lg:text-7xl pt-8 sm:pt-0">Max Fletcher</h1>
                <h2 class="font-light text-4xl sm:text-5xl lg:text-6xl">Software Developer</h2>
            </div>
        </section>
        <!-- /Name Section -->
        <!-- image section -->
        <section class="flex items-center justify-between px-2 lg:px-8 pt-10 md:pt-20 mb-20">
            <!-- Summary (left) -->
            <div class="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
                <div class="flex flex-col px-10 md:px-16">
                    <h3 class="text-xl font-bold mb-3">Skills</h3>
                    <span class="text-lg">PHP/Laravel</span>
                    <span class="text-lg">Nest, Node & Express JS</span>
                    <span class="text-lg"></span>
                    <span class="text-lg">Vue JS</span>
                    <span class="text-lg">React JS</span>
                    <span class="text-lg">JQuery</span>
                    <span class="text-lg">Tailwind CSS</span>
                    <span class="text-lg">Material Design</span>
                </div>
                <div class="px-10 md:px-16">
                    <h3 class="text-xl font-bold mb-3">Summary</h3>
                    <p class="w-full md:pr-4">
                        I am a fullstack developer with a focus on backend technologies. Building fullstack applications 
                        while making sure that abides by proper optimizations and code standards is what I do best.
                        I also have a thing for coffee and tinted glasses.
                    </p>
                </div>
            </div>
            <!-- image -->
            <img class="hidden md:block object-cover w-[35%] h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
                src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg" alt="Your Name Here">
            <!-- statistics (right) -->
            <div class="hidden md:flex flex-col w-1/3 space-y-12 text-right">
                <div class="px-10 md:px-16">
                    <p class="text-6xl">+3</p>
                    <br />
                    <h4 class="text-xl font-bold">Years Experience</h4>
                </div>
                <div class="px-10 md:px-16">
                    <p class="text-6xl">+12</p>
                    <br>
                    <h4 class="text-xl font-bold">Projects Worked On</h4>
                </div>
                <!-- <div class="px-10 md:px-16">
                    <p class="text-6xl">+14</p>
                    <br>
                    <h4 class="text-xl font-bold">Clients</h4>
                </div> -->
            </div>
        </section>
        <!-- /image section -->
        <hr class="border-gray-400 mx-44" />
        <!-- Resume -->
        <section class="px-20 my-10">
            <h4 class="mb-4 text-3xl font-bold text-center md:text-left">Experience</h4>
            <div class="grid grid-cols-1 md:grid-cols-6 py-6">
                <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 class="text-xl md:text-2xl font-bold">Full Stack Developer</h5>
                    <h6 class="text-lg font-bold">Facebook</h6>
                    <p>Jan 2015 - present</p>
                </div>
                <div class="flex flex-col col-span-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                        adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                        laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                        voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                        harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-6 py-6">
                <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 class="text-xl md:text-2xl  font-bold">Software Developer</h5>
                    <h6 class="text-lg font-bold">Google</h6>
                    <p>Feb 2010 - Jan 2015</p>
                </div>
                <div class="flex flex-col col-span-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                        adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                        laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                        voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                        harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-6 py-6">
                <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 class="text-xl md:text-2xl  font-bold">Web Developer</h5>
                    <h6 class="text-lg font-bold">IBM</h6>
                    <p>Apr 2008 - Feb 2010</p>
                </div>
                <div class="flex flex-col col-span-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                        adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                        laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                        voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                        harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                </div>
            </div>
        </section>
        <hr class="border-gray-400 mx-44" />
        <!-- Resume -->
        <section class="px-20 py-10">
            <h4 class="mb-4 text-3xl font-bold text-center md:text-left">Education</h4>
            <div class="grid grid-cols-1 md:grid-cols-6 py-6">
                <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 class="text-xl md:text-2xl  font-bold">B.S. Computer Science</h5>
                    <h6 class="text-lg font-bold">Harward University</h6>
                    <p>Jan 2015 - present</p>
                </div>
                <div class="flex flex-col col-span-4 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                        adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                        laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                        voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                        harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                </div>
            </div>
        </section>
    </div>
    <!-- End Intro -->

    <!-- Cards -->
    <div class="bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl text-center pb-4">What I Offer</h2>
      <h5 class="font-light text-1xl sm:text-3xl lg:text-4xl text-center">With every application delivered, I ensure</h5>

      <div class="grid grid-cols-2 justify-items-center py-5 md:py-8 px-20 md:px-28 gap-5">
        <div class="relative group">
          <div class="absolute inset-0 bg-center rounded-xl bg-black"></div>
          <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 
                        opacity-100 transition duration-300 ease-in-out group-hover:opacity-30 dark:border-gray-700 dark:opacity-100">
              <img src="/common_imgs/code2.jpg" 
                    class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
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
          <div class="absolute inset-0 bg-center rounded-xl bg-black"></div>
          <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 
                        opacity-100 transition duration-300 ease-in-out group-hover:opacity-30 dark:border-gray-700 dark:opacity-100">
              <img src="/common_imgs/code2.jpg" 
                    class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
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
          <div class="absolute inset-0 bg-center rounded-xl bg-black"></div>
          <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 
                        opacity-100 transition duration-300 ease-in-out group-hover:opacity-30 dark:border-gray-700 dark:opacity-100">
              <img src="/common_imgs/code2.jpg" 
                    class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
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
          <div class="absolute inset-0 bg-center rounded-xl bg-black"></div>
          <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 
                        opacity-100 transition duration-300 ease-in-out group-hover:opacity-30 dark:border-gray-700 dark:opacity-100">
              <img src="/common_imgs/code2.jpg" 
                    class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
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
    <!-- End Cards -->

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
