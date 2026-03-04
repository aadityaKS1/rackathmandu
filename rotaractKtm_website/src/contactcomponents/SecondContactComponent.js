import React, { useState } from 'react'
import axios from 'axios'
import business from '../assets/business.png'
import clock from '../assets/clock.png'
import phone from '../assets/phone-call.png'
import location from '../assets/location.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/social.png'
import linkedin from '../assets/linkedin.png'

function SecondContactComponent() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setNameError('');
    setEmailError('');
    setSubjectError('');
    setMessageError('');

    let valid = true;

    if (!fullName.trim()) {
      setNameError('Full name is required');
      valid = false;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (!subject.trim()) {
      setSubjectError('Please select a subject');
      valid = false;
    }

    if (!message.trim()) {
      setMessageError('Message cannot be empty');
      valid = false;
    }

    if (!valid) {
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        'http://127.0.0.1:8000/formsubmitted/form/',
        {
          full_name: fullName,
          email: email,
          subject: subject,
          message: message,
        }
      );

      setSuccess('Message sent successfully!');
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT - FORM */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#3B519B] mb-8">
              Send Us a Message
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (e.target.value.trim()) setNameError('');
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B519B]"
                />
                {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (validateEmail(e.target.value)) setEmailError('');
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B519B]"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (e.target.value) setSubjectError('');
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B519B]"
                >
                  <option value="">Select a subject</option>
                  <option value="compliment">Compliment</option>
                  <option value="complain">Complain</option>
                  <option value="suggestion">Suggestion</option>
                </select>
                {subjectError && <p className="text-red-500 text-sm mt-1">{subjectError}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (e.target.value.trim()) setMessageError('');
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B519B]"
                ></textarea>
                {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#E42572] hover:bg-[#9C134A] text-white px-6 py-3 rounded-md font-semibold transition disabled:opacity-40"
              >
                {loading ? 'Sending...' : 'Submit Message'}
              </button>

              {success && <p className="text-green-500">{success}</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B519B] mb-8">
              Contact Information
            </h2>

            {/* Map */}
            <div className="mb-8">
              <iframe
                title="Rotaract Club Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7934661068466!2d85.31803889999999!3d27.69277760000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b20e31bebd%3A0xcf40d59a7c501aea!2sRotary%20Club%20of%20Kathmandu!5e0!3m2!1sen!2snp!4v1763929113920!5m2!1sen!2snp"
                className="w-full h-64 rounded-md border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex items-start gap-4">
                <img src={location} className="h-8" />
                <div>
                  <p className="font-semibold text-[#3B519B]">Our Address</p>
                  <p>Rotary Hall, Thapathali</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <img src={business} className="h-8" />
                <div>
                  <p className="font-semibold text-[#3B519B]">Email Us</p>
                  <p>secretary.rackathmandu@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <img src={phone} className="h-8" />
                <div>
                  <p className="font-semibold text-[#3B519B]">Call Us</p>
                  <p>9861205110</p>
                </div>
              </div>

              {/* Meeting */}
              <div className="flex items-start gap-4">
                <img src={clock} className="h-8" />
                <div>
                  <p className="font-semibold text-[#3B519B]">Meeting Time</p>
                  <p>Every Sunday at 5:00 P.M.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SecondContactComponent