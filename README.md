# Custom `useFetch` Hook Assignment

## Project Title & Description

This project is a React assignment about creating a custom hook called `useFetch`.
The hook is used to fetch product data from the Escuela JS API and show it on the screen.
It also handles loading and error states, so the UI does not break while data is coming from the API.

## Features Implemented

- Created a custom hook named `useFetch`
- Accepted a URL as a parameter
- Used `fetch` to get product data from the API
- Used `useEffect` to run the fetch when the component loads
- Used `useCallback` to keep the fetch function in one place
- Handled loading state with a loading message
- Handled error state if the API request fails
- Displayed the fetched products in cards
- Styled the page with Tailwind CSS

## How to Run the Project

1. Install the dependencies:

```bash
npm install
```

2. Start the project:

```bash
npm start
```

If `npm start` is not set up in your environment, you can also use:

```bash
npm run dev
```

## My Approach / Challenges

At first, I had to think carefully about how the loading state should work because the screen should not try to show the products before the fetch is finished.
That was a small learning moment for me, especially remembering to set the loading boolean back to `false` after the request is done.
I also learned that error handling is important because if the network is unavailable, the hook should still show a proper message instead of crashing the page.
