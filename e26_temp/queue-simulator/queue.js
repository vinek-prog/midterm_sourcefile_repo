
class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the rear of the queue
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove and return the front element
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Check the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Check queue size
    size() {
        return this.items.length;
    }

    // Print queue elements
    print() {
        return this.items.join(" ");
    }

    // Clear queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function() {

    // Display Queue
   

function displayQueue() {
    $("#queue").empty();

    for (let i = 0; i < queue.items.length; i++) {

        let color = i % 2 === 0
            ? "bg-primary"
            : "bg-success";

        $("#queue").append(
            `<div class="${color} queue-item" style="
                width: 62px;
                height: 62px;
                min-width: 62px;
                min-height: 62px;
                margin: 5px auto;
                display: flex;
                justify-content: center;
                align-items: center;
                color: black;
                border-radius: 5px;
                box-sizing: border-box;
            ">${queue.items[i]}</div>`
        );
    }
}



    // Enqueue
    $("#enqueue").click(function() {

        let value = $("#input").val().trim();

        if (value === "") {
            alert("Please enter a value!");
            return;
        }

        queue.enqueue(value);

        displayQueue();

        $("#input").val("");
    });

    // Dequeue
    $("#dequeue").click(function() {

        if (queue.isEmpty()) {
            alert("Queue is empty!");
            return;
        }

        let deletedValue = queue.dequeue();

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

        displayQueue();
    });

    // Peek
    $("#peek").click(function() {

        if (queue.isEmpty()) {
            alert("Queue is empty!");
            return;
        }

        $(".queue-item").removeClass(
            "border border-warning border-3"
        );

        $(".queue-item").first().addClass(
            "border border-warning border-3"
        );
    });

    // Clear
    $("#clear").click(function() {

        queue.clear();

        $("#queue").empty();
        $("#deleted").empty();

        $("#input").val("");
    });

});
