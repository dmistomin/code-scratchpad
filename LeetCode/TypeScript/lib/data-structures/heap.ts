export class Heap {
  private readonly arr: Array<any> = [];

  constructor(compareFn: (a: any, b: any) => number) {
  }


  public push(el: any): any {
    this.arr.push(el);
  }

  public pop(): any {
  }

  public peek(): any {
  }
}
