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
    getEpisodes() {
      this.isLoaded = false;
      console.log("Started");
      axios("https://rickandmortyapi.com/api/episode")
        .then((res) => {
          let pages = res.data.info.pages;
          console.log("Pages: " + pages);
          let requestsPromises = [];
          for (let i = 1; i <= pages; i++) {
            requestsPromises.push(
              axios("https://rickandmortyapi.com/api/episode?page=" + i)
            );
          }
          let episodes = [];

          Promise.all(requestsPromises)
            .then((results) => {
              results
                .map((x) => x.data.results)
                .forEach((x) => {
                  episodes.push(...x);
                });
              console.log("Finished");
              this.episodes = episodes;
              this.isLoaded = true;
            })
            .catch((err) => console.log(err));
          // });
        })
        .catch((err) => {
          console.log(err);
          alert("Connection issue in API! Retry Again");
        });
    },
  },
};
</script>

<style scoped lang="scss">
* {
  color: black;
}
</style>
