import type { TimeEntry } from "../types/TimeEntry";

type Props = {
  entries: TimeEntry[];
};

export const EntryList = ({ entries }: Props) => {
  const grouped = entries.reduce<Record<string, TimeEntry[]>>((acc, entry) => {
    if (!acc[entry.date]) {
      acc[entry.date] = [];
    }
    acc[entry.date].push(entry);
    return acc;
  }, {});

  return (
    <div>
      <h2>Entry History</h2>

      {Object.keys(grouped).map((date) => (
        <div key={date} style={{ marginBottom: "16px" }}>
          <h3>{date}</h3>

          {grouped[date].map((entry) => (
            <div
              key={entry.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 80px 2fr",
                gap: "8px",
                padding: "4px 0",
              }}
            >
              <span>{entry.project}</span>
              <span>{entry.hours}h</span>
              <span>{entry.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
