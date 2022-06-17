<template>
  <Addtodo @addItemTitle="handleAddedItemTitle($event)"></Addtodo>
  <SingleTodo
    @markAsDelete="handleMarkAsDelete($event)"
    @markAsDone="handleMarkAsDone($event)"
    v-for="(t, i) in threeItems"
    :todo="t"
    :key="i"
  />
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Addtodo from "./Addtodo.vue";
import SingleTodo from "./SingleTodo.vue";

@Options({
  components: {
    todo: Todo,
    Addtodo,
    SingleTodo,
  },
})
export default class AllTodos extends Vue {
  @Prop() todo!: Todo;

  // todo!: Todo;
  threeItems: Todo[] = [];
  // mounted körs före allt
  mounted() {
    let item1 = new Todo("Tomat", 4, false);
    item1.id = 1;

    this.threeItems.push(item1);

    let item2 = new Todo("Sylt", 3, false);
    item2.id = 2;

    this.threeItems.push(item2);

    let item3 = new Todo("Mjölk", 2, false);
    item3.id = 3;

    this.threeItems.push(item3);

    console.log(this.threeItems);
  }

  markAsDelete: any;
  handleAddedItemTitle(TitleOfItem: Todo) {
    console.log("Hello from Simon", TitleOfItem);
    this.threeItems.push(TitleOfItem);
  }

  handleMarkAsDone(id: number) {
    let todo = this.threeItems.find((todo) => todo.id === id);

    if (todo) {
      todo.done = !todo.done;
      console.log(todo);
    }

    console.log(todo);
  }
  handleMarkAsDelete(id: number) {
    this.threeItems = this.threeItems.filter((todo) => todo.id !== id);
    //this.threeItems.splice(id, 1);
  }
}

// deleteItemTitle(deleteTitleItem: any) {
//   console.log("Hello from Simon", deleteTitleItem);
//   // this.movies.splice(0, 1);
//   this.threeItems.splice(deleteTitleItem);
// }
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
