
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()


$(document).ready(function(){

    // Display Stack
    function displayStack() {
        $("#stack").empty();

        for(let i = stack.count - 1; i >= 0; i--) {
            let color = i % 2 === 0 ? "bg-primary" : "bg-success";

            $("#stack").append(
                `<div class="row ${color} push">${stack.items[i]}</div>`
            );
        }
    }

    // Initial values
    stack.push(100);
    stack.push(200);
    stack.push(300);
    stack.push(400);

    displayStack();

    // Push
    $("#push").click(function(){
        let value = $("#input").val().trim();

        if(value === "") {
            alert("Please enter a value!");
            return;
        }

        stack.push(value);
        displayStack();
        $("#input").val("");
    });

    // Pop
    $("#pop").click(function(){
        if(stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        let deletedValue = stack.pop();

        $("#deleted").prepend(
    `<div style="
        width: 50px;
        height: 50px;
        min-width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        background-color: #dc3545;
        color: white;
        border: 1px solid white;
        border-radius: 5px;
        box-sizing: border-box;
    ">${deletedValue}</div>`
);
        displayStack();
    });

    // Peek
    $("#peek").click(function(){
        if(stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        $(".push").removeClass("highlight");
        $(".push").first().addClass("highlight");
    });

    // Clear
    $("#clear").click(function(){
        stack.clear();
        $("#stack").empty();
        $("#deleted").empty();
    });

});
