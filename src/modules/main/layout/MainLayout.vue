<template>
  <div class="bg-black py-6 px-5 lg:px-24 lg:py-12 w-full">
    <img
      src="https://www.kuepa.com/logo-kuepa-01-ce02783ec8555816498a749b2c879fb8.png"
      class="w-36"
    />
  </div>
  <div
    class="bg-black md:bg-gradient-to-t from-black from-30% via-neutral-900 via-50% to-neutral-800 to-90% h-full text-white text-xl p-6 md:p-4"
  >
    <div
      class="flex justify-center flex-col md:mt-5 md:w-4/5 md:p-5 lg:p-16 m-auto bg-black rounded-lg"
    >
      <router-view />
    </div>
    <p class="text-base md:text-lg my-6">
      <span class="text-orange-600"
        >Powered by <span class="text-white">Jonathan Tellez</span></span
      >
    </p>
  </div>
</template>
