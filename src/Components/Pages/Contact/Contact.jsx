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

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setMessage("Message sent successfully!");
    setMessageType("success");
  };

  return (
    <section className="contact-our-area pb-3" id="contact">
      <div className="contactt pb-5 pt-4 text-black">
        <div className="row">
          <div className="col-12">
            <div className="mb-4 pt-5">
              {message && (
                <div className={`alert alert-${messageType}`}>{message}</div>
              )}
              <h5>Contact Us</h5>
            </div>
          </div>
        </div>

        <div className="row gy-4 justify-content-between mx-3">
          {/* Contact Form */}
          <div className="col-12 col-md-7" id="contact-form">
            <div className="contact_form_area">
              <form onSubmit={handleSubmit} id="main_contact_form">
                <div className="row gy-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">First Name *</label>
                    <input
                      type="text"
                      className="form-control border-2 shadow-sm fs-5"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">Last Name *</label>
                    <input
                      type="text"
                      className="form-control border-2 shadow-sm fs-5"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">Email *</label>
                    <input
                      type="email"
                      className="form-control border-2 shadow-sm fs-5"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">Phone Number *</label>
                    <input
                      type="text"
                      className="form-control border-2 shadow-sm fs-5"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

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

          {/* Contact Information */}
          <div className="col-12 col-md-4">
            <div className="contact-information">
              <div className="mb-3">
                <h4 id="conh" className="mb-1 fs-4 fw-bold">
                  Address:
                </h4>
                <p className="fs-4">184 Main Collins Street, Las Vegas</p>
              </div>
              <div className="mb-3">
                <h4 id="conh" className="mb-1 fs-4 fw-bold">
                  Phone:
                </h4>
                <p className="fs-4">(226) 446 9731</p>
              </div>
              <div className="mb-3">
                <h4 id="conh" className="mb-1 fs-4 fw-bold">
                  Email:
                </h4>
                <p className="fs-4">confer@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
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
