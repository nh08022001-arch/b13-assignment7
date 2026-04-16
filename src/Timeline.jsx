import { useTimeline } from "./context/TimelineContext";

const Timeline = () => {
  const { timeline } = useTimeline();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      <div className="space-y-4">
        {timeline.length === 0 ? (
          <p className="text-gray-500">No interactions yet</p>
        ) : (
          timeline.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow p-4">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="font-semibold">{item.title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;