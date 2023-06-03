<template>
  <div style="margin-bottom: 10px">
    <div class="text-bold" v-text="date" />
    <div class="text-bold" v-text="type"/>
    <div v-text="description" />
  </div>
</template>

<script>
export default {
  name: "FactLogCard",
  props: {
    fact: {type: Object, required: true}
  },
  computed: {
    date() {
      return this.formatDate(new Date());
    },
    type() {
      return `${this.fact.type} Fact`
    },
    description() {
      const dc = this.fact.description;
      return dc?.length > 30 ? dc.slice(0, 30) : dc;
    }
  },
  methods: {
    formatDate(dt) {
      const day = dt.getDay();
      const month = dt.getMonth();
      const hours = dt.getHours();
      const minutes = dt.getMinutes();
      return `${day}-${month}:${hours}:${minutes}`;
    }
  }
}
</script>

<style scoped>

</style>