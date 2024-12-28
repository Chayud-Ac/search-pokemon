# Search Pokemon Application

This project is a full-stack TypeScript application built using **Next.js 14** with the **App Router**, communicating with a Pokémon GraphQL API as the data source. The application allows users to search for Pokémon by name and view detailed information, including attacks and evolutions. The application also features a test suite using Jest.

---

## Deployment

- **Vercel Deployment:** [[Insert Vercel Link]](https://search-pokemon-eta-seven.vercel.app/)

---

## Features

### Core Features

1. **Search Input**
   - A search input component allows users to search for Pokémon by name.
   - Utilizes URL query parameters (`?name=<pokemon_name>`) to track the search state.
   - Home page is SSR page which will render on the server. This page extract the name queryParams from the url and pass as a input parameter for client query graphQL

2. **Result Display**
   - Displays all information about the searched Pokémon in PokemonCard component
     - Name, type(s), height, weight, classification, max HP, max CP, flee rate.
     - Attacks (fast and special).
     - Evolutions. (if the pokemon has the next evolution stage)
   - Shows a `Not Found` UI if the pokemon is not found 

3. **Evolution Navigation**
   - Clicking on an evolution's name updates the search query parameter in the URL and fetches the data for the evolved Pokémon.

4. **GraphQL Integration**
   - Queries are optimized and utilize Apollo Client for fetching and caching data from the Pokémon GraphQL API.

---

## Tech Stack

- **Frontend Framework:** Next.js 14 (with App Router)
- **API Communication:** Apollo Client (GraphQL)
- **Styling:** tailwind css
- **Testing:** Jest with React Testing Library
- **Deployment:** Vercel

---

## Installation and Running the Application

1. Clone the repository:
   ```bash
   git clone [Insert Repo Link]
   cd search-pokemon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Testing

### Test Suite

The application includes a Jest test suite to validate the functionality and correctness of Pokémon types. The tests focus on ensuring that:

1. **Mock Data Tests:**
   - Bulbasaur is of type `Grass`.
   - Charmander is of type `Fire`.
   - Squirtle is of type `Water`.

2. **GraphQL Integration Tests:**
   - Confirms that the GraphQL API returns the correct data for the Pokémon.
   - Validates the proper rendering of the `PokemonCard` component.

### Running Tests

1. Run the Jest test suite:
   ```bash
   npm test
   ```

2. Output:
   - The test suite verifies that:
     - The API data is fetched correctly.
     - Each Pokémon type matches the expected type.
     - The `PokemonCard` component renders correctly.

---


## Project Structure

1. **NextJs with App router and src directory**:
  -  (root) is the main group root route
  -  components store all the components such as PokemonCard , Navbar , EvolutionButton , SearchInput , etc ..
  -  No design token for tailwindcss.
  -  lib for storing graphQL queries , type ,  client config , utils , etc

---



