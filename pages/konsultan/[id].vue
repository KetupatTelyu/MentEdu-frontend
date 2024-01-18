<script setup>
definePageMeta({
  // middleware: 'auth'
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
// const jadwalSaya = ref()
import {initTabs, initCarousels} from "flowbite";
onMounted(() => {
  initTabs()
  initCarousels()
})
</script>

<template>
  <section v-for="ahli in listAhli" :key="ahli.id" class="">
    <div v-if="ahli.id == paramId" class="">
      <div class="h-[225px] bg-zinc-100"></div>
      <div class="flex flex-col justify-center items-center mx-20">
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
<!--        Tablist-->
        <div class="mb-4 mt-5 border-b border-gray-200 self-start dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <li class="me-2" role="presentation">
              <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profil</button>
            </li>
            <li class="me-2" role="presentation">
              <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="penilaian-tab" data-tabs-target="#penilaian" type="button" role="tab" aria-controls="penilaian" aria-selected="false">Penilaian</button>
            </li>
            <li class="me-2 hidden" role="presentation">
              <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="grup-tab" data-tabs-target="#grup" type="button" role="tab" aria-controls="grup" aria-selected="false">Sesi Grup</button>
            </li>
            <li role="presentation">
              <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="saya-tab" data-tabs-target="#saya" type="button" role="tab" aria-controls="saya" aria-selected="false">Jadwal Saya</button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <!--Profile-->
          <div class="flex flex-row justify-between rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="p-4">
              <div class="flex flex-col">
                <div class="flex flex-row justify-between">
                  <h1 class="text-sky-950 text-lg font-bold leading-normal">Profile Insights</h1>
                  <a class="text-teal-700 text-sm leading-normal">How do i get these?</a>
                </div>
                <div class="flex flex-row gap-3">
                  <CardProfile/>
                  <CardProfile/>
                </div>
              </div>
              <div class="flex flex-col mt-14">
                <h1 class="text-sky-950 text-lg font-bold leading-normal">Background</h1>
              </div>
            </div>
            <!-- Bagian Kanan -->
            <div class=" flex flex-col p-4">
              <div class="p-6 flex rounded-2xl shadow flex-col">
                <div class="flex flex-row justify-between">
                  <h1 class="text-sky-950 text-2xl font-bold leading-7">Statistik Konsultasi</h1>
                  <button class="text-teal-700 text-sm font-normal leading-normal flex flex-row">Selengkapnya <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M13.6478 5.66663L8.98112 10.3333L4.31445 5.66663" stroke="#077F7F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span></button>
                </div>
                <div class="flex flex-row">
                  <div class="flex flex-row gap-2 m-4">
                    <div class="bg-sky-100 w-11 h-11 flex justify-center items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.2311 2.71764C17.306 1.57646 19.6383 0.985092 22.0062 0.999779C22.5561 1.00319 23 1.4499 23 1.99976C23 4.81006 22.2117 9.70747 17.1477 13.4164C17.2329 13.774 17.3298 14.2446 17.3968 14.7647C17.47 15.3321 17.5111 15.9852 17.4514 16.6279C17.3924 17.2619 17.2288 17.9597 16.8321 18.5547L16.8312 18.556C16.1523 19.5709 14.8718 20.1594 13.9773 20.4838C13.4966 20.6582 13.0525 20.7818 12.7294 20.862C12.4858 20.9224 12.3071 20.9591 12.2261 20.9749C11.9179 21.0335 11.6038 20.9719 11.3592 20.7677C11.1316 20.5777 11 20.2965 11 20V15.414L8.58605 13H4.00001C3.70353 13 3.42235 12.8685 3.23235 12.6409C3.04235 12.4133 2.96314 12.1131 3.01609 11.8214C3.04981 11.6365 3.09278 11.453 3.13801 11.2707C3.21817 10.9475 3.34184 10.5035 3.51619 10.0228C3.84065 9.12829 4.42907 7.84779 5.44398 7.16885L5.44531 7.16797C6.0403 6.77131 6.73809 6.60762 7.37215 6.54869C8.01483 6.48895 8.66795 6.5301 9.23533 6.60322C9.76085 6.67095 10.2359 6.76921 10.5948 6.85508C11.8057 5.1461 13.3899 3.73032 15.2311 2.71764Z" fill="#17C2FF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0031 14.9883C5.21994 14.9641 4.45542 15.2299 3.85615 15.7346C3.32938 16.1774 2.94259 16.7872 2.65611 17.3738C2.36392 17.9719 2.14188 18.6175 1.97602 19.1973C1.80925 19.7804 1.69334 20.3181 1.61908 20.7092C1.58181 20.9055 1.5547 21.0666 1.53671 21.1801C1.52694 21.2417 1.51778 21.3035 1.50905 21.3653L1.50883 21.3669C1.46754 21.6758 1.57252 21.9866 1.79285 22.2069C2.01318 22.4273 2.32448 22.5322 2.63332 22.4909C2.69552 22.4821 2.75765 22.4729 2.81969 22.4631C2.93322 22.4451 3.0943 22.418 3.29056 22.3807C3.6817 22.3065 4.21944 22.1905 4.80247 22.0238C5.38232 21.8579 6.02785 21.6359 6.62604 21.3437C7.21235 21.0573 7.82202 20.6707 8.26469 20.1442C9.28572 18.935 9.30096 17.0516 8.11255 15.8782L8.1004 15.8664C7.53341 15.3253 6.78653 15.0126 6.0031 14.9883Z" fill="#17C2FF"/>
                      </svg>
                    </div>
                    <div class="flex-col">
                      <p class="text-sky-950 text-lg font-medium leading-normal">810 Menit</p>
                      <p class="text-slate-500 text-sm font-normal leading-[18px]">Total waktu konsultasi</p>
                    </div>
                  </div>
                  <div class="flex flex-row gap-2 m-4">
                    <div class="bg-sky-100 w-11 h-11 flex justify-center items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15.2311 2.71764C17.306 1.57646 19.6383 0.985092 22.0062 0.999779C22.5561 1.00319 23 1.4499 23 1.99976C23 4.81006 22.2117 9.70747 17.1477 13.4164C17.2329 13.774 17.3298 14.2446 17.3968 14.7647C17.47 15.3321 17.5111 15.9852 17.4514 16.6279C17.3924 17.2619 17.2288 17.9597 16.8321 18.5547L16.8312 18.556C16.1523 19.5709 14.8718 20.1594 13.9773 20.4838C13.4966 20.6582 13.0525 20.7818 12.7294 20.862C12.4858 20.9224 12.3071 20.9591 12.2261 20.9749C11.9179 21.0335 11.6038 20.9719 11.3592 20.7677C11.1316 20.5777 11 20.2965 11 20V15.414L8.58605 13H4.00001C3.70353 13 3.42235 12.8685 3.23235 12.6409C3.04235 12.4133 2.96314 12.1131 3.01609 11.8214C3.04981 11.6365 3.09278 11.453 3.13801 11.2707C3.21817 10.9475 3.34184 10.5035 3.51619 10.0228C3.84065 9.12829 4.42907 7.84779 5.44398 7.16885L5.44531 7.16797C6.0403 6.77131 6.73809 6.60762 7.37215 6.54869C8.01483 6.48895 8.66795 6.5301 9.23533 6.60322C9.76085 6.67095 10.2359 6.76921 10.5948 6.85508C11.8057 5.1461 13.3899 3.73032 15.2311 2.71764Z" fill="#17C2FF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0031 14.9883C5.21994 14.9641 4.45542 15.2299 3.85615 15.7346C3.32938 16.1774 2.94259 16.7872 2.65611 17.3738C2.36392 17.9719 2.14188 18.6175 1.97602 19.1973C1.80925 19.7804 1.69334 20.3181 1.61908 20.7092C1.58181 20.9055 1.5547 21.0666 1.53671 21.1801C1.52694 21.2417 1.51778 21.3035 1.50905 21.3653L1.50883 21.3669C1.46754 21.6758 1.57252 21.9866 1.79285 22.2069C2.01318 22.4273 2.32448 22.5322 2.63332 22.4909C2.69552 22.4821 2.75765 22.4729 2.81969 22.4631C2.93322 22.4451 3.0943 22.418 3.29056 22.3807C3.6817 22.3065 4.21944 22.1905 4.80247 22.0238C5.38232 21.8579 6.02785 21.6359 6.62604 21.3437C7.21235 21.0573 7.82202 20.6707 8.26469 20.1442C9.28572 18.935 9.30096 17.0516 8.11255 15.8782L8.1004 15.8664C7.53341 15.3253 6.78653 15.0126 6.0031 14.9883Z" fill="#17C2FF"/>
                      </svg>
                    </div>
                    <div class="flex-col min-w-[100px]">
                      <p class="text-sky-950 text-lg font-medium leading-normal">18</p>
                      <p class="text-slate-500 text-sm font-normal leading-[18px]">Sesi dilewati</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border border-gray-200 rounded-2xl p-6 flex flex-col mt-6">
                <h1 class="text-sky-950 text-lg font-bold leading-normal">Sesi yang tersedia</h1>
                <p class="text-slate-500 text-sm font-normal leading-[18px] mb-6">Berikut adalah sesi konsultasi yang tersedia</p>
                <div class="border border-gray-100 flex flex-row justify-between rounded-lg mb-2 p-3">
                  <div class="flex flex-col">
                    <h1 class="text-sky-950 text-sm font-bold leading-normal">Sesi Konsultasi</h1>
                    <p class="text-slate-500 text-xs font-normal leading-none">60 minutes</p>
                  </div>
                  <button data-modal-target="static-modal" data-modal-toggle="static-modal" class="bg-[#2E584E] px-5 py-2 rounded-lg text-white text-base font-bold leading-normal">Booking</button>
                </div>
                <div class="border border-gray-100 flex flex-row justify-between rounded-lg p-3">
                  <div class="flex flex-col">
                    <h1 class="text-sky-950 text-sm font-bold leading-normal">Sesi Grup</h1>
                    <p class="text-slate-500 text-xs font-normal leading-none">60 minutes</p>
                  </div>
                  <button class="bg-[#2E584E] px-5 py-2 opacity-20 rounded-lg text-white text-base font-bold leading-normal">Booking</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Penilaian -->
          <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="penilaian" role="tabpanel" aria-labelledby="penilaian-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
          </div>
          <!-- Sesi Grup -->
          <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="grup" role="tabpanel" aria-labelledby="grup-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
          </div>
          <!-- Sesi Saya -->
          <div class="flex flex-col px-20 w-screen rounded-lg dark:bg-gray-800" id="saya" role="tabpanel" aria-labelledby="saya-tab">
            <div class="p-6 rounded-xl border border-gray-200 w-full">
              <h1 class="text-sky-950 text-lg font-bold leading-normal">Jadwal Saya</h1>
              <p class="text-slate-500 text-sm font-normal leading-[18px]">Berikut adalah jadwal konsultasi yang telah kamu booking</p>
              <CardSaya />
            </div>
          </div>
        </div>
      </div>
      <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full flex flex-row bg-white rounded-xl">
          <div class="flex flex-col w-full max-w-[200px] border-r border-black border-opacity-20 rounded-br-3xl p-6">
            <div class="flex flex-row gap-5 w-full mb-8">
              <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" :src="ahli.photo" alt="">
              <div class="flex flex-col border-b border-black border-opacity-20">
                <h1 class="text-zinc-800 text-base font-medium leading-normal">{{ ahli.name }}</h1>
                <p class="text-zinc-800 text-xs font-medium leading-normal">{{ ahli.occupation }}</p>
              </div>
            </div>
            <div>
              <h1 class="text-zinc-800 mb-2 text-xl font-bold leading-normal">Sesi Konsultasi</h1>
              <div class="mb-2">
                <p class="text-stone-500 text-xs font-normal leading-normal">Durasi Sesi</p>
                <p class="text-[#2E584E] text-sm font-medium leading-normal">60 Menit</p>
              </div>
              <div>
                <p class="text-stone-500 text-xs font-normal leading-normal">Tentang</p>
                <p class="text-[#2E584E] text-sm font-medium leading-normal">Konsultasi Mental Health</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full p-6">
            <CarouselBook />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>