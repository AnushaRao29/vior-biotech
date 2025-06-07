import React from 'react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../assets/contactBackground-1.jpg';

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companyType: '',
    description: '',
    jobTitle: '',
    country: '',
    message: '',
    file: null,
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      setStatus(result.success ? 'Sent successfully!' : 'Failed to send.');
      if (result.success) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          companyType: '',
          description: '',
          jobTitle: '',
          country: '',
          message: '',
          file: null,
        });
      }
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-20 pt-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto rounded-3xl" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form Card */}
          <div className="rounded-2xl " data-aos="fade-right">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              encType="multipart/form-data"
            >
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              {/* Company Details */}
              <input
                name="company"
                placeholder="Company*"
                value={formData.company}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                name="companyType"
                placeholder="Type of Company*"
                value={formData.companyType}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                name="description"
                placeholder="Description*"
                value={formData.description}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                name="jobTitle"
                placeholder="Job Title*"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="input"
              />
              <input
                name="country"
                placeholder="Country*"
                value={formData.country}
                onChange={handleChange}
                required
                className="input"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Primary source where you heard about Vior*"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-primary-light"
              />

              {/* File Upload */}
              <div>
                <label className="block mb-1 text-sm text-white">
                  Attachments (if any):
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="block w-full text-sm  file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-primary file:text-white hover:file:bg-primary-dark"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition"
              >
                Submit
              </button>

              {status && (
                <p className="text-center text-sm text-primary-dark mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Map Card */}
          {/* Map Section with Details */}
          {/* Info + Map Column */}
          <div className="space-y-6">
            {/* Info Card */}
            <div
              className="rounded-2xl p-6 text-sm  shadow-md bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              style={{
                backgroundImage: `bg-white`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@viorbiotech.com"
                  className="text-primary hover:underline"
                >
                  info@viorbiotech.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href="https://viorbiotech.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  viorbiotech.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Plot No. 2/2/2, Gat No 627, Tal -
                Khed, Kuruli, Dist-Pune, Maharashtra, India, 410501
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+918660323478"
                  className="text-primary hover:underline"
                >
                  +91 86603 23478
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/vior-biotech-equipment-private-limited-1357aa313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  vior-biotech
                </a>
              </p>
            </div>

            {/* Map Card */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="VIOR Biotech Location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120917.09385323203!2d73.76959657098502!3d18.724070685395713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c95ba55e3a09%3A0x2cc906a4e1b826db!2sGate%20no%20627%2C%20Plot%202%2F2%2F2%2C%20Tal%2C%20Alandi%20Fata%2C%20Khed%2C%20Kurali%2C%20Maharashtra%20410501!3m2!1d18.7240887!2d73.85199829999999!5e0!3m2!1sen!2sin!4v1746133365456!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
