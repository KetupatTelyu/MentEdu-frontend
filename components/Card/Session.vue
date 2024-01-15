<script setup>
defineProps(['ahli'])
</script>

<template>
  <NuxtLink :to="'/konsultan/' + ahli.id">
    <div class="p-2 border border-gray-100 rounded-2xl flex-col justify-center items-start inline-flex">
      <div class="relative card-img w-[280px] h-full rounded-lg">
        <img :alt="ahli.name" :src="ahli.photo"/>
        <div class="absolute flex flex-row items-center justify-center left-2 bottom-3 bg-[#2E584E] text-[#C3F499] p-2 rounded-lg" v-if="ahli.isAvailable">
          <span class="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.66668 1.33337L2 9.33336H8L7.33332 14.6667L14 6.66672H8L8.66668 1.33337Z" stroke="#C3F499" stroke-width="0.872728" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span><p class="text-xs font-bold leading-none">Tersedia Sekarang</p>
        </div>
      </div>
      <p class="text-neutral-900 text-base font-bold leading-normal mt-2"> {{ ahli.name }} </p>
      <p class="text-gray-700 mt-1 text-sm font-normal leading-[18px] flex flex-row justify-center items-center"><span class="mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
          <path d="M14.334 5.83337H3.66731C2.93093 5.83337 2.33398 6.57956 2.33398 7.50003V15.8333C2.33398 16.7538 2.93093 17.5 3.66731 17.5H14.334C15.0704 17.5 15.6674 16.7538 15.6674 15.8333V7.50003C15.6674 6.57956 15.0704 5.83337 14.334 5.83337Z" stroke="#384853" stroke-width="1.41176" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.6674 17.5V4.16667C11.6674 3.72464 11.5268 3.30072 11.2768 2.98815C11.0267 2.6756 10.6876 2.5 10.334 2.5H7.66731C7.31369 2.5 6.97456 2.6756 6.72451 2.98815C6.47446 3.30072 6.33398 3.72464 6.33398 4.16667V17.5" stroke="#384853" stroke-width="1.41176" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>{{ ahli.occupation }} di {{ ahli.company }}</p>
      <p v-if="ahli.session == 0" class="text-gray-700 mt-1 text-sm font-normal leading-[18px] flex flex-row justify-center items-center"><span class="mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="#FFC200" stroke="#FFC200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>Konsultan Baru</p>
      <p v-else class="text-gray-700 mt-1 text-sm font-normal leading-[18px] flex flex-row justify-center items-center"><span class="mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <mask id="mask0_34_14271" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
            <path d="M16 0H0V16H16V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_34_14271)">
            <path d="M4.06356 7.4859C4.02212 7.21886 4.00063 6.94528 4.00063 6.66671C4.00063 3.72119 6.40415 1.33337 9.36905 1.33337C12.3339 1.33337 14.7375 3.72119 14.7375 6.66671C14.7375 7.33209 14.6148 7.96901 14.3907 8.55638C14.3442 8.67837 14.3209 8.73936 14.3104 8.78698C14.2999 8.83416 14.2959 8.86736 14.2947 8.91567C14.2936 8.96444 14.3002 9.01816 14.3134 9.12559L14.5818 11.3057C14.6109 11.5417 14.6254 11.6597 14.5861 11.7455C14.5517 11.8207 14.4906 11.8804 14.4147 11.913C14.328 11.9503 14.2104 11.9331 13.9751 11.8986L11.8516 11.5873C11.7407 11.5711 11.6853 11.5629 11.6348 11.5632C11.5849 11.5635 11.5503 11.5672 11.5014 11.5775C11.452 11.5879 11.3889 11.6115 11.2626 11.6588C10.6738 11.8794 10.0356 12 9.36905 12C9.09025 12 8.81643 11.9789 8.54909 11.9382M5.08837 14.6667C7.06497 14.6667 8.66732 13.0251 8.66732 11C8.66732 8.975 7.06497 7.33337 5.08837 7.33337C3.11177 7.33337 1.50942 8.975 1.50942 11C1.50942 11.4071 1.57417 11.7987 1.69368 12.1645C1.7442 12.3192 1.76946 12.3965 1.77776 12.4493C1.78641 12.5045 1.78793 12.5355 1.7847 12.5912C1.78162 12.6446 1.76826 12.7049 1.74155 12.8256L1.33398 14.6667L3.33052 14.394C3.43949 14.3792 3.49398 14.3717 3.54156 14.372C3.59166 14.3724 3.61825 14.3751 3.66739 14.3849C3.71405 14.3942 3.78342 14.4187 3.92216 14.4676C4.28771 14.5967 4.68006 14.6667 5.08837 14.6667Z" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </span>{{ ahli.session }} sesi<span class="text-slate-500"> ({{ ahli.reviewsTotal }} reviews)</span></p>
      <div class="flex flex-row bg-neutral-50 p-4 w-full justify-between rounded-lg mt-6">
        <div class="flex flex-col">
          <p class="text-xs text-slate-500 font-normal leading-none">Pengalaman</p>
          <p class="text-gray-700 text-md font-bold leading-[18px]">{{ahli.experienceYear}} tahun</p>
        </div>
        <div class="flex flex-col">
          <p class="text-xs text-slate-500 font-normal leading-none">Rata-Rata Kehadiran</p>
          <p class="text-gray-700 text-md font-bold leading-[18px]">{{ahli.avgAttendance}}%</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>