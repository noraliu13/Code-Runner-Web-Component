# Code Runner Web Component
Used in the E-book [Snefru: Learning Programming with C](https://github.com/salma-emara/aps105-book) for APS105 course of the University of Toronto. Book is available at [learningc.org](learningc.org).

## Additional Features
- supports light and dark theme
- can have multiple editors on the same page
- stdin/out windows and example input/outputs
- show compiler error and runtime error
- highlight specific lines

WARNING: use case only cares about C/C++, there may be hardcoded values

## Showcase
![Loom _ Free Screen  Video Recording Software _ Loom - 19 July 2023 (1)](https://github.com/yvonne-yang/Code-Runner-Web-Component/assets/60620007/e3846b41-9d3b-4641-b684-c44d3e9c0c52)

## Important Update: API Key & Proxy Requirement
As of February 15, 2026, the [Piston API](https://github.com/engineer-man/piston#Public-API) is no longer freely available to the public. To maintain security and functionality, this component no longer fetches directly from Piston.

Instead, it communicates with a Netlify Function (Serverless Proxy) that securely attaches the required API Key. This architecture protects the key from being exposed in the browser. The proxy logic is managed in the [Snefru: Learning Programming with C](https://github.com/salma-emara/aps105-book) repository.

**How It Works Now:**
1. Frontend: The Web Component sends code and standard input to the local endpoint: `/.netlify/functions/run-code.`
2. Backend (Proxy): The Netlify Function retrieves the `PISTON_API_KEY` from the server environment.
3. Execution: The Proxy forwards the request to Piston's execution endpoint with the `Authorization` header and returns the result back to the book.
