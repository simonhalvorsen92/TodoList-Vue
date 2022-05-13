export class Todo {
  id: number;
  constructor(public item: string, public piece: number, public done: boolean) {
    this.id = new Date().getTime();
  }
}
