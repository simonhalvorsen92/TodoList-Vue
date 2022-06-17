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
body {
  margin: 0;
}

#app {
}
</style>
