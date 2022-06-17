<template>
  <div class="product-container">
    <div class="product">
      <p class="item">{{ todo.item }}</p>
      <p class="piece">Antal:{{ todo.piece }}</p>
      <p class="date">{{ currentDate() }}</p>
    </div>
    <div class="slideThree">
      <input
        @click="markAsDone"
        type="checkbox"
        value="None"
        name="check"
        :id="sliderId"
        checked
      />
      <label :for="sliderId"></label>

      <button @click="markAsDelete" type="delete" name="done">Delete</button>
    </div>
  </div>
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
  sliderId = "slideThree";

  mounted() {
    this.sliderId += this.todo.id;
  }

  markAsDone() {
    console.log("Toggle", this.todo.id);

    this.$emit("markAsDone", this.todo.id);

    // this.todo.done = !this.todo.done;
  }
  markAsDelete() {
    this.$emit("markAsDelete", this.todo.id);

    // this.todo.done = !this.todo.done;
  }
}
</script>
<style lang="scss">
.item {
  color: green;
}
.piece {
  color: rgb(41, 41, 243);
}
.date {
  color: orange;
}
.product-container {
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
}
.product {
  display: flex;
  gap: 20px;
}
.slideThree {
  display: flex;
  margin: auto;

  gap: 100%;
  width: 80px;
  height: 26px;
  background: rgb(206, 172, 172);
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 0.2);
  &:after {
    content: "klar";
    color: green;
    position: absolute;
    right: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
  }
  &:before {
    content: "X";
    color: red;

    position: absolute;
    left: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
  }
  label {
    display: block;
    width: 34px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: 1;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    border-radius: 50px;
    transition: all 0.4s ease;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      left: 43px;
    }
  }
}
</style>
