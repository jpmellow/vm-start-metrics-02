import React from 'react';
import { FlowchartNode } from './FlowchartNode';
import { FlowchartConnection } from './FlowchartConnection';

export function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          System Architecture
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Layer */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Frontend Layer</h2>
            <FlowchartNode title="React Dashboard" type="frontend">
              <ul className="list-disc list-inside">
                <li>Interactive UI Components</li>
                <li>Real-time Data Updates</li>
                <li>Responsive Design</li>
              </ul>
            </FlowchartNode>
            <FlowchartNode title="File Upload Interface" type="frontend" />
            <FlowchartNode title="User Authentication" type="frontend" />
          </div>

          {/* Backend Layer */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Backend Layer</h2>
            <FlowchartNode title="Node.js Server" type="backend">
              <ul className="list-disc list-inside">
                <li>API Endpoints</li>
                <li>Business Logic</li>
                <li>Data Processing</li>
              </ul>
            </FlowchartNode>
            <FlowchartNode title="AI Attribution Service" type="backend" />
            <FlowchartNode title="Data Processing Pipeline" type="backend" />
          </div>

          {/* Data & AI Layer */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Data & AI Layer</h2>
            <FlowchartNode title="PostgreSQL Database" type="data">
              <ul className="list-disc list-inside">
                <li>Customer Data</li>
                <li>Attribution Records</li>
                <li>Analytics Data</li>
              </ul>
            </FlowchartNode>
            <FlowchartNode title="Machine Learning Models" type="ai">
              <ul className="list-disc list-inside">
                <li>Attribution Engine</li>
                <li>Pattern Recognition</li>
                <li>Predictive Analytics</li>
              </ul>
            </FlowchartNode>
            <FlowchartNode title="Security Layer" type="security">
              <ul className="list-disc list-inside">
                <li>JWT Authentication</li>
                <li>Data Encryption</li>
                <li>GDPR Compliance</li>
              </ul>
            </FlowchartNode>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">System Overview</h3>
          <p className="text-gray-600 dark:text-gray-300">
            This architecture implements a sophisticated customer attribution system with AI-powered analytics.
            The system processes multiple data sources through secure channels and provides real-time insights
            through an interactive dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}