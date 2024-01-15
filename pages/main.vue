<script setup>
import {ref} from "vue";
const listAhli = ref([
  {
    id: 1,
    name: "Joshua Odoi",
    photo: "/joshua-photo.jpg",
    isAvailable: true,
    occupation: "Konselor Anak",
    company: "Jayapura Konseling",
    session: 10,
    reviewsTotal: 0,
    experienceYear: 5,
    avgAttendance: 100,
  },
  {
    id: 2,
    name: "Madhavi Godbole",
    photo: "/madhavi-photo.jpg",
    isAvailable: true,
    occupation: "Konselor Anak",
    company: "Bandung",
    session: 5,
    reviewsTotal: 6,
    experienceYear: 23,
    avgAttendance: 97,
  },
  {
    id: 3,
    name: "Gokul Kumar",
    photo: "/gokul-photo.jpg",
    isAvailable: true,
    occupation: "Guru BK",
    company: "SMP Negeri 11",
    session: 60,
    reviewsTotal: 9,
    experienceYear: 4,
    avgAttendance: 98,
  },
  {
    id: 4,
    name: "Daria Maslennikova",
    photo: "/daria-photo.jpg",
    isAvailable: false,
    occupation: "Konsultan Mental",
    company: "Jakarta",
    session: 0,
    reviewsTotal: 0,
    experienceYear: 5,
    avgAttendance: 100,
  },
]);
definePageMeta({
  layout: "default",
  middleware: 'auth',
});
useHead({
  title: "Main | MentEdu",
});
</script>

<template>
  <section class="px-20 mt-40">
    <MainCategory class="mb-5" />
    <SearchSession class="mb-5" />
    <CardSession
        class="col-2 ml-2 mb-10"
        v-for="ahli in listAhli"
        :key="ahli.id"
        :ahli="ahli"
    />
  </section>
</template>