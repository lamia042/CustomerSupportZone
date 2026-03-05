# 📘 React Core Concepts

This document explains some fundamental concepts of React including JSX, State, Props, the useState Hook, sharing state between components, and event handling. These concepts are essential for building dynamic and interactive user interfaces using React.

---

# 1️⃣ What is JSX and Why It Is Used

JSX stands for **JavaScript XML**. It is a syntax extension that allows developers to write HTML-like structures inside JavaScript code when working with React.

- Makes ui code more reliable
- allows html inside js
- helps react to create ui elements easily
- improves developer productivity

---

# 2️⃣ Difference Between State and Props

In React, **State** and **Props** are both used to manage and transfer data within components, but they serve different purposes.

**State** is data that belongs to a specific component and can change over time. It is managed internally by the component and is commonly used for dynamic information such as user interactions, form inputs, counters, and UI updates.

**Props**, short for properties, are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the receiving component. They help maintain a unidirectional data flow in React applications.

The main difference is that state is controlled and updated by the component itself, while props are controlled by the parent component and passed down to child components.

---

# 3️⃣ What is the useState Hook and How It Works

The **useState Hook** is one of the most commonly used React Hooks. It allows functional components to store and manage state.

The useState Hook returns two values: the current state value and a function used to update that state. When the state update function is called, React updates the state and automatically re-renders the component to reflect the new value.

This mechanism allows React applications to create dynamic and interactive user interfaces that respond to user actions and data changes.

---

# 4️⃣ Sharing State Between Components
To share state between components, React uses a concept called Lifting State Up.

This means moving the state to the closest common parent component and passing it down via props.

---

# 5️⃣ Event Handling in React
Event handling in React allows developers to respond to user actions like clicking buttons, submitting forms, or typing in inputs. React uses camelCase event names and JavaScript functions as event handlers. It also uses Synthetic Events, which provide a consistent event system across different browsers.

---
