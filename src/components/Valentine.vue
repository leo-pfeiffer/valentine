<template>
  <div class="quotation-box">
    <div class="quote">
      <h2>{{ quote }}</h2>
      <p class="name">– {{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Valentine',
  props: {
    // quote: Promise,
    // name: String
  },
  data() {
    return {
      url: 'https://bubbs-quotes.herokuapp.com/quote',
      quote: null,
      name: 'Lelo'
    }
  },
  mounted() {
    this.getQuote();
  },
  methods: {
    async getQuote() {
      this.quote = await fetch(this.url)
          .then(res => res.json())
          .then(res => res.quote.quote)
          .catch(() => "I love you!")
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
