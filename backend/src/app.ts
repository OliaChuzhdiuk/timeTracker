import express from "express";
import cors from "cors";
import timeEntryRoutes from "./routes/timeEntry.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/entries", timeEntryRoutes);

export default app;
