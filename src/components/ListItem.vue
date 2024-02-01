<template>
  <div
    class="min-w-[438px] flex h-[336px] rounded-r-lg bg-white hover:animate-[wiggle_1s_ease-in-out_infinite]"
  >
    <div
      v-if="images.length === 2"
      class="w-full flex flex-col justify-between"
    >
      <img
        :src="images[0]"
        :alt="item.title"
        width="183"
        height="173"
        class="min-w-[183px] rounded-tl-lg"
      />
      <img
        :src="images[1]"
        :alt="item.title"
        width="183.5"
        height="160"
        class="min-w-[183.5px] rounded-bl-lg"
      />
    </div>
    <img
      v-else
      :src="images[0]"
      :alt="item.title"
      width="183"
      height="336"
      class="w-[183px] rounded-l-lg"
    />
    <div class="pt-40 pr-30 pl-34">
      <h4 class="font-poppins font-bold mb-12 text-24">{{ item.title }}</h4>
      <div class="wrapper" v-html="item.content" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.wrapper p:first-of-type {
  @apply mb-6;
}

.wrapper p,
li {
  @apply font-nunito-sans font-medium text-15 text-charcoal;
}

.wrapper ul {
  @apply mb-12;
}

.wrapper li {
  @apply relative ml-12 font-nunito-sans font-medium text-15 text-charcoal before:content-[''] before:absolute before:-left-12 before:top-[9px] before:w-[6px] before:h-[6px] before:bg-brown before:rounded-full;
}
</style>
