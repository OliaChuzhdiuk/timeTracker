import type { TimeEntry } from "../types/TimeEntry";

type Props = {
  entries: TimeEntry[];
};

export const Totals = ({ entries }: Props) => {
  const totalsByDate = entries.reduce<Record<string, number>>(
    (acc, entry) => {
      acc[entry.date] = (acc[entry.date] || 0) + entry.hours;
      return acc;
    },
    {}
  );

  const grandTotal = entries.reduce(
    (sum, entry) => sum + entry.hours,
    0
  );

  return (
    <div style={{ marginTop: "24px" }}>
      <h2>Totals</h2>

      {Object.entries(totalsByDate).map(([date, total]) => (
        <div key={date}>
          {date}: <strong>{total}h</strong>
        </div>
      ))}

      <hr />

      <div>
        Grand Total: <strong>{grandTotal}h</strong>
      </div>
    </div>
  );
};
