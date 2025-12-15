# DeepField (Cosmic Monolith)

Gemini-style vertical slice: FastAPI -> React(Vite) + Tailwind + Framer Motion.

## What was wrong in the Gemini snippet (fixed here)
- **Tailwind purge**: gradient class names come from API, so Tailwind would purge them in production. Fixed by `safelist` in `frontend/tailwind.config.js`.
- **Missing months**: Gemini sample omitted several months → gallery looks sparse. Fixed by returning 12 months in backend.
- **Remote texture dependency**: replaced external stardust URL with local `frontend/public/textures/stardust.png`.
- **Backend import**: running `python backend/app/main.py` can break imports unless packaged. Fixed by adding backend dir to `sys.path`.

## Run

### Backend
```bash
cd backend
pip install -r requirements.txt
python app/main.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173

## Visual tuning
- Increased panel brightness/saturation and added screen glare + ambient backlight.
- Added bottom reflection to simulate a giant-screen exhibit wall.
- Gallery is full-bleed (100vw) to enhance immersion.
