<template>
  <Page
    backgroundSpanUnderStatusBar="true"
    actionBarHidden="true"
    androidStatusBarBackground="white"
  >
    <StackLayout>
      <GridLayout rows="*,*,*,*" columns="*,*" margin="10" class="text-center">
        <StackLayout row="1" colSpan="2">
          <!-- <Label text="username" textWrap="true" /> -->
          <TextField class="text-center" hint="username" v-model="username" />
        </StackLayout>
        <StackLayout row="2" colSpan="2">
          <!-- <Label text="password" textWrap="true" /> -->
          <TextField secure hint="username" v-model="password" />
        </StackLayout>
        <StackLayout row="3" colSpan="2">
          <Button @tap="gotoHome">Login</Button>
        </StackLayout>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Home from "./Home";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default {
  data() {
    return {
      isLoaded: false,
      username: "",
      password: "",
      currentValue: 0,
      maxValue: 100,
      url: "",
    };
  },

  mounted() {
    // console.log("MOUNTED");
    // this.getData();
  },

  methods: {
    gotoHome() {
      // const alertOptions = {
      //   title: "Race selection",
      //   message: "Race chosen: Unicorn",
      //   okButtonText: "OK",
      //   cancelable: false, // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
      // };
      if (this.username && this.password) {
        if (!validateEmail(this.username)) {
          alert({
            title: "Error",
            message: "Email is not in correct format !",
            okButtonText: "OK",
            cancelable: false,
          });
        } else {
          alert({
            title: "Welcome",
            message: "You logged in successfully",
            okButtonText: "OK",
            cancelable: false,
          }).then(() =>
            this.$navigateTo(Home, {
              clearHistory: true,
            })
          );
        }
      } else {
        alert({
          title: "Error",
          message: "username and password can't be left empty!",
          okButtonText: "OK",
          cancelable: false,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
* {
  color: black;
}
</style>
