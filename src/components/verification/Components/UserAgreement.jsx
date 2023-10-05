import React from "react";

const UserAgreement = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Agreement</h2>
      <div className="bg-white rounded w-full"></div>
        <p>
          Welcome to [Your Website Name]! By accessing and using our website,
          you agree to comply with and be bound by the following terms and
          conditions:
        </p>
        <ol className="list-decimal mt-4 pl-6">
          <li className="mb-2">
            <p className="font-semibold">Acceptance of Terms</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed quis justo non leo feugiat malesuada.
            </p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Privacy Policy</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed quis justo non leo feugiat malesuada.
            </p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Intellectual Property</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed quis justo non leo feugiat malesuada.
            </p>
          </li>
          {/* Add more sections/terms here */}
        </ol>
        <p className="mt-4">
          Please review our full User Agreement and Privacy Policy for detailed
          information.
        </p>
      </div>
  );
};

export default UserAgreement;

