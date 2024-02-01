<template>
  <main class="bg-offWhite py-[108px]">
    <div class="w-[1375px] mx-auto">
      <h1
        class="mb-80 font-poppins text-56 text-center font-bold text-darkBlue tracking-[-0.56px] drop-shadow-xs"
      >
        We make creative media <br />
        that <span class="font-bold text-blue">adds value</span>
      </h1>
      <div class="grid grid-rows-2 grid-cols-3 gap-30 mb-80">
        <ListItem
          v-for="item in items"
          :item="item"
          :images="item.images"
          :key="item.title"
        />
      </div>
      <div
        class="w-[315px] h-[60px] rounded-12 cursor-pointer bg-darkBlue drop-shadow-xs flex mx-auto justify-center items-center font-poppins font-bold text-17 tracking-[0.2%] text-white uppercase transition-all ease-in-out duration-200 hover:bg-opacity-80 hover:drop-shadow-none"
      >
        Get STARTED
      </div>
    </div>
  </main>
</template>

<script setup>
import ListItem from "@/components/ListItem.vue";
import { items } from "@/assets/content";
</script>
