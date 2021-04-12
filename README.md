This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Recoil.js

Recoil is an experimental state management library for React apps built directly by software engineers at Facebook. It provides several capabilities that are difficult to achieve with React alone, while being compatible with the newest features of React.

## Features

### Minimal and Reactish

Recoil works and thinks like React. Add some to your app and get fast and flexible shared state.

### Data-Flow Graph

Derived data and asynchronous queries are tamed with pure functions and efficient subscriptions.

### Cross-App Observation

Implement persistence, routing, time-travel debugging, or undo by observing all state changes across your app, without impairing code-splitting.

## Getting Started

First, run an `npm install` to install all the necessary dependencies.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Purpose

I put together this boilerplate application to demonstrate some of Recoil's state management capabilities as a substitute for Redux. In my opinion, and without extensive knowledge of Redux, I believe Recoil to be a great alternative to having to create actions and reducers to access a global store as is the case with Redux. Writing Recoil feels exactly like writing React, and is just as intuitive through their hooks-based API.

## Dependencies

- Next.js
- Chakra UI
- Chakra UI Icons
- Emotion
- Framer Motion
- Recoil.js
