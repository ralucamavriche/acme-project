import { CalendarIcon } from '@heroicons/react/24/outline';
import Chart from './Chart';

const data = [
  { month: 'Jan', revenue: 1200 },
  { month: 'Feb', revenue: 2100 },
  { month: 'Mar', revenue: 3200 },
  { month: 'Apr', revenue: 4000 },
  { month: 'May', revenue: 5000 },
  { month: 'Jun', revenue: 3000 },
  { month: 'Jul', revenue: 2500 },
  { month: 'Aug', revenue: 1800 },
  { month: 'Sep', revenue: 2200 },
  { month: 'Oct', revenue: 2700 },
  { month: 'Nov', revenue: 3500 },
  { month: 'Dec', revenue: 4200 },
];

const RevenueChart = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 font-lusitana text-xl md:text-2xl">Recent Revenue</h1>
      <div className="flex h-full flex-col rounded-lg bg-gray-50 p-4 shadow-sm">
        <div className="flex h-[300px] grow flex-col justify-between bg-white px-2">
          <Chart data={data} />
        </div>
        <div className="flex items-center pb-2 pt-8">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h2 className="ml-2 text-sm text-gray-500">Last 12 months</h2>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
