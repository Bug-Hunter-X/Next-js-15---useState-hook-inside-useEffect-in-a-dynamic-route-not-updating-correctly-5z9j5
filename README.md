# Next.js 15 - useState Hook Issue in Dynamic Route

This repository demonstrates an unexpected behavior encountered when using the `useState` hook within a `useEffect` hook in a Next.js 15 application, specifically within a dynamic route. The counter is not incrementing as anticipated.

## Issue Description

The `About` page uses `useState` to manage a counter.  The `useEffect` hook is intended to log the count to the console whenever it changes. However, the count does not update as expected; it only logs the initial value (0), even after multiple clicks on the increment button.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Click the "Increment" button. Observe that the count increases, but the console only shows the initial count (0).

## Potential Causes

* **Stale Closures:** A stale closure might be preventing the `useEffect` from seeing the updated value.
* **React Strict Mode:** React Strict Mode's extra checks might affect this behavior.

## Solution

The solution provided in `aboutSolution.js` demonstrates how to resolve the issue using the latest value of state variable.