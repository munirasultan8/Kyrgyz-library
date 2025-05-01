# Kyrgyz Library

A responsive web application for exploring Kyrgyz literary works – books, articles and categories – with search, filtering and basic authentication.

---

## 1. Project Title & Description

**Kyrgyz Library** is a fully static front-end that **consumes a lightweight Flask API *only* for user authentication**. All book data is stored client-side. Visitors can:

* Browse featured Kyrgyz (and world) books presented in a modern card grid.
* Dive into dedicated *Books* page with powerful search / filter / sort tools.
* Read accompanying articles and explore curated categories.
* Create an account / log in (back-end powered by a Flask API) and save favourites.

The goal was to design an elegant, mobile-first showcase of Kyrgyz literature while practising vanilla-JS interactivity, Bootstrap utility classes and external API integration.

## 2. Tech Stack Used

| Layer | Technology |
|-------|------------|
| Mark-up | **HTML 5** |
| Styling | **CSS 3** (CSS variables), **Bootstrap 5.3**, **Font-Awesome 6** |
| Behaviour | **Vanilla JavaScript (ES6)** |
| Hosting (FE) | **Vercel** |
| Back-End API | **Python / Flask** (deployed on **Heroku**) |

## 3. Features

* Fixed sidebar on desktop / off-canvas hamburger menu on mobile.
* Hero section with animated rotating placeholder search bar.
* Quick-link pills for one-click category queries.
* Book cards with cover, description, rating, *Read now* CTA & favourite heart.
* Responsive masonry-like grid and smart card resizing.
* Separate *Books* page featuring:
  * Search (debounced)
  * Sort dropdown (relevance, A-Z, newest, rating)
  * Sticky filter panel (categories, language, rating, availability)
  * Client-side pagination styling
* Category boxes with overlay icons & gradient hover.
* Article cards with author & read-time chips.
* Authentication overlay (login / sign-up) that talks to Flask API.
* After login: profile chip converts to a dropdown with **Settings** and **Log Out**.
* Smooth-scroll navigation & active-link highlighting.
* Accent colour theme (#a91938) applied consistently via CSS variables.
* Fully responsive – tested down to **320 px** screens.

## 4. How to Run the Project

### Local

1. Clone or download this repository.
2. Open `index.html` in any modern browser – no build steps required.
3. The front-end will call the live Flask API hosted on Heroku 

> Note: If the Heroku dyno is asleep it may take a few seconds for the first API call to respond.

### Live Demo

The latest build is deployed on Vercel:

🔗 **https://kyrgyz-library.vercel.app**

(No local setup needed – just open the link.)

## 5. Screenshots

*(Screenshots omitted in Git repo to save space – feel free to check the live demo for a visual tour.)*

## 6. Team Members

| Name | Role |
|------|------|
| **Munira Sultanova** | Everything – design, front-end, back-end integration, deployment |

## 7. Challenges & Learning

* **Responsive complexity** – Ensuring the sidebar elegantly collapses into a sticky header while preserving off-canvas navigation.
* **Pure-JS search & filter** – Building a fast, debounced search with multi-facet filters without external frameworks.
* **Deployment pipeline** – Setting up Vercel for static hosting and Heroku for Flask API, handling CORS and environment variables.
* **Design consistency** – Maintaining a coherent colour palette and typography across pages via CSS variables.

These challenges deepened my understanding of vanilla JS DOM manipulation, Bootstrap's grid / utility system and cloud deployment nuances.

## 8. Future Improvements

1. Persist user favourites to the back-end and display them in a dedicated profile page.
2. Advanced full-text search powered by the API.
3. Admin dashboard for uploading new books / PDFs directly through the UI.
4. Convert to a Progressive Web App (PWA) for offline reading.

## 9. Project Structure (Front-End)

```
├── index.html            # Landing page (hero, categories, articles)
├── books.html            # Dedicated books search / filter page
├── viewbook.html         # Book detail + embedded PDF viewer
├── books.js              # Static book dataset + helpers
├── auth.js               # Authentication & profile-chip logic
├── /pdfs/                # Sample PDF files
└── README.md
```

Only vanilla HTML/CSS/JS – no bundlers or transpilers required.

## 10. API Overview (Flask)


| Method | Endpoint   | Purpose |
|--------|------------|---------|
| `POST` | `/login`   | Obtain JWT token (`email`, `password`) |
| `POST` | `/register`| Create account (`email`, `full_name`, `password`) |
| `GET`  | `/profile` | Return profile of authenticated user |

These endpoints are used exclusively for **login / registration / profile** – all catalog data is served statically on the client. Auth is performed via **Bearer Token** header: `Authorization: Bearer <token>`.




### Front-End (Vercel)

1. Create a new Vercel project from this repo (no build step).
2. Set **Framework Preset** → *Other*.
3. Specify `index.html` as the output.
4. Hit *Deploy* – Vercel will treat it as a static site.


## Accessibility & Performance

* Uses semantic HTML elements and `aria-label`s where needed.
* Colour palette checked for WCAG contrast (AA) where possible.
* Images include descriptive alt text.
* Minimal JS – no external runtime dependencies; loads in <1 s on 4G.

## License

MIT © 2024 Munira Sultanova

## Contact

Feel free to reach out via **msultanova@na.edu** for questions or collaborations.
