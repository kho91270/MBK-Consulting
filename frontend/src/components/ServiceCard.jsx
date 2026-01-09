import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ServiceCard = ({ title, items, icon: Icon, color, link }) => {
  return (
    <div className={`${color} rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
      <div className="flex flex-col h-full">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <Icon className="w-8 h-8 text-gray-800" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
        <ul className="space-y-3 flex-grow mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-gray-800 mt-1">•</span>
              <span className="text-gray-800 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <Link to={link}>
          <Button variant="outline" className="w-full bg-white hover:bg-gray-50 border-2 border-gray-800 text-gray-800 font-semibold">
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
