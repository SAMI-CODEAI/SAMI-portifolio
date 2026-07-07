// ExperienceTab.tsx
import React from "react";

const ExperienceTab: React.FC = () => (
  <div className="about-content">

    <div className="space-y-4">
      <div className="experience-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">💼</span>
          <h3 className="text-green-300 font-semibold">Intern @ Defence Research and Development Laboratory (DRDL), Hyderabad, India</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8">May 2026 – Jun 2026</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Developed a Retrieval-Augmented Generation platform using LangChain, ChromaDB, FastAPI, Ollama, and Docker for document-based question answering. Improved retrieval quality through context-aware chunking and MMR search, achieving 0.972 Answer Relevancy and 0.933 Context Recall on RAGAS benchmarks.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">LangChain</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">ChromaDB</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">FastAPI</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Ollama</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Docker</span>
        </div>
      </div>

      <div className="experience-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">💼</span>
          <h3 className="text-green-300 font-semibold">Deep Learning Intern @ Central Institute of Tool Design MSME TC, Hyderabad</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8">Jun 2025</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Stock Price Prediction using LSTM. Built an LSTM model with Keras to predict stock prices for major companies, analyzed time-series data, used dropout layers and tuning for error reduction and improved model accuracy.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Keras</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Time Series</span>
        </div>
      </div>

      <div className="experience-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">💼</span>
          <h3 className="text-green-300 font-semibold">Machine Learning Intern @ Swecha Telangana</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8">Aug 2024</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Developed a Telugu OCR System using deep learning models for character recognition. Built custom data pipelines, improved Unicode conversion, and optimized inference speed for GPU environments.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Deep Learning</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">OCR</span>
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceTab;