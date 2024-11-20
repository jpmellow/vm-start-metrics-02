import React, { useState } from 'react';
import { NewClientsOverview } from '../components/NewClientsOverview';
import { ClientList } from '../components/ClientList';
import { GlobalFilters } from '../components/GlobalFilters';
import { AssetsOverview } from '../components/AssetsOverview';
import { AssetsList } from '../components/AssetsList';
import { Users, FileText } from 'lucide-react';

type TabType = 'clients' | 'assets';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('clients');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Customer Attribution Dashboard
          </h1>
        </div>

        <GlobalFilters />
        
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('clients')}
                className={`${
                  activeTab === 'clients'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                <Users className="w-5 h-5 mr-2" />
                Clients
              </button>
              <button
                onClick={() => setActiveTab('assets')}
                className={`${
                  activeTab === 'assets'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                <FileText className="w-5 h-5 mr-2" />
                Assets
              </button>
            </nav>
          </div>
        </div>

        <div className="space-y-8">
          {activeTab === 'clients' ? (
            <>
              <NewClientsOverview />
              <ClientList />
            </>
          ) : (
            <>
              <AssetsOverview />
              <AssetsList />
            </>
          )}
        </div>
      </div>
    </div>
  );
}