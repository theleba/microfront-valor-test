# Microfrontend Test - Valor Software

## Objective

This project was created as a **fullstack test** for a position at **Valor Software**. The goal is to demonstrate skills in modern frontend architecture, microfrontend development, and integration with external APIs.

[Live demo]()


---

## Technologies Used

* **React** – Frontend library for building user interfaces
* **Vite** – Fast development build tool and bundler
* **TypeScript** – Typed superset of JavaScript for safer and more maintainable code
* **Module Federation** – Microfrontend architecture allowing independent deployment of frontend modules
* **Zephyr Cloud** – Used for hosting and serving microfrontends

---

## API

This project uses the **[PokéAPI](https://pokeapi.co/)**, a **free public API** providing data for Pokémon including:

* Names, sprites, and types
* Stats, abilities, and moves
* Species info (habitat, growth, egg groups, flavor text)

> PokéAPI is open and free to use, making it perfect for learning and testing frontend skills.

---

## Microfrontend Structure

The project is split into the following **microfrontends**:

1. **Host App**

   * Main container managing navigation and layout (Header & Footer)
   * Loads microfrontends dynamically using React `lazy` and Suspense
   * Manages state for selected Pokémon

2. **Catalog**

   * Displays a paginated list of Pokémon with their basic info
   * Clicking on a Pokémon dispatches an event to the Host App to show the Detail page

3. **Detail**

   * Shows detailed information of a selected Pokémon, including sprites, stats, abilities, and species information

```
Host
 ├─ Catalog (Microfrontend)
 └─ Detail (Microfrontend)
```

**Diagram of data flow / interaction:**

```
+------------------+
|      Host App     |
|------------------|
| Header & Footer   |
| State management  |
| Dynamic imports   |
+--------+---------+
         |
         v
+------------------+       +------------------+
|   Catalog MFE     |       |   Detail MFE     |
| List of Pokémon   | <---> | Pokémon details |
| Dispatch select   |       | Fetch species   |
+------------------+       +------------------+
```

---

## Running Locally

Since this is a **microfrontend architecture**, each app must run independently:

1. Open a terminal for **Host App**:

```bash
cd host-app
npm install
npm run dev
```

2. Open a terminal for **Catalog App**:

```bash
cd catalog-app
npm install
npm run dev
```

3. Open a terminal for **Detail App**:

```bash
cd detail-app
npm install
npm run dev
```

> The Host App will dynamically load Catalog and Detail microfrontends from their local ports. Make sure each MFE is running before navigating.

---

## Features Implemented

* **Microfrontend architecture** using Module Federation
* **Dynamic loading** of remote apps (Catalog and Detail)
* **State sharing** via custom events for selected Pokémon
* **Fetching data** from PokéAPI with proper TypeScript typings
* **Loading & error handling** for API requests
* **Responsive UI** using TailwindCSS

---

## Future Improvements / Features

* Create your **own backend microservices (MS)** and BFF (Backend-for-Frontend) layer
* Add **automated tests** (unit, integration, e2e)
* Implement **search filters, sorting, and advanced pagination**
* Use **state management solutions** (like Redux or Zustand) for cross-MFE state sharing
* CI/CD pipelines for independent deployment of microfrontends

---

## Notes

* The project demonstrates how **modern frontend microfrontend architecture** can be applied to small test apps
* Shows **code modularity, service separation, and reusability**
* Designed with **future scalability** in mind, allowing easy addition of more microfrontends

