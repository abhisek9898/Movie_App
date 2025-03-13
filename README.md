# Movie Finding App

<div align="center">
  <a href="https://www.youtube.com/watch?v=f8Z9JyB2EIE" target="_blank">
    <img src="https://github.com/user-attachments/assets/0cb17079-9b42-4a6f-9023-d82642fff73b" alt="Project Banner">
  </a>
</div>

## 📌 Overview

A Movie Finding App built with **Expo**, **TypeScript**, and **Tailwind CSS**, leveraging **Appwrite** for backend services. The app provides real-time movie data, a popularity algorithm, and an intuitive UI for seamless browsing.

## 🚀 Features

- **Real-time Data**: Fetch and display movie details dynamically.
- **Search Functionality**: Quickly find movies using an optimized search algorithm.
- **Popularity Algorithm**: Rank movies based on engagement.
- **Modern UI**: Designed with Tailwind CSS for a responsive experience.
- **Appwrite Integration**: Secure database management.

## 🛠 Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- **Tailwind CSS**
- **Appwrite**

## 📥 Installation

### Prerequisites
Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Clone the Repository
```sh
 git clone https://github.com/abhisek9898/Movie_App.git
 cd Movie_App
```

### Install Dependencies
```sh
 npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
EXPO_PUBLIC_MOVIE_API_KEY=
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
```
Fill in the required credentials.

### Run the App
```sh
 npx expo start
```

Scan the QR code using the Expo Go app to launch the project.

## 📜 Code Snippets

### Tailwind Configuration
```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        ratingBox: "#221F3D",
        searchBar: "#0F0D23",
        text: "#9CA4AB",
        darkAccent: "#AB8BFF",
        accentText: "#A8B5DB",
        secondaryText: "#D6C7FF",
      },
    },
  },
  plugins: [],
};
```

### Global Styles
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🤝 Contribution
Feel free to contribute by opening issues or submitting pull requests!

## 📜 License
This project is licensed under the MIT License.
