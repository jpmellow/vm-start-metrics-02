import React from 'react';
import { BarChart, Users, Activity, Award } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
}

function MetricCard({ title, value, icon, change }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {change && (
            <p className="text-sm text-green-600 mt-1">
              {change}
            </p>
          )}
        </div>
        <div className="text-blue-500">{icon}</div>
      </div>
    </div>
  );
}

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Active Organizations"
        value="123"
        icon={<Users className="h-8 w-8" />}
      />
      <MetricCard
        title="Attribution Rate"
        value="85%"
        icon={<BarChart className="h-8 w-8" />}
        change="+5.3% from last month"
      />
      <MetricCard
        title="Attribution Confidence"
        value="92.7%"
        icon={<Activity className="h-8 w-8" />}
        change="+2.1% from last month"
      />
      <MetricCard
        title="Certificates"
        value="563"
        icon={<Award className="h-8 w-8" />}
        change="+12.4% from last month"
      />
    </div>
  );
}