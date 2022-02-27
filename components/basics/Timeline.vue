<template>
  <div class="w-full">
    <div v-for="item in items" :key="item.key" class="flex mt-8">
      <h3
        v-if="!isMobileView && item"
        class="w-2/12 flex justify-end text-white text-2xl font-bold text-right"
      >
        {{ item.title }}
      </h3>
      <div class="w-1/12 flex flex-col items-center relative">
        <div class="tracker"></div>
        <img
          class="mushroom left absolute"
          :class="item.mushroomPositions.left"
          src="@/assets/img/mushroom.svg"
          alt="mushroom"
        />
        <img
          class="mushroom right absolute"
          :class="item.mushroomPositions.right"
          src="@/assets/img/mushroom.svg"
          alt="mushroom"
        />
        <img src="@/assets/img/timeline-arrow.png" alt="Arrow down" />
      </div>
      <div
        v-if="item && item.texts && item.texts.length > 0"
        class="w-11/12 sm:w-9/12"
      >
        <h3
          v-if="isMobileView && item"
          class="text-white text-2xl font-bold mb-5"
        >
          {{ item.title }}
        </h3>
        <p v-for="text in item.texts" :key="text.key" class="basic-text">
          {{ text.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  name: 'TimelineComponent',
  props: {
    timelineItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView
    },
    items() {
      return this.timelineItems.map((item) => {
        let texts = []
        if (item.texts) {
          texts = item.texts.map((text) => {
            return {
              ...text,
              key: uuid(),
            }
          })
        }
        return {
          ...item,
          texts,
          key: uuid(),
        }
      })
    },
  },
}
</script>

<style>
.tracker {
  width: 2px;
  background-color: white;
  height: 100%;
  border-radius: 3px;
}

.mushroom {
  width: 10px;
  height: 10px;
}

.mushroom.top {
  top: -10px;
}

.mushroom.begin {
  top: 0;
}

.mushroom.end {
  bottom: 30%;
}

.mushroom.left {
  transform: rotate(-45deg) translateX(-7px);
}

.mushroom.right {
  transform: rotate(45deg) translateX(7px);
}
</style>
