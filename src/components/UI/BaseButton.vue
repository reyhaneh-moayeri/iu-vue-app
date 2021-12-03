<template>
  <button @click="changeTab" :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["mode", "type"],
  methods: {
    changeTab() {
      this.$emit("change-tab");
    },
  },
});
</script>

<style scoped>
button {
  border: none;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin-top: 1rem;
  width: 45%;
  border-bottom: 0.2rem solid rgba(131, 143, 155, 0.3);
}
.border {
  color: #fff;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
}
</style>
