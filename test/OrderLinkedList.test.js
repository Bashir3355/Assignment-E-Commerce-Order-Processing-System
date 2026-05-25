// Import test package
import test from "node:test";

// Import assert package
import assert from "node:assert";

// Import classes
import { Order, OrderLinkedList } from "../src/OrderLinkedList.js";

// Test normal append
test("Add orders", () => {
  // Create list
  const list = new OrderLinkedList();

  // Add first order
  list.append(new Order(1, "Bashir", "Laptop"));

  // Add second order
  list.append(new Order(2, "Ali", "Phone"));

  // Check order list
  assert.deepStrictEqual(list.display(), [1, 2]);
});

// Test reverse normal case
test("Reverse many orders", () => {
  // Create list
  const list = new OrderLinkedList();

  // Add orders
  list.append(new Order(1, "B", "Laptop"));
  list.append(new Order(2, "A", "Phone"));
  list.append(new Order(3, "M", "Shoes"));

  // Reverse list
  list.reverse();

  // Check reversed list
  assert.deepStrictEqual(list.display(), [3, 2, 1]);
});

// Test empty list
test("Reverse empty list", () => {
  // Create empty list
  const list = new OrderLinkedList();

  // Reverse empty list
  list.reverse();

  // Check result
  assert.deepStrictEqual(list.display(), []);
});

// Test one node
test("Reverse one order", () => {
  // Create list
  const list = new OrderLinkedList();

  // Add one order
  list.append(new Order(1, "Bashir", "Laptop"));

  // Reverse list
  list.reverse();

  // Check result
  assert.deepStrictEqual(list.display(), [1]);
});

// Test two nodes
test("Reverse two orders", () => {
  // Create list
  const list = new OrderLinkedList();

  // Add orders
  list.append(new Order(1, "B", "Laptop"));
  list.append(new Order(2, "A", "Phone"));

  // Reverse list
  list.reverse();

  // Check result
  assert.deepStrictEqual(list.display(), [2, 1]);
});

// Test display empty
test("Display empty list", () => {
  // Create empty list
  const list = new OrderLinkedList();

  // Check result
  assert.deepStrictEqual(list.display(), []);
});