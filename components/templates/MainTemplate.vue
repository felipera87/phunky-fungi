<template>
  <div class="bg-black w-full">
    <CoverSection></CoverSection>
    <PresentationSection></PresentationSection>
    <RoadmapSection></RoadmapSection>
    <TeamSection></TeamSection>
    <FaqSection></FaqSection>
  </div>
</template>

<script>
import CoverSection from '@/components/sections/CoverSection.vue'
import PresentationSection from '@/components/sections/PresentationSection.vue'
import RoadmapSection from '@/components/sections/RoadmapSection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'

export default {
  name: 'MainTemplate',
  components: {
    CoverSection,
    PresentationSection,
    RoadmapSection,
    TeamSection,
    FaqSection,
  },
}
</script>

<style scoped></style>
