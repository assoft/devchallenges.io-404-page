<template>
  <div class="container mx-auto p-6 flex flex-col space-y-8 min-h-screen">
    <h3
      class="text-2xl text-left monospace font-bold tracking-tighter text-app-gray-1"
    >
      404 NOT FOUND
    </h3>
    <div class="flex flex-1 space-y-8 items-center flex-wrap lg:space-x-12">
      <div class="flex-shrink-0 w-full lg:w-540px h-full md:h-448px lg:mb-0">
        <img
          src="./assets/Scarecrow.png"
          alt="Scarecrow"
          class="object-contain w-full h-full"
        />
      </div>
      <div class="flex-1 flex flex-col justify-center space-y-16">
        <h3
          class="message-title text-5xl md:text-6xl monospace font-bold text-app-gray-1"
        >
          I have bad news for you
        </h3>
        <p class="w-64 monospace text-app-gray-2">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <a
          href="#"
          class="inline-block p-6 w-56 text-center bg-app-gray-1 text-white monospace font-bold text-sm"
        >
          BACK TO HOMEPAGE
        </a>
      </div>
    </div>
    <div class="text-center">
      <span class="text-sm text-app-gray-1">Assoft@DevChallenges.io</span>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
.monospace {
  font-family: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, "Liberation Mono", "Courier New", monospace;
}

.message-title {
  line-height: 1.4 !important;
}
</style>
