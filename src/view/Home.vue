<template>
  <div class="home">
    <v-container>
      <v-row justify="center" align-content="space-between">
        <v-col cols="10" sm="8" md="5" lg="5">
          <transfer-card></transfer-card>
        </v-col>
        <v-col cols="10" sm="8" md="6" lg="5" class="ml-5">
          <base-card
            title="Balance"
            icon="mdi-currency-usd"
            mode="br-icon"
            class="card-bg"
          >
            <v-row justify="space-between" class="px-3">
              <p class="text-h2 font-weight-bold">$ {{ bankBalance }}</p>
              <v-icon small class="br-icon">mdi-currency-usd</v-icon>
            </v-row>
          </base-card>
          <base-card
            title="Information"
            icon="mdi-grease-pencil"
            mode="br-icon"
          >
            <table>
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.title"
                  class="text-caption"
                >
                  <td>
                    <v-icon small>{{ item.icon }}</v-icon>
                  </td>
                  <td class="px-5 py-1">{{ item.title }}:</td>
                  <td>{{ item.des }}</td>
                </tr>
              </tbody>
            </table>
          </base-card>
          <base-card title="Security" icon="mdi-dots-horizontal">
            <v-row justify="space-between" class="px-3" align="center">
              <base-icon icon="mdi-security"></base-icon>
              <p>2FA enabled</p>
              <v-switch
                class="ma-0"
                color="green lighten-2"
                hide-details
                dense
              ></v-switch>
            </v-row>
            <v-row justify="space-between" class="px-3 py-3" align="center">
              <base-icon icon="mdi-key"></base-icon>
              <p>key</p>
              <v-btn dark small outlined class="br-icon">Change</v-btn>
            </v-row>
          </base-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TransferCard from "../components/UI/TransferCard.vue";
import BaseCard from "../components/UI/BaseCard.vue";
import BaseIcon from "../components/UI/BaseIcon.vue";
import {mapGetters} from "vuex"
export default Vue.extend({
  components: {
    TransferCard,
    BaseCard,
    BaseIcon,
  },

  data() {
    return {
      // bankBalance: 8000,
      desserts: [
        {
          icon: "mdi-city",
          title: "Location",
          des: "Lima",
        },
        {
          icon: "mdi-map-marker",
          title: "Address",
          des: "Peru",
        },
        {
          icon: "mdi-wallet",
          title: "Wallet ID",
          des: "65264851djbj",
        },
      ],
    };
  },

  computed:{
    ...mapGetters(['bankBalance'])
  }
});
</script>
