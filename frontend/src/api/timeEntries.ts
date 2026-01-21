import type { TimeEntry } from "../types/TimeEntry";

const API_URL = "http://localhost:4000/api/entries";

export const getEntries = async (): Promise<TimeEntry[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createEntry = async (data: Omit<TimeEntry, "id">) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
};
