import Node from "./node.js";

export default class LinkedList {
    constructor() {
      this.listHead = null;
    }

    prepend(value){

        let tmp = null
        if (this.listHead != null) tmp = this.listHead
        this.listHead = new Node(value)
        this.listHead.nextNode = tmp
    }

    append(value) {
        if (this.listHead == null) this.prepend(value);

        else {
          let tmp = this.listHead;

          while (tmp.nextNode != null) tmp = tmp.nextNode;

          tmp.nextNode = new Node(value);
        }
      }
    
    size(){

        let tmp = this.listHead
        let counter = 0    
    
        while (tmp !== null ){
            counter++;
            tmp = tmp.nextNode
        }

        return counter
    }

    head(){
        return this.listHead
    }

    tail(){
        let tmp = this.listHead;
        while (tmp.nextNode != null) tmp = tmp.nextNode;
        return tmp
    }

    atIndex(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
          tmp = tmp.nextNode;
          if (tmp == null) return "There is no item for this index";
          console.log(tmp)
        }
        return tmp;
      }
    
    pop(){
        let current = this.listHead
        let previous = null
        while (current.nextNode != null){
            previous = current
            current = current.nextNode
        }
    }
    
    
}   