import React from "react"; 
import map from '../../assets/Map.png';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

function ContactForm() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT - FORM */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#193172] mb-8">
              Send Us a Message
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Events</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-semibold transition">
                Submit Message
              </button>
            </div>
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#193172] mb-8">
              Contact Information
            </h2>

            {/* Map */}
            <div className="mb-8">
              <img
                src={map}
                alt="Map"
                className="w-full rounded-md"
              />
            </div>

            <div className="space-y-6">

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/X4uRD5bdspaes2698"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-2 rounded-md hover:bg-gray-50 transition"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="text-[#193172]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#193172]">Our Address</h4>
                  <p className="text-gray-600">
                    Rotary Hall, Thapathali Road Kathmandu 44600, Nepal
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@rotaractkathmandu.org"
                className="flex items-start gap-4 p-2 rounded-md hover:bg-gray-50 transition"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-[#193172]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#193172]">Email Us</h4>
                  <p className="text-gray-600">
                    info@rotaractkathmandu.org
                  </p>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+97714123456"
                className="flex items-start gap-4 p-2 rounded-md hover:bg-gray-50 transition"
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-[#193172]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#193172]">Call Us</h4>
                  <p className="text-gray-600">+977 1 4123456</p>
                </div>
              </a>

              {/* Meeting Times */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="text-[#193172]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#193172]">Meeting Times</h4>
                  <p className="text-gray-600">
                    Every Sunday at 5:00 PM <br />
                    Hotel Himalaya, Kupondole
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/rotaractkathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#193172] text-white p-3 rounded-full hover:scale-105 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/rotaractkathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#193172] text-white p-3 rounded-full hover:scale-105 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/rotaractkathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#193172] text-white p-3 rounded-full hover:scale-105 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;