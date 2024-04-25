<template>
  <div class="bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
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
    <div class="">
        <!-- Name section -->
        <section class="flex flex-col items-center justify-center px-2 lg:px-8">
            <div class="flex flex-col items-center justify-center text-center mt-12">
                <!-- image -->
                <img class="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                    src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg" alt="Max Fletcher">
                <h5 class="font-light text-2xl sm:text-3xl lg:text-4xl pt-2">Hello I am</h5>
                <h1 class="text-5xl sm:text-6xl lg:text-7xl pt-0 md:pt-4">Max Fletcher</h1>
                <h2 class="font-light text-4xl sm:text-5xl lg:text-6xl">Software Developer</h2>
            </div>
        </section>
        <!-- /Name Section -->
        <!-- image section -->
        <section class="flex items-center justify-between px-2 lg:px-8 xl:px-20 2xl:px-32 pt-10 md:pt-20 mb-20">
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
                    <h4 class="text-xl font-bold">Years Of Experience</h4>
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
        <section class="my-10 px-8 lg:px-16 xl:px-36">
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
        <section class="my-10 px-8 lg:px-16 xl:px-36">
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
    <div class="xl:px-20">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl text-center pb-4">What I Offer</h2>
      <h5 class="font-light text-1xl sm:text-3xl lg:text-4xl text-center">With every application delivered, I ensure</h5>

      <div class="grid grid-cols-2 justify-items-center py-5 md:py-8 px-8 sm:px-12 md:px-24 gap-5">
        <div class="relative group">
          <div class="absolute inset-0 bg-center rounded-xl bg-black"></div>
          <div class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto">
            <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 
                        opacity-100 transition duration-300 ease-in-out group-hover:opacity-30 dark:border-gray-700 dark:opacity-100">
              <img src="/common_imgs/code2.jpg" 
                    class="block h-full w-full scale-100 object-cover object-center opacity-100 transition duration-300 transform animate-fade-in group-hover:scale-110" alt="" />
            </div>
            <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out 
                group-hover:block group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:-translate-y-[0.5rem] md:group-hover:-translate-y-2 group-hover:scale-110"
              >
              <h1 class="font-serif text-md md:text-2xl font-bold text-white shadow-xl">Security</h1>
              <h1 class="text-[10px] sm:text-sm font-light text-gray-200 shadow-xl pr-10">Making sure no one can access your data but you</h1>
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
                group-hover:block group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:-translate-y-[0.5rem] md:group-hover:-translate-y-2 group-hover:scale-110"
              >
              <h1 class="font-serif text-md md:text-2xl font-bold text-white shadow-xl">Optimization</h1>
              <h1 class="text-[10px] sm:text-sm font-light text-gray-200 shadow-xl pr-10">Conserving resource so you are not overcharged</h1>
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
                group-hover:block group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:-translate-y-[0.5rem] md:group-hover:-translate-y-2 group-hover:scale-110"
              >
              <h1 class="font-serif text-md md:text-2xl font-bold text-white shadow-xl">Efficiency</h1>
              <h1 class="text-[10px] sm:text-sm font-light text-gray-200 shadow-xl pr-10">Timely updates and delivery</h1>
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
                group-hover:block group-hover:translate-x-2 md:group-hover:translate-x-3 group-hover:-translate-y-[0.5rem] md:group-hover:-translate-y-2 group-hover:scale-110"
              >
              <h1 class="font-serif text-md md:text-2xl font-bold text-white shadow-xl">Transparency</h1>
              <h1 class="text-[10px] sm:text-sm font-light text-gray-200 shadow-xl pr-10">Adhering to code standards to make the application extensible</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Cards -->

    <!-- Contact Us Form -->
    <div class="px-20 md:px-32 lg:px-40 xl:px-48 pt-10">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl text-center pb-4">Get In Touch</h2>
      <h5 class="font-light text-1xl sm:text-3xl lg:text-4xl text-center">Do not hesitate to ask for my help regarding anything</h5>

      <form @submit.prevent="saveContactMessage" class="mt-5">
        <div class="space-y-12">
          <div class="border-b pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3 lg:col-span-2">
                <label for="contact_name" class="block text-sm font-medium leading-6 text-zinc-800 dark:text-cyan-400">Name</label>
                <div class="mt-2">
                  <!-- @change="v$.contact_name.$touch" -->
                  <input id="contact_name" name="contact_name" type="text" autocomplete="off"
                    placeholder="e.g John Doe"
                    v-model="contactFormData.contact_name"
                    @blur="v$.contact_name.$touch"
                    :class="{
                      'dark:border-red-500 dark:focus:border-red-500': v$.contact_name.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.contact_name.$error,
                    }"
                    class="block w-full h-12 rounded-md outline-none px-2 py-1
                            bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 
                              border-2 border-slate-800  placeholder:text-gray-400
                              shadow-lg text-2xl sm:text-sm sm:leading-6"
                  >
                </div>
                <span v-for="error of v$.$errors" :key="error.$uid">
                  <div v-if="error.$property === 'contact_name'" 
                        class="text-red-500 mt-1 ml-2"
                  >
                    {{ error.$message }}
                  </div>
                </span>
              </div>
              <div class="sm:col-span-3 lg:col-span-2">
                <label for="email" class="block text-sm font-medium leading-6 text-zinc-800 dark:text-cyan-400">Email</label>
                <div class="mt-2">
                  <!-- @change="v$.email.$touch" -->
                  <input id="email" name="email" type="text" autocomplete="off"
                    placeholder="e.g John Doe"
                    v-model="contactFormData.email"
                    @blur="v$.email.$touch"
                    :class="{
                      'dark:border-red-500 dark:focus:border-red-500': v$.email.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.email.$error,
                    }"
                    class="block w-full h-12 rounded-md outline-none px-2 py-1
                            bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 
                              border-2 border-slate-800  placeholder:text-gray-400
                              shadow-lg text-2xl sm:text-sm sm:leading-6"
                  >
                </div>
                <span v-for="error of v$.$errors" :key="error.$uid">
                  <div v-if="error.$property === 'email'" 
                        class="text-red-500 mt-1 ml-2"
                  >
                    {{ error.$message }}
                  </div>
                </span>
              </div>
              <div class="sm:col-span-3 lg:col-span-2">
                <label for="subject" class="block text-sm font-medium leading-6 text-zinc-800 dark:text-cyan-400">Subject</label>
                <div class="mt-2">
                  <!-- @change="v$.subject.$touch" -->
                  <input id="subject" name="subject" type="text" autocomplete="off"
                    placeholder="e.g John Doe"
                    v-model="contactFormData.subject"
                    @blur="v$.subject.$touch"
                    :class="{
                      'dark:border-red-500 dark:focus:border-red-500': v$.subject.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.subject.$error,
                    }"
                    class="block w-full h-12 rounded-md outline-none px-2 py-1
                            bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 
                              border-2 border-slate-800  placeholder:text-gray-400
                              shadow-lg text-2xl sm:text-sm sm:leading-6"
                  >
                </div>
                <span v-for="error of v$.$errors" :key="error.$uid">
                  <div v-if="error.$property === 'subject'" 
                        class="text-red-500 mt-1 ml-2"
                  >
                    {{ error.$message }}
                  </div>
                </span>
              </div>
              <div class="col-span-full">
                <label for="details" class="block text-sm font-medium leading-6 text-slate-800 dark:text-cyan-400">Details</label>
                <div class="mt-2">
                  <!-- @change="v$.details.$touch" -->
                  <textarea id="details" name="details" rows="3" 
                    placeholder="e.g Can you tell me how I get a web app up and running ?"
                    v-model="contactFormData.details"
                    @blur="v$.details.$touch"
                    :class="{
                      'dark:border-red-500 dark:focus:border-red-500': v$.details.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.details.$error,
                    }"
                    class="block w-full rounded-md outline-none px-2 py-1
                        bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 
                          border-2 border-slate-800  placeholder:text-gray-400
                          shadow-lg text-2xl sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <span v-for="error of v$.$errors" :key="error.$uid">
                  <div v-if="error.$property === 'details'" 
                        class="text-red-500 mt-1 ml-2"
                  >
                    {{ error.$message }}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button type="submit"
            class="rounded-md w-20 md:w-32 lg:w-40 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    <!-- End Contact Us Form -->
    <p
      v-for="error of v$.$errors"
      :key="error.$uid"
    >
    <strong>{{ error.$validator }}</strong>
    <small> on property</small>
    <strong>{{ error.$property }}</strong>
    <small> says:</small>
    <strong>{{ error.$message }}</strong>
    </p>

  </div>
</template>

<script setup>
  import { required, helpers, email } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';

  definePageMeta({
    // NOTICE THAT THE LAYOUT COMPONENT IS NAMED MainLayout BUT HERE WE ARE CALLING IT main-layout. THIS IS BECAUSE WE CAN'T USE UNDERSCORES AND CAPITALS HERE AND ANY CAMELCASE IS PARSED AS 
    // KEBAB-CASE BY NUXT FOR DEFINE-COMPOSABLES
    layout: 'main-layout',
  })

  const contactFormData = reactive({
    contact_name: '',
    email: '',
    subject: '',
    details: '',
  });
  
  // computed rules for generals
  const contactFormRules = computed(() => {
      return {
          contact_name: {
              required: helpers.withMessage('The name field is require', required,),
              $autoDirty: true,
          },
          email: {
              required: helpers.withMessage('The email field is require', required,),
              email: helpers.withMessage('The email field must contain a valid email', email,),
              $autoDirty: true,
          },
          subject: {
              required: helpers.withMessage('The subject field is require', required,),
              $autoDirty: true,
          },
          details: {
              required: helpers.withMessage('The details field is require', required,),
              $autoDirty: true,
          },
      };
  });

  const v$ = useVuelidate(contactFormRules, contactFormData)

  const saveContactMessage =   () => {
      v$.value.$validate();
      // console.log(v$.value.contact_name,'values');
      console.log(v$.value.$errors,'errors');
      console.log(v$.value.$error,'error');

      if(!v$.value.$error){
        console.log('submit');
      }
  };

  // onMounted(async () => {
  //   try {
  //     await $generalStore.getAllUsersAndPosts()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })
</script>
