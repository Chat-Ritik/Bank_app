import React, { useState } from "react";

const Credentials = () => {
  const [formData, setFormData] = useState({
    aadhar: "",
    pan: "",
    salaryReceipt: null, // You can use appropriate state for file upload
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateFormData = () => {
    let errors = {};
    const aadharRegex = /^\d{12}$/; // Adjust the regex pattern as needed for Aadhar number validation
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/; // Adjust the regex pattern as needed for PAN validation

    if (!aadharRegex.test(formData.aadhar)) {
      errors.aadhar = "Invalid Aadhar Number";
    }

    if (!panRegex.test(formData.pan)) {
      errors.pan = "Invalid PAN Number";
    }

    // Add validation for salary receipt file upload if needed

    return errors;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    // Handle file upload and update state accordingly
    // Example: setFormData({ ...formData, salaryReceipt: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or take appropriate action
      // Example: Call an API to submit the data
      setSubmitted(true);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Verification Details</h2>
      {submitted ? (
        <p className="text-green-500">Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="aadhar" className="block font-semibold mb-2">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
              required
            />
            {errors.aadhar && (
              <p className="text-red-500 mt-1">{errors.aadhar}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="pan" className="block font-semibold mb-2">
              PAN
            </label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
              required
            />
            {errors.pan && <p className="text-red-500 mt-1">{errors.pan}</p>}
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label htmlFor="salaryReceipt" className="block font-semibold mb-2">
              Upload Salary Receipt
            </label>
            <input
              type="file"
              id="salaryReceipt"
              name="salaryReceipt"
              onChange={handleFileUpload}
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-secondary focus:outline-none focus:bg-secondary"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Credentials;
