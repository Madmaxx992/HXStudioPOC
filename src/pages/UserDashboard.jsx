import React from 'react';
import DropdownMenu from '../components/Dropdown';

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purple-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <DropdownMenu /> {/* Add the DropdownMenu component here */}
      </header>

      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">Welcome to your dashboard!</h2>
        <p className="text-lg text-gray-700">Here you can manage your profile, view your tasks, and more.</p>
        {/* Add more user-specific content here */}
      </main>
    </div>
  );
};

export default UserDashboard;
