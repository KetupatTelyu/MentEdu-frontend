<script setup lang="ts">
import {useCurrentUser} from "vuefire";

const user = useCurrentUser()
</script>

<template>
<p class="mt-20">
  {{ user }}
</p>
</template>