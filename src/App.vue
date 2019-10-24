<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr/>
    <p>Default</p>
    <grapheme-input @onInput="onInput"></grapheme-input>
    <p>Maxlength:5</p>
    <grapheme-input maxlength="5"></grapheme-input>
    <p>Maxlength:3</p>
    <grapheme-input maxlength="3"></grapheme-input>
  </div>
</template>

<script>
import GraphemeInput from "@/components/GraphemeInput.vue";
export default {
  name: 'app',
  components: {
    GraphemeInput
  },
  methods:{
    onInput(v){
      console.log(v)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
