<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

const menuOpen = ref(false);
</script>

<template>
  <header>
    <nav class="flex items-center justify-between md:px-12 px-5 py-4 shadow-md">
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="logo" class="h-10" />
      </RouterLink>

      <!-- Bouton Menu Hamburger -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-black-tango hover:text-red-tango transition-colors duration-300 ease-in-out focus:outline-none"
        aria-label="Toggle menu">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Menu Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <RouterLink to="/" class="font-bold text-black-tango hover:text-red-tango transition-colors duration-300 ease-in-out">
          Accueil
        </RouterLink>

        <RouterLink to="/about" class="font-bold text-black-tango hover:text-red-tango transition-colors duration-300 ease-in-out">
          Qui sommes-nous ?
        </RouterLink>

        <a href="https://club.votredomaine.com" target="_blank" rel="noopener noreferrer"
          class="px-4 py-2 bg-black-tango text-white-tango rounded-4xl font-bold flex items-center gap-2
                  hover:bg-red-tango transition-colors duration-300 ease-in-out">
          <img src="@/assets/icons/kanban.svg" alt="kanban picto" class="h-4" />
          Espace Club
        </a>
      </div>

      <!-- Menu Mobile -->
      <div
        v-bind:class="menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'"
        class="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4 transition-all duration-300 ease-in-out z-30">
        <RouterLink to="/" class="font-bold text-black-tango hover:text-red-tango transition-colors duration-300 ease-in-out">
          Accueil
        </RouterLink>

        <RouterLink to="/about" class="font-bold text-black-tango hover:text-red-tango transition-colors duration-300 ease-in-out">
          Qui sommes-nous ?
        </RouterLink>

        <a href="https://club.votredomaine.com" target="_blank" rel="noopener noreferrer"
          class="px-4 py-2 bg-black-tango text-white-tango rounded-4xl font-bold flex items-center gap-2
                  hover:bg-red-tango transition-colors duration-300 ease-in-out">
          <img src="@/assets/icons/kanban.svg" alt="kanban picto" class="h-4" />
          Espace Club
        </a>
      </div>
    </nav>
  </header>

  <RouterView/>
</template>





