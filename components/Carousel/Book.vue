<script setup lang="ts">
defineProps(['jadwalSaya'])

let page = ref(1)
const konsul_date = ref('')
const waktuTersedia = ref(['10:00', '12:00', '14:00', '16:00'])
const waktuTerpilih = ref('')
let refresh

if(process.client){
  refresh = async () => {
    window.location.reload()
  }
}
</script>

<template>


  <div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="ease-in-out flex flex-col justify-between" data-carousel-item="active">
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="flex flex-col">
              <p class="text-neutral-500 text-xs font-normal">Langkah 1 dari 2</p>
              <h1 class="text-neutral-800 text-xl font-bold">Pilih Waktu dan Tanggal</h1>
              <h2 class="text-neutral-800 text-base font-normal">Sesuai bagian waktu anda</h2>
            </div>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
            <input datepicker v-model="konsul_date" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
          </div>
        </div>
        <button type="button" class="text-[#2E584E] py-3 w-full border rounded-full border-[#2E584E]" data-carousel-next>
          Lanjut
        </button>
      </div>
      <!-- Item 2 -->
      <div class="hidden ease-in-out" data-carousel-item>
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="flex flex-col">
              <p class="text-neutral-500 text-xs font-normal">Langkah 2 dari 2</p>
              <h1 class="text-neutral-800 text-xl font-bold">Pilih Jadwal Konsultasi</h1>
              <h2 class="text-neutral-800 text-base font-normal">Sesuai bagian waktu anda</h2>
            </div>
            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <p class="pb-1 border-b mb-5">Slot Waktu Tersedia</p>
          <div class="flex flex-row">
            <RadioBook v-model="waktuTerpilih" class="col-2 ml-2" v-for="waktu in waktuTersedia" :waktu="waktu" />
          </div>
        </div>
        <button class="mt-5 text-[#2E584E] py-3 w-full border rounded-full border-[#2E584E]" type="button" @click="refresh">
          Lanjut
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>