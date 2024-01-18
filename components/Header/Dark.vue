<template>
  <nav
    class="bg-transparent fixed w-full z-20 top-0 start-0 mt-3"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        href="/"
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
        <button
            v-if="auth"
            @click="logout()"
            type="button"
            class="text-[#2E584E] bg-[#C3F499] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[18px] font-medium leading-normal rounded-full border-4 border-[#ffffffa0] px-6 py-2 text-center"
        >
          Log Out
        </button>
        <a v-else href="/login">
          <button
              type="button"
              class="text-[#2E584E] bg-[#C3F499] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[18px] font-medium leading-normal rounded-full border-4 border-[#ffffffa0] px-6 py-2 text-center"
          >
              Mulai Sekarang
          </button>
        </a>
        <button id="burger"
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
          class="flex flex-col p-4 md:py-3 md:px-6 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#ffffff15] md:rounded-full"
        >
          <li>
            <a
              href="/#main"
              class="block py-2 px-3 leading-snug text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-white"
              aria-current="page"
              >Beranda</a
            >
          </li>
          <li>
            <a
              href="/#about"
              class="block py-2 px-3 leading-snug text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3F499] md:p-0"
              >Tentang Kami</a
            >
          </li>
          <li>
            <a
              href="/main"
              class="block py-2 px-3 leading-snug text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3F499] md:p-0"
              >Konsultasi & Pelatihan</a
            >
          </li>
          <li>
            <a
              href="/main"
              class="block py-2 px-3 leading-snug text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C3F499] md:p-0"
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
import { Collapse } from "flowbite";

let auth
let logout
if (process.client) {
  auth = localStorage.getItem('Auth')
  logout = async () => {
    localStorage.removeItem('Auth')
    window.location.reload()
  };
}
console.log(auth)
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  // // set the target element that will be collapsed or expanded (eg. navbar menu)
  // const $targetEl = document.getElementById('navbar-sticky');
  // // optionally set a trigger element (eg. a button, hamburger icon)
  // const $triggerEl = document.getElementById('burger');
  // // optional options with default values and callback functions
  // const options = {
  //   onCollapse: () => {
  //     console.log('element has been collapsed')
  //   },
  //   onExpand: () => {
  //     console.log('element has been expanded')
  //   },
  //   onToggle: () => {
  //     console.log('element has been toggled')
  //   }
  // };
  // if ($targetEl) {
  //   /*
  //   * targetEl: required
  //   * options: optional
  //   */
  //   const collapse = new Collapse($targetEl, $triggerEl, options);
  //   // show the target element
  //   collapse.expand();
  // }
})


</script>
