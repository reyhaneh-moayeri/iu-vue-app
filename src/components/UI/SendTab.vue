<template>
  <div class="container">
    <v-form ref="form">
      <div class="form-control">
        <label for="">Pay to</label>
        <input type="text" v-model="walletId" @blur="validateInput" />
        <p v-if="walletIdValidity === 'invalid'">
          Please Enter the Wallet ID or destination email
        </p>
      </div>
      <div class="form-control">
        <div class="amount">
          <label for="">Amount</label>
          <input type="number" min="0" max="10000" step="1" v-model="amount" />
        </div>
        <div class="reason">
          <label for="">Reason</label>
          <input type="text" v-model="reason" />
        </div>
      </div>
      <div class="form-control result">
        <p>Commision:&nbsp; &nbsp; &nbsp; ${{ commision }}</p>
        <p>Total:&nbsp; &nbsp; &nbsp;{{ total }}</p>
      </div>
      <div class="form-control">
        <v-btn class="rounded-xl py-6 btn">
          <v-icon left>mdi-send</v-icon>
          send
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  data: () => ({
    total: 0,
    commision: 0,
    walletId: "",
    reason: "",
    amount: null,
    walletIdValidity: "pending",
  }),
  props: ["id"],
  methods: {
    validateInput() {
      if (this.walletId.trim() === "") {
        this.walletIdValidity = "invalid";
      } else {
        this.walletIdValidity = "valid";
      }
    },
  },

  computed: {},
});
</script>

<style>
.form-control {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 0.5rem;
}
label {
  align-self: flex-start;
  font-size: 0.9rem;
}
.form-control:first-child input {
  text-align: center;
}
.form-control:first-child p {
  color: rgb(214, 205, 205);
  font-size: 0.7rem;
  margin-top: 0.5rem;
}

.form-control:nth-child(2) {
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
}
.form-control:nth-child(2) label {
  display: block;
}
.amount,
.reason {
  width: 100%;
}

.amount input,
.reason input {
  width: 95%;
}

.result {
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
}
.result p {
  width: 50%;
  font-size: 0.8rem;
}
.result p:first-child {
  border-right: 1px solid rgb(112, 112, 112);
}
.btn {
  background: rgb(237, 140, 215);
  background: linear-gradient(
    90deg,
    rgba(237, 140, 215, 1) 0%,
    rgba(197, 150, 209, 1) 33%,
    rgba(70, 140, 196, 1) 57%,
    rgba(139, 204, 249, 1) 80%,
    rgba(69, 239, 252, 1) 100%
  );
}
</style>
