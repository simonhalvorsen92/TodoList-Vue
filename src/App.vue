<template>
  <Alltodos></Alltodos>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Alltodos from "./components/Alltodos.vue";

@Options({
  components: {
    Alltodos,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.theTodoItems {
  background-color: aqua;
}
.header {
  background-color: aquamarine;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
