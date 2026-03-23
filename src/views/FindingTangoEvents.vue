<template>
  <!-- First section  -->
  <section class="flex flex-col-reverse md:flex-row h-auto md:h-150 pl-10">
    <div class="flex-1 flex flex-col mx-10 items-end md:pt-10">
      <div class="text-left">
        <h1 class="text-3xl md:text-5xl text-red-tango font-bold font-fonseca pt-5">Trouvez des evenements de tango !</h1>
        <h2 class="text-xl md:text-3xl text-black-tango font-fonseca pl-1">Le tout, pres de chez vous !</h2>

        <p class="text-black pt-5 md:pt-10 mr-5 md:text-xl max-w-150"> Lorem ipsum dolor sit amet consectetur. Varius nec integer nam id quam tristique nec eu non. Lacus posuere ut amet est pellentesque. Purus sed vitae convallis fringilla tempor aliquam. Vulputate accumsan pellentesque diam bibendum cursus rhoncus ipsum. Eget vel cursus magna nisi congue in nisi aliquet elit. Nunc egestas habitasse platea sed volutpat sociis in id. Elementum blandit imperdiet porttitor sed quis etiam tempor consectetur.</p>
        <p class="text-black pt-3 md:pt-5 mr-5 md:text-xl max-w-150"> Lorem ipsum dolor sit amet consectetur. Varius nec integer nam id quam tristique nec eu non. Lacus posuere ut amet est pellentesque. </p>

      </div>

    </div>

    <!-- Image -->
    <div class="flex-1 relative flex items-center justify-center">
      <img src="" alt="Image appli Tango Journey liste des events" class="max-w-xs md:max-w-lg z-20 w-130 h-30 md:h-50  rounded-4xl">
      <!-- Gradient -->
      <div class="absolute top-0 right-0 w-2/2 h-full gradient-circle "></div>

    </div>
    

  </section>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";

  onMounted(() => {
    document.title = "Tango Journey - Trouver des événements tango";
  });
</script>
