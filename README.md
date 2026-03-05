# What is JSX, and why is it used?

**JSX** stands for **JavaScript XML**. It's a syntax used in React that lets we write **HTML-like** code inside **JavaScript**.

JSX is used because it makes the UI code easier to read and write. Instead of writing many JS functions to create elements, we can write code that looks similar to HTML.

**React** then converts JSX into normal JS that browsers can execute.

Example:

```jsx
function App() {
	return <h1>Assalamu Alaikum, PH</h1>;
}
```

Without JSX, the same thing looks like this:

```js
React.createElement("h1", null, "Assalamu Alaikum, PH");
```

So in short, JSX makes UI code easier to read and write.

---

# What is the difference between State and Props?

Both **State** and **Props** are used to store and use data in React components, but their usage and process are a little different.

## Props

**Props** (short for _properties_) are used to pass data from a parent component to a child component.

Props are **read-only**, which means the component receiving them cannot change them.

Example:

```jsx
function Greeting({ name }) {
	return <h2>Hello, {name}</h2>;
}
function App() {
	return <Greeting name="PH" />;
}
```

Here, the parent component sends the value `"PH"` to the child component using a prop called `name`.

---

## State

**State** is data stored inside a component that can change over time.

When state changes, React automatically updates the UI by re-rendering the component.

Example:

```jsx
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

In this example, `count` is the state value and `setCount` is used to update it.

---

# What is the useState hook, and how does it work?

`useState` is a **React Hook** used to add state to functional components.

It returns two things:

- The current state value
- A function used to update the state

Syntax:

```js
const [state, setState] = useState(initialValue);
```

Example:

```jsx
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	function increment() {
		setCount(count + 1);
	}
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>increment</button>
		</div>
	);
}
```

How it works:

- React stores the state value
- When `setCount()` is called, the state changes
- React re-renders the component with the new value

---

# How can you share state between components in React?

The most common way to share state is called **lifting state up**.

This means placing the state in the **closest parent component**, then passing the value to child components using props.

Example:

```jsx
import { useState } from "react";

function Count({ count }) {
	return <p>Count: {count}</p>;
}
function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<Count count={count} />
		</div>
	);
}
```

Here, the parent component holds the state and sends the value to the child component.

In larger apps, we may also use tools like:

- `React Context`
- `Redux`
- `Zustand`

These tools help manage shared state across many components.

---

# How is event handling done in React?

React handles events using camelCase event names and JS functions.

Like, instead of `onclick` used in HTML, React uses `onClick`.

Example:

```jsx
function Button() {
	function handleClick() {
		alert("Button clicked");
	}
	return <button onClick={handleClick}>Click Meee</button>;
}
```

When the button is clicked:

- The event triggers a function
- The function throws a browser alert
