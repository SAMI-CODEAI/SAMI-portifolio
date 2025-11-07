import React from "react";

const projectList = [
  {
    title: "ResumeAgent – Personal Resume QA Agent",
    description: "AI agent deployed on Hugging Face for answering career and technical questions by interpreting resume and project experience. Features conversational Gradio interface, PDF parsing, secure notification system, and adaptive continuous improvement.",
    tags: ["Python", "Gradio", "PyPDF", "Hugging Face", "API"],
    icon: "🤖"
  },
  {
    title: "LearnSphere – Intelligent Study Companion",
    description: "Adaptive learning assistant using OpenAI APIs and RAG for generating notes, quizzes, and flashcards. Integrated FAISS for semantic search across multi-format documents and interactive Streamlit UI for dynamic engagement.",
    tags: ["Python", "OpenAI API", "FAISS", "Streamlit", "RAG"],
    icon: "📚"
  },
  {
    title: "AnimeSense – Hybrid Anime Recommendation Engine",
    description: "Built a hybrid recommender system combining Keras embeddings and metadata-based analysis. Flask API with Dockerized GCP deployment, CI/CD automation, and experiment tracking with DVC and Comet ML.",
    tags: ["TensorFlow", "Flask", "Docker", "GCP", "DVC"],
    icon: "🎬"
  },
  {
    title: "OptiStay – Hotel Cancellation Prediction System",
    description: "End-to-end predictive analytics platform forecasting hotel booking cancellations with ML models and full CI/CD pipeline on GCP. Achieved high accuracy, precision, and F1-score on real-world hotel data.",
    tags: ["Flask", "ML", "GCP", "Jenkins", "XGBoost"],
    icon: "🏨"
  }
];

const ProjectsTab: React.FC = () => (
  <div className="space-y-6">
    <div className="tab-content-header">
      <h2>projects</h2>
    </div>
    
    <div className="space-y-4">
      {projectList.map((proj, idx) => (
        <div key={idx} className="project-card">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-green-400 text-xl">{proj.icon}</span>
            <h3 className="text-green-300 font-semibold flex-1">{proj.title}</h3>
          </div>
          <p className="text-green-400/80 mb-4 pl-8">{proj.description}</p>
          <div className="flex gap-2 flex-wrap pl-8">
            {proj.tags.map((tag, i) => (
              <span key={i} className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsTab;