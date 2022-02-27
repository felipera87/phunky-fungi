<template>
  <div class="flex items-center">
    <img
      src="@/assets/img/white-mushroom.svg"
      alt="Phunky Fungi"
      class="w-8 mr-2"
    />
    <span class="text-white text-2xl antialiased">Phunky Fungi</span>
  </div>
</template>

<script>
import whiteMushroom from '@/assets/img/white-mushroom.svg'
export default {
  name: 'LogoComponent',
  data() {
    return {
      image: whiteMushroom,
    }
  },
}
</script>

<style scoped>
span {
  font-family: 'omegleregular';
}
</style>
