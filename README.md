# React Context API Tutorial With A Custom Hook.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project with React Context API with a **custom hook**.

---

## To run the app:

```bash
cd react-context-hook
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:

```bash
cd tutorials

yarn create vite react-context-hook --template react
cd react-context-hook
```

## Initiate version control:

```bash
git init
git add .
git commit -m "Empty React-Vite app"
git branch -m master main
```

## Upload to GitHub:

```bash
gh auth status
gh repo create react-context-hook --public --source=. --remote=origin --push
```

## Create context, provider, custom hook, and pass the data

```js
// src / MyContext.js
import { useState, useMemo, createContext, useContext } from "react";

const MyContext = createContext(undefined);

function MyProvider({ children }) {
  const [data, setData] = useState("No data");
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

function useData() {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("useData must be used within MyProvider");

  return context;
}

export { MyContext, useData, MyProvider };
```

## Wrap consumers

```js
// src / main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyProvider } from "./MyContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>,
);
```

## Update and use the shared data in a consumer

```js
import { useEffect } from "react";
import { useData } from "./MyContext";

export default function MyComponent() {
  const { data, setData } = useData();

  useEffect(() => {
    setData("My data");
  }, []);

  return (
    <>
      <h2>My Component</h2>
      <p>{data}</p>
    </>
  );
}
```

```js
// src / App.jsx
...
import MyComponent from "./MyComponent";
...
<MyComponent />
...
```

## Additional explanation:

- **MyContext.js** is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.

  ```
  const MyContext = createContext()
  ```

- It contains **MyContext.Provider** and **MyContext.Consumer** properties, which both point to the same object.

- Consumers get access to the shared data once wrapped in a provider like this:

  ```
  <MyContext.Provider />
  ```

  and import **useContext** from 'react' and **MyContext** from the object location.

- The providers gets access to the shared data ones it is passed to the value property
  in the provider like this:

  ```
  const value = "My data"
  <MyContext.Provider value={value} />
  ```

- The wrapped consumer access the dataExample like this:

  ```
  const value = useContext(MyContext)
  ```

  when it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest **MyContext.Provider**
  If no provider is found, the default value is returned.

## Quick-start step guide:

1. Create provider-consumer relationship:

   ```
   const MyContext = createContext()
   ```

2. Wrap consumers in a provider:

   ```
   <MyContext.Provider />
   ```

3. Pass the dataExample to the "value" property:

   ```
   const value = "My data"
   <MyContext.Provider value={value} />
   ```

4. Retrieve dataExample with useContext hook:
   ```
   const value = useContext(MyContext)
   ```
