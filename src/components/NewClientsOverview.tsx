import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Clock, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface OnboardingProgress {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  timeline: '30d' | '60d' | '90d';
  clients: {
    completed: string[];
    inProgress: string[];
    notStarted: string[];
  };
}

const mockData: OnboardingProgress = {
  total: 15,
  completed: 6,
  inProgress: 7,
  notStarted: 2,
  timeline: '30d',
  clients: {
    completed: [
      'WellNow Urgent Care',
      'Fast Pace Urgent Care',
      'GoHealth Urgent Care',
      'NextCare',
      'CareNow Urgent Care',
      'MedExpress'
    ],
    inProgress: [
      'Concentra',
      'American Family Care',
      'Local Clinic XYZ',
      'Regional Health Partners',
      'City Medical Group',
      'Valley Urgent Care',
      'Metro Healthcare'
    ],
    notStarted: [
      'Planned Parenthood NYC',
      'Coastal Medical Center'
    ]
  }
};

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  clients: string[];
  isExpanded: boolean;
}

function MetricCard({ title, value, icon, color, clients, isExpanded }: MetricCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
        <div>{icon}</div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 border-t border-gray-200 dark:border-gray-600 pt-4">
          <ul className="space-y-2">
            {clients.map((client, index) => (
              <li 
                key={index}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function NewClientsOverview() {
  const [isExpanded, setIsExpanded] = useState(false);
  const completionRate = (mockData.completed / mockData.total) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">New Clients Onboarding</h2>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-sm">{isExpanded ? 'Hide Details' : 'Show Details'}</span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
        <span className="text-sm text-gray-500">Last {mockData.timeline}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total New Clients"
          value={mockData.total}
          icon={<TrendingUp className="h-8 w-8 text-blue-500" />}
          color="text-blue-600"
          clients={[...mockData.clients.completed, ...mockData.clients.inProgress, ...mockData.clients.notStarted]}
          isExpanded={isExpanded}
        />

        <MetricCard
          title="Completed Training"
          value={mockData.completed}
          icon={<CheckCircle2 className="h-8 w-8 text-green-500" />}
          color="text-green-600"
          clients={mockData.clients.completed}
          isExpanded={isExpanded}
        />

        <MetricCard
          title="In Progress"
          value={mockData.inProgress}
          icon={<Clock className="h-8 w-8 text-yellow-500" />}
          color="text-yellow-600"
          clients={mockData.clients.inProgress}
          isExpanded={isExpanded}
        />

        <MetricCard
          title="Not Started"
          value={mockData.notStarted}
          icon={<AlertCircle className="h-8 w-8 text-red-500" />}
          color="text-red-600"
          clients={mockData.clients.notStarted}
          isExpanded={isExpanded}
        />
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{completionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-600 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}