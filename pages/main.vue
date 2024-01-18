<script setup>
import {Tabs} from "flowbite";
definePageMeta({
  layout: "default",
  middleware: 'auth',
});
let auth
if (process.client) {
  auth = localStorage.getItem('Auth')
}
console.log(auth)
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

const blogs = await $fetch('/api/article', {
  baseURL: 'http://mentedu-be.kakashispiritnews.my.id',
  method: 'GET',
})


useHead({
  title: "Main | MentEdu",
});
import {initTabs} from "flowbite";

onMounted(() => {
  initTabs()
})
</script>

<template>
  <section class="px-20 mt-40">
    <ul
        class="flex flex-row gap-11"
        id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist"
    >
      <li role="presentation">
        <button class="active:underline active:text-slate-700 inline-block text-2xl font-bold leading-7 hover:text-gray-600"
           id="konsul-tab" data-tabs-target="#konsul" type="button" role="tab" aria-controls="konsul" aria-selected="false"
        >Sesi Konsultasi</button>
      </li>
      <li role="presentation" class="hidden">
        <button class="active:underline active:text-slate-700 text-2xl font-bold leading-7 hover:text-gray-600"
           id="grup-tab" data-tabs-target="#grup" type="button" role="tab" aria-controls="grup" aria-selected="false"
        >Sesi Grup</button>
      </li>
      <li role="presentation" class="hidden">
        <button class="active:underline active:text-slate-700 text-2xl font-bold leading-7 hover:text-gray-600"
           id="webinar-tab" data-tabs-target="#webinar" type="button" role="tab" aria-controls="webinar" aria-selected="false"
        >Webinar</button>
      </li>
      <li role="presentation" class="hidden">
        <button class="active:underline active:text-slate-700 text-2xl font-bold leading-7 hover:text-gray-600"
                id="saya-tab" data-tabs-target="#saya" type="button" role="tab" aria-controls="saya" aria-selected="false"
        >Sesi Saya</button>
      </li>
      <li role="presentation">
        <button class="active:underline active:text-slate-700 text-2xl font-bold leading-7 hover:text-gray-600"
                id="blog-tab" data-tabs-target="#blog" type="button" role="tab" aria-controls="blog" aria-selected="false"
        >Blog</button>
      </li>
    </ul>
    <div id="default-tab-content" class="mt-5">
      <div class="hidden" id="konsul" role="tabpanel" aria-labelledby="konsul-tab">
        <SearchSession class="mb-5" />
        <CardSession
            class="col-2 ml-2 mb-10"
            v-for="ahli in listAhli"
            :key="ahli.id"
            :ahli="ahli"
        />
      </div>

      <div class="hidden" id="grup" role="tabpanel" aria-labelledby="grup-tab">
        Two
      </div>

      <div class="flex flex-row" id="webinar" role="tabpanel" aria-labelledby="webinar-tab">
        <CardWebinar
            class="col-3 ml-2 mb-10"
            v-for="blog in blogs.data"
            :key="blog.id"
            :blog="blog"
        />
      </div>

      <div class="hidden" id="saya" role="tabpanel" aria-labelledby="saya-tab">
        Four
      </div>

      <div class="flex flex-row" id="blog" role="tabpanel" aria-labelledby="blog-tab">
        <CardBlog
          class="col-3 ml-2 mb-10"
          v-for="blog in blogs.data"
          :key="blog.id"
          :blog="blog"
        />
      </div>
    </div>
  </section>
</template>