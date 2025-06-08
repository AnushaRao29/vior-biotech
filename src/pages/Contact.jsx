import React, { useState, useEffect, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../assets/contactBackground-6.jpg';
import toast from 'react-hot-toast';

export const Contact = () => {
  const fileInputRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const initialFormData = {
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
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');

  const handleChange = useCallback(e => {
    const { name, value, files } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'file' ? files[0] : value,
    }));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(formData.firstName)) {
      toast.error('First name should contain only letters.');
      return;
    }
    if (!nameRegex.test(formData.lastName)) {
      toast.error('Last name should contain only letters.');
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Phone number should be exactly 10 digits.');
      return;
    }

    setStatus('Sending...');

    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value) data.append(key, value);
    }

    try {
      const res = await fetch(`http://localhost:3001/api/send`, {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData(initialFormData);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while sending the message.');
    }

    setStatus('');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300';

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-shadow bg-center bg-no-repeat px-4 py-20 pt-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-7xl mx-auto rounded-3xl" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form Section */}
            <div
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(16,185,129,0.4)] p-8"
              data-aos="fade-right"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                encType="multipart/form-data"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  name="company"
                  placeholder="Company*"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="companyType"
                  placeholder="Type of Company*"
                  value={formData.companyType}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="description"
                  placeholder="Description*"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="jobTitle"
                  placeholder="Job Title*"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="country"
                  placeholder="Country*"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <textarea
                  name="message"
                  placeholder="Primary source where you heard about Vior*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} h-32 resize-none`}
                />

                <div>
                  <label className="block mb-1 text-lg text-white font-medium">
                    Attachments (if any):
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    ref={fileInputRef}
                    className="block w-full text-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-emerald-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Submit
                </button>

                {status === 'Sending...' && (
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-emerald-500" />
                  </div>
                )}

                {status && (
                  <div className="flex justify-center mt-2">
                    <span className="text-lg text-white animate-pulse">
                      {status}
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Info and Map Section */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(16,185,129,0.4)] p-6 text-lg text-white space-y-2">
                {' '}
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@viorbiotech.com"
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  >
                    info@viorbiotech.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://viorbiotech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
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
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
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
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  >
                    vior-biotech
                  </a>
                </p>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-white/20">
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
    </>
  );
};
