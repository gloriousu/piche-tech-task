This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

```bash
node version
v22.11.0

npm version
v10.9
```

Install the dependencies:

```bash
npm install
```

Command to run the development server:

```bash
npm run dev
```

***Why LocalStorage is the Best Decision for This Use Case***

LocalStorage is well-suited for managing the grocery list application for the following reasons:

Persistence Across Sessions
LocalStorage ensures the grocery list data persists even when the user closes the browser. This allows users to resume where they left off without requiring additional setup like a backend or database.

No Server-Side Dependency
By using LocalStorage, the app remains entirely client-side. This simplifies development, as there’s no need to manage backend servers, databases, or APIs.

Simple API for Basic CRUD
LocalStorage provides a straightforward API (setItem, getItem, removeItem) that integrates seamlessly into JavaScript or TypeScript applications. This simplicity makes it ideal for managing small to moderate amounts of data like a grocery list.

High Performance for Small Data
LocalStorage is optimized for quick reads and writes of small datasets. For a grocery list, the size of data (item name, quantity, category, etc.) is minimal, making it a highly efficient choice.

Built-In Browser Support
LocalStorage is widely supported across all modern browsers, ensuring that your application can run on a broad range of devices without additional libraries or dependencies.

Easier Debugging
Since LocalStorage is tied to the browser, it can be easily inspected and debugged using developer tools. You can quickly check the stored items and update or delete them as needed.

Offline Support
LocalStorage enables offline functionality, meaning users can manage their grocery list without an internet connection. This is essential for lightweight apps like this one.
