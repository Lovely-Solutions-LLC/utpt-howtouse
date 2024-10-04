// src/components/FAQs.js
import React from 'react';
import './FAQs.css';

const FAQs = () => {
  return (
    <section className="faqs-section section" data-aos="fade-up">
      <h3>FAQs</h3>
      <div className="faqs-grid">
        <div className="faq-item" data-aos="flip-up">
          <h4>How do I install the Ultimate Team Productivity Tool?</h4>
          <p>
            Installing the tool is simple. Navigate to the monday.com Apps Marketplace,
            search for "Ultimate Team Productivity Tool," and click "Add to monday.com."
          </p>
        </div>
        <div className="faq-item" data-aos="flip-up" data-aos-delay="100">
          <h4>Can I customize the dashboards?</h4>
          <p>
            Yes, our tool offers fully customizable dashboards. You can tailor them to
            fit your team's specific needs and preferences.
          </p>
        </div>
        <div className="faq-item" data-aos="flip-up" data-aos-delay="200">
          <h4>Is there a support team available?</h4>
          <p>
            Absolutely! Our dedicated support team is available 24/7 to assist you with
            any questions or issues you may encounter.
          </p>
        </div>
        <div className="faq-item" data-aos="flip-up" data-aos-delay="300">
          <h4>Does it integrate with other tools?</h4>
          <p>
            Yes, the Ultimate Team Productivity Tool seamlessly integrates with a variety
            of other applications to enhance your workflow and productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
