<template>
  <Page
    backgroundSpanUnderStatusBar="true"
    actionBarHidden="true"
    androidStatusBarBackground="white"
  >
    <StackLayout>
      <GridLayout
        rows="*,*,*,*,*,*"
        columns="*,*"
        margin="0 10"
        class="text-center"
      >
        <StackLayout row="1" rowSpan="3" colSpan="2">
          <Image
            
            ref="logo"
            src="~/images/ns.png"
            stretch="aspectFit"
            width="50%"
            height="200"
          />

          <!-- <Label text="username" textWrap="true" /> -->
        </StackLayout>
        <StackLayout row="3" colSpan="2" rowSpan="2">
          <TextField class="text-field" hint="Email" v-model="username"  />
          <TextField
            class="text-field"
            secure
            hint="Password"
            v-model="password"
           
          />
          <!-- <Label text="password" textWrap="true" /> -->
        </StackLayout>
        <StackLayout row="5" colSpan="2">
          <Button class="button" ref="button" @tap="gotoHome">Login</Button>
        </StackLayout>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Home from "./Home";
import { isAndroid } from "@nativescript/core/platform";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default {
  data() {
    return {
      isLoaded: false,
      username: "valid@email.com",
      password: "password",
      currentValue: 0,
      maxValue: 100,
      url: "",
    };
  },

  mounted() {
    
    this.$refs.logo.nativeView
      .animate({
        scale: { x: 2, y: 2 },
        duration: 1500,
        // curve: enums.AnimationCurve.easeIn,
      })
      .then(() => {
        console.log("Done");
      });
    // console.log("MOUNTED");
    // this.getData();
  },

  methods: {
    gotoHome() {
      this.$refs.button.nativeView
        .animate({
          scale: { x: 0.7, y: 0.7 },
          duration: 200,
        })
        .then(() => {
          this.$refs.button.nativeView.animate({
            scale: { x: 1, y: 1 },
            duration: 200,
          });
        });
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
Page {
  background-color: tomato;
}

@keyframes example {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
.view {
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
</style>
