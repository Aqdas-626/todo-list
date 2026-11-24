# To-do List

A small, client-side to-do list built with Next.js, React, TypeScript, and Tailwind CSS.

## Live App

Try the deployed app: [aqdas-todo-list.vercel.app](https://aqdas-todo-list.vercel.app)

## Features

- Add a task with a title and description.
- Remove a task using the trash button.
- Clear the form fields after adding a task.
- Show an empty-state message when there are no tasks.
- Use a responsive, centered layout with smaller padding on mobile screens.

Tasks are kept in React state in the browser. They are not saved to a database or browser storage, so they disappear when the page is refreshed.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

In Windows PowerShell, if `npm` is blocked by the script execution policy, use the Windows command shim:

```powershell
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

## How It Works

The page is implemented in [`src/app/page.tsx`](./src/app/page.tsx) as a client component so it can use React state and form event handlers.

- `TaskItem` defines the shape of each task (`task` and `desc`).
- `alltasks` stores the list of tasks in component state.
- Submitting the form adds the current title and description to that list, then clears both inputs.
- The list is rendered from `alltasks`; each trash button removes the task at its corresponding array index.
- Tailwind CSS utility classes style the form, task area, and responsive spacing.
- The delete control uses the `Trash2` icon from `lucide-react`.

## Available Commands

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Serve the production build
```

Use `npm.cmd` instead of `npm` for these commands in Windows PowerShell if the `npm.ps1` execution policy error occurs.
