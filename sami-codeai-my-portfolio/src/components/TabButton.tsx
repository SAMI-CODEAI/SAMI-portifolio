import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TabButtonProps {
  icon: IconDefinition;
  label: string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, onClick }) => (
  <button 
    className="tab-button"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
    <span>{label}</span>
  </button>
);

export default TabButton;