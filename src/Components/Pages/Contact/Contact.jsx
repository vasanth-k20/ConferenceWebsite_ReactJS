import React, { useState } from "react";
import "./Contact.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({ message: "", type: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback({ message: "Message sent successfully!", type: "success" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setFeedback({ message: result.error || "Failed to send message.", type: "danger" });
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({ message: "An error occurred while sending the message.", type: "danger" });
    }
  };

  return (
    <section className="contact-our-area pb-3" id="contact">
      <div className="contactt pb-5 pt-4 text-black">
        <div className="row">
          <div className="col-12">
            <div className="mb-4 pt-5">
              {feedback.message && (
                <div className={`alert alert-${feedback.type}`}>{feedback.message}</div>
              )}
              <h5>Contact Us</h5>
            </div>
          </div>
        </div>

        <div className="row gy-4 justify-content-between mx-3">
          <div className="col-12 col-md-7">
            <div className="contact_form_area">
              <form onSubmit={handleSubmit}>
                <div className="row gy-3">
                  {[
                    { name: "firstName", type: "text", placeholder: "First Name" },
                    { name: "lastName", type: "text", placeholder: "Last Name" },
                    { name: "email", type: "email", placeholder: "Email" },
                    { name: "phoneNumber", type: "text", placeholder: "Phone Number" },
                  ].map((field, index) => (
                    <div className="col-12 col-md-6" key={index}>
                      <label className="form-label fw-bold">
                        {field.placeholder} *
                      </label>
                      <input
                        type={field.type}
                        className="form-control border-2 shadow-sm fs-5"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  ))}

                  <div className="col-12">
                    <label className="form-label fw-bold">Message *</label>
                    <textarea
                      className="form-control border-2 shadow-sm fs-5"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-start consub mt-4">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="contact-information">
              {[
                { label: "Address", value: "184 Main Collins Street, Las Vegas" },
                { label: "Phone", value: "(226) 446 9731" },
                { label: "Email", value: "confer@gmail.com" },
              ].map((info, index) => (
                <div className="mb-3" key={index}>
                  <h4 className="mb-1 fs-4 fw-bold">{info.label}:</h4>
                  <p className="fs-4">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308436.5138084717!2d79.09197384202913!3d12.941258620178797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3893a209c55b%3A0xb3649fe847b74dca!2sBrain%20Insight!5e1!3m2!1sen!2sin!4v1739039836803!5m2!1sen!2sin"
          height="450"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
}
