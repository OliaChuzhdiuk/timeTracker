import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (_, res) => {
  const entries = await prisma.timeEntry.findMany({
    orderBy: { date: "desc" },
  });
  res.json(entries);
});

router.post("/", async (req, res) => {
  const { date, project, hours, description } = req.body;

  if (!date || !project || !hours || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (hours <= 0) {
    return res.status(400).json({ message: "Hours must be positive" });
  }

  const totalPerDay = await prisma.timeEntry.aggregate({
    where: { date },
    _sum: { hours: true },
  });

  if ((totalPerDay._sum.hours || 0) + hours > 24) {
    return res.status(400).json({ message: "Max 24 hours per day" });
  }

  const entry = await prisma.timeEntry.create({
    data: { date, project, hours, description },
  });

  res.status(201).json(entry);
});

export default router;
