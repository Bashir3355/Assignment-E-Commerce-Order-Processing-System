// Order class
export class Order {
  // Constructor
  constructor(id, name, item) {
    this.id = id; // Save order id
    this.name = name; // Save customer name
    this.item = item; // Save item
  }
}

// Node class
class Node {
  // Constructor
  constructor(order) {
    this.order = order; // Save order object
    this.next = null; // Next node starts null
  }
}

// Linked List class
export class OrderLinkedList {
  // Constructor
  constructor() {
    this.head = null; // First node is empty
  }

  // Add order function
  append(order) {
    // Create new node
    const newNode = new Node(order);

    // Check if list is empty
    if (!this.head) {
      // Make new node head
      this.head = newNode;

      // Stop function
      return;
    }

    // Start from head
    let current = this.head;

    // Move until last node
    while (current.next) {
      // Go to next node
      current = current.next;
    }

    // Connect last node to new node
    current.next = newNode;
  }

  // Display function
  display() {
    // Start from head
    let current = this.head;

    // Create empty array
    let result = [];

    // Loop through list
    while (current) {
      // Add order id to array
      result.push(current.order.id);

      // Move to next node
      current = current.next;
    }

    // Return final array
    return result;
  }

  // Reverse function
  reverse() {
    // Previous node
    let prev = null;

    // Current node
    let current = this.head;

    // Loop through list
    while (current) {
      // Save next node
      let next = current.next;

      // Reverse link
      current.next = prev;

      // Move prev forward
      prev = current;

      // Move current forward
      current = next;
    }

    // Set new head
    this.head = prev;
  }
}

// Create list
const list = new OrderLinkedList();

// Add first order
list.append(new Order(1, "Bashir", "Laptop"));

// Add second order
list.append(new Order(2, "Ali", "Phone"));

// Add third order
list.append(new Order(3, "Amina", "Shoes"));

// Show original list
console.log("Before Reverse:", list.display());

// Reverse list
list.reverse();

// Show reversed list
console.log("After Reverse:", list.display());