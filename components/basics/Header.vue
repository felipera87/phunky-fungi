<template>
  <header
    class="flex justify-center items-center fixed px-3 bg-transparent w-full h-11 mt-2"
  >
    <div class="flex justify-between items-center w-full sm:w-11/12">
      <LogoComponent></LogoComponent>

      <nav v-if="!isMobileView" class="flex items-center">
        <ul class="flex text-white">
          <li class="mr-3">
            <a href="#presentation-section">The Forest</a>
          </li>
          <li class="mr-3">
            <a href="#roadmap-section">Road Map</a>
          </li>
          <li class="mr-3">
            <a href="#team-section">Our Team</a>
          </li>
          <li>
            <a href="#faq-section">FAQ</a>
          </li>
        </ul>
      </nav>

      <div v-if="isMobileView" class="flex justify-end relative">
        <button
          class="text-white"
          @click="toggleNavigator"
          v-html="$feathericons['menu'].toSvg()"
        ></button>
        <transition name="scale">
          <nav
            v-if="isNavigatorOpen"
            class="mobile-navigator flex absolute right-0 w-40 p-5 rounded-lg"
            :class="{
              'scale-in': isNavigatorOpen,
              'scale-out': !isNavigatorOpen,
            }"
          >
            <ul class="flex flex-col text-white">
              <li class="mb-3">
                <a href="#presentation-section">The Forest</a>
              </li>
              <li class="mb-3">
                <a href="#roadmap-section">Road Map</a>
              </li>
              <li class="mb-3">
                <a href="#team-section">Our Team</a>
              </li>
              <li>
                <a href="#faq-section">FAQ</a>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import LogoComponent from '@/components/basics/Logo.vue'

export default {
  name: 'HeaderComponent',
  components: { LogoComponent },
  data() {
    return {
      isNavigatorOpen: false,
    }
  },
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView
    },
  },
  methods: {
    toggleNavigator() {
      this.isNavigatorOpen = !this.isNavigatorOpen
    },
  },
}
</script>

<style scoped>
@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scaleOut {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}

.mobile-navigator {
  top: 30px;
  transform-origin: top right;
  background-color: #111827ee;
}

.scale-enter-active {
  animation: scaleIn 0.3s ease-in;
}
.scale-leave-active {
  animation: scaleOut 0.3s ease-in;
}
</style>
