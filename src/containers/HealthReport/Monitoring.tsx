import { FC, ReactElement } from 'react';
import { Card } from '../../components';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
  Cell,
} from 'recharts';

import responseTimeData from '../../data/responseTimeData';
import HTTPStatusData from '../../data/HTTPStatusData';

interface Stats {
  amount: number;
  unit?: string;
  name: string;
  change: number;
}

interface Transaction {
  id: number | string;
  transaction: string;
  stats: Stats[];
}

interface Props {
  className?: string;
  data: Transaction[];
}

const SubSnippet: FC<Transaction> = ({
  id,
  transaction,
  stats,
}): ReactElement => {
  return (
    <li
      key={id}
      className="most__impactful__transactions__list__item flex-col items-center py-5 border-b border-slate-300"
    >
      <h5>{transaction}</h5>
      <div className="flex items-center">
        <div className="flex flex-wrap gap-1">
          {stats.map(({ amount, unit, name, change }) => (
            <p className="flex gap-1 text-xs border border-slate-300 p-2">
              <span>
                {amount}
                {unit}
              </span>
              <span>{name}</span>
              <span>{change}%</span>
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};

const Monitoring: FC<Props> = ({ className, data }): ReactElement => {
  return (
    <Card
      title="Monitoring"
      className={`monitoring p-5 gap-2 ${className || ''}`}
    >
      <div className="flex">
        <div className="flex flex-row basis-1/2 flex-wrap">
          <div className="flex flex-col">
            <h4 className="most__impactful__transactions title text-center md:text-left">
              Most Impactful Transactions
            </h4>
            <p className="most__impactful__transactions about text-center md:text-left">
              Most Impactful Transactions are the most impactful transactions on
              performance in the last 7 days.
            </p>
            <ul className="most__impactful__transactions__list flex flex-col">
              {data.map(props => (
                <SubSnippet {...props} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-row basis-1/2 flex-wrap">
          <div className="flex flex-col basis-full">
            <h4 className="response__time__distribution title text-center md:text-left">
              Response Time Distribution
            </h4>
            <div className="response__time__distribution__chart">
              <ResponsiveContainer minWidth={'100%'} height={200}>
                <BarChart
                  data={responseTimeData}
                  margin={{
                    top: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar
                    dataKey="pv"
                    fillOpacity={0.4}
                    label={{ position: 'top' }}
                  >
                    {responseTimeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.pv > 100000 ? '#4caf50' : '#ff9800'}
                        stroke={entry.pv > 100000 ? '#4caf50' : '#ff9800'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col basis-full">
            <h4 className="response__time__distribution title text-center md:text-left">
              HTTP Status
            </h4>
            <div className="response__time__distribution__chart">
              <ResponsiveContainer minWidth={'100%'} height={200}>
                <BarChart
                  data={HTTPStatusData}
                  margin={{
                    top: 30,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Bar
                    dataKey="pv"
                    fillOpacity={0.4}
                    label={{ position: 'top' }}
                  >
                    {responseTimeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={'#8884d8'}
                        stroke={'#8884d8'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Monitoring;
