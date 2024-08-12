// TODO: Annotate methods to explain how/why they work

export class Heap {
  private readonly arr: Array<any> = [];
  private readonly compareFn: (a: any, b: any) => number;

  constructor(compareFn: (a: any, b: any) => number) {
    this.compareFn = compareFn;
  }


  public push(el: any): any {
    this.arr.push(el);

    let idx = this.arr.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const shouldSwap = this.compareFn(this.arr[idx], this.arr[parentIdx]) > 0;

      if (shouldSwap) {
        [this.arr[idx], this.arr[parentIdx]] = [this.arr[parentIdx], this.arr[idx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  public pop(): any {
  }

  public peek(): any {
  }

  public asArray(): Array<any> {
    return [...this.arr];
  }
}
