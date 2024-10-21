import React, { useState } from "react";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle
  const [formData, setFormData] = useState({
    username: "vendor_name",
    email: "vendor@example.com",
    password: "",
    notifications: true,
    theme: "light",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission or save settings
    console.log("Settings saved:", formData);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition duration-300`}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg ${
            isDarkMode ? "bg-gray-700" : "bg-blue-600 text-white"
          } hover:bg-blue-700 transition`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } max-w-lg mx-auto`}
      >
        {/* Account Settings */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

          {/* Username */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              } transition`}
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              } transition`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              } transition`}
              placeholder="Enter your password"
            />
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleInputChange}
              className={`mr-2 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } border ${
                isDarkMode ? "border-gray-600" : "border-gray-300"
              } rounded-lg`}
            />
            <label className="font-semibold">Enable Email Notifications</label>
          </div>
        </section>

        {/* Theme Settings */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Theme</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Choose Theme:</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              } transition`}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>
        </section>

        {/* Save Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 rounded-lg text-white ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          } transition`}
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
