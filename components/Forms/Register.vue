<template>
  <div>
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold leading-8 text-gray-900">Daftarkan Akunmu</h1>
      <p class="text-gray-500 text-base font-normal leading-normal">
        Selamat datang kembali! Isi formulir daftar dibawah <br />
        untuk melanjutkan
      </p>
    </div>
    <form class="max-w-sm mx-auto" @submit.prevent="register()">
      <div class="mb-5">
        <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email</label
        >
        <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Masukkan email anda"
            v-model="form.email"
            required
        />
      </div>
      <div class="mb-5">
        <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
        >
        <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="form.password"
            required
        />
      </div>
      <div class="mb-5">
        <label for="name"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Nama Panjang</label>
        <input
            type="text"
            name="name"
            id="name"
            placeholder="Masukkan nama anda"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="form.name"
            required
        />
      </div>
      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Foto Profil</label>
        <input @change="handleFileChange" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
      </div>
      <div class="mb-5">
        <label for="dob"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Tanggal Lahir</label>
        <input
            datepicker
            type="text"
            name="dob"
            id="dob"
            datepicker-format="dd/mm/yyyy"
            placeholder="Masukkan tanggal lahir anda"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="form.dob"
            required
        />
      </div>
      <div class="mb-5">
        <label for="phone-input"
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Nomor Telepon</label>
        <input
            type="text"
            name="phone-input"
            id="phone-input"
            placeholder="Masukkan nomor telepon anda"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="form.phone_number"
            required
        />
      </div>
      <button
          type="submit"
          class="text-[#2E584E] mb-4 bg-[#C3F499] hover:bg-[#74f18f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold leading-normal rounded-full text-base w-full sm:w-full px-5 py-2.5 text-center"
      >
        Daftar
      </button>
      <button
          type="submit"
          class="text-[#2E584E] flex justify-center items-center bg-white border hover:bg-[#cccccc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold leading-normal rounded-full text-base w-full sm:w-full px-5 py-2.5 text-center"
      >
        <span class="pr-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
          >
            <g clip-path="url(#clip0_89_1246)">
              <path
                  d="M23.7663 12.2765C23.7663 11.4608 23.7001 10.6406 23.559 9.83813H12.2402V14.4591H18.722C18.453 15.9495 17.5888 17.2679 16.3233 18.1056V21.104H20.1903C22.4611 19.014 23.7663 15.9274 23.7663 12.2765Z"
                  fill="#4285F4"
              />
              <path
                  d="M12.2391 24.0008C15.4756 24.0008 18.205 22.9382 20.1936 21.1039L16.3266 18.1055C15.2507 18.8375 13.8618 19.252 12.2435 19.252C9.11291 19.252 6.45849 17.1399 5.50607 14.3003H1.51562V17.3912C3.55274 21.4434 7.70192 24.0008 12.2391 24.0008V24.0008Z"
                  fill="#34A853"
              />
              <path
                  d="M5.50277 14.3002C5.00011 12.8099 5.00011 11.196 5.50277 9.70569V6.61475H1.51674C-0.185266 10.0055 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3002V14.3002Z"
                  fill="#FBBC04"
              />
              <path
                  d="M12.2391 4.74966C13.9499 4.7232 15.6034 5.36697 16.8425 6.54867L20.2685 3.12262C18.0991 1.0855 15.2198 -0.034466 12.2391 0.000808666C7.70192 0.000808666 3.55274 2.55822 1.51562 6.61481L5.50166 9.70575C6.44967 6.86173 9.1085 4.74966 12.2391 4.74966V4.74966Z"
                  fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_89_1246">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        Daftar dengan Google
      </button>
    </form>
    <p class="text-center mt-8">Sudah punya akun? <NuxtLink class="text-[#2E584E]" to="login">Masuk Disini</NuxtLink> </p>
  </div>
</template>
<script setup lang="ts">
import {initFlowbite} from "flowbite";

onMounted(() => {
  initFlowbite()
})

const form = ref({
  email : "",
  password : "",
  name : "",
  photo : null,
  dob : "",
  phone_number : ""
});

let selectedFile = ref(null)

function handleFileChange(event) {
  selectedFile = event.target.files[0];
  console.log(selectedFile);
  return selectedFile
}

const register = async () => {
  const fd = new FormData()
  fd.append('image', selectedFile)
  const response: any = await $fetch('/api/register', fd, {
    baseURL: useRuntimeConfig().public.API_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: {
      email : form.value.email,
      password : form.value.password,
      name : form.value.name,
      photo : await handleFileChange(),
      dob : form.value.dob,
      phone_number : form.value.phone_number
    },
  })
  console.log(response)
  navigateTo('/login')
  window.location.reload()
}
//
// watchEffect(async () => {
//   if (user.value) {
//     await navigateTo('/')
//   }
// });
//
// const signUp = async () => {
//   if (!name.value) return authError.value = 'First name required';
//   if (!lastname.value) return authError.value = 'Last name required';
//   loading.value = true
//   const { error }  = await client.auth.signUp({
//     email: email.value,
//     password: password.value,
//     options: {
//       data: {
//         first_name: name.value,
//         last_name: lastname.value,
//         company: company.value
//       }
//     }
//   })
//   if (error) {
//     loading.value = false
//     authError.value = 'Failed to fetch'
//   }
// }
//
// const clearError = () => {
//   authError.value = ''
// }
</script>
