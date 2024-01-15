<template>
  <section
    class="bg-center bg-no-repeat bg-[url('/bg/hero-bg.jpg')] bg-gray-700 bg-cover md:h-screen flex-row flex"
  >
    <!-- Bagian Kiri -->
    <div class="px-4 pl-16 mx-auto text-left py-24 lg:py-56">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-[84px] text-white md:text-5xl lg:text-6xl"
      >
        Ketahui <span class="text-[#C3F499]">Masalah <br> Mental</span> Anak Anda
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-300 lg:text-xl pr-20 leading-8"
      >
      Mendorong orang tua memahami secara mendalam keadaan emosional anak dan membina lingkungan kesehatan mental adalah kunci perkembangan anak.  Orang tua berperan penting dalam membentuk pertumbuhan anak.
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:space-y-0"
      >
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#2E584E] rounded-full bg-[#C3F499] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          Mulai Sekarang
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-normal text-center text-[#C3F499] rounded-full border border-[#C3F499] hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
    </div>
    <!-- Bagian Kanan -->
    <div class="h-full w-full flex justify-end items-end">
      <NuxtImg src="/img-hero.svg" class="h-[750px] absolute right-0 -bottom-8 border-blue-600 p-0 m-0" alt=""/>
    </div>
  </section>
</template>
