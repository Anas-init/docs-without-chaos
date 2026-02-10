from fastapi import FastAPI
from document.router import router as doc_router 
from user.router import router as user_router
app=FastAPI(title="Docs App")

app.include_router(doc_router)
app.include_router(user_router)

@app.get("/")
def read_root():
    return {"Router registered"}

