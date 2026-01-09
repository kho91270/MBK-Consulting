import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ServiceCard = ({ title, items, icon: Icon, color, link }) => {
  return (
    <div className={`${color} rounded-xl p-8 shadow-lg hover-lift group relative overflow-hidden`}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-6 flex justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <Icon className="w-10 h-10 text-gray-800" strokeWidth={2} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center tracking-tight">{title}</h3>
        <ul className="space-y-3 flex-grow mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-3 transform transition-all duration-200 hover:translate-x-1">
              <span className="text-gray-800 mt-1 text-lg">•</span>
              <span className="text-gray-800 text-sm leading-relaxed font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <Link to={link}>
          <Button 
            variant="outline" 
            className="w-full bg-white hover:bg-gray-50 border-2 border-gray-800 text-gray-800 font-bold group/btn"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
