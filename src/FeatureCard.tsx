import React from "react";
import { useNavigate } from "react-router-dom";

function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
