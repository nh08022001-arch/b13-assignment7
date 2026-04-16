import { useTimeline } from "./context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();


  const counts = timeline.reduce(
    (acc, item) => {
      if (item.type === "Call") acc.Call += 1;
      if (item.type === "Text") acc.Text += 1;
      if (item.type === "Video") acc.Video += 1;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 }
  );

  const data = [
    { name: "Call", value: counts.Call },
    { name: "Text", value: counts.Text },
    { name: "Video", value: counts.Video },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"];

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Friendship Analytics
      </h1>

      <div className="card bg-base-100 shadow p-6">

        <h2 className="text-lg font-semibold text-center mb-4">
          By Interaction Type
        </h2>

        {timeline.length === 0 ? (
          <p className="text-center text-gray-500">
            No interactions yet
          </p>
        ) : (
          <div className="flex justify-center">
            <PieChart width={320} height={320}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;