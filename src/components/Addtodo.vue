<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h3><label>Add your product :</label></h3>
      <input
        type="text"
        placeholder="Titel"
        v-model="itemTitle"
        @keypress.enter="handleClick"
      />
      <input
        type="number"
        placeholder="Date"
        v-model="itemNumber"
        @keypress.enter="handleClick"
      />
    </form>
    <br />
    <button type="submit" v-bind="itemTitle" @click="handleClick">
      Add Your Todo
    </button>
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
