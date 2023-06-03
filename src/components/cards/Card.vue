<template>
  <div class="card column fit" :style="classCard">
    <div>
      <slot name="title" />
    </div>
    <div class="pl-5 text-bold">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    flat: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false }
  },
  computed: {
    classCard() {
      return {
        borderRadius: this.noBorder ? '0px' : '15px',
        boxShadow: this.flat ? '': '0 6px 2px rgba(0, 0, 0, 0.1)',
      };
    }
  }
}
</script>

<style scoped>

.card {
  background-color: #fff;
  padding: 20px;
}
</style>