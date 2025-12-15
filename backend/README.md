# DeepField Backend

## Run (recommended)
From repository root:

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt

uvicorn app.main:app --reload --port 8000
```

Open: http://localhost:8000/
API: http://localhost:8000/api/cosmic-calendar
