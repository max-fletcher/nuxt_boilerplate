<template>
  <div class="min-h-[400px] bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
    <!-- Create Post Form -->
    <div class="px-20 md:px-32 lg:px-40 xl:px-48 pt-10">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl text-center pb-4">Create Post</h2>
      <h5 class="font-light text-1xl sm:text-3xl lg:text-4xl text-center">Form Submission For Post</h5>

      <form @submit.prevent="createPost" class="mt-5">
        <div class="space-y-12">
          <div class="border-b pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <!-- Cheap-ass select component. Should prolly overhaul to select instead of div with options later if possible. -->
              <div class="sm:col-span-3 lg:col-span-2">
                <div class="relative w-full group">
                  <input class="hidden" value="{{ createPostFormData.userId }}">
                  <label class="block text-sm font-medium leading-6 text-zinc-800 dark:text-cyan-400"
                  >
                    Select User
                  </label>
                  <button @click.prevent="dropdownOpened = true"
                    v-on-click-outside="validateUserId"
                    :class="{
                      'text-gray-400' : createPostFormData.userId === '',
                      'dark:border-red-500 dark:focus:border-red-500': v$.userId.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.userId.$error,
                    }"
                    class="mt-2 py-2.5 px-3 w-full h-12 md:text-sm text-site bg-transparent
                      border-2 border-slate-500 dark:focus:border-indigo-400
                      focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
                  >
                    {{ createPostFormData.userId === "" ? "Select user" : createPostFormData.userId }}
                  </button>
                  <div class="absolute z-[99] top-[100%] left-[0%] translate-x-[0%] rounded-md overflow-hidden shadow-lg 
                              w-full peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 
                              bg-gray-100 dark:bg-gray-800 border border-dimmed text-xs md:text-sm"
                  >
                    <div v-for="user in users.response.data" :key="user.key" @click="selectUser(user.id, user.name)" 
                          class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
                    >
                      {{ user.name }}
                    </div>
                  </div>
                </div>
                <span v-for="error of v$.userId.$errors" :key="error.$uid">
                  <div class="text-red-500 mt-1 ml-2">
                    {{ error.$message }}
                  </div>
                </span>
              </div>

              <div class="sm:col-span-3 lg:col-span-2">
                <label for="title" class="block text-sm font-medium leading-6 text-zinc-800 dark:text-cyan-400">Title</label>
                <div class="mt-2">
                  <input id="title" name="title" type="text" autocomplete="off"
                    placeholder="e.g John Doe"
                    v-model="createPostFormData.title"
                    @blur="v$.title.$touch"
                    :class="{
                      'dark:border-red-500 dark:focus:border-red-500': v$.title.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.title.$error,
                    }"
                    class="block w-full h-12 rounded-md outline-none px-2 py-1
                            bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 
                              border-2 border-slate-800  placeholder:text-gray-400
                              shadow-lg text-2xl sm:text-sm sm:leading-6"
                  >
                </div>
                <span v-for="error of v$.title.$errors" :key="error.$uid">
                  <div class="text-red-500 mt-1 ml-2">
                    {{ error.$message }}
                  </div>
                </span>
              </div>

              <div class="col-span-full">
                <label for="text" class="block text-sm font-medium leading-6 text-slate-800 dark:text-cyan-400">text</label>
                <div class="mt-2">
                  <!-- @change="v$.text.$touch" -->
                  <textarea id="text" name="text" rows="3" 
                    placeholder="e.g Can you tell me how I get a web app up and running ?"
                    v-model="createPostFormData.text"
                    @blur="v$.text.$touch"
                    :class="{
                      'dark:border-red-500 dark:focus:border-red-500': v$.text.$error,
                      'dark:border-slate-500 dark:focus:border-indigo-400': !v$.text.$error,
                    }"
                    class="block w-full rounded-md outline-none px-2 py-1
                        bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 
                          border-2 border-slate-800  placeholder:text-gray-400
                          shadow-lg text-2xl sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <span v-for="error of v$.text.$errors" :key="error.$uid">
                  <div class="text-red-500 mt-1 ml-2">
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
    <!-- End Create Post Form -->
    <h1 class="">
      {{ users }}
      <br />
      {{ createPostFormData }}
      <br />
      {{ createPostFormData.userId }}
      <br />
      {{ dropdownOpened }}
    </h1>
    <button class="px-3 py-1 border-2 border-cyan-400" @click="refresh">Refresh</button>
  </div>
</template>

<script setup>
  import { required, helpers, email } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import { vOnClickOutside } from '@vueuse/components'

  definePageMeta({
    // NOTICE THAT THE LAYOUT COMPONENT IS NAMED MainLayout BUT HERE WE ARE CALLING IT main-layout. THIS IS BECAUSE WE CAN'T USE UNDERSCORES AND CAPITALS HERE AND ANY CAMELCASE IS PARSED AS 
    // KEBAB-CASE BY NUXT FOR DEFINE-COMPOSABLES
    layout: 'main-layout',
  })

  const runtimeConfig = useRuntimeConfig()

  const currentPage = ref(1)
  const limit = ref(10)
  const search = ref('')

  // Notice the arrow funciton as 1st param
  const { data: users, pending, refresh, error, status } = await useFetch(() => `${runtimeConfig.public.API_URL}users?currentPage=${currentPage.value}&search=${search.value}&limit=${limit.value}`
                                                                // , {
                                                                //   onResponse({ request, response, options }) {
                                                                //     console.log('onResponseError', request, response, options);
                                                                //   },
                                                                //   onResponseError({ request, response, options }) {
                                                                //     // console.log('onResponseError', request, response, options);
                                                                //     errorStatus.value = response._data.response.error
                                                                //     errorMessage.value = response._data.response.message
                                                                //   }
                                                                // }
                                                              )

  const createPostFormData = reactive({
    userId: '',
    title: '',
    text: '',
  });
  
  // computed rules for generals
  const contactFormRules = computed(() => {
      return {
          title: {
              required: helpers.withMessage('The name field is require', required,),
              $autoDirty: true,
          },
          text: {
              required: helpers.withMessage('The text field is require', required,),
              $autoDirty: true,
          },
          userId: {
              required: helpers.withMessage('The user id field is require', required,),
              $autoDirty: true,
          },
      };
  });

  const v$ = useVuelidate(contactFormRules, createPostFormData)

  const createPost = () => {
      v$.value.$validate();
      // console.log(v$.value.title,'values');
      console.log(v$.value.$errors,'errors');
      console.log(v$.value.$error,'error');

      if(!v$.value.$error){
        console.log('submit');
      }
  };

  const selectUser = (id, name) => {
    createPostFormData.userId = id
  }

  const dropdownOpened = ref(false)
  const validateUserId = () => {
    if(dropdownOpened.value){
      v$.value.userId.$validate()
    }
  }

  // onMounted(async () => {
  //   try {
  //     await $generalStore.getAllUsersAndPosts()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })
</script>