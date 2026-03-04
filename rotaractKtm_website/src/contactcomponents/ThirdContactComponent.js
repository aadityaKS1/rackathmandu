import React from 'react'
import messanger from '../assets/messenger_3128368.png'
import whatsapp from '../assets/whatsapp_1231202.png'

function ThirdContactComponent() {
    return (
        <section className="w-full bg-[#F9FAFB] py-20">
            
            <div className="max-w-6xl mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
                
                {/* Title */}
                <p className="font-outfit text-3xl sm:text-4xl font-bold text-[#3B519B]">
                    Let's Make a Difference Together
                </p>

                {/* Description */}
                <p className="font-inter text-base text-[#4B5563] 
                              max-w-2xl mt-6">
                    We welcome individuals who are passionate about community service and making a positive impact. 
                    Reach out to us through any of our contact channels.
                </p>

                {/* Button Row */}
                <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full sm:w-auto">

                    {/* Button 1 */}
                    <a 
    href="https://wa.me/9779861205110"
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-4 
               px-6 py-4 w-full sm:w-auto
               font-inter text-lg font-medium text-[#374151] 
               bg-white rounded-lg border border-[#E5E7EB]
               shadow-sm hover:shadow-md hover:-translate-y-1 
               transition duration-300"
>
    <img 
        src={whatsapp} 
        alt="WhatsApp" 
        className="w-8 h-8 rounded-full" 
    />
    <span>Contact us on WhatsApp</span>
</a>
                    {/* Button 2 */}
                    <a 
                        href="https://www.messenger.com/t/256744404356757" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-4 
                                   px-6 py-4 w-full sm:w-auto
                                   font-inter text-lg font-medium text-[#374151] 
                                   bg-white rounded-lg border border-[#E5E7EB]
                                   shadow-sm hover:shadow-md hover:-translate-y-1 
                                   transition duration-300"
                    >
                        <img 
                            src={messanger} 
                            alt="LinkedIn" 
                            className="w-8 h-8 rounded-full" 
                        />
                        <span>Contact us on Messanger</span>
                    </a>

                </div>

            </div>

        </section>
    )
}

export default ThirdContactComponent