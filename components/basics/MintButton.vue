<template>
  <button
    class="btn px-16 py-1 text-white rounded-md text-lg font-bold"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MintButtonComponent',
  props: {
    click: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped>
.btn {
  background-color: #f2994a;
  transition: box-shadow 0.3s;
}

.btn:hover {
  box-shadow: -5px -5px 5px 5px #65289d88, 5px 5px 5px 5px #65289d88;
}
</style>
