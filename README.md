📚 **React EPUB Reader**

A browser‑based EPUB reader built with React, Tailwind CSS, and [react‑reader](https://github.com/gerhardsletten/react-reader). Drag‑and‑drop or select any `.epub` file, read it in a two‑column layout on desktop (single‑column on mobile), look up word definitions on the fly via [DictionaryAPI.dev](https://dictionaryapi.dev/), and enjoy a fully responsive, customizable reading experience.

---

## Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#-project-structure)
- [Styling & Theming](#-styling--theming)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)

---

## Demo

![EPUB Demo](frontend/src/assets/Epub-Demo.gif)

---

## Features

- **Drag & Drop / File Select**  
  Instantly load any `.epub` file by dragging it onto the page or by clicking “Choose File.”
- **Two‑Column Desktop Layout**  
  Paginated, side‑by‑side columns on wide screens; single column with continuous scroll on mobile.
- **Inline Dictionary Lookup**  
  Select any word in the text to see definitions powered by [DictionaryAPI.dev](https://dictionaryapi.dev/).
- **Customizable Reader Styles**  
  Override `react-reader`’s default look via `myReaderStyles` (colors, borders, shadows, etc.).
- **Responsive & Accessible**  
  Mobile‑first design, keyboard‑navigable controls, and ARIA‑friendly markup.
- **Header & Footer**  
  Branding header plus a lightweight footer crediting the dictionary API.

---

## Tech Stack

- **React** (with Hooks)
- **Tailwind CSS** for utility‑first styling
- **react-reader** for EPUB rendering
- **DictionaryAPI.dev** for free, open‑source definitions
- **react-icons** for crisp SVG icons
- **TypeScript** (optional)

---

## Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or Yarn

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/<your‑username>/Epub-Reader.git
   cd Epub-Reader/frontend
   ```
