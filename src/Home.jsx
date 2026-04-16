import React from "react";
import friendsData from "./data/friends.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Hero section */}
      <div className="mb-10 text-center flex flex-col items-center">

        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-2 max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className="btn btn-primary mt-4">
          Add a Friend
        </button>

      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-2xl font-bold">{friendsData.length}</h2>
          <p className="text-sm text-gray-500">Total Friends</p>
        </div>

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-2xl font-bold">
            {friendsData.filter(f => f.status === "on-track").length}
          </h2>
          <p className="text-sm text-gray-500">On Track</p>
        </div>

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-2xl font-bold">
            {friendsData.filter(f => f.status === "overdue").length}
          </h2>
          <p className="text-sm text-gray-500">Need Attention</p>
        </div>

        <div className="card bg-base-200 p-4 text-center">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-sm text-gray-500">Interactions This Month</p>
        </div>

      </div>

      {/* friends section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {friendsData.map((friend) => (
            <Link
              to={`/friend/${friend.id}`}
              key={friend.id}
              className="card bg-base-100 shadow p-4 block hover:shadow-lg transition cursor-pointer"
            >

              {/* photo + name */}
              <div className="flex items-center gap-3">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h3 className="font-semibold">{friend.name}</h3>
                  <p className="text-sm text-gray-400">
                    {friend.days_since_contact} days ago
                  </p>
                </div>
              </div>

              {/* email */}
              <p className="text-xs text-gray-500 mt-2">
                {friend.email}
              </p>

              {/* Bio */}
              <p className="text-sm mt-2">
                {friend.bio}
              </p>

              {/* Tags */}
              <div className="flex gap-2 mt-3 flex-wrap">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="badge badge-outline">
                    {tag}
                  </span>
                ))}
              </div>

              {/* status */}
              <div className="mt-3">
                <span
                  className={`badge ${
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

            </Link>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Home;