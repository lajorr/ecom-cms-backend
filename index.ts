import express from "express";

const app: express.Application = express();
const PORT: number = 8080





app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));