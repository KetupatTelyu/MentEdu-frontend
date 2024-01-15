<script setup lang="ts">
  let searchQuery = ''
</script>

<template>
  <div class="w-full flex flex-start flex-wrap gap-6 pr-5">
    <div class="grow flex flex-row justify-start items-center py-1 px-2 border border-gray-200 rounded-lg">
      <span class="ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M8.8254 15.5664C12.5486 15.5664 15.5669 12.5481 15.5669 8.82491C15.5669 5.10173 12.5486 2.0835 8.8254 2.0835C5.10222 2.0835 2.08398 5.10173 2.08398 8.82491C2.08398 12.5481 5.10222 15.5664 8.8254 15.5664Z" stroke="#077F7F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.5137 13.8638L16.1567 16.4999" stroke="#077F7F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <input class="w-full border-transparent" type="text" name="search" placeholder="Cari berdasarkan gejala, konsultan dan hal yang terkait" />
    </div>
    <button class="flex flex-row justify-center items-center p-1 border border-gray-200 gap-3 px-5 rounded-lg"><span>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M10.9978 17.9866H3.76367" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9983 17.9866C21.9983 19.5772 20.7089 20.8666 19.1183 20.8666C17.5277 20.8666 16.2383 19.5772 16.2383 17.9866C16.2383 16.3948 17.5277 15.1066 19.1183 15.1066C20.7089 15.1066 21.9983 16.3948 21.9983 17.9866Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.7637 6.26208H21.999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.76367 6.26208C3.76367 7.85385 5.05308 9.14208 6.64367 9.14208C8.23426 9.14208 9.52367 7.85385 9.52367 6.26208C9.52367 4.67149 8.23426 3.38208 6.64367 3.38208C5.05308 3.38208 3.76367 4.67149 3.76367 6.26208Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span> Filter</button>
  </div>
</template>

<style scoped>

</style>