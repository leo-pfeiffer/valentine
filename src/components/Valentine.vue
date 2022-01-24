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
      quoteURL: 'https://bubbs-quotes.herokuapp.com/daily',
      nameURL: 'https://bubbs-quotes.herokuapp.com/name',
      quote: null,
      name: null
    }
  },
  mounted() {
    this.getQuote();
    this.getName();
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
