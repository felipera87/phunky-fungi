<template>
  <section
    id="presentation-section"
    class="flex sm:justify-center pt-11 h-auto px-3"
  >
    <div
      class="flex flex-col sm:flex-row w-full sm:w-11/12 items-center sm:justify-center"
    >
      <h2 v-if="isMobileView" class="section-title">The Forest</h2>
      <div class="w-1/2">
        <img src="@/assets/img/nft/phunky.png" alt="Phunky character preview" />
      </div>
      <div class="w-full sm:w-1/2 p-3">
        <h2 v-if="!isMobileView" class="section-title mb-6">The Forest</h2>
        <p class="basic-text">Welcome to the Forest…</p>
        <p class="basic-text">Phunky Fungi is a movement.</p>
        <p class="basic-text">
          We are a community that stands for good vibes & frenship.
          <br />
          A movement that will catapult the growth & adoption of Web 3.0
          together as one.
        </p>
        <p class="basic-text">
          The Phunky Fungi is collection of 9,200 unique companions that will
          lead you on a majestic adventure in to the metaverse. The journey
          starts with good karma, phunkadelic threads, psychedelic surprises and
          so much more that you will discover on your trip…
        </p>
        <p class="basic-text">
          As we dive farther down the rabbit hole, holders will be invited to
          the forest… a universe of endless possibility and psychedelic
          experience. This experience is intended to heal and enlighten, opening
          your mind to the beauty and potential of Web 3.0.
        </p>
        <p class="basic-text">
          Now grab a spore to join us on an endless trip into the metaverse
          where physical meets digital…
          <br />
          where possibilities are infinite… where art, culture and community
          melt into one.
          <br /><br />
          Enjoy the trip.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    isMobileView() {
      return this.$store.getters.isMobileView
    },
  },
}
</script>
