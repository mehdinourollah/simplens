<template>
  <Page @loaded="onLoaded" backgroundSpanUnderStatusBar="true">
    <ActionBar title="" flat="true">
      <GridLayout rows="*,*" columns="*,*,*">
        <Label
          col="1"
          rowSpan="2"
          text="Products"
          textWrap="true"
          fontSize="15"
          fontWeight="bold"
        />
        <StackLayout
          class="view"
          ref="profile"
          rowSpan="2"
          col="2"
          marginRight="10"
        >
          <Label
            col="2"
            padding="0"
            marginTop="2"
            class="fas"
            text.decode="&#xf2bd;"
            textWrap="true"
            horizontalAlignment="right"
            fontSize="30"
            @tap="gotoProfile"
          />
          <Label
            row="1"
            col="2"
            padding="0"
            margin="0"
            text="Profile"
            textWrap="true"
            textAlignment="center"
            horizontalAlignment="right"
            fontSize="10"
            @tap="gotoProfile"
          />
        </StackLayout>
      </GridLayout>
    </ActionBar>
    <StackLayout>
      <ActivityIndicator
        :busy="!isLoaded"
        v-if="!isLoaded"
        marginTop="10"
        width="100"
        height="100"
      />
      <Progress v-if="!isLoaded" :value="currentProgress" />

      <ListView
        v-else
        for="(p,index) in products"
        @itemTap="onItemTap"
        separatorColor="transparent"
      >
        <v-template>
          <CardView class="cardStyle" margin="5" elevation="5" radius="50">
            <StackLayout>
              <GridLayout rows="*" columns="2*,*">
                <!-- <Label col="1" textWrap="true" margin="0">
                  <FormattedString>
                    <Span :text="e.episode" fontWeight="bold" fontSize="20" />
                  </FormattedString>
                </Label> -->
                <Image col="1" :src="p.image" stretch="fill" />

                <StackLayout col="0" verticalAlignment="middle">
                  <Label textWrap="true">
                    <FormattedString>
                      <Span :text="p.name" fontWeight="bold" />
                    </FormattedString>
                  </Label>

                  <Label textWrap="true">
                    <FormattedString>
                      <Span :text="p.price + ' ₺'" fontWeight="bold" />
                    </FormattedString>
                  </Label>
                </StackLayout>
              </GridLayout>
            </StackLayout>
          </CardView>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import Product from "./Product";
import Profile from "./Profile";

import axios from "axios";
import products_json from "../images/products.json";

export default {
  data() {
    return {
      isLoaded: false,
      products: [],
      url: "",
    };
  },

  mounted() {
    // this.getEpisodes();
  },

  methods: {
    onItemTap(item) {
      this.gotoProduct(item);
    },
    gotoProfile() {
      this.$navigateTo(Profile);
    },
    gotoProduct(item) {
      // console.log({ item });
      this.$navigateTo(Product, {
        props: {
          product: item.item,
        },
      });
    },
    onLoaded() {
      this.getProducts();
    },
    getProducts() {
      this.isLoaded = false;
      let products = products_json;
      this.products = products
        .concat(...products)
        .concat(...products)
        .concat(...products);
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes example {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
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
