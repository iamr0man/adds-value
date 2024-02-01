<template>
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
</template>

<script setup>
import ListItem from "@/components/ListItem.vue";

import photography1 from "@/assets/images/photography1.png";
import photography2 from "@/assets/images/photography2.png";
import staging from "@/assets/images/staging.png";
import renderings from "@/assets/images/renderings.png";
import tours from "@/assets/images/tours.png";
import plans from "@/assets/images/plans.png";
import video from "@/assets/images/video.png";

const items = [
  {
    title: "Photography",
    content:
      "<ul><li>Drone Photography</li><li>Interiors</li><li>Exteriors / Architectural</li></ul> <p>Every photograph we produce finds the beauty in your property while serving as a profitable asset.</p>",
    images: [photography1, photography2],
  },
  {
    title: "Virtual Staging",
    content:
      "<p>Our staging will help you sell the potential of your space.</p><p> We can work off of our own photography or photos you provide.</p>",
    images: [staging],
  },
  {
    title: "Renderings",
    content:
      "<ul><li>Exteriors</li><li>Interiors</li></ul><p>Renderings are the gold standard in <br>pre-construction <br>marketing.</p></div>",
    images: [renderings],
  },
  {
    title: "Interactive Tours",
    content:
      "<ul><li>Matterport</li><li>Video Walkthroughs</li></ul><p>Give your audience the ability to explore your property without requiring in-person travel.</p></div>",
    images: [tours],
  },
  {
    title: "Floor Plans",
    content:
      "<ul><li>On-site Measure</li><li>2D Floor Plans</li><li>3D Floor Plans</li></ul><p>We produce laser-precise floor plans faster than any other service.</p></div>",
    images: [plans],
  },
  {
    title: "Video",
    content:
      "<ul><li>Drone Cinematography</li>Interiors</li><li>Exteriors / Architectural</li></ul><p>Video content has higher engagement and will help your property stand out online.</p></div>",
    images: [video],
  },
];
</script>

<style scoped></style>
