<template>
  <Card class="fit">
    <template #title>
      <div class="row justify-between pa-3">
        <div>
          <span v-html="'A cool '" />
          <span v-text="capitalizeFirstLetter(type)" class="text-bold underline" />
          <span v-html="' Fact'" />
        </div>
        <div>
          <img
              src="src/assets/images/download-image.png"
              alt="img"
              style="width: 30px; height: 30px;"
              @click="$emit('refresh')"
          >
        </div>
      </div>
    </template>
    <template #default>
      <slot name="default" />
    </template>


  </Card>
</template>

<script>
import Card from "@/components/cards/Card.vue";

export default {
  name: "FactCard",
  components: {Card},
  props: {
    type: { type: String, required: true},
  },
  emits: ['refresh'],
  methods: {
    capitalizeFirstLetter(str) {
      if(!str) {
        return '';
      }
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
}
</script>

<style scoped>

</style>