<template>
  <div class="min-h-[400px] bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
    <div class="flex justify-center text-3xl">
      All Posts
    </div>
    <div class="w-full px-16 md:px-0 flex justify-center bg-slate-200 dark:bg-gray-800" v-if="error">
      <div class="bg-white border border-slate-800 dark:border-cyan-400 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl
                  bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400"
      >
          <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-slate-800 dark:text-cyan-400">{{ error.statusCode }}</p>
          <p class="text-2xl md:text-3xl lg:text-5xl font-bold text-center tracking-wider text-slate-800 dark:text-cyan-400 mt-4">{{ errorStatus }}</p>
          <p class="mt-8 py-2 border-y-2 text-center border-slate-800 dark:border-cyan-400 text-slate-800 dark:text-cyan-400">{{ errorMessage }}</p>
      </div>
    </div>

    <div v-if="!error" class="max-w-full">
      <div class="flex justify-center">
        <Icon v-if="pending" name="eos-icons:bubble-loading" size="100" />
      </div>

      <div class="mt-8">
        <div class="mb-5 flex justify-center">
          <div class="relative w-[300px]">
            <input
                id="user_email"
                type="email"
                name="email"
                class="border-2 peer block w-full appearance-none rounded-full pl-6 text-sm
                        border-slate-800 dark:border-cyan-400 px-0 py-[14px] dark:focus:border-cyan-400 focus:outline-none focus:ring-0
                        bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400"
                placeholder=" "
                v-model="search"
                @keydown="executeSearch"
            />
            <label
                for="user_email"
                class="absolute top-[0.8rem] left-6 text-gray-middle duration-300 transform -translate-y-6 
                        transparent peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:px-[4px] peer-focus:text-gray-dark peer-focus:transparent
                        bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400
            ">
                Search
            </label>
          </div>
        </div>

        <div class="w-full px-16 md:px-0 flex justify-center bg-slate-200 dark:bg-gray-800" v-if="posts?.response?.data.length === 0">
          <div class="bg-white border border-slate-800 dark:border-cyan-400 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl
                      bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400"
          >
              <p class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-slate-800 dark:text-cyan-400">404</p>
              <p class="text-xl md:text-2xl lg:text-3xl font-bold text-center tracking-wider text-slate-800 dark:text-cyan-400 mt-4">No data found</p>
          </div>
        </div>

        <div class="h-full flex sm:justify-center sm:px-5 pb-1
                    scrollbar dark:scrollbar-thumb-cyan-400 dark:scrollbar-gray-300 overflow-x-scroll"
                    v-if="!pending && posts?.response?.data.length > 0">
          <table class="table-auto border-2 border-cyan-400">
            <thead>
              <tr class="p-2">
                <th class="p-2 border-2 border-slate-800 dark:border-cyan-400">Id</th>
                <th class="p-2 border-2 border-slate-800 dark:border-cyan-400">Title</th>
                <th class="p-2 border-2 border-slate-800 dark:border-cyan-400">Text</th>
                <th class="p-2 border-2 border-slate-800 dark:border-cyan-400">Posted By Name</th>
                <th class="p-2 border-2 border-slate-800 dark:border-cyan-400">Posted By Email</th>
                <th class="p-2 border-2 border-slate-800 dark:border-cyan-400">Comments</th>
              </tr>
            </thead>
            <tbody v-if="posts?.response?.data">
              <tr v-for="post in posts.response.data" :key="post.id">
                <td class="p-2 border-2 border-slate-800 dark:border-cyan-400">{{ post.id }}</td>
                <td class="p-2 border-2 border-slate-800 dark:border-cyan-400">{{ post.title }}</td>
                <td class="p-2 border-2 border-slate-800 dark:border-cyan-400">{{ post.text }}</td>
                <td class="p-2 border-2 border-slate-800 dark:border-cyan-400">{{ post.user.name }}</td>
                <td class="p-2 border-2 border-slate-800 dark:border-cyan-400">{{ post.user.email }}</td>
                <td class="p-2 border-2 border-slate-800 dark:border-cyan-400">
                  <span v-for="comment in post.comments" :key="comment.id">
                    {{ comment.text }} <br>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <h1>Loading...</h1>
        </div>
        <div class="flex justify-center pt-8">
          <div class="grid grid-cols-2 gap-8">
            <!-- v-if="posts.response.previous" -->
            <button class="px-3 py-1 border-2 border-slate-800 dark:border-cyan-400" :class="{ invisible: !posts.response.previous }" @click="previousPage()">Previous</button>
            <!-- v-if="posts.response.next" -->
            <button class="px-3 py-1 border-2 border-slate-800 dark:border-cyan-400" :class="{ invisible: !posts.response.next }" @click="nextPage()">Next</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-5xl">
        ShadCN Components
      </h1>

      <h1 class="mt-4">Accordion</h1>
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>1st Accordion Trigger</AccordionTrigger>
          <AccordionContent>
            1st Accordion Content
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2nd Accordion Trigger</AccordionTrigger>
          <AccordionContent>
            2nd Accordion Content
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>3rd Accordion Trigger</AccordionTrigger>
          <AccordionContent>
            3rd Accordion Content
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h1 class="mt-5 mb-2">Buttons</h1>
      <Button variant="destructive">Click me</Button>

      <Button disabled>
        <Icon class="w-4 h-4 mr-2 animate-spin" name="mdi:bottle-coke" />
        Toast
      </Button>

      <h1 class="mt-5 mb-2">Toast</h1>
      <Toaster />
      <!-- Button with custom variant(see button/index.ts to see all variants and make one if need be) -->
      <Button
          variant="custom"
          @click="() => {
            toast({
              variant: 'custom',
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
            });
          }"
      >
        Trigger Toast
      </Button>

      <br />

      <h1 class="mt-5 mb-2">Tooltip</h1>
      <!-- Control how fast the tooltip will appear -->
      <TooltipProvider :delay-duration="100" :skip-delay-duration="100">
        <Tooltip>
          <TooltipTrigger>
            <!-- Button with custom variant(see button/index.ts to see all variants and make one if need be) -->
            <Button variant="custom">Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <h1 class="mt-5 mb-2">Dialog/Modal</h1>
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px] bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400">
          <DialogHeader>
            <DialogTitle class="bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400">Edit profile</DialogTitle>
            <DialogDescription class="bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 text-right">
                Name
              </Label>
              <Input id="name" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-cyan-400 text-right">
                Username
              </Label>
              <Input id="username" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <h1 class="text-2xl mt-7 mb-5 border-b-2 border-t-2 py-2 border-cyan-400">Experimenting with custom components</h1>

      <h1 class="text-xl p-2 border-b-2 border-b-2 border-cyan-400">With Vuelidate</h1>
      <CustomInput v-model="customInput"
        class="w-40"
        :class="{
          'dark:border-red-500 dark:focus:border-red-500': v$.customInput.$error,
          'dark:border-slate-500 dark:focus:border-indigo-400': !v$.customInput.$error,
        }"
        :errorMessage="filterError(v$.$errors, 'customInput')"
      />

      <CustomInput v-model="customInput2" 
        class="w-40"
        :class="{
          'dark:border-red-500 dark:focus:border-red-500': v$.customInput2.$error,
          'dark:border-slate-500 dark:focus:border-indigo-400': !v$.customInput2.$error,
        }"
        :errorMessage="filterError(v$.$errors, 'customInput2')"
      />

      <CustomDatepicker v-model="customDateTimeVal" :errorMessage="filterError(v$.$errors, 'customDateTimeVal')" />

      <Button @click="vuelidateSubmit" class="mt-5">
          Save changes
      </Button>

      <p>{{ v$.$errors[0]?.$message }}</p>
      <p>{{ v$.$errors[1]?.$message }}</p>
      <p v-for="error of v$.$errors" :key="error.$uid">
        <strong>{{ error.$validator }}</strong>
        <small> on property</small>
        <strong>{{ error.$property }}</strong>
        <small> says:</small>
        <strong>{{ error.$message }}</strong>
      </p>

      <!-- With VeeValidate -->
      <h1 class="text-xl p-2 border-b-2 border-b-2 border-cyan-400 mt-10">With VeeValidate</h1>
      <form @submit="onSubmit">
        <CustomInput v-model="email2"
          class="w-40"
          :class="{
            'dark:border-red-500 dark:focus:border-red-500': errors.email2,
            'dark:border-slate-500 dark:focus:border-indigo-400': !errors.email2,
          }"
          :errorMessage="errors.email2"
        />

        <CustomInput v-model="password"
          class="w-40"
          :class="{
            'dark:border-red-500 dark:focus:border-red-500': errors.password,
            'dark:border-slate-500 dark:focus:border-indigo-400': !errors.password,
          }"
          :errorMessage="errors.password"
        />
        {{ password }}

        <!-- Add defaultValue="2024-3-4" as prop if you want to set a default date -->
        <CustomDatepicker v-model="datetime" :errorMessage="errors.datetime" defaultValue="2024-3-4" />
        {{ datetime }}

        <CustomCheckbox v-model="checkboxVal" :handleChange="handleCheckboxValChange" :errorMessage="errors.checkboxVal" />
        {{ checkboxVal }}

        <Button class="mt-3">
          Submit
        </Button>
      </form>
      <!-- End With VeeValidate -->

      <div>
        All Errors: {{ errors }}
        <div v-for="(error, key) in errors" :key="key">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'

  definePageMeta({
    // NOTICE THAT THE LAYOUT COMPONENT IS NAMED MainLayout BUT HERE WE ARE CALLING IT main-layout. THIS IS BECAUSE WE CAN'T USE UNDERSCORES AND CAPITALS HERE AND ANY CAMELCASE IS PARSED AS 
    // KEBAB-CASE BY NUXT FOR DEFINE-COMPOSABLES
    layout: 'main-layout',
  })

  const runtimeConfig = useRuntimeConfig() 

  // Initialize ShadCN toaster
  import { useToast } from '@/components/ui/toast/use-toast'
  import { Toaster } from "@/components/ui/toast"
  const { toast } = useToast()
  // End Initialize ShadCN toaster

  // Initialize ShadCN Tooltip
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from '@/components/ui/tooltip'
  // End Initialize ShadCN Tooltip

  // Initialize ShadCN Dialog/Modal
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'
  // End Initialize ShadCN Dialog/Modal

  // Initialize ShadCN Input & Label
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  // End Initialize ShadCN Input & Label

  // For trying out custom component written over shadCN along with Vuelidate
  import { required, helpers, email } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  const customInput = ref('')
  const customInput2 = ref('')
  const customDateTimeVal = ref('')

  // computed rules for validation
  const customInputRules = computed(() => {
      return {
          customInput: {
              required: helpers.withMessage('The customInput1 field is require', required),
              $autoDirty: true,
          },
          customInput2: {
              email: helpers.withMessage('The customInput2 field must contain a valid email', email),
              required: helpers.withMessage('The customInput2 field is require', required,),
              $autoDirty: true,
          },
          customDateTimeVal: {
              required: helpers.withMessage('The customDateTimeVal field is require', required),
              $autoDirty: true,
          },
          // email: {
          //     required: helpers.withMessage('The email field is require', required,),
          //     email: helpers.withMessage('The email field must contain a valid email', email,),
          //     $autoDirty: true,
          // },
      };
  });

  const v$ = useVuelidate(customInputRules, { customInput, customInput2, customDateTimeVal })

  const vuelidateSubmit = () => {
      v$.value.$validate();
      console.log(v$.value.customInput,'values');
      console.log(v$.value.$errors,'errors');
      console.log(v$.value.$error,'error');

      if(!v$.value.$error){
        console.log('vuelidateSubmit');
      }
  };

  // NEEDED FOR SENDING THE CORRECT VUELIDATE ERROR MESSAGE AS PROP TO COMPONENTS
  const filterError = (errors, inputName) => {
    let msg = ""
    const errorMsg = errors.map((error) => {
      if(error.$property === inputName){
        msg = error.$message
      }
    })

    return msg
  }
  // End For trying out custom component written over shadCN Vuelidate

  // Attempting to use VeeValidate with custom components written over shadCN
  import { StorePostSchema } from '@/zodSchema/postsSchema'; // Importing Zod schema from separate file
  const validationSchema = toTypedSchema(StorePostSchema);
  const { handleSubmit, errors } = useForm({ validationSchema });
  const { value: email2 } = useField('email2');
  const { value: password } = useField('password');
  const { value: datetime } = useField('datetime');
  const { value: checkboxVal } = useField('checkboxVal');
  checkboxVal.value = true // For setting default value

  // 
  const handleCheckboxValChange = () => {
    checkboxVal.value = !checkboxVal.value
  }

  // import axios from '../../plugins/axios';
  // const $axios = axios().provide.axios //GETTING THE AXIOS INSTANCE PROVIDED BY PROVIDER. SEE THAT FILE.

  const onSubmit = handleSubmit(values => {
    console.log(values, values.datetime?.day, values.datetime?.month, values.datetime?.year)
    console.log(typeof(values.datetime?.day))
    alert(values);

    // SEND REQUEST TO BACKEND
    // await $axios.post(`${runtimeConfig.public.API_URL}posts`, {})
  });
  // End Attempting to use VeeValidate with custom components written over shadCN

  // shadCN accordion
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


  const currentPage = ref(1)
  const limit = ref(10)
  const search = ref('')
  const debouncedSearch = ref('')
  const searchLoading = ref(false)
  const errorStatus = ref('')
  const errorMessage = ref('')

  // Notice the arrow funciton as 1st param
  const { data: posts, pending, refresh, error, status } = await useFetch(() => `${runtimeConfig.public.API_URL}posts?currentPage=${currentPage.value}&search=${debouncedSearch.value}&limit=${limit.value}`, {
                                                                    key: `postList-${currentPage.value}`,
                                                                    onResponseError({ request, response, options }) {
                                                                      // console.log('onResponseError', request, response, options);
                                                                      errorStatus.value = response._data.response.error
                                                                      errorMessage.value = response._data.response.message
                                                                    }
                                                                  })

  const executeSearch = useDebounceFn(() => {
    debouncedSearch.value = search.value
    searchLoading.value = false
  }, 1000)

  const previousPage = () => {
    if(posts.value.response.previous){
      currentPage.value = currentPage.value - 1
      refresh()
    }
  }

  const nextPage = () => {
    if(posts.value.response.next){
      currentPage.value = currentPage.value + 1
      refresh()
    }
  }
</script>

<style lang="scss" scoped>

</style>