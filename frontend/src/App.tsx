import { useEffect, useState } from "react";
import type { TimeEntry } from "./types/TimeEntry";
import { getEntries } from "./api/timeEntries";
import { TimeEntryForm } from "./components/TimeEntryForm";
import { EntryList } from "./components/EntryList";
import { Totals } from "./components/Totals";

export default function App() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const fetchData = async () => {
    const data = await getEntries();
    setEntries(data);
  };

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const data = await getEntries();
        setEntries(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadEntries();
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Mini Time Tracker</h1>
      <TimeEntryForm onSave={fetchData} />
      <EntryList entries={entries} />
      <Totals entries={entries} />
    </div>
  );
}
