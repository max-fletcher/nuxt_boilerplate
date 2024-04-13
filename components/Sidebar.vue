<template>
  <div
    id="SidebarOverlay"
    class="fixed flex justify-end z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
  >
    <div 
      class="h-full relative bg-white max-w-[400px] w-0 p-4 rounded-l"
      :class="$generalStore.isMainSidebarOpen ? 'w-full' : ''" 
    >
      <div class="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300">
        <div class="text-[22px] font-medium">
          Navigation
        </div>
        <button
          @click="$generalStore.isMainSidebarOpen = false"
        >
          <Icon name="mdi:close" size="25" />
        </button>
      </div>

      <div class="mt-16 h-[calc(500px)]">
        <div v-if="$generalStore.isMainSidebarOpen">
          <NuxtLink 
            :to="`/profile`"
            @click="$generalStore.isMainSidebarOpen = false"
            class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"
          >
          Profile
          </NuxtLink>
        </div>

        <div class="absolute p-5 left-0 bottom-0 border-t border-t-gray-300 w-full">
            <button 
              @click="$generalStore.isMainSidebarOpen = false"
              class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
            >
              <span class="px-2 font-medium text-[15px]">Cancel</span>
            </button>

            <!-- :disabled="!isUpdated"
              :class="!isUpdated ? 'bg-gray-200' : 'bg-[#F02C56]'" -->
            <button 
                class="bg-[#F02C56]#F02C56 flex items-center text-white border rounded-md ml-3 px-3 py-[6px]"
            >
                <span class="mx-4 font-medium text-[15px]">Apply</span>
            </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  // 'storeToRefs' CONVERTS STORE STATES AND GETTERS TO REFS SO IT CAN BE DESTRUCTURED WHILE MAINTAINING REACTIVITY, AND IF NEED BE, PASSED AS PROP TO ANY COMPONENT. 
  // ACTIONS CAN BE DESTRUCTURED DIRECTLY WITHOUT USING 'storeToRefs'.
  import { storeToRefs } from 'pinia'

  const { $generalStore } = useNuxtApp()
  const { isMainSidebarOpen } = storeToRefs($generalStore)

  // const { name, bio, image } = storeToRefs($userStore)
  const route = useRoute()

  // MAKING A COPY OF THE REFS SO THAT WE CAN FREELY EDIT THESE VALUES IN INPUT V-MODEL WITHOUT EDITING THE ACTUAL VALUES IN STORE STATE(SINCE IT IS USED TO POPULATE THE MODAL AND PAGE COMPONENTS
  onMounted(() => {
    // userName.value = name.value
    // userBio.value = bio.value
    // userImage.value = image.value
  })

  // let file = ref(null)
  // let cropper = ref(null)
  // let uploadedImage = ref(null)
  // let userImage = ref(null)
  // let userName = ref(null)
  // let userBio = ref(null)
  // let isUpdated = ref(false)

  const updateUserInfo = async () => {
    // try {
    //   await $userStore.updateUser(userName.value, userBio.value)
    //   await $userStore.getUser()
    //   await $profileStore.getProfile(route.params.id)

    //   userName.value = name.value
    //   userBio.value = bio.value

    //   setTimeout(() => {
    //     $generalStore.isMainSidebarOpen = false
    //   }, 100)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  // VALIDATION FOR THE 2 TEXT FIELDS. IF THE COPIED VALUE MATCHES THE 
  // watch(() => userName.value, () => {
  //   if(!userName.value || userName.value === name.value)
  //     isUpdated.value = false
  //   else
  //     isUpdated.value = true
  // })

  // watch(() => userBio.value, () => {
  //   if(!userName.value || userBio.value.length < 1)
  //     isUpdated.value = false
  //   else
  //     isUpdated.value = true
  // })
</script>