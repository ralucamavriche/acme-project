import { CalendarIcon } from '@heroicons/react/24/outline';
import { getTimeDifference } from '../../utils/getTimeDifference';
import Chart from './Chart';

interface RevenueData {
  month: string;
  revenue: number;
  createdAt: string;
  updatedAt: string;
}

const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 1200, createdAt: '2024-01-01', updatedAt: '2024-01-01' },
  { month: 'Feb', revenue: 2100, createdAt: '2024-02-01', updatedAt: '2024-02-01' },
  { month: 'Mar', revenue: 3200, createdAt: '2024-03-01', updatedAt: '2024-03-01' },
  { month: 'Apr', revenue: 4000, createdAt: '2024-04-01', updatedAt: '2024-04-01' },
  { month: 'May', revenue: 5000, createdAt: '2024-05-01', updatedAt: '2024-05-01' },
  { month: 'Jun', revenue: 3000, createdAt: '2024-06-01', updatedAt: '2024-06-01' },
  { month: 'Jul', revenue: 2500, createdAt: '2024-07-01', updatedAt: '2024-07-01' },
  { month: 'Aug', revenue: 1800, createdAt: '2024-08-01', updatedAt: '2024-08-01' },
  { month: 'Sep', revenue: 2200, createdAt: '2024-09-01', updatedAt: '2024-09-01' },
  { month: 'Oct', revenue: 2700, createdAt: '2024-10-01', updatedAt: '2024-10-01' },
  { month: 'Nov', revenue: 3500, createdAt: '2024-11-01', updatedAt: '2024-11-01' },
  { month: 'Dec', revenue: 4200, createdAt: '2024-12-01', updatedAt: '2024-12-01' },
];

const RevenueChart = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 font-lusitana text-xl md:text-2xl">Recent Revenue</h1>
      <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4 shadow-sm">
        <div className="flex h-[300px] grow flex-col justify-between bg-white px-2">
          <Chart data={revenueData} />
        </div>
        {revenueData?.[0]?.updatedAt ? (
          <div className="flex items-center pb-2 pt-8">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <h2 className="ml-2 text-sm text-gray-500">
              Last {''} {getTimeDifference(revenueData[0].updatedAt)}
            </h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueChart;
