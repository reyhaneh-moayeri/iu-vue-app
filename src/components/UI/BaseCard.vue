<template>
  <v-card class="rounded-xl my-5 pa-6 card" dark color="#2c3e50" flat>
    <v-row justify="space-between" class="pa-2">
      <h3>{{ title }}</h3>
      <v-icon small :class="mode">{{ icon }}</v-icon>
    </v-row>
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
    icon: {
      type: String,
    },
    mode: {
      type: String,
    },
  },
});
</script>
