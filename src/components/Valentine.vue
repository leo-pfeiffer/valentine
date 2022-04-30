<template>
  <div class="quotation-box"
       v-bind:style="{background: bgColor, color: fontColor}">
    <div class="quote">
      <h2>{{ quote }}</h2>
      <p class="name">– {{ name }}</p>
    </div>
  </div>
</template>

<script>

import {getDailySeed, getRandomIndex, setContrast} from "@/utils/utils";

const COLORS = [
    [104,115,140], [116,109,142],
    [115,87,110], [79,60,86],
    [120,63,63], [176, 99, 86],
    [225,144,125], [241,201,142],
    [224,162,104], [145,85,58]
]

export default {
  name: 'Valentine',
  props: {
    // quote: Promise,
    // name: String
  },
  data() {
    return {
      quoteURL: 'https://bubbs-quotes.herokuapp.com/quote/daily',
      nameURL: 'https://bubbs-quotes.herokuapp.com/author/name',
      quote: null,
      name: null,
      bgColor: null,
      fontColor: null,
    }
  },
  mounted() {
    this.getQuote();
    this.getName();
    this.getColor();
  },
  methods: {
    async getQuote() {
      this.quote = await fetch(this.quoteURL)
          .then(res => res.json())
          .then(res => res.quote.quote)
          .catch(() => "I love you!")
    },
    async getName() {
      this.name = await fetch(this.nameURL)
          .then(res => res.json())
          .then(res => res.name)
          .catch(() => "Lelo")
    },
    getColor() {
      const seed = getDailySeed();
      const idx = getRandomIndex(COLORS.length, seed);
      this.bgColor = `rgb(${COLORS[idx]})`;
      this.fontColor = setContrast(COLORS[idx]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.quotation-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.quote {
  display: block;
}

.name {
  //text-align: right;
}

</style>
