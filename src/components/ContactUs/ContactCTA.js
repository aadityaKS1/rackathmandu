import React from "react";
import { Facebook, MessageCircle } from "lucide-react";

function ContactCTA() {
    return (
        <div className="w-full bg-blue-50 py-16 mt-8">
            <div className="max-w-5xl mx-auto px-4 text-center">

                <h2 className="text-3xl sm:text-4xl font-bold text-[#193172] mb-6">
                    Let's Make a Difference Together
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    We welcome individuals who are passionate about community service
                    and making a positive impact. Reach out to us through any of our
                    contact channels.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/9779801234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 rounded-lg hover:shadow-md hover:scale-105 transition"
                    >
                        <MessageCircle size={20} />
                        WhatsApp: +977 9801234567
                    </a>

                    {/* Facebook Messenger */}
                    <a
                        href="https://m.me/rotaractkathmandu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 rounded-lg hover:shadow-md hover:scale-105 transition"
                    >
                        <Facebook size={20} />
                        Facebook Messenger
                    </a>

                </div>

            </div>
        </div>
    );
}

export default ContactCTA;