<template>
  <div class="bank-card rounded-xl" absolute bottom="10rem">
    <div class="header">
      <div class="header__left"></div>
      <div class="header__logo">
        <v-icon>mdi-leaf</v-icon>
        <span>iu</span>
      </div>
    </div>
    <div class="card-number">
      <span>{{ cardNum.slice(0, 4) }}</span>
      <span>{{ cardNum.slice(4, 8) }}</span>
      <span>{{ cardNum.slice(8, 12) }}</span>
      <span>{{ cardNum.slice(12, 16) }}</span>
    </div>
    <div class="credit-info">
      <div class="font-weight-bold headline">$ {{ bankBalance }}</div>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  data: () => ({}),
  props: ["cardNum"],
  computed: {
    ...mapGetters(["bankBalance"]),
  },
});
</script>

<style scoped>
.bank-card {
  background: rgb(235, 133, 177);
  background: radial-gradient(
    circle,
    rgba(235, 133, 177, 1) 0%,
    rgba(115, 96, 221, 1) 57%,
    rgba(77, 151, 238, 1) 100%
  );
  width: 18rem;
  height: 10rem;
  margin: auto;
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  font-weight: bold;
}

.header__left {
  width: 2.5rem;
  height: 2rem;
  background: rgba(226, 215, 215, 0.3);
  border-radius: 0.5rem;
}
.card-number {
  display: flex;
  justify-content: space-evenly;
}
.credit-info {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  justify-content: space-between;
}
.circles {
  display: flex;
}
.circles .circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(226, 215, 215, 0.3);
}

.circle:first-child {
  position: relative;
  left: 1rem;
}
</style>
