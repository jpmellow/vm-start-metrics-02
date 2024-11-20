import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, Calendar, MapPin, Users, Award, Clock, CheckCircle2, XCircle, Download, Upload } from 'lucide-react';
import { format } from 'date-fns';

interface Client {
  id: string;
  name: string;
  totalSites: number;
  staffTrainedPercentage: number;
  quizCertificates: number;
  dateOnboarded: Date;
  lastActivity: Date;
  products: {
    sti: boolean;
    respiratory: boolean;
  };
}

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Planned Parenthood NYC',
    totalSites: 12,
    staffTrainedPercentage: 85,
    quizCertificates: 18,
    dateOnboarded: new Date('2024-09-15'),
    lastActivity: new Date('2024-10-28'),
    products: {
      sti: true,
      respiratory: false,
    },
  },
  {
    id: '2',
    name: 'Local Clinic XYZ',
    totalSites: 3,
    staffTrainedPercentage: 92,
    quizCertificates: 6,
    dateOnboarded: new Date('2024-09-20'),
    lastActivity: new Date('2024-10-25'),
    products: {
      sti: true,
      respiratory: true,
    },
  },
  {
    id: '3',
    name: 'Concentra',
    totalSites: 247,
    staffTrainedPercentage: 78,
    quizCertificates: 202,
    dateOnboarded: new Date('2024-09-10'),
    lastActivity: new Date('2024-11-02'),
    products: {
      sti: false,
      respiratory: true,
    },
  },
  {
    id: '4',
    name: 'American Family Care',
    totalSites: 35,
    staffTrainedPercentage: 65,
    quizCertificates: 45,
    dateOnboarded: new Date('2024-09-25'),
    lastActivity: new Date('2024-10-30'),
    products: {
      sti: true,
      respiratory: true,
    },
  },
  {
    id: '5',
    name: 'GoHealth Urgent Care',
    totalSites: 28,
    staffTrainedPercentage: 95,
    quizCertificates: 56,
    dateOnboarded: new Date('2024-09-18'),
    lastActivity: new Date('2024-11-05'),
    products: {
      sti: true,
      respiratory: true,
    },
  },
  {
    id: '6',
    name: 'CareNow Urgent Care',
    totalSites: 42,
    staffTrainedPercentage: 88,
    quizCertificates: 89,
    dateOnboarded: new Date('2024-09-12'),
    lastActivity: new Date('2024-11-01'),
    products: {
      sti: false,
      respiratory: true,
    },
  },
  {
    id: '7',
    name: 'WellNow Urgent Care',
    totalSites: 15,
    staffTrainedPercentage: 72,
    quizCertificates: 25,
    dateOnboarded: new Date('2024-09-30'),
    lastActivity: new Date('2024-10-29'),
    products: {
      sti: true,
      respiratory: false,
    },
  },
  {
    id: '8',
    name: 'Fast Pace Urgent Care',
    totalSites: 8,
    staffTrainedPercentage: 100,
    quizCertificates: 24,
    dateOnboarded: new Date('2024-09-22'),
    lastActivity: new Date('2024-11-03'),
    products: {
      sti: true,
      respiratory: true,
    },
  },
];

const columnHelper = createColumnHelper<Client>();

const ProductStatus = ({ active }: { active: boolean }) => (
  <div className="flex justify-center">
    {active ? (
      <CheckCircle2 className="w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="w-5 h-5 text-gray-300 dark:text-gray-600" />
    )}
  </div>
);

export function ClientList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Client Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('totalSites', {
        header: 'Sites',
        cell: info => (
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('staffTrainedPercentage', {
        header: 'Staff Trained',
        cell: info => (
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-gray-500" />
            {info.getValue()}%
          </div>
        ),
      }),
      columnHelper.accessor('quizCertificates', {
        header: 'Certificates',
        cell: info => (
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2 text-gray-500" />
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('dateOnboarded', {
        header: 'Date Onboarded',
        cell: info => (
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
            {format(info.getValue(), 'MMM d, yyyy')}
          </div>
        ),
      }),
      columnHelper.accessor('lastActivity', {
        header: 'Last Activity',
        cell: info => (
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            {format(info.getValue(), 'MMM d, yyyy')}
          </div>
        ),
      }),
      columnHelper.accessor(row => row.products.sti, {
        id: 'sti',
        header: 'STI',
        cell: info => <ProductStatus active={info.getValue()} />,
      }),
      columnHelper.accessor(row => row.products.respiratory, {
        id: 'respiratory',
        header: 'RESPI',
        cell: info => <ProductStatus active={info.getValue()} />,
      }),
    ],
    []
  );

  const table = useReactTable({
    data: mockClients,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Client Organizations</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => console.log('Exporting to CSV...')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export to CSV
          </button>
          <button
            onClick={() => console.log('Opening import/edit modal...')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <Upload className="w-4 h-4 mr-2" />
            Import / Edit
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center space-x-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                onClick={() => console.log('Navigate to client details:', row.original.id)}
              >
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}