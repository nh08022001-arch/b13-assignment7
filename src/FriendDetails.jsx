import { useParams } from "react-router-dom";
import friendsData from "./data/friends.json";

const FriendDetails = () => {
  const { id } = useParams();

  const friend = friendsData.find(
    (item) => item.id === parseInt(id)
  );

  if (!friend) {
    return <p className="p-6">Friend not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* header */}
      <div className="flex items-center gap-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full"
        />

        <div>
          <h1 className="text-2xl font-bold">{friend.name}</h1>
          <span
            className={`badge mt-2 ${
              friend.status === "overdue"
                ? "badge-error"
                : friend.status === "almost-due"
                ? "badge-warning"
                : "badge-success"
            }`}
          >
            {friend.status}
          </span>
        </div>
      </div>

      {/* info grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-xl font-bold">
            {friend.days_since_contact}
          </h2>
          <p className="text-sm">Days Since Contact</p>
        </div>

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-xl font-bold">
            {friend.goal}
          </h2>
          <p className="text-sm">Goal (Days)</p>
        </div>

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-sm font-bold">
            {friend.next_due_date}
          </h2>
          <p className="text-sm">Next Due</p>
        </div>

      </div>

      {/* tags */}
      <div className="flex gap-2 mt-6 flex-wrap">
        {friend.tags.map((tag, i) => (
          <span key={i} className="badge badge-outline">
            {tag}
          </span>
        ))}
      </div>

      {/* bio */}
      <div className="mt-6">
        <h3 className="font-semibold">Relationship Note</h3>
        <p className="text-gray-600 mt-2">{friend.bio}</p>
      </div>

      {/* actions */}
      <div className="mt-8 flex flex-wrap gap-3">

        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-outline">Snooze 2 weeks</button>
        <button className="btn btn-success">Call</button>
        <button className="btn btn-info">Text</button>
        <button className="btn btn-secondary">Video</button>
        <button className="btn btn-error">Delete</button>

      </div>

    </div>
  );
};

export default FriendDetails;