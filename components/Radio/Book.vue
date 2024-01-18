<script setup lang="ts">
  defineProps(['waktu'])
</script>

<template>
  <div class="flex items-center ps-4 border border-gray-200 rounded-full dark:border-gray-700 px-3">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
    <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ waktu }}</label>
  </div>
</template>

<style scoped>

</style>