<template>
  <v-app id="app">
    <Navigator />
    <v-main class="mx-10">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigator from "./components/UI/Navigator.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navigator,
  },
});
</script>

<style scoped>
#app {
  background: #576574;
}
</style>
