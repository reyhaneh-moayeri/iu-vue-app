<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col sm="9" md="5">
          <transfer-card></transfer-card>
        </v-col>
        <v-col sm="8" md="6" align-self="start">
          <v-card></v-card>
          <v-card></v-card>
          <v-card></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TransferCard from "../components/UI/TransferCard.vue";
export default Vue.extend({
  components: {
    TransferCard,
  },
});
</script>

<style></style>
