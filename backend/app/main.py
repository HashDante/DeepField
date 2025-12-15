import os
import sys
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

_THIS_FILE = os.path.abspath(__file__)
_BACKEND_DIR = os.path.dirname(os.path.dirname(_THIS_FILE))  # .../backend
if _BACKEND_DIR not in sys.path:
    sys.path.insert(0, _BACKEND_DIR)

from app.services.cosmic_data import get_cosmic_timeline  # noqa: E402

app = FastAPI(title="DeepField API")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "DeepField Backend is running. Look deep."}

@app.get("/api/cosmic-calendar")
def get_calendar():
    return get_cosmic_timeline()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True, app_dir=_BACKEND_DIR)
