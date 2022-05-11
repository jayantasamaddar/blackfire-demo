import { FC, ReactElement } from 'react';
import { AreaChart, Area, CartesianGrid, Tooltip } from 'recharts';

interface Props {
  syncId?: string;
  color?: string;
  data: any[];
}

const Chart: FC<Props> = ({ syncId, color, data }): ReactElement => {
  return (
    <AreaChart
      syncId={syncId}
      width={180}
      height={75}
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.8} />
          <stop offset="95%" stopColor={color} stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip cursor={true} />
      <Area
        type="step"
        dataKey="uv"
        stroke={color}
        fillOpacity={0.4}
        fill={color}
      />
    </AreaChart>
  );
};

export default Chart;
