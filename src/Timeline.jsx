import { useState } from "react";
import { useTimeline } from "./context/TimelineContext";

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* heading */}
      <h1 className="text-2xl font-bold mb-4">
        Timeline
      </h1>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">

        <button
          className={`btn btn-sm ${filter === "All" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={`btn btn-sm ${filter === "Call" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setFilter("Call")}
        >
          Call
        </button>

        <button
          className={`btn btn-sm ${filter === "Text" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setFilter("Text")}
        >
          Text
        </button>

        <button
          className={`btn btn-sm ${filter === "Video" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setFilter("Video")}
        >
          Video
        </button>

      </div>

      {/* timeline list */}
      <div className="space-y-4">

        {filteredTimeline.length === 0 ? (
          <p className="text-gray-500">
            No interactions found
          </p>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow p-4"
            >

              <div className="flex justify-between items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>

                  <h2 className="font-semibold">
                    {item.title}
                  </h2>
                </div>

                {/* Type Badge */}
                <span
                  className={`badge ${
                    item.type === "Call"
                      ? "badge-success"
                      : item.type === "Text"
                      ? "badge-info"
                      : "badge-warning"
                  }`}
                >
                  {item.type}
                </span>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Timeline;