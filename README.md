# Temperature Converter 🌡️

A fast, accurate, and responsive web utility designed for seamless conversion between Celsius, Fahrenheit, and Kelvin scales. This project demonstrates advanced mathematical logic, efficient DOM manipulation, and a "keyboard-first" user experience.

## 🚀 Live Demo
[View Live Site](https://daniel-chijioke.github.io/Temperature-Converter/)

## ✨ Key Features
* **Simultaneous Multi-Scale Conversion:** Implements thermodynamic formulas to convert an input value into the other two units instantly.
* **Optimized UX with Keyboard Shortcuts:** Features an `Enter` key event listener that triggers conversion, allowing for a rapid, mouse-free workflow.
* **Scientific Precision:** Utilizes the `.toFixed(2)` method to ensure results are rounded to two decimal places, meeting standard engineering and scientific requirements.
* **Automatic State Management:** Includes a reset logic that clears input fields and previous results upon new entries to prevent data overlap.
* **Responsive Engineering UI:** Designed with a professional green-and-white aesthetic, featuring a clean card layout and responsive Flexbox alignment for mobile and desktop use.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure with specialized input groups for temperature units.
* **CSS3:** Custom styling focusing on modern UI elements like box-shadows and responsive container alignment.
* **JavaScript (ES6):** Core functional programming for unit conversion formulas and DOM event handling.

## 📂 Project Structure
* `index.html` - The structural foundation of the application.
* `/styles/style.css` - Custom UI aesthetics and responsive layout rules.
* `/scripts/script.js` - Conversion algorithms and event-driven logic.
* `favicon.png` - Custom branded browser icon for a professional finish.

## 🧠 Technical Insight
In this project, I focused on handling state changes effectively. By capturing the `Enter` key, the application provides a "command-line" feel within a web interface, which is highly efficient for users performing multiple engineering conversions in a row.
