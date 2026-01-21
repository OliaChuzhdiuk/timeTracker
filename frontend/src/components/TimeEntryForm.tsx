import { useState } from "react";
import { createEntry } from "../api/timeEntries";

const projects = [
  "Viso Internal",
  "Client A",
  "Client B",
  "Personal Development",
];

export const TimeEntryForm = ({ onSave }: { onSave: () => void }) => {
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    project: "",
    hours: "",
    description: "",
  });

  const submit = async () => {
    if (!form.project || !form.hours || !form.description) {
      alert("All fields are required");
      return;
    }
    if (Number(form.hours) <= 0) {
      alert("Hours must be positive");
      return;
    }

    await createEntry({
      date: form.date,
      project: form.project,
      hours: Number(form.hours),
      description: form.description,
    });
    onSave();
    setForm({ ...form, project: "", hours: "", description: "" });
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <select
        value={form.project}
        onChange={(e) => setForm({ ...form, project: e.target.value })}
      >
        <option value="">Select project</option>
        {projects.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Hours"
        value={form.hours}
        onChange={(e) => setForm({ ...form, hours: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button onClick={submit}>Save</button>
    </div>
  );
};
