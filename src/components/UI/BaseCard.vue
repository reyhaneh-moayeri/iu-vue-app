<template>
  <v-card class="rounded-xl" flat>
    <h2>{{ title }}</h2>
    <slot></slot>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
    },
  },
});
</script>
