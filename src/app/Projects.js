import React from 'react';


const projects = [
  {
    title: "Morbidity & Mortality — 10 years in the making",
    date: "SEP 2024 - OCT 2024",
    description: "I worked closely with the Health Records Officer from Nyeri Refferal Hospital to analyze data hands-on.",
    link: "#",
    image: "your-image-url-1.png",
    bgColor: "bg-purple-200"
  },
  {
    title: "Image Classification Using CNNs",
    date: "APR - MAY 2024",
    description: "Built and trained a Convolutional Neural Network to classify images from the CIFAR-10 dataset.",
    link: "#",
    image: "your-image-url-2.png",
    bgColor: "bg-blue-200"
  },
  {
    title: "Customer Churn Prediction",
    date: "DEC 2024",
    description: "Analyzed a telecom company’s dataset to identify churn patterns using logistic regression and random forest models",
    link: "#",
    image: "your-image-url-3.png",
    bgColor: "bg-yellow-200"
  }
];

export default function Projects() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center space-x-12">
            {/* Left Side - Text */}
            <div className={`relative ${project.bgColor} p-10 rounded-full w-1/2 h-80 flex flex-col justify-center`}>
              <span className="text-gray-600 text-sm">{project.date}</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">{project.title}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 font-medium mt-2 inline-block">View the project →</a>
            </div>
            
            {/* Right Side - Image */}
            <div className="w-2/3 shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
