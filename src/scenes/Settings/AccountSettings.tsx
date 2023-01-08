import React from "react";

const AccountSettings: React.FC = () => {
  return (
    <div>
      <input
        type="email"
        placeholder="email"
        className="bg-gray-200 mt-4 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none leading-none focus:bg-white focus:border-purple-500"
      />
    </div>
  );
};

export default AccountSettings;
