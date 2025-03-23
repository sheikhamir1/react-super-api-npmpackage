# React Super API

![Node Super Logger](https://img.shields.io/npm/v/@amirsohail1/react-super-api?style=flat-square)
![License](https://img.shields.io/npm/l/@amirsohail1/react-super-api?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/@amirsohail1/react-super-api?style=flat-square)

🚀 **Welcome Developers!**

`react-super-api` allows you to easily fetch, send, update, and delete data from any database with minimal code. No need to manage `useState` or `useEffect`—our library handles everything efficiently using **TanStack Query** under the hood.

⚠️ This library is currently under development, and only basic API operations with optimizations have been added.

---

## 📦 Installation

Install via npm:

```sh
npm install @amirsohail1/react-super-api
```

Or using Yarn:

```sh
yarn add @amirsohail1/react-super-api
```

---

## 🔌 Setup

Wrap your application with the `Wrapper` component to initialize the library.

Make sure to wrap your main file (where you render your React app):

```jsx
import { createRoot } from "react-dom/client";
import { Wrapper } from "@amirsohail1/react-super-api";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App />
  </Wrapper>
);
```

---

## 🔥 Usage

### 1️⃣ Fetch Data using `useGetData`

Import the library and use `useGetData`:

```jsx
import { useGetData } from "@amirsohail1/react-super-api";

const { data, isPending, error } = useGetData({
  name: "users",
  url: "https://jsonplaceholder.typicode.com/users",
});
```

**Parameters:**

- `name` _(required)_: A unique identifier for caching.
- `url` _(required)_: API endpoint for fetching data.
- `options` _(optional)_: An object for additional configurations.

**Returned Values:**

1. `data` → Contains the fetched data.
2. `isPending` → Boolean to check if data is loading.
3. `error` → Contains any errors encountered.

---

### ⏳ Optional Optimizations

You can pass an `options` object with additional settings:

```jsx
const { data, isPending, error } = useGetData({
  name: "users",
  url: "https://jsonplaceholder.typicode.com/users",
  options: { refetchInterval: 10000, staleTime: 60000, cacheTime: 300000 },
});
```

- **`refetchInterval`** → Auto-fetch data every `X` milliseconds.
- **`staleTime`** → Duration before data is considered stale.
- **`cacheTime`** → How long data remains cached after becoming unused.

---

### 2️⃣ Send Data using `useSendData`

```jsx
import { useSendData } from "@amirsohail1/react-super-api";

const CreateUser = () => {
  // also have mutate
  const { mutate, data, isPending, error } = useSendData({
    name: "createUser",
    url: "https://jsonplaceholder.typicode.com/users",
  });

  const handleCreate = () => {
    // wrap all the data and pass into mutate function
    mutate({ name: "John Doe", email: "johndoe@example.com" });
  };

  return (
    <div>
      <button onClick={handleCreate} disabled={isPending}>
        {isPending ? "Creating..." : "Create User"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>User Created: {data.name}</p>}
    </div>
  );
};
```

---

### 3️⃣ Update Data using `useUpdateData`

```jsx
import { useUpdateData } from "@amirsohail1/react-super-api";

const UpdateUser = () => {
  // also have mutate
  const { mutate, data, isPending, error } = useUpdateData({
    name: "updateUser",
    url: "https://jsonplaceholder.typicode.com/users/1",
  });

  const handleUpdate = () => {
    // wrap all the data and pass into mutate function
    mutate({ name: "Jane Doe", email: "janedoe@example.com" });
  };

  return (
    <div>
      <button onClick={handleUpdate} disabled={isPending}>
        {isPending ? "Updating..." : "Update User"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>User Updated: {data.name}</p>}
    </div>
  );
};
```

---

### 4️⃣ Delete Data using `useDeleteData`

```jsx
import { useDeleteData } from "@amirsohail1/react-super-api";

const DeleteUser = () => {
  // also have mutate
  const { mutate, isPending, error } = useDeleteData({
    name: "deleteUser",
    url: "https://jsonplaceholder.typicode.com/users/1",
  });

  const handleDelete = () => {
    // in case of delete just call the function
    mutate();
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={isPending}>
        {isPending ? "Deleting..." : "Delete User"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
```

---

# New Update in version: "1.3.6"

Now when use `useSendData` , `useUpdateData` , `useDeleteData` you should see the promise success or fail massage

---

Also you can now Get `isError` & `isSuccess` form `useSendData` , `useUpdateData` , `useDeleteData` that return boolean value

---

## 🎯 Why Use `react-super-api`?

✔ **Minimal Boilerplate** – Fetch, send, update, and delete data in just 1-2 lines of code.  
✔ **Optimized Performance** – Uses caching and automatic refetching to minimize API calls.  
✔ **No Need for `useState` & `useEffect`** – The library handles state and side effects for you.  
✔ **Error Handling Built-in** – Get structured error responses for debugging.

---

## 📜 License

This project is licensed under the MIT License.

---

Start coding efficiently with `react-super-api` today! 🚀
