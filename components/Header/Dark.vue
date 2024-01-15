<template>
  <nav
    class="bg-transparent fixed w-full z-20 top-0 start-0 mt-3"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="/public"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 hidden"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap leading-7 text-white"
          >MentEdu</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <!--button
            v-if="loggedIn"
            @click="signOut"
            type="button"
            class="text-[#2E584E] bg-[#C3F499] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[18px] font-medium leading-normal rounded-full border-4 border-[#ffffffa0] px-6 py-2 text-center"
        >
          Log Out
        </button-->
        <NuxtLink to="/login">
          <button
              type="button"
              class="text-[#2E584E] bg-[#C3F499] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[18px] font-medium leading-normal rounded-full border-4 border-[#ffffffa0] px-6 py-2 text-center"
          >
              Mulai Sekarang
          </button>
        </NuxtLink>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:py-3 md:px-6 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#ffffff15] md:rounded-full dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 leading-snug text-white bg-blue-700 rounded md:bg-transparent md:text-[#C3F499] md:p-0 md:dark:text-white"
              aria-current="page"
              >Beranda</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 leading-snug text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3F499] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Tentang Kami</a
            >
          </li>
          <li>
            <NuxtLink
              to="/main"
              class="block py-2 px-3 leading-snug text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3F499] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Konsultasi & Pelatihan</NuxtLink
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 leading-snug text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3F499] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Komunitas</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

// const { status, signOut } = useAuth()

// const loggedIn = computed(() => status.value === 'authenticated')

// const client = useSupabaseClient();
// const user = useSupabaseUser();
const loading = ref(false);

// Logout function
// const logout = async () => {
//   loading.value = true;
//   const { error } = await client.auth.signOut();
//   if (error) {
//     loading.value = false;
//     return alert("Something went wrong!");
//   }
// };
</script>
