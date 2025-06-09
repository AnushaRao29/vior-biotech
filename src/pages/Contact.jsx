import React, { useState, useEffect, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from '../assets/background-contact.jpg';
import toast from 'react-hot-toast';
import { Texts, Links } from '../constants';

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
      toast.error(Texts.errorMsg.firstName);
      return;
    }
    if (!nameRegex.test(formData.lastName)) {
      toast.error(Texts.errorMsg.lastName);
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      toast.error(Texts.errorMsg.phone);
      return;
    }

    setStatus(Texts.contactPage.sendingStatus);

    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value) data.append(key, value);
    }

    try {
      const res = await fetch(`https://vior-server.onrender.com/api/send`, {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        toast.success(Texts.contactPage.successToast);
        setFormData(initialFormData);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        toast.error(Texts.contactPage.errorToast);
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
                    placeholder={Texts.contactPage.fieldPlaceholder.firstName}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    name="lastName"
                    placeholder={Texts.contactPage.fieldPlaceholder.lastName}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder={Texts.contactPage.fieldPlaceholder.emailID}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    placeholder={Texts.contactPage.fieldPlaceholder.phoneNum}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  name="company"
                  placeholder={Texts.contactPage.fieldPlaceholder.company}
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="companyType"
                  placeholder={Texts.contactPage.fieldPlaceholder.companyType}
                  value={formData.companyType}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <textarea
                  name="description"
                  placeholder={Texts.contactPage.fieldPlaceholder.description}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="jobTitle"
                  placeholder={Texts.contactPage.fieldPlaceholder.jobTitle}
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  name="country"
                  placeholder={Texts.contactPage.fieldPlaceholder.country}
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <textarea
                  name="message"
                  placeholder={Texts.contactPage.fieldPlaceholder.primarySource}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <div>
                  <label className="block mb-1 text-lg text-white font-medium">
                    {Texts.contactPage.attachments}
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
                  {Texts.contactPage.submitButton}
                </button>

                {status === Texts.contactPage.sendingStatus && (
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
                  <strong>{Texts.contactPage.email}:</strong>{' '}
                  <a
                    href={Links.mailTo}
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  >
                    {Links.mailID}
                  </a>
                </p>
                <p>
                  <strong>{Texts.contactPage.website}:</strong>{' '}
                  <a
                    href={Links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  >
                    {Links.website}
                  </a>
                </p>
                <p>
                  <strong>{Texts.contactPage.address}:</strong>{' '}
                  {Texts.contactPage.companyAddr}
                </p>
                <p>
                  <strong>{Texts.contactPage.phone}:</strong>{' '}
                  <a
                    href={Links.callTo}
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  >
                    {Links.phoneNum}
                  </a>
                </p>
                <p>
                  <strong>{Texts.contactPage.linkedIn}:</strong>{' '}
                  <a
                    href={Links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  >
                    {Links.linkedin}
                  </a>
                </p>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-white/20">
                <iframe
                  title={Texts.contactPage.location}
                  src={Links.googleMap}
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
