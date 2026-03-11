import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/social.png'
import linkedin from '../../assets/linkedin.png'
import { NavLink } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#193073] w-full relative px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                
                {/* Column 1: Rotaract Club Info */}
                <div>
                  
                    <p className="font-montserrat text-[18px] leading-[28px] font-bold text-white mb-4">
                        Contat
                    </p>
                   
                    {/* Contact Info */}
                    <ul className="space-y-2 text-[#D1D5DB] text-[14px] mb-4">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 text-white shrink-0" />
                            <span>Kathmandu, Nepal</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-white shrink-0" />
                            <span>+977-9861205110</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-white shrink-0" />
                            <span>secretary.rackathmandu@gmail.com</span>
                        </li>
                    </ul>

                    {/* Social Media */}
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
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <p className="font-montserrat text-[18px] leading-[28px] font-bold text-white mb-4">
                        Quick Links
                    </p>
                    <ul className="space-y-2 text-[#D1D5DB] font-open-sans text-[14px] leading-[20px]">
                        <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
                        <li><NavLink to="/events" className="hover:text-white transition-colors">Events</NavLink></li>
                        <li><NavLink to="/gallery" className="hover:text-white transition-colors">Gallery</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Column 3: Get Involved */}
                <div>
                    <p className="font-montserrat text-[18px] leading-[28px] font-bold text-white mb-4">
                        Get Involved
                    </p>
                    <ul className="space-y-2 text-[#D1D5DB] font-open-sans text-[14px] leading-[20px]">
                        <li>Join Us</li>
                        <li>Volunteer</li>
                        <li>Partner With Us</li>
                        <li>Donate</li>
                        <li>Upcoming Events</li>
                    </ul>
                </div>

                {/* Column 4: empty or future use */}
                <div></div>

            </div>

            <div className="mt-10 max-w-6xl mx-auto border-t border-[#1E40AF]"></div>
            <p className="text-[#9CA3AF] font-open-sans text-[14px] leading-[20px] font-normal text-center mt-6">
                &copy; Rotaract Club of Kathmandu. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;