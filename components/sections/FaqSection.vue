<template>
  <section
    id="faq-section"
    class="flex flex-col items-center pt-11 h-700px w-full px-3"
  >
    <div class="flex flex-col items-center w-full sm:w-11/12">
      <h2 class="section-title mb-6">FAQ</h2>
      <div class="w-full">
        <Accordion :accordion-items="accordionItems"></Accordion>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from '@/components/basics/Accordion.vue'

export default {
  components: {
    Accordion,
  },
  computed: {
    accordionItems() {
      return [
        {
          title: 'WHEN WILL THE OFFICIAL Phunky Fungi LAUNCH TAKE PLACE?',
          description:
            'The official Phunky Fungi launch date is to be announced. The plan is to have them take over the Metaverse by the end of December, 2022. Further updates will be revealed to the exclusive Discord community of early supporters.',
        },
        {
          title: 'HOW CAN I JOIN YOU?',
          description: 'description',
        },
        {
          title: 'HOW MANY Phunky Fungi ARE TAKING OVER THE DIGITAL JUNGLE?',
          description: 'description',
        },
        {
          title: 'CAN I TAKE A SNEAK PEEK AT MY NFTS?',
          description: 'description',
        },
        {
          title: 'WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?',
          description: 'description',
        },
        {
          title: 'DO Phunky Fungi HAVE ANY UTILITY?',
          description: 'description',
        },
      ]
    },
  },
}
</script>

<style scoped></style>
