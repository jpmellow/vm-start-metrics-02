import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, FileText, Link2, CheckCircle2 } from 'lucide-react';

interface Asset {
  id: string;
  name: string;
  url: string;
  engagements: number;
  mediaType: 'video' | 'pdf' | 'ppt' | 'link';
  productType: 'sti' | 'respiratory';
}

const mockAssets: Asset[] = [
  // STI Assets
  {
    id: '1',
    name: 'Quick Reference Guide',
    url: '/assets/sti/quick-reference',
    engagements: 456,
    mediaType: 'pdf',
    productType: 'sti',
  },
  {
    id: '2',
    name: 'Instructions for Use',
    url: '/assets/sti/instructions',
    engagements: 389,
    mediaType: 'pdf',
    productType: 'sti',
  },
  {
    id: '3',
    name: 'Collection Instructions for Use',
    url: '/assets/sti/collection',
    engagements: 278,
    mediaType: 'video',
    productType: 'sti',
  },
  {
    id: '4',
    name: 'Vaginal Self-Collection Instructions – English',
    url: '/assets/sti/self-collection-en',
    engagements: 567,
    mediaType: 'video',
    productType: 'sti',
  },
  {
    id: '5',
    name: 'Vaginal Self-Collection Instructions – Spanish',
    url: '/assets/sti/self-collection-es',
    engagements: 234,
    mediaType: 'video',
    productType: 'sti',
  },
  // Respiratory Assets
  {
    id: '6',
    name: 'Quick Reference Guide',
    url: '/assets/respiratory/quick-reference',
    engagements: 678,
    mediaType: 'pdf',
    productType: 'respiratory',
  },
  {
    id: '7',
    name: 'Instructions for Use',
    url: '/assets/respiratory/instructions',
    engagements: 445,
    mediaType: 'pdf',
    productType: 'respiratory',
  },
  {
    id: '8',
    name: 'Patient Collected – Anterior Nasal Collection Instruction- English',
    url: '/assets/respiratory/patient-nasal-en',
    engagements: 890,
    mediaType: 'video',
    productType: 'respiratory',
  },
  {
    id: '9',
    name: 'Anterior Nasal Collection Instructions – Spanish',
    url: '/assets/respiratory/patient-nasal-es',
    engagements: 334,
    mediaType: 'video',
    productType: 'respiratory',
  },
  {
    id: '10',
    name: 'Provider Collected – Nasopharyngeal Collection Instructions – English',
    url: '/assets/respiratory/provider-nasal-en',
    engagements: 567,
    mediaType: 'video',
    productType: 'respiratory',
  },
  {
    id: '11',
    name: 'Provider Fact Sheet',
    url: '/assets/respiratory/provider-fact-sheet',
    engagements: 445,
    mediaType: 'pdf',
    productType: 'respiratory',
  },
  {
    id: '12',
    name: 'Patient Fact Sheet',
    url: '/assets/respiratory/patient-fact-sheet',
    engagements: 332,
    mediaType: 'pdf',
    productType: 'respiratory',
  },
];

const columnHelper = createColumnHelper<Asset>();

const MediaTypeIcon = ({ type }: { type: Asset['mediaType'] }) => {
  const iconClass = "w-5 h-5";
  switch (type) {
    case 'video':
      return <i className={`fas fa-video ${iconClass} text-blue-500`} />;
    case 'pdf':
      return <i className={`fas fa-file-pdf ${iconClass} text-red-500`} />;
    case 'ppt':
      return <i className={`fas fa-file-powerpoint ${iconClass} text-orange-500`} />;
    case 'link':
      return <i className={`fas fa-link ${iconClass} text-green-500`} />;
    default:
      return null;
  }
};

export function AssetsList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Asset Name',
        cell: info => (
          <div className="flex items-center">
            <FileText className="w-4 h-4 mr-2 text-gray-500" />
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('url', {
        header: 'URL',
        cell: info => (
          <div className="flex items-center">
            <Link2 className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-blue-500 hover:text-blue-700">{info.getValue()}</span>
          </div>
        ),
      }),
      columnHelper.accessor('engagements', {
        header: 'Total Engagements',
        cell: info => info.getValue().toLocaleString(),
      }),
      columnHelper.accessor('mediaType', {
        header: 'Media Type',
        cell: info => (
          <div className="flex items-center">
            <MediaTypeIcon type={info.getValue()} />
            <span className="ml-2 capitalize">{info.getValue()}</span>
          </div>
        ),
      }),
      columnHelper.accessor('productType', {
        header: 'Product Type',
        cell: info => (
          <div className="flex justify-center">
            {info.getValue() === 'sti' ? (
              <div className="flex items-center text-purple-600">
                <CheckCircle2 className="w-5 h-5 mr-1" />
                <span>STI</span>
              </div>
            ) : (
              <div className="flex items-center text-blue-600">
                <CheckCircle2 className="w-5 h-5 mr-1" />
                <span>RESPI</span>
              </div>
            )}
          </div>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: mockAssets,
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
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Assets</h2>
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
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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