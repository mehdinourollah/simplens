<template>
  <Page
    @navigatedFrom="onNavigatedFrom"
    @loaded="onLoaded"
    backgroundSpanUnderStatusBar="true"
    actionBarHidden="true"
  >
    <Label text="TRansiiiiiiiii" fontSize="500" textWrap="true" />
  </Page>
</template>

<script>
import Login from "./Login";
import axios from "axios";

export default {
  data() {
    return {
      isLoaded: false,
      currentValue: 0,
      maxValue: 100,
      url: "",
    };
  },

  methods: {
    onLoaded() {
      setTimeout(() => {
        this.$navigateTo(Login);
      }, 2500);
    },
  },
};
</script>

<style scoped lang="scss">
* {
  color: black;
}
</style>
