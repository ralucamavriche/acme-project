import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useResize from '../../../hooks/useResize';

interface ChartProps {
  data: {
    month: string;
    revenue: number;
  }[];
}

const Chart = ({ data }: ChartProps) => {
  const [width] = useResize();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          angle={width < 640 ? -90 : 0}
          textAnchor={width < 640 ? 'end' : 'middle'}
          tick={{ fill: '#9CA3AF', fontSize: 14 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 5000]}
          ticks={[0, 1000, 2000, 3000, 4000, 5000]}
          tickFormatter={(value) => `$${value / 1000}k`}
          tick={width < 640 ? false : { fill: '#9CA3AF', fontSize: 14 }}
          width={width < 640 ? 20 : 60}
        />
        <Tooltip />
        <Bar dataKey="revenue" fill="#93C5FD" radius={[8, 8, 8, 8]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
