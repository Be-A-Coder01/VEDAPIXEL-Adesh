import React, { useState } from "react";

const ProfileDashboard = () => {
  const [user, setUser] = useState({
    name: "Adesh Mendekar",
    email: "adesh@example.com",
    number: "9876543210",
    city: "Bangalore",
  });

  const [bookings, setBookings] = useState([
    { id: 1, type: "Movie", event: "Inception", date: "2025-10-10" },
    { id: 2, type: "Sports", event: "India vs Australia", date: "2025-10-15" },
    { id: 3, type: "Play", event: "Hamlet", date: "2025-10-20" },
  ]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const handleUpdate = () => alert("Profile updated successfully!");
  const handleLogout = () => alert("Logged out successfully!");

  return (
    <div className="min-h-screen bg-[#0F1016]  text-white flex">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <div className="flex justify-between  px-4">
          <h2 className="text-2xl font-semibold text-white ">Profile</h2>
          <button className="bg-[#EB4E62] px-8 py-2 rounded-md">Logout</button>
        </div>
        <div className=" h-screen rounded-xl bg-[#18161F]">
          <section className="p-6 rounded-2xl shadow-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1F1B2E] border border-gray-600 focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1F1B2E] border border-gray-600 focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  value={user.number}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1F1B2E] border border-gray-600 focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#1F1B2E] border border-gray-600 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>
            <button
              onClick={handleUpdate}
              className="bg-[#EB4E62] px-8 py-2 rounded-md mt-6"
            >
              Update Profile
            </button>
          </section>

          {/* Bookings */}
          <section className=" p-6 rounded-2xl shadow-lg ">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Your Bookings
            </h2>
            {bookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-[#1F1B2E] p-4 rounded-lg border border-gray-600 shadow-sm"
                  >
                    <p className="font-semibold text-lg">{booking.event}</p>
                    <p className="text-gray-400">{booking.type}</p>
                    <p className="text-gray-300 mt-2">{booking.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No bookings found.</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
