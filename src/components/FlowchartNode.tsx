import React from 'react';
import { Box, Database, Server, Shield, Brain } from 'lucide-react';

interface FlowchartNodeProps {
  title: string;
  type: 'frontend' | 'backend' | 'data' | 'security' | 'ai';
  children?: React.ReactNode;
}

const iconMap = {
  frontend: Box,
  backend: Server,
  data: Database,
  security: Shield,
  ai: Brain,
};

export function FlowchartNode({ title, type, children }: FlowchartNodeProps) {
  const Icon = iconMap[type];
  
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-xl min-w-[200px] transform hover:scale-105 transition-transform duration-200">
        <div className="flex items-center space-x-3 mb-2">
          <Icon className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        {children && (
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}