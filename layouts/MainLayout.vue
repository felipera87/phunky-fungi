<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <main>
      <Nuxt></Nuxt>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/basics/Header.vue'
import FooterComponent from '@/components/basics/Footer.vue'

export default {
  name: 'MainLayout',
  components: { HeaderComponent, FooterComponent },
  mounted() {
    this.$nextTick(function () {
      this.onResize()
    })
    this.$store.commit('update', window.innerWidth)
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize(event) {
      if (event && event.currentTarget) {
        this.$store.commit('update', event.currentTarget.innerWidth)
      }
    },
  },
}
</script>

<style>
.section-title {
  color: white;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
}

.section-subtitle {
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
}

.basic-text {
  color: white;
  line-height: 1.5rem;
  margin-bottom: 10px;
}
</style>
