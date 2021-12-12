<template>
  <v-btn
    small
    min-height="2.5rem"
    min-width="2.5rem"
    class="button mx-2"
    color="rgba(0,0,0,.2)"
    dark
  >
    <v-icon small :class="mode">{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["icon", "mode"],
});
</script>
