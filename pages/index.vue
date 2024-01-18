<template>
    <div>
      <LandingPageHero id="main" />
      <LandingPageAbout id="about"/>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'dark',
  // auth: {
  //   unauthenticatedOnly: false,
  //   navigateAuthenticatedTo: '/main',
  // },
})

// const { data } = await useFetch('/api/me')
</script>
