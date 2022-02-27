<template>
  <section
    id="roadmap-section"
    class="flex flex-col items-center pt-11 h-auto px-3 w-full"
  >
    <div class="flex flex-col items-center w-full sm:w-11/12">
      <h2 class="section-title">Roadmap</h2>
      <Timeline :timeline-items="[...timelineItems]"></Timeline>
    </div>
  </section>
</template>

<script>
import Timeline from '~/components/basics/Timeline.vue'

export default {
  components: {
    Timeline,
  },
  computed: {
    timelineItems() {
      return [
        {
          title: 'Karma is Key',
          mushroomPositions: {
            left: 'begin',
            right: 'end',
          },
          texts: [
            {
              value:
                'Positive deeds, actions and intent fuel us with the right energy needed to embark on our never-ending journey into the metaverse. It is important for us to kick off our magical adventure with a gift that will provide healing for frens lost in the dark.',
            },
            {
              value:
                'As a community it is our duty to facilitate exploration into uncharted territory in all aspects of life. We are voyagers and explorers.',
            },
            {
              value:
                'We’d like to ensure the progression of psychedelic exploration to heal the soul and mind. Thus, we’ve donated an initial gift to Johns Hopkins Psychedelics and have pledged 6 figures toward psychedelic research and psilocybin therapies following our mint.',
            },
          ],
        },
        {
          title: 'Phunkadelic Threads',
          mushroomPositions: {
            left: 'top',
            right: 'top',
          },
          texts: [
            {
              value:
                'Deep in the Phunky Forest, the Fungi (with the help of Flowercheyld and Disrupting Nirvana), have been working on a physical collection of elevated pieces and objects to bring into the physical world. Legend tells the tale of a shop located deep in the Phunky Forest containing this physical merch. The location is only known by Phunky Fungi and their holders.',
            },
          ],
        },
        {
          title: 'The Phunky Forest/Entering the Metaverse',
          mushroomPositions: {
            left: 'top',
            right: 'end',
          },
          texts: [
            {
              value:
                'The Phunky Forest is a universe that will start as a single player experience filled with psychedelic vibrations and harmonizing beats for members of our colony to enjoy with their Phunky Fungi. As AR & VR capabilities become more readily available we will be expanding the forest into a fully immersive universe with endless possibility.',
            },
            {
              value:
                'We are in the middle of a paradigm shift in which the minutes of our lives spent in the metaverse will soon outweigh minutes spent in the physical world. This is exciting and scary all at once. As humanity transcends into this new meta we must create a sanctuary that encompasses all things positive in the universe.',
            },
          ],
        },
        {
          title: 'DAO',
          mushroomPositions: {
            left: 'top',
            right: 'top',
          },
          texts: [
            {
              value:
                'Decentralized Autonomous Organizations are an incredible way for our community to help create value and increase the benefits of being a holder of a Phunky Fungi NFT. Just like a spore, most good ideas need resources to ensure growth. The ultimate goal of our DAO will be to provide funding to our community so they can turn ideas into action.',
            },
          ],
        },
        {
          title: 'The Mycellium Network',
          mushroomPositions: {
            left: 'begin',
            right: 'end',
          },
          texts: [
            {
              value:
                'In the minds of many… the power of automation, computers and artificial intelligence can be viewed as a threat to our society. The Phunky Fungi community seeks to reframe that narrative and prove the power of tech can be used to further strengthen human connection. ',
            },
            {
              value:
                'Our goal is to facilitate a strong bond between like-minded people via AI built into your Phunky Fungi. Your Fungi will learn about you through inputs, responses and how you interact with the world around you. They will store this data in their Mycelium network which will be used to connect you with fellow members of the community in an innovative and social way within the Metaverse. ',
            },
            {
              value:
                'This new meta-social experience will be designed to create friendships that will transcend the metaverse and foster real life connections.',
            },
          ],
        },
        {
          title: 'Web 3.0 Incubator',
          mushroomPositions: {
            left: 'top',
            right: 'top',
          },
          texts: [
            {
              value:
                'As a colony we are always looking to grow and expand. Sometimes it is best to divide and conquer to reach our highest form. In order to continue the Mycelial Expansion we will be creating a Web 3.0 incubator. The goal of the incubator will be to provide a team of our spores with the knowledge, funding and resources to go out and create a project of their own. A healthy mushroom colony is one that provides abundance to all life within it and around it.',
            },
          ],
        },
      ]
    },
  },
}
</script>

<style scoped></style>
