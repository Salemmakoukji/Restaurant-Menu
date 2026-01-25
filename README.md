Restaurant Premium Digital Menu Showcase

A high-end, ultra-modern digital menu application custom-built for Restaurant Cafe & Restaurant. This showcase application is designed to provide a luxury visual experience for customers browsing on tablets or mobile devices, featuring sophisticated UI patterns and a fluid, brand-centric interface.

🌟 Visual Identity & UX

This project is meticulously crafted to reflect the Restaurant brand identity:

Color Palette: Utilizing a professional combination of Deep Forest Green (#1B3022), Champagne Gold (#C5A47E), and Soft Beige (#F2E8CF).

Glassmorphism UI: Advanced use of backdrop filters and semi-transparent layers to create a "frosted glass" depth effect.

Dynamic Backgrounds: Smoothly animated, floating "blobs" that move behind the glass interface, providing a living, breathing feel to the menu.

Interactive Depth: Staggered entrance animations and hover effects that give the UI a tactile, high-quality response.

✨ Key Features

Showcase Focused: Purposely designed for high-resolution item presentation, removing the clutter of ordering systems to focus on visual storytelling.

PWA Ready: Includes a manifest.json configuration, allowing for "Add to Home Screen" installation on iPads, Android tablets, and smartphones.

Offline-First: Engineered to work without an internet connection once the local assets (fonts, icons, styles) are configured.

CSV-Powered Content: No database needed. Update categories, item names, prices, and descriptions simply by editing a single menu.csv file.

Responsive Layout: Automatically transitions between a spacious, grid-based tablet view and a sleek, vertical mobile experience.

🛠️ Technical Stack

HTML5 / CSS3: Semantic markup with heavy use of modern CSS features like backdrop-filter and keyframe animations.

Tailwind CSS: For a modern, utility-first responsive layout that ensures pixel-perfect consistency.

Vanilla JavaScript (ES6+): Light and efficient logic for CSV parsing, dynamic DOM injection, and category filtering.

Cairo Font: Integrated as a premium Arabic/Latin typeface to match the brand's elegance.

🚀 Installation & Setup

Clone the repository:

git clone [https://github.com/yourusername/lor-digital-menu.git](https://github.com/yourusername/lor-digital-menu.git)


Configure your Menu:
Open menu.csv and populate it with your data. The columns should be: Main Category, Sub Category, Item Name, Price, and Description.

Prepare Assets:

Place item images in ./images/menu/. (Naming convention: Item_Name.jpg).

Place your logo in ./images/logo.jpg.

Ensure fonts are in the ./fonts/ directory for offline use.

Deployment:
Because the app uses fetch() to read the CSV, it must be hosted on a web server (IIS, Apache, Nginx) or opened via a local environment (like VS Code Live Server) to avoid CORS policy restrictions.

📱 Performance

Zero Dependencies: Once configured for offline, the app requires zero external API calls.

Optimized for Touch: Large hit targets and smooth scrolling ensure ease of use on touchscreens.

Developed with a passion for excellence, specifically for Restaurant Cafe & Restaurant.
