## Disney Clone

This is a **Disney Clone** project built with HTML, CSS, and JavaScript. It replicates the design and features of the Disney website, including elements like navigation, movie displays, and a user interface resembling the official Disney site.

### Features

* **Responsive layout** for all screen sizes.
* **Movie cards** displaying popular Disney titles.
* **Functional navigation bar** with hover effects.
* **Interactive UI elements** (modals, sliders, etc.).

### Live Demo

The project is deployed on Vercel:

[https://disney-clone-paila-karthiks-projects.vercel.app/](https://disney-clone-paila-karthiks-projects.vercel.app/)

> **Note:** This demo requires a VPN to access in India due to TMDB API restrictions.

### Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/disney-clone.git
   cd disney-clone
   ```

2. **Install dependencies:**

   * No additional dependencies; the project uses vanilla HTML, CSS, and JavaScript.

3. **Configure TMDB API Key:**

   * Sign up at [TMDB](https://www.themoviedb.org/) to get an API key.
   * Create a `.env` file in the root directory:

     ```ini
     TMDB_API_KEY=your_api_key_here
     ```
   * Ensure your local server can access the `.env` variables (e.g., using a simple Express setup or a static server with environment support).

4. **Run locally:**

   ```bash
   # If using a simple HTTP server (Node.js example)
   npx http-server .
   ```

5. **Open in browser:**
   Navigate to `http://localhost:8080` (or the port displayed by your server).

### VPN Recommendation

To view the live demo without geo-restriction issues, we recommend using a reliable VPN service:

* **ProtonVPN:** [https://protonvpn.com/](https://protonvpn.com/)
* **Windscribe:** [https://windscribe.com/](https://windscribe.com/)

Install and activate one of these VPNs, then access the live demo link above.

### Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **TMDB API**
* **Vercel** for deployment

### License

This project is open source and available under the [MIT License](LICENSE).
