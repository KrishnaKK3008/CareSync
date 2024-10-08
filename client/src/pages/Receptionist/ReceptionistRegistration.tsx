import React, { useState } from "react";
import NewRegistration from "../../components/Receptionist/NewRegistration";

interface RegistrationProps {
  registrations: {
    name: string;
    age: string;
    gender: string;
    department: string;
    visitDate: string;
    contact: string;
    register: string;
    visit: string;
  }[];
}

const ReceptionistRegistration: React.FC<RegistrationProps> = ({ registrations: initialRegistrations }) => {
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewRegistrationClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleNewRegistration = (formData: {
    name: string;
    age: string;
    gender: string;
    department: string;
    visitDate: string;
    contact: string;
    nationalId: string;
  }) => {
    const newRegistration = {
      ...formData,
      register: "Registered",
      visit: "Scheduled"
    };
    
    setRegistrations([...registrations, newRegistration]);

    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Receptionist Dashboard</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={handleNewRegistrationClick}
          >
            + New Registration
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 shadow-sm rounded-md">
            <div className="text-gray-600">Total Registrations</div>
            <div className="text-lg font-semibold">100</div>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-md">
            <div className="text-blue-600">Male: 50</div>
            <div className="text-red-600">Female: 5</div>
            <div className="text-green-600">Elder: 45</div>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-md">
            <div className="text-green-600">Approved: 50</div>
            <div className="text-yellow-600">Pending: 50</div>
          </div>
        </div>

        {/* Registrations Table */}
        <div className="bg-white shadow-sm rounded-md p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Patient</th>
                <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Date</th>
                <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Gender</th>
                <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Register</th>
                <th className="px-4 py-2 text-left text-gray-700 bg-gray-100">Visit</th>
                <th className="px-4 py-2 text-left text-gray-700 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((row, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.visitDate}</td>
                  <td className="px-4 py-2">{row.gender}</td>
                  <td className="px-4 py-2">{row.register}</td>
                  <td className="px-4 py-2">{row.visit}</td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 hover:underline">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for New Registration */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-md shadow-lg relative">
              <NewRegistration onNewRegistration={handleNewRegistration} />
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceptionistRegistration;
