<template>
  <Page @loaded="onLoaded">
    <ActionBar title="" flat="true">
      <StackLayout orientation="horizontal">
        <Label text="Profile" textWrap="true" fontSize="15" fontWeight="bold" />
      </StackLayout>
      <NavigationButton
        text="Back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
        border="0"
      />
      <ActionItem
        icon="\uf501"
        android.systemIcon="ic_menu_home"
        key=""
        text="Profile"
        ios.position="left"
        @tap="gotoHome"
      />
    </ActionBar>

    <StackLayout horizontalAlignment="center" margin="10">
      <StackLayout class="br" height="10" />

      <!-- <GridLayout rows="*" columns="*"> -->
      <Image
        row="0"
        col="0"
        src="~/images/profile.png"
        stretch="fit"
        horizontalAlignment="center"
      />
      <!-- <Label
          row="0"
          col="0"
          class="fas"
          text.decode="&#xf4ff;"
          textWrap="true"
          fontSize="100"
          horizontalAlignment="center"
        /> -->
      <!-- </GridLayout> -->
      <ScrollView>
        <GridLayout rows="*,*,*,*,*" colums="*,*" width="80%">
          <Label
            row="0"
            class="fas"
            text.decode="&#xf007;"
            textWrap="true"
            horizontalAlignment="left"
            fontSize="30"
          />
          <TextField
            hint=""
            row="0"
            text="Mehmet"
            horizontalAlignment="right"
          />
          <!-- <Label
            row="0"
            text="Mehmet"
            textWrap="true"
            horizontalAlignment="right"
          /> -->

          <Label
            row="1"
            class="fas"
            text.decode="&#xf1fa;"
            textWrap="true"
            horizontalAlignment="left"
            fontSize="30"
          />
          <TextField
            hint=""
            row="1"
            keyboardType="email"
            text="mehmet@gmail.com"
            horizontalAlignment="right"
          />
          <!-- <Label
            row="1"
            text="mehmet@gmail.com"
            textWrap="true"
            horizontalAlignment="right"
          /> -->

          <Label
            row="2"
            class="fas"
            text.decode="&#xf3cd;"
            textWrap="true"
            horizontalAlignment="left"
            fontSize="30"
          />
          <TextField
            hint=""
            row="2"
            keyboardType="phone"
            text="05521234567"
            horizontalAlignment="right"
          />
          <!-- <Label
            row="2"
            text="05521234567"
            textWrap="true"
            horizontalAlignment="right"
          /> -->
          <!-- <Label
            row="3"
            class="fas"
            text.decode="&#xf3cd;"
            textWrap="true"
            horizontalAlignment="left"
            fontSize="30"
          />
          <TextField
            hint=""
            row="3"
            text="05521234567"
            horizontalAlignment="right"
          /> -->

          <!-- <Label
            row="3"
            text="05521234567"
            textWrap="true"
            horizontalAlignment="right"
          /> -->
          <Button row="4" @tap="logout">Logout</Button>
        </GridLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import axios from "axios";
import Product from "./Product";
import Home from "./Home";

export default {
  data() {
    return {
      isLoaded: true,
      character: {},
      url: "",
    };
  },

  methods: {
    logout() {
      alert({
        title: "Logging out",
        message: "You are about to logout from the app. Are you sure?",
        okButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        console.log(result);
        return;
        this.$navigateTo(Login, {
          clearHistory: true,
        });
      });
    },
    gotoHome() {
      this.$navigateTo(Home);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/sky";
</style>
