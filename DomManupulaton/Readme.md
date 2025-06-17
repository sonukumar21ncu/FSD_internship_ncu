# ⭐ Dynamic Box UI with JavaScript

This project demonstrates how to dynamically create and manipulate HTML elements using pure JavaScript. It covers basic DOM manipulation, event handling, inline styling, and dynamic updates—all without using any external libraries or frameworks.

---

## 📁 Files Included

- **index.html** – The main HTML page where the content will be rendered.
- **index.js** – The JavaScript file responsible for creating and handling all elements dynamically.

---

## 📌 What This Project Does

- Creates a styled `<div>` container programmatically using JavaScript.
- Adds a clickable ⭐ (star) icon that opens [Amazon.in](https://www.amazon.in) in a new tab.
- Displays a text label: **"This is a dynamic box"**.
- Includes two interactive buttons:
  - **Add Icon** – Adds a new ⭐ icon on each click.
  - **Remove Icon** – Removes the most recently added ⭐ icon.

---

## 🧠 Concepts Used

- **DOM Manipulation** – Creating and appending HTML elements using `document.createElement()` and `appendChild()`.
- **Event Handling** – Using `addEventListener()` to respond to button clicks.
- **Inline Styling** – Dynamically styling elements via JavaScript (`element.style`).
- **Dynamic Element Tracking** – Using classes like `.dynamic-icon` to manage added icons.

---

## ✅ How It Works (Step-by-Step)

1. A `div` is created with a light blue background, padding, rounded borders, and a solid outline.
2. A star icon is created and wrapped inside an `<a>` tag pointing to **Amazon**.
3. A label text is added inside the box.
4. Two buttons are added:
   - **Add Icon** – Adds new stars beside the existing ones.
   - **Remove Icon** – Removes the last dynamically added star from the box.

This entire process is handled via JavaScript inside `index.js`.

---

## 🎯 Result

After opening `index.html` in the browser, you will see:

- A styled box with:
  - A star icon that links to Amazon
  - Informational text
  - Buttons to add/remove stars dynamically
- Interactive behavior without page reloads

---

## 🧾 License

This project is open-source and free to use under the MIT License.
