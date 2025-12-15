# DeepField Frontend

## Run
From repository root:

```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173

Notes:
- The frontend calls `/api/cosmic-calendar` and relies on the Vite proxy configured in `vite.config.ts`.
- Ensure backend is running on http://localhost:8000
