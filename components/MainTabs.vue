<script setup lang="ts">

</script>

<template>
  <ul
      class="flex flex-row gap-11"
      data-tabs="tabs"
      role="list"
  >
    <li>
      <a class="underline text-slate-700 text-2xl font-bold leading-7"
         data-tab-target=""
         active=""
         role="tab"
         aria-selected="true"
         aria-controls="konsul">Sesi Konsultasi</a>
    </li>
    <li>
      <a class="active:underline active:text-slate-700 text-slate-500 text-2xl font-bold leading-7"
         data-tab-target=""
         role="tab"
         aria-selected="false"
         aria-controls="grup">Sesi Grup</a>
    </li>
    <li>
      <a class="active:underline active:text-slate-700 text-slate-500 text-2xl font-bold leading-7"
         data-tab-target=""
         role="tab"
         aria-selected="false"
         aria-controls="webinar">Webinar</a>
    </li>
    <li>
      <a class="active:underline active:text-slate-700 text-slate-500 text-2xl font-bold leading-7"
         data-tab-target=""
         role="tab"
         aria-selected="false"
         aria-controls="saya">Sesi Saya</a>
    </li>
  </ul>
</template>

<style scoped>

</style>