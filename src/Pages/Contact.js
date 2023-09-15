import React, { useEffect, useState } from "react";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
// import Stack from "@mui/material/Stack";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("formDataArray");
    if (store) {
      setFormDataArray(JSON.parse(store));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage.setItem("formData", JSON.stringify(formData));
    const newFormDataArray = [...formDataArray, formData];
    setFormData(newFormDataArray);
    localStorage.setItem("formDataArray", JSON.stringify(newFormDataArray));
    //  console.log(store,'2828')
    setFormData({
      name: "",
      email: "",
      subject: "",
    });

    // try {
    //   const response = await fetch("End Point", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log("Form data sent successfully!");
    //   } else {
    //     <Alert severity="error">Failed to send form data.</Alert>;
    //     alert("Failed to send form data.");
    //     // // <div className="alert-container">
    //     //   {/* <Stack sx={{ width: "50%" }} spacing={2}> */}

    //     //   {/* </Stack> */}
    //     // // </div>;
    //     console.error("Failed to send form data.");
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
