<script setup>
definePageMeta({
  middleware: 'auth'
})
import {ref} from "vue";

const route = useRoute()
const paramId = route.params.id
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
</script>

<template>
  <section v-for="ahli in listAhli" :key="ahli.id" class="w-screen">
    <div v-if="ahli.id == paramId" class="w-screen">
      <div class="w-screen h-[225px] bg-zinc-100"></div>
      <div class="w-screen flex flex-col justify-center items-center px-20">
<!--        Profil -->
        <div class="justify-between w-full flex flex-row">
          <div class="flex flex-row">
            <img class="-mt-20 w-40 h-40 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" :src="ahli.photo" alt="Bordered avatar">
            <div class="ml-3 pt-5">
              <h1 class="text-sky-950 text-[32px] font-bold leading-9">{{ahli.name}}</h1>
              <h2 class="text-sky-950 text-lg font-normal leading-normal">{{ahli.occupation}} <span class="text-slate-500">dari</span> {{ahli.company}}</h2>
            </div>
          </div>
          <div class="flex flex-row items-center gap-3 mr-10">
            <button class="border rounded-lg p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 20.5C12.1903 20.5 12.4622 20.378 12.6616 20.2647C17.7644 17.1275 21 13.476 21 9.76362C21 6.67865 18.7976 4.5 15.9517 4.5C14.247 4.5 12.9217 5.37558 12.0898 6.72794C12.0492 6.79399 11.9514 6.79366 11.9111 6.7274C11.0942 5.38307 9.75241 4.5 8.04834 4.5C5.20242 4.5 3 6.67865 3 9.76362C3 13.476 6.23565 17.1275 11.3474 20.2647C11.5378 20.378 11.8097 20.5 12 20.5Z" stroke="#131313" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="border rounded-lg p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.5C7.10457 10.5 8 11.3954 8 12.5C8 13.6046 7.10457 14.5 6 14.5C4.89543 14.5 4 13.6046 4 12.5C4 11.3954 4.89543 10.5 6 10.5ZM12 10.5C13.1046 10.5 14 11.3954 14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5ZM20 12.5C20 11.3954 19.1046 10.5 18 10.5C16.8954 10.5 16 11.3954 16 12.5C16 13.6046 16.8954 14.5 18 14.5C19.1046 14.5 20 13.6046 20 12.5Z" fill="#131313"/>
              </svg>
            </button>
          </div>
        </div>
<!--       Tablist -->
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>