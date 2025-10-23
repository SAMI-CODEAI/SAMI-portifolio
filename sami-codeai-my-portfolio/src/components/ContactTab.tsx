import React from "react";

const ContactTab: React.FC = () => (
  <div className="space-y-6">
    <div className="tab-content-header">
      <h2>contact</h2>
    </div>
    
    <div className="space-y-4">
      <div className="contact-item">
        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">📧</span>
          <div>
            <div className="text-green-300 font-semibold">Email</div>
            <div className="text-green-400/80">samiksha.thogeti@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="contact-item">
        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">💼</span>
          <div>
            <div className="text-green-300 font-semibold">LinkedIn</div>
            <div className="text-green-400/80">linkedin.com/in/samiksha-thogeti</div>
          </div>
        </div>
      </div>

      <div className="contact-item">
        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">🐙</span>
          <div>
            <div className="text-green-300 font-semibold">GitHub</div>
            <div className="text-green-400/80">github.com/SAMI-CODEAI</div>
          </div>
        </div>
      </div>

      <div className="contact-item">
        <div className="flex items-center gap-4">
          <span className="text-green-400 text-xl">📱</span>
          <div>
            <div className="text-green-300 font-semibold">Phone</div>
            <div className="text-green-400/80">+91-9063263893</div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/20">
      <p className="text-green-400/80 italic">
        Feel free to reach out for collaborations, questions, or just to say hello!
      </p>
    </div>
  </div>
);

export default ContactTab;
