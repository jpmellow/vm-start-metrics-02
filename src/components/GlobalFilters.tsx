import React from 'react';
import { Calendar, MapPin, BookOpen, Package } from 'lucide-react';

export function GlobalFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-gray-500" />
        <select defaultValue="30d" className="form-select rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="180d">Last 180 days</option>
          <option value="365d">Last 365 days</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-gray-500" />
        <select className="form-select rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <option value="all">All Regions</option>
          <option value="northeast">Northeast</option>
          <option value="southeast">Southeast</option>
          <option value="midwest">Midwest</option>
          <option value="west">West</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <BookOpen className="w-5 h-5 text-gray-500" />
        <select className="form-select rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <option value="all">All Training Types</option>
          <option value="in-person">In-Person Trainings</option>
          <option value="remote">Remote Trainings</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <Package className="w-5 h-5 text-gray-500" />
        <select className="form-select rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <option value="all">All Product Lines</option>
          <option value="sexual-health">Sexual Health</option>
          <option value="respiratory-health">Respiratory Health</option>
        </select>
      </div>
    </div>
  );
}