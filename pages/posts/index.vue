<template>
  <div class="min-h-[400px] bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-cyan-400">
    All Posts Table
    <br /> {{ currentPage }} <br /> {{search}} <br />  {{ limit }} <br />
    <div class="flex justify-center">
      <table class="table-auto border-2 border-cyan-400">
        <thead>
          <tr class="p-2">
            <th class="p-2 border-2 border-cyan-400">Id</th>
            <th class="p-2 border-2 border-cyan-400">Title</th>
            <th class="p-2 border-2 border-cyan-400">Text</th>
            <th class="p-2 border-2 border-cyan-400">Posted By Name</th>
            <th class="p-2 border-2 border-cyan-400">Posted By Email</th>
            <th class="p-2 border-2 border-cyan-400">Comments</th>
          </tr>
        </thead>
        <tbody v-if="posts?.response?.data">
          <tr v-for="post in posts.response.data" :key="post.id">
            <td class="p-2 border-2 border-cyan-400">{{ post.id }}</td>
            <td class="p-2 border-2 border-cyan-400">{{ post.title }}</td>
            <td class="p-2 border-2 border-cyan-400">{{ post.text }}</td>
            <td class="p-2 border-2 border-cyan-400">{{ post.user.name }}</td>
            <td class="p-2 border-2 border-cyan-400">{{ post.user.email }}</td>
            <td class="p-2 border-2 border-cyan-400">
              <span v-for="comment in post.comments" :key="comment.id">
                {{ comment.text }} <br>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center pt-8">
      <div class="grid grid-cols-2 gap-8">
        <button class="px-3 py-1 border-2 border-cyan-400" @click="previousPage()">Previous</button>
        <button class="px-3 py-1 border-2 border-cyan-400" @click="nextPage()">Next</button>
      </div>
    </div>
    {{ posts.response }}
  </div>
</template>

<script setup>
  definePageMeta({
    // NOTICE THAT THE LAYOUT COMPONENT IS NAMED MainLayout BUT HERE WE ARE CALLING IT main-layout. THIS IS BECAUSE WE CAN'T USE UNDERSCORES AND CAPITALS HERE AND ANY CAMELCASE IS PARSED AS 
    // KEBAB-CASE BY NUXT FOR DEFINE-COMPOSABLES
    layout: 'main-layout',
  })
  const runtimeConfig = useRuntimeConfig() 

  const currentPage = ref(2)
  const search = ref('')
  const limit = ref(1)

  // Notice the arrow funciton as 1st param
  const { data: posts, pending, refresh, error, status } = await useFetch(() => `${runtimeConfig.public.API_URL}posts?currentPage=${currentPage.value}&search=${search.value}&limit=${limit.value}`, {
                                                                key: `postList-${currentPage.value}`
                                                              })

  console.log(posts.value, pending, refresh, error, status);

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