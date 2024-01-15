<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <FormsLogin class="w-full mt-20"/>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: ['public'],
  // auth: {
  //   unauthenticatedOnly: true,
  //   navigateAuthenticatedTo: '/main',
  // },
});
useHead({
  title: "Login | MentEdu",
});
</script>
