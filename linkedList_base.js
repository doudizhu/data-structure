/**
 * 链表
 */

function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.next = null;
    }
    let head = null;
    let length = 0;

    // 添加元素节点
    this.append = function(element){
        let node = new Node(element);
        if(head === null){
            head = node;
        }else{
            let current;

            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    this.insertAt = function(position,element){

    }
    this.remove = function(element){

    }
    this.removeAt = function(position,element){
        if(position>-1 && position<length){
            let current = head;
            let previous;
            let index = 0;

            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
            }
            
            previous.next = current.next;
            length--;
            return current.element;
        }else{
            return null;
        }
    }
    this.indexOf = function(element){

    }
    this.size = function(){
        return length;
    }
    this.toString = function(){
        let current = head;
        let string = '';
        while(current){
            string += current.element + (current.next ? ',' : '')
            current = current.next
        }
        return string;
    }
    this.print = function(){
        console.log(this.toString());
    }
}


let list = new LinkedList()
console.log(list.size());
list.append(10);
console.log(list.size());
list.append(5);
list.append(4);
list.print();

list.removeAt(1);
list.print();
