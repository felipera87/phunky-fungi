<template>
  <section
    id="team-section"
    class="flex flex-col items-center pt-11 h-auto px-3 w-full"
  >
    <div class="flex flex-col items-center w-full sm:w-11/12">
      <h2 data-aos="slide-up" class="section-title mb-6">Our Team</h2>
      <h3 data-aos="slide-up" class="section-subtitle">Founders</h3>
      <div class="flex flex-wrap justify-around">
        <Card data-aos="fade-in" class="w-full sm:w-3/12">
          <img
            slot="image"
            src="@/assets/img/nft/fergz.png"
            alt="Nick Ferggz"
          />
          <h3 slot="title" class="text-white text-2xl font-semibold">
            Nick Ferggz
          </h3>
          <span slot="description" class="text-white"
            >Nick has been a crypto enthusiast since 2014 and has an Asset
            Management/Finance background. He has experience advising top
            executives at companies such as Amazon, Microsoft & Adobe and has
            assisted in the deployment and management of over $300m in
            investment capital. Nick has been incredibility passionate about
            NFTs & Web 3.0 since joining the space in November 2021. He plans to
            parlay his success in the business world into success for our team
            and community in Web 3.0. When not working on Phunky Fungi you can
            catch him Fishing, Skateboarding or Surfing Steez Bio
          </span>
        </Card>
        <Card data-aos="fade-in" class="w-full sm:w-3/12">
          <img slot="image" src="@/assets/img/nft/steez.png" alt="John Steez" />
          <h3 slot="title" class="text-white text-2xl font-semibold">
            John Steez
          </h3>
          <span slot="description" class="text-white"
            >John has been in marketing and sales for 15 years with a background
            in design. He has experience working with some of the top companies
            in their filed such as Vans, Bank of America, USAA and
            Coldwellbanker. He has developed go to market strategies on all
            performance marketing channels including revenue growth. John has
            been in crypto since 2018 and in Web 3.0 since March 2021. When not
            working on Phunky Fungi john enjoys attending fashion shows,
            shooting photography at car meets and hiking with his dogs.
          </span>
        </Card>
        <Card data-aos="fade-in" class="w-full sm:w-3/12">
          <img
            slot="image"
            src="@/assets/img/nft/flower.png"
            alt="Brennan Flower"
          />
          <h3 slot="title" class="text-white text-2xl font-semibold">
            Brennan Flower
          </h3>
          <span slot="description" class="text-white"
            >Brennan has been involved with Crypto since 2015 and recently began
            his journey in NFTs early 2021 seeing the back end of NFT projects.
            He solely runs a psychedelic clothing brand by the name of
            Disrupting Nirvana. In its first year Disrupting Nirvana surpassed 6
            figures in sales, and in the following two years since has worked
            with major celebrities from the music and sports industry. Outside
            of the web Brennan enjoys a nice day full of yoga, meditation,
            forging, crystal hunting, hiking and good vegan food.
          </span>
        </Card>
        <Card data-aos="fade-in" class="w-full sm:w-3/12">
          <img
            slot="image"
            src="@/assets/img/nft/phreshh.png"
            alt="Joe Phreshh"
          />
          <h3 slot="title" class="text-white text-2xl font-semibold">
            Joe Phreshh
          </h3>
          <span slot="description" class="text-white"
            >Based out of New York City, Joe has been working in investment
            banking for 3 years. In this space, he has completed several
            transactions totaling over $500,000,000. He is looking to take his
            financial background and apply it to Web3 in its early stage. Joe
            first bought XRP in 2017 and thought he would be a billionaire by
            now (until it was deemed not a security lol). He has always had a
            passion for art and music and is excited to be a partner in a
            research-oriented project with several layers of utility.
          </span>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/basics/Card.vue'

export default {
  components: {
    Card,
  },
}
</script>

<style scoped></style>
