<template>
  <section
    id="cover-section"
    class="flex justify-center pt-11 h-700px bg-center bg-no-repeat bg-cover"
  >
    <div class="flex flex-col items-center w-full sm:w-11/12">
      <PhunkyTitle class="mt-14 sm:w-5/12"></PhunkyTitle>
      <MintButton :click="mint" class="mt-12">Mint Now</MintButton>
    </div>
  </section>
</template>

<script>
import PhunkyTitle from '@/components/basics/PhunkyTitle.vue'
import MintButton from '@/components/basics/MintButton.vue'

export default {
  components: {
    PhunkyTitle,
    MintButton,
  },
  methods: {
    mint() {
      // eslint-disable-next-line no-console
      console.log('mint')
    },
  },
}
</script>

<style scoped>
section {
  background-image: url('@/assets/img/phunky-cover.png');
}
</style>
