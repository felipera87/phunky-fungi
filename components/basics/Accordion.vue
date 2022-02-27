<template>
  <div>
    <div v-for="(item, index) in items" :key="item.key">
      <button
        class="title-container flex justify-between items-center text-white text-xl text-left font-semibold w-full"
        @click="openItem(index)"
      >
        {{ item.title }}
        <font-awesome-icon
          v-if="index !== openItemIndex"
          class="orange"
          :icon="['fas', 'plus']"
        />
        <font-awesome-icon
          v-if="index === openItemIndex"
          class="orange"
          :icon="['fas', 'minus']"
        />
      </button>
      <transition name="slide">
        <div v-if="index === openItemIndex" class="description-container">
          <p class="text-white">{{ item.description }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  name: 'AccordionComponent',
  props: {
    accordionItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openItemIndex: -1,
    }
  },
  computed: {
    items() {
      return this.accordionItems.map((item) => {
        const newItem = { ...item }
        newItem.key = uuid()
        return newItem
      })
    },
  },
  methods: {
    openItem(index) {
      if (this.openItemIndex === index) {
        this.openItemIndex = -1
      } else {
        this.openItemIndex = index
      }
    },
  },
}
</script>

<style scoped>
.title-container,
.description-container {
  border-bottom: 1px solid #f2994a;
  padding: 0.625rem 0;
  transform-origin: top;
}

.orange {
  color: #f2994a;
}

@keyframes slide-down {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

@keyframes slide-up {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}

.slide-enter-active {
  animation: slide-down 0.3s ease-in;
}
.slide-leave-active {
  animation: slide-up 0.3s ease-in;
}
</style>
