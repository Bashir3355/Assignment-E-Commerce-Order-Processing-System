
# E-Commerce Order Processing System

This project uses a singly linked list to store e-commerce orders.  
The list is reversed so the newest orders are processed first.

 Features

- Create orders
- Add orders to linked list
- Display orders
- Reverse linked list
- Unit testing

 Clarifying Questions

1. Should order IDs be unique?
2. Should reverse happen in-place?
3. What happens if the list is empty?
4. Should newest orders always process first?

 Files

- `src/OrderLinkedList.js` → Main linked list code
- `test/OrderLinkedList.test.js` → Unit tests
- `diagrams/flowchart.md` → Simple flowchart

# How to Run

Install dependencies:

```bash
npm install

Run tests:

npm test
Test Cases

Normal Cases:

Add orders
Display orders
Reverse many orders

Edge Cases:

Reverse empty list
Reverse one order
Reverse two orders
Time and Space Complexity

append()

Time: O(n)
Space: O(1)

display()

Time: O(n)
Space: O(n)

reverse()

Time: O(n)
Space: O(1)
Example

Before Reverse:

1 → 2 → 3

After Reverse:

3 → 2 → 1