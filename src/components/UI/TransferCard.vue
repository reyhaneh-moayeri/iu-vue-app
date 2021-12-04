<template>
  <v-card class="rounded-xl mt-5" dark min-height="33rem" flat color="#2c3e50">
    <v-container>
      <bank-card
        card-num="1234567891122334"
        :bank-balance="bankBalance"
      ></bank-card>
      <div class="content">
        <h2>Transfer</h2>
        <base-button
          @change-tab="setSelectedTab('send-tab')"
          :mode="sendButtonMode"
          >Send</base-button
        >
        <base-button
          @change-tab="setSelectedTab('apply-for')"
          :mode="applyForButtonMode"
          >Apply For</base-button
        >
        <component :is="selectedTab" @check-balance="decrease"></component>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import BankCard from "./BankCard.vue";
import BaseButton from "./BaseButton.vue";
import SendTab from "./SendTab.vue";
import ApplyFor from "./ApplyFor.vue";
export default Vue.extend({
  components: {
    BankCard,
    ApplyFor,
    SendTab,
    BaseButton,
  },
  data: () => ({
    selectedTab: "send-tab",
    bankBalance: 7000,
  }),
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    decrease(total) {
      if (this.bankBalance > 0) {
        this.bankBalance = this.bankBalance - total;
        console.log(total);
      }
    },
  },
  computed: {
    sendButtonMode() {
      return this.selectedTab === "send-tab" ? "border" : null;
    },
    applyForButtonMode() {
      return this.selectedTab === "apply-for" ? "border" : null;
    },
  },
});
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 6rem;
}
</style>
