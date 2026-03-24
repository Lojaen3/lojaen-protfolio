# Portfolio (Vite + React)

## Contact form (no backend)

Messages are delivered to your inbox using one of these — **pick one** and add it to `.env`:

| Variable | What it does |
|----------|----------------|
| **`VITE_WEB3FORMS_ACCESS_KEY`** | [Web3Forms](https://web3forms.com) — free, sends email to the address you register there. Recommended. |
| **`VITE_FORMSPREE_FORM_ID`** | [Formspree](https://formspree.io) — form endpoint ID. |
| **`VITE_CONTACT_EMAIL`** | Opens the visitor’s mail app with a pre-filled message (no third-party signup; they must click Send). |

Copy `.env.example` to `.env` and set **one** of the keys above.

## Other env (optional)

| Variable | Purpose |
|----------|---------|
| `VITE_HERO_IMAGE` | Hero image URL |
| `VITE_PROJECT_IMAGES` | JSON array of project image URLs |

## Development

```bash
npm install
npm run dev
```
