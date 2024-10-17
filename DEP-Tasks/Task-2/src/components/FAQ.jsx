import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);  

  const faqs = [
    { question: "What is Netflix?", answer: "Netflix is a popular streaming service that allows users to watch a wide variety of TV shows, movies, documentaries, and more on internet-connected devices. It operates on a subscription-based model, where users pay a monthly fee to access its content without ads. Netflix offers both original programming, like hit series Stranger Things and The Crown, as well as licensed content from other studios" },
    { question: "How much does Netflix costs?", answer: "Standard with Ads: $6.99 per month. This plan includes HD streaming on two screens simultaneously, but comes with ads" },
    { question: "Is Netflix good for kids?", answer: "Yes, Netflix can be a good platform for kids, thanks to its dedicated Netflix Kids profile and extensive library of family-friendly content" },
    { question: "where can i watch?", answer: "You can watch content on your mobile via streaming apps like Netflix, Hulu, Amazon Prime Video, Disney+, or YouTube" },
    { question: "how do i cancel?", answer: "To cancel a subscription, go to the app or website of the service, find the account or subscription settings, and follow the instructions to cancel or manage your subscription" }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <div className="bg-black-200 p-5 lg:max-w-6xl md:max-w-6xl mx-auto  py-10">
      <h2 className="   text-white lg:text-5xl md:text-5xl mb-16 font-bold text-center text-3xl">Frequently Asked Questions</h2>
      <div className="space-y-3 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#2d2d2d]  overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-2 bg-[#2d2d2d] text-white flex justify-between items-center"
            >
              {faq.question}
              <span className="text-white text-xl bg-transparent">{openFAQ === index ? '-' : '+'}</span>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openFAQ === index ? 'max-h-[200px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="px-4 bg-black text-white">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    <div className='bg-gray-500 h-2.5'>

      </div>
    </div>
    
  );
};

export default FAQ;
