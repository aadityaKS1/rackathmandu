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

  // Reset previous errors
  setNameError('');
  setEmailError('');
  setSubjectError('');
  setMessageError('');

  let valid = true;

  // Full Name validation
  if (!fullName.trim()) {
    setNameError('Full name is required');
    valid = false;
  }

  // Email validation
  if (!validateEmail(email)) {
    setEmailError('Please enter a valid email address');
    valid = false;
  }

  // Subject validation
  if (!subject.trim()) {
    setSubjectError('Please select a subject');
    valid = false;
  }

  // Message validation
  if (!message.trim()) {
    setMessageError('Message cannot be empty');
    valid = false;
  }

  if (!valid) {
    setLoading(false);
    return; // Stop submission if any validation fails
  }

  try {
    const response = await axios.post(
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
    <div className="relative w-screen bg-white min-h-[924px] flex px-28 pt-24 gap-20">
      <form onSubmit={handleSubmit}>
        {/* Left Form Column */}
        <div className="flex-1 relative">
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl leading-[40px] font-bold text-[#3B519B] mb-10">
            Send Us a Message
          </h1>

          {/* Full Name */}
          <div className="mb-6">
            <label className="block font-inter text-sm font-medium leading-[22px] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => {
    setFullName(e.target.value);
    if (e.target.value.trim()) setNameError(''); // Clear error as soon as user types
  }}

              className="w-full max-w-[576px] h-[45px] px-3 font-inter text-sm font-normal leading-[22px]
              bg-white border border-gray-200 rounded-md outline-none
              hover:text-gray-600 hover:border-gray-300
              focus:text-gray-600 focus:border-gray-300
              disabled:text-gray-600 disabled:border-gray-300"
            />
            { nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p> }

          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block font-inter text-sm font-medium leading-[22px] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) setEmailError(''); // Clear error when valid
  }}

              className="w-full max-w-[576px] h-[45px] px-3 font-inter text-sm font-normal leading-[22px]
              bg-white border border-gray-200 rounded-md outline-none
              hover:text-gray-600 hover:border-gray-300
              focus:text-gray-600 focus:border-gray-300
              disabled:text-gray-600 disabled:border-gray-300"
            />
            {emailError && (
  <p className="text-red-500 text-sm mt-1">{emailError}</p>
)}

          </div>

          {/* Subject */}
          <div className="mb-6 relative w-full max-w-[576px]">
            <label className="block font-inter text-sm font-medium leading-[22px] mb-1">
              Subject
            </label>
            <select
              value={subject}
                onChange={(e) => {
    setSubject(e.target.value);
    if (e.target.value) setSubjectError(''); // Clear error as soon as selected
  }}
              className="w-full h-[38px] px-3 pr-8 font-inter text-sm font-normal leading-[22px] text-gray-500
              bg-gray-100 border border-gray-200 rounded-md outline-none
              hover:text-gray-500 hover:bg-gray-100 hover:border-gray-200
              focus:text-gray-500 focus:bg-gray-100 focus:border-gray-200
              disabled:text-gray-500 disabled:bg-gray-100 disabled:border-gray-200
              appearance-none"
            >
              <option value="">Select a subject</option>
              <option value="compliment">Compliment</option>
              <option value="complain">Complain</option>
              <option value="suggestion">Suggestion</option>
            </select>
            { subjectError && <p className="text-red-500 text-sm mt-1">{subjectError}</p> }

            <svg
              className="absolute top-2.5 right-3 w-4 h-4 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block font-inter text-sm font-medium leading-[22px] mb-1">
              Message
            </label>
            <textarea
              value={message}
               onChange={(e) => {
    setMessage(e.target.value);
    if (e.target.value.trim()) setMessageError(''); // Clear error as soon as typed
  }}
              className="w-full max-w-[576px] h-[116px] px-3 py-[7px] font-inter text-sm font-normal leading-[22px] text-gray-700
              bg-white border border-gray-200 rounded-md outline-none
              hover:border-gray-200 hover:bg-white
              focus:border-gray-200 focus:bg-white focus:shadow-[0_0_5px_#E5E7EB33]
              disabled:text-gray-600 disabled:bg-white disabled:border-gray-200
              resize-none"
            ></textarea>
            { messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p> }

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-[208px] h-[48px] px-3 flex items-center justify-center
    font-inter text-base font-medium leading-[26px] text-white
    bg-[#E42572] rounded-[10px] border-none
    hover:bg-[#9C134A] active:bg-[#7D0F3B] disabled:opacity-40`}
          >
            {loading ? 'Sending...' : 'Submit Message'}
          </button>
          {success && <p className="text-green-500 mt-2">{success}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}


        </div>
      </form>

      {/* Right Contact Column */}
      <div className="flex-1 relative">
        <h2 className="font-outfit text-[36px] leading-[40px] font-bold text-[#3B519B] mb-6">
          Contact Information
        </h2>

        <div className="w-full max-w-[591px] h-[252px] rounded-none overflow-hidden">
          <iframe
            title="Rotaract Club Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7934661068466!2d85.31803889999999!3d27.69277760000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b20e31bebd%3A0xcf40d59a7c501aea!2sRotary%20Club%20of%20Kathmandu!5e0!3m2!1sen!2snp!4v1763929113920!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-4 top-[2px] left-[12px] w-[382px] h-[48px]">
          <div className="flex m-3 items-center gap-4 top-[2px] left-[12px] w-[382px] h-[48px]">

            <img className=" top-[12px] left-[12px] h-[30px]" src={location} />

            <div>   <p className=" top-[2px] left-[64px] font-[500] text-[16px] leading-[24px] text-[#3B519B] font-outfit">
              Our Address
            </p>
              <p className=" top-[2px] left-[64px] font-[400] text-[16px] leading-[24px] text-[black] font-outfit">
                Rotary Hall, Thapathali
              </p>
            </div>

          </div>
          <div className="flex m-3 items-center gap-4 top-[2px] left-[12px] w-[382px] h-[48px]">

            <img className=" top-[12px] left-[12px] h-[30px]" src={business} />

            <div>   <p className=" top-[2px] left-[64px] font-[500] text-[16px] leading-[24px] text-[#3B519B] font-outfit">
              Email Us
            </p>
              <p className=" top-[2px] left-[64px] font-[400] text-[16px] leading-[24px] text-[black] font-outfit">
                secretary.rackathmandu@gmail.com
              </p>
            </div>

          </div>
          <div className="flex m-3 items-center gap-4 top-[2px] left-[12px] w-[382px] h-[48px]">

            <img className=" top-[12px] left-[12px] h-[30px]" src={phone} />

            <div>   <p className=" top-[2px] left-[64px] font-[500] text-[16px] leading-[24px] text-[#3B519B] font-outfit">
              Call Us
            </p>
              <p className=" top-[2px] left-[64px] font-[400] text-[16px] leading-[24px] text-[black] font-outfit">
                9861205110
              </p>
            </div>

          </div>
          <div className="flex m-3  items-center gap-4 top-[2px] left-[12px] w-[382px] h-[48px]">

            <img className=" top-[12px] left-[12px] h-[30px]" src={clock} />

            <div>   <p className=" top-[2px] left-[64px] font-[500] text-[16px] leading-[24px] text-[#3B519B] font-outfit">
              Meeting Time
            </p>
              <p className=" top-[2px] left-[64px] font-[400] text-[16px] leading-[24px] text-[black] font-outfit">
                Every Sunday at 5:00 P.M.
              </p>
            </div>

          </div>
          {/* <div className="flex m-5 mt-9  items-center gap-4 top-[2px] left-[12px] w-[382px] h-[48px]">

                <div className="flex space-x-2">
                                   <a href="https://www.facebook.com/rotaractkathmandu" target="_blank" rel="noopener noreferrer">
                                       <img src={facebook} alt="Facebook" className="w-9 h-9 rounded-full cursor-pointer" />
                                   </a>
                                   <a href="https://www.instagram.com/rotaractkathmandu" target="_blank" rel="noopener noreferrer">
                                       <img src={instagram} alt="Instagram" className="w-9 h-9 rounded-full cursor-pointer" />
                                   </a>
                                   <a href="https://www.linkedin.com/company/rotaract-kathmandu/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                       <img src={linkedin} alt="LinkedIn" className="w-9 h-9 rounded-full cursor-pointer" />
                                   </a>
                               </div>

          </div> */}




        </div>

      </div>
    </div>
  )
}

export default SecondContactComponent
