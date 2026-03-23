<script setup lang="ts">
  import { onMounted } from "vue";

  onMounted(() => {
    document.title = "Tango Journey - Accueil";
  });
</script>

<template>

  <!-- First section  -->
  <section class="flex flex-col-reverse md:flex-row h-auto md:h-150">
    <div class="flex-1 flex flex-col items-end mx-5 md:pt-10">
      <div class="text-left">
        <h1 class="text-3xl md:text-5xl text-red-tango font-bold font-fonseca pt-5">TANGO JOURNEY</h1>
        <h2 class="text-xl md:text-3xl text-black-tango font-fonseca pl-1"> Le TANGO autrement</h2>

        <p class="text-black pt-5 md:pt-10 mr-5 md:text-xl max-w-150"> Lorem ipsum dolor sit amet consectetur. Varius nec integer nam id quam tristique nec eu non. Lacus posuere ut amet est pellentesque. Purus sed vitae convallis fringilla tempor aliquam. Vulputate accumsan pellentesque diam bibendum cursus rhoncus ipsum. Eget vel cursus magna nisi congue in nisi aliquet elit. Nunc egestas habitasse platea sed volutpat sociis in id. Elementum blandit imperdiet porttitor sed quis etiam tempor consectetur.</p>
        <p class="text-black pt-3 md:pt-5 mr-5 md:text-xl max-w-150"> Lorem ipsum dolor sit amet consectetur. Varius nec integer nam id quam tristique nec eu non. Lacus posuere ut amet est pellentesque. </p>

        <div class="flex max-w-150 mr-3 ">
          <a href="https://play.google.com/store" target="_blank">
            <img src="../assets/icons/DlGooglePlay.png" alt="Download Google Play" class="pt-10 pl-2">
          </a>

          <a href="https://apps.apple.com" target="_blank">
            <img src="../assets/icons/DlAppleStore.png" alt="Download Apple Store" class="pt-10 pl-5">
          </a>
        </div>

      </div>

    </div>

    <!-- Image -->
    <div class="flex-1 relative flex justify-center md:justify-start">
      <div class="relative w-full h-55 md:h-full overflow-hidden">
        <img src="../assets/TangoDuo.png" alt="Duo de danseurs de tango"
            class="max-w-sm md:max-w-lg mx-5 object-cover object-top w-full" />
      </div>

      <!-- Gradient -->
      <div class="absolute top-0 right-0 w-full h-full gradient-circle"></div>
    </div>

  </section>

  <!-- Second section  -->
  <section class="relative flex flex-col-reverse items-center md:flex-row h-auto md:h-150 pt-20 md:pt-30">
    <div class="flex-1 md:flex md:justify-end md:pr-15 z-20">
      <img src="../assets/SmartphonePlaceHolder.png" alt="Image de smartphone" class="max-w-xs pt-5 md:pb-17">
    </div>
    <div class="flex-1 flex flex-col pt-5 mr-5 ml-5 md:pr-50 md:mt-[-160px]">
      <h1 class="text-3xl md:text-4xl text-black font-fonseca max-w-100 font-bold">Apprenez le tango avec des pro</h1>
      <h3 class="text-xl md:text-2xl text-black-tango max-w-130">Tous nos tutos sont réalisés par des professeurs de tango professionnels avec plus de 10 ans d'expérience.</h3>
      <RouterLink to="/learningwithpros" class="text-red-tango hover:underline z-20">
        <p class="text-lg font-bold">→ EN SAVOIR PLUS</p>
      </RouterLink>
      <img src="../assets/TransparentLogoBG.png" alt="Logo de Tango Journey en transparent" class="absolute max-w-lg top-20 md:top-0 right-0 h-150 z-10">
    </div>

  </section>

  <!-- Inter-section : Statistics  -->
   <section class="flex items-center h-80 bg-background-tango">

    <section class="flex flex-col md:flex-row items-center w-full pb-5">

      <div class="flex-1 flex flex-col items-center pt-5">
        <div class="flex items-center">
          <img src="../assets/icons/Book.png" alt="logo livre" class="size-12 md:size-20">
          <h1 class="text-4xl md:text-7xl text-black-tango font-bold">15</h1>
        </div>
        <h2 class="text-3xl md:text-6xl text-black-tango">LEÇONS</h2>
      </div>

        <div class="flex-1 flex flex-col items-center pt-5">
          <div class="flex items-center">
            <img src="../assets/icons/Users.png" alt="logo utilisateurs" class="size-12 md:size-20">
            <h1 class="text-4xl md:text-7xl text-black-tango font-bold">10K</h1>
          </div>
          <h2 class="text-3xl md:text-6xl text-black-tango">UTILISATEURS</h2>
        </div>

      <div class="flex-1 flex flex-col items-center pt-5">
        <div class="flex items-center pr-3">
          <img src="../assets/icons/localisation.png" alt="logo localisation" class="size-12 md:size-20">
          <h1 class="text-4xl md:text-7xl text-black-tango font-bold">600</h1>
        </div>
        <h2 class="text-3xl md:text-6xl text-black-tango">CLUBS</h2>
      </div>

    </section>

   </section>


         <!-- Third section  -->
  <section class="relative flex flex-col items-center md:flex-row h-auto md:h-150 pt-15 md:pt-40">

    <div class="flex-1 flex flex-col pt-5 mr-5 ml-5 md:pl-50 md:mt-[-160px]">
      <h1 class="text-3xl md:text-4xl text-black font-fonseca pt-5 max-w-130 font-bold">Trouvez des evenements proche de vous</h1>
      <h3 class="text-xl md:text-2xl text-black-tango max-w-130">Nos clubs partenaires vous proposes chaque semaine des centaines d’événements tangos a travers la france retouvez les depuis notre application.</h3>
      <RouterLink to="/findingtangoevents" class="text-red-tango hover:underline z-20">
        <p class="text-lg font-bold">→ EN SAVOIR PLUS</p>
      </RouterLink>
      <img src="../assets/TransparentLogoBG.png" alt="Logo de Tango Journey en transparent" class="absolute max-w-lg top-40 md:top-0 left-0 h-150 -scale-x-100 z-10">
    </div>

    <div class="flex-1 md:flex md:justify-start md:pl-15 z-20">
      <img src="../assets/SmartphonePlaceHolder.png" alt="Image de smartphone" class="max-w-xs pt-5 md:pb-27">
    </div>

  </section>


    <!-- Inter-section : Are you a club ?  -->
  <section class="flex items-center justify-center h-80 bg-background-tango">

    <div class="flex flex-col items-center text-center">
      <h1 class="text-3xl md:text-5xl text-black font-bold pb-5 mx-5">VOUS ÊTES UN CLUB DE TANGO ARGENTIN ?</h1>
      <a href="https://fr.wikipedia.org/wiki/Tango_(danse)" class="px-4 py-2 bg-black-tango text-background-tango rounded-4xl font-bold gap-2 text-2xl w-80 text-xl md:text-2xl"><h3>DEVENEZ PARTENAIRE TANGO JOURNEY</h3></a>
    </div>

  </section>

    <!-- Fourth section  -->
  <section class="relative flex flex-col-reverse items-center md:flex-row h-auto md:h-150 pt-20 md:pt-30">
    <div class="flex-1 md:flex md:justify-end md:pr-15 z-20">
      <img src="../assets/SmartphonePlaceHolder.png" alt="Image de smartphone" class="max-w-xs pt-5 md:pb-17">
    </div>


    <div class="flex-1 flex flex-col pt-5 mr-5 ml-5 md:pr-50 md:mt-[-160px]">
      <h1 class="text-3xl md:text-4xl text-black font-fonseca max-w-100 font-bold">Trouvez des clubs pres de chez vous</h1>
      <h3 class="text-xl md:text-2xl text-black-tango max-w-130">Retouvez notre réseau de clubs partenaires directement dans l’application, contactez les rapidement pour devenir un danseur expert.</h3>
      <RouterLink to="/findingtangoclub" class="text-red-tango hover:underline z-20">
        <p class="text-lg font-bold">→ EN SAVOIR PLUS</p>
      </RouterLink>
      <img src="../assets/TransparentLogoBG.png" alt="Logo de Tango Journey en transparent" class="absolute max-w-lg top-20 md:top-0 right-0 h-150 z-10">
    </div>

  </section>

    <!-- Inter-section : Footer  -->
  <section class="flex items-center justify-center h-80 bg-background-tango">

    <div class="flex flex-col items-center text-center">
      <h1 class="text-3xl md:text-5xl text-black font-bold md:pb-10 pb-5 mx-5">Rejoignez Tango Journey dès aujourd'hui !</h1>

      <div class="flex max-w-150 mr-3 items-center justify-center">
          <a href="https://play.google.com/store" target="_blank">
            <img src="../assets/icons/DlGooglePlay.png" alt="Download Google Play" class="pl-2 size-10 md:size-15 w-33 md:w-47">
          </a>

          <a href="https://apps.apple.com" target="_blank">
            <img src="../assets/icons/DlAppleStore.png" alt="Download Apple Store" class="pl-5 size-10 md:size-15 w-35 md:w-52">
          </a>
      </div>

      <h3 class="text-sm md:text-l text-black font-bold pt-7 mx-5 opacity-30 text-bold">COPYRIGHT © 2025 FURRBALL DEVELOPPMENT </h3>


    </div>

  </section>



</template>
