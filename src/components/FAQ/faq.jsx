import './faq.css'; 
import faqs from './faq.js';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (indexNum) => {
    setOpenIndex(openIndex === indexNum ? null : indexNum);
  };

  return (
    <>
      <div className="faq-container">
        <h2>FAQs</h2>
        {faqs.map((faq, indexNum) => (
          <div key={indexNum} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(indexNum)}>
              <div className="question-text">{faq.question}</div>
              {openIndex === indexNum ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
            </div>
            <div className={`faq-answer ${openIndex === indexNum ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;