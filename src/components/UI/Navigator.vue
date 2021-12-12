<template>
  <nav>
    <v-toolbar flat color="#576574" class="nav-toolbar">
      <input type="search" placeholder="search" class="px-5 mr-4" />
      <base-icon icon="mdi-bell"></base-icon>
      <base-icon icon="mdi-account"></base-icon>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" dark color="#2c3e50" app>
      <v-list rounded>
        <v-subheader
          class="justify-center text-h5 font-weight-bold text--white"
          dark
        >
          <v-icon left>mdi-leaf</v-icon>
          <span>iu</span>
        </v-subheader>
        <v-list-item-group class="py-0 my-0">
          <v-banner single-line>
            <v-list-item
              v-for="([icon, text, route], i) in items.item1"
              :key="i"
              link
              router
              :to="route"
              class="py-0 my-0"
            >
              <v-list-item-icon>
                <v-icon small right>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-caption">{{
                  text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-banner>
          <v-list-item
            v-for="([icon, text, route], i) in items.item2"
            :key="i"
            link
            router
            :to="route"
            class="py-0 my-0"
          >
            <v-list-item-icon>
              <v-icon small right>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-caption">{{
                text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-switch
        class="ml-5"
        justify="center"
        color="green lighten-2"
        hide-details
        label="Dark"
        dense
      ></v-switch>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Vue from "vue";
import BaseIcon from "./BaseIcon";
export default Vue.extend({
  name: "App",
  components: {
    BaseIcon,
  },
  data: () => ({
    items: {
      item1: [
        ["mdi-wallet", "Wallet", "/wallet"],
        ["mdi-cash", "Deposit-Withdraw", "/cash"],
        ["mdi-transfer", "Transfer", "/transfer"],
        ["mdi-wallet", "Pay Service", "/pay"],
        ["mdi-phone", "Phone Rechange", "/phone"],
        ["mdi-credit-card", "My ui card", "/card"],
        ["mdi-wallet", "Movements", "/movements"],
      ],
      item2: [
        ["mdi-account", "Sub-Accounts", "/accounts"],
        ["mdi-contacts", "Favorite Contacts", "/favorite-contacts"],
        ["mdi-chat", "Chat", "/chat"],
      ],
    },

    drawer: true,
  }),

  methods: {},
});
</script>

<style lang="scss">
.v-list-item--active {
  background: rgb(222, 85, 184);
  background: linear-gradient(
    0deg,
    rgba(222, 85, 184, 1) 0%,
    rgba(200, 176, 214, 1) 44%,
    rgba(45, 253, 191, 1) 100%
  );
  position: relative;
}
.v-list-item--active::before {
  background: #485460 !important;
  opacity: 1 !important;
  transform: translatex(3px);
}
.v-list-item__content {
  z-index: 10 !important;
}
.v-banner__content,
.v-banner__text {
  overflow: visible !important;
}
.v-toolbar__content {
  justify-content: flex-end;
}
</style>
