<template>
  <div class="singleTodo">
    {{ todo.item }} {{ todo.piece }}
    {{ currentDate() }}
    <input @click="markAsDone" type="checkbox" v-model="done" name="done" />

    <button @click="markAsDelete" type="delete" name="done">Delete</button>
  </div>

  <hr />
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class SingleTodo extends Vue {
  currentDate() {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return date;
  }
  @Prop() todo!: Todo;

  markAsDone() {
    this.$emit("markAsDone", this.todo.id);

    // this.todo.done = !this.todo.done;
  }
  markAsDelete() {
    this.$emit("markAsDelete", this.todo.id);

    // this.todo.done = !this.todo.done;
  }
}
</script>
