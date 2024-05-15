// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val)
        this.length++
        newNode.next = this.head
        this.head = newNode
        return this
        // Write your hypothesis on the time complexity of this method here = O(1)

    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // this.length++
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) { 
            
            this.head = newNode;
            this.length++
            return this;
        }
        let curr = this.head;
        while (curr.next) {
            
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++
        return this;

        // Write your hypothesis on the time complexity of this method here = O(n)
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined;
        }
        if (this.next === null) {
            return this.head = null
        }
        let curr = this.head;
        this.head = this.head.next;
        this.length--;
        return curr;
        // Write your hypothesis on the time complexity of this method here -> O(1)

    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) return undefined
        
        if(this.head.next === null) {
                this.length--
                return this.head = null

            }
            
            let current = this.head;
            let previous;
            
            while (current.next) {
                previous = current;
                current = current.next
            }
            previous.next = null
            this.length--
        return current

        // Write your hypothesis on the time complexity of this method here O(n)
    }

    peekAtHead() {
        // Return the value of head node
        if (!this.head) {
            return undefined
        }
        return this.head.value
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (!this.head) {
            return
        }
        let current = this.head
        while (current) {
            console.log(current.value)
         current = current.next
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
