<template>
  <div class="operation operation--loan">
    <h3 class="mt-3">Request loan</h3>
    <form class="form form--loan">
      <input type="number" class="form__input form__input--loan-amount" />
      <button class="form__btn form__btn--loan">→</button>
      <label class="form__label form__label--loan">Amount</label>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
