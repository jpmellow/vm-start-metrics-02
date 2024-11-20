import React from 'react';
import { BarChart2, Play, XCircle, Star } from 'lucide-react';

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

export function AssetsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Engagements"
        value="2,847"
        icon={<BarChart2 className="h-8 w-8" />}
        change="+15.3% from last month"
      />
      <MetricCard
        title="Video Engagements"
        value="1,123"
        icon={<Play className="h-8 w-8" />}
        change="+8.7% from last month"
      />
      <MetricCard
        title="Video Abandonments"
        value="234"
        icon={<XCircle className="h-8 w-8" />}
        change="-12.4% from last month"
      />
      <MetricCard
        title="Top Asset"
        value="Quick Reference Guide"
        icon={<Star className="h-8 w-8" />}
      />
    </div>
  );
}