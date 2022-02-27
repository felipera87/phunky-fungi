<template>
  <footer class="flex justify-center bg-black py-1 px-3 w-full">
    <div class="flex justify-between items-center w-full sm:w-11/12">
      <div class="sm:w-4/12">
        <LogoComponent></LogoComponent>
      </div>
      <div v-if="!isMobileView" class="flex justify-center sm:w-4/12">
        <a href="#">
          <img class="w-28" src="@/assets/img/discord.png" alt="Discord" />
        </a>
      </div>
      <div class="flex justify-between w-4/12 sm:justify-end">
        <a href="#" class="icon-link">
          <font-awesome-icon
            v-if="isMobileView"
            class="discord-icon"
            :icon="['fab', 'discord']"
          ></font-awesome-icon>
        </a>
        <a href="#" class="icon-link sm:ml-10">
          <font-awesome-icon
            class="twitter-icon"
            :icon="['fab', 'twitter']"
          ></font-awesome-icon>
        </a>
        <a href="#" class="icon-link sm:ml-10">
          <img
            class="instagram-icon"
            src="@/assets/img/instagram.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoComponent from '@/components/basics/Logo.vue'

export default {
  name: 'FooterComponent',
  components: {
    LogoComponent,
  },
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView
    },
  },
}
</script>

<style scoped>
.icon-link {
  width: 40px;
  height: 40px;
}

.twitter-icon {
  color: #55acee;
  width: 36px;
  height: 36px;
}

.discord-icon {
  color: #7189da;
  width: 36px;
  height: 36px;
}

.instagram-icon {
  width: 36px;
  height: 36px;
}
</style>
