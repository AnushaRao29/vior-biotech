// src/pages/Contact.jsx
import  { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setStatus(data.success ? "Sent successfully!" : "Failed to send.");
      if (data.success) setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="bg-white/70 shadow-md max-w-7xl mx-auto p-8">
      <h2 className="font-heading text-3xl font-semibold text-center mb-8 text-primary-dark">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Card */}
        <div className="bg-card shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit} className="font-heading space-y-4">
            {["name","email","phone","company"].map((field,i) => (
              <input
                key={i}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1) + (field!=="company"?"":" Name")}
                value={formData[field]}
                onChange={handleChange}
                required={field === "name" || field==="email"}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
            <button
              type="submit"
              className="font-heading w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition"
            >
              Send Message
            </button>
            {status && <p className="font-heading mt-2 text-center text-primary-dark">{status}</p>}
          </form>
        </div>

        {/* Map Card */}
        <div className="bg-card shadow-lg rounded-lg overflow-hidden">
          <div className="h-96">
            <iframe
              title="VIOR Biotech Location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120917.09385323203!2d73.76959657098502!3d18.724070685395713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c95ba55e3a09%3A0x2cc906a4e1b826db!2sGate%20no%20627%2C%20Plot%202%2F2%2F2%2C%20Tal%2C%20Alandi%20Fata%2C%20Khed%2C%20Kurali%2C%20Maharashtra%20410501!3m2!1d18.7240887!2d73.85199829999999!5e0!3m2!1sen!2sin!4v1746133365456!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{border:0}}
              allowFullScreen="" loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
