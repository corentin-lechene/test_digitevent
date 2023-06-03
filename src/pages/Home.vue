<template>
  <div class="row justify-between" style="padding: 20px 75px">
    <div class="col-5 column justify-between fit">
      <FactCard class="" :type="factOne.type" style="height: 48%" @refresh="fetchNewFact(0)">
        {{ factOne.description }}
      </FactCard>
      <FactCard class="" :type="factTwo.type" style="height: 48%" @refresh="fetchNewFact(0)">
        {{ factTwo.description }}
      </FactCard>
    </div>
    <Card flat no-border class="col-6">
      <div class="text-bold underline my-3" v-html="'Logs'"/>
      <FactText v-for="fact in factsLog" :fact="fact" />
    </Card>
  </div>
</template>

<script>

import Card from "@/components/cards/Card.vue";
import FactCard from "@/components/facts/FactCard.vue";
import FactText from "@/components/facts/FactLogCard.vue";

export default {
  name: 'Home',
  components: {FactText, Card, FactCard},
  data() {
    return {
      facts: [],
      factsLog: [],
    }
  },
  computed: {
    factOne() {
      return this.facts.length > 0 ? this.facts[0] : {type: '', description: ''}
    },
    factTwo() {
      return this.facts.length > 1 ? this.facts[1] : {type: '', description: ''}
    }
  },
  mounted() {
    this.fetchFacts();
  },
  methods: {
    fetchNewFact(index) {
      console.log(index === 0 ? 'math' : 'date')
      this.fetchFact(index === 0 ? 'math' : 'date');
    },
    async fetchFact(type) {
      try {
        const response = await fetch(`http://numbersapi.com/#random/${type}`);
        const data = await this.formatData(type, response);
        this.facts[type === 'math' ? 0 : 1] = data;
        this.factsLog.push(data);
      } catch(e) {
          console.error(e);
          //notify error
      }
    },
    fetchFacts() {
      this.fetchFact('math');
      this.fetchFact('date');
    },

    async formatData(type, /*response*/) {
      return {
        type: type,
        description: '7500 is the order of a perfect group.',
      }
    }
  }
}

</script>



<style lang="css" scoped>




</style>