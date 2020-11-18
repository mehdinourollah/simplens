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
    <ScrollView>
      <CardView margin="10" elevation="40" radius="5">
        <StackLayout paddingLeft="20" marginTop="20">
          <Label textWrap="true" margin="0">
            <FormattedString>
              <Span :text="product.name" fontWeight="bold" fontSize="20" />
            </FormattedString>
          </Label>
          <!-- <Label :text="episode.name" /> -->
          <Label :text="product.price + ' ₺'" />
          <Label :text="product.description" />
          <Image :src="product.image" stretch="fill" />
          <Label  textWrap="true">
            <FormattedString>
              <Span :text="product.url" fontWeight="bold" fontSize="20" />
            </FormattedString>
          </Label>
        </StackLayout>
      </CardView>
    </ScrollView>
  </Page>
</template>

<script>
import axios from "axios";
import Profile from "./Profile";
import Home from "./Home";

export default {
  props: ["product"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.product);
  },
  methods: {
    goBack() {
      this.$navigateBack();
    },
    goHome() {
      this.$navigateTo(Home, {
        // for clearing the previous routes (backstack)
        clearHistory: true,
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
