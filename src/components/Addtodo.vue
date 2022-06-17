<template>
  <div class="test2">
    <form @submit.prevent="onSubmit">
      <label
        >Produkt:
        <input
          type="text"
          placeholder="Produkt"
          v-model="itemTitle"
          @keypress.enter="handleClick"
      /></label>

      <label
        >Antal:<input
          class="number"
          type="number"
          placeholder="Antal"
          v-model="itemNumber"
          @keypress.enter="handleClick"
        />
        <button type="submit" v-bind="itemTitle" @click="handleClick">
          Lägg till din Produkt
        </button></label
      >
    </form>
  </div>
</template>
<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class Addtodo extends Vue {
  itemNumber = 0;
  itemTitle = "";
  id: number = new Date().getTime();

  handleClick() {
    console.log("Du klickade", this.itemTitle);
    this.$emit(
      "addItemTitle",
      new Todo(this.itemTitle, this.itemNumber, false)
    );
  }
  //   deleteTitleItem = "";
  //   deletedClick() {
  //     this.$delete("deleteTitleItem");
  //   }

  onSubmit() {
    console.log("Submit forms");
  }
}
</script>
<style lang="scss">
.test2 {
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 5%;
  background-color: rgb(193, 123, 123);
  padding: 20px;
}
form {
  display: flex;

  gap: 5px;
  height: 25px;
  .number {
    width: 30px;
  }
}
</style>
