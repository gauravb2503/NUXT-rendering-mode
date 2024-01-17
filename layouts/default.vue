<!-- components/Navbar.vue -->
<template>
    <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="hidden md:flex space-x-4">
          <nuxt-link to="/" class="text-white hover:text-gray-300">Client Side Rendering</nuxt-link>
          <nuxt-link to="/server" class="text-white hover:text-gray-300">Server Side Rendering</nuxt-link>
        </div>
      </div>
    </nav>
    <slot />
  </template>
  
  <script>
  </script>
  