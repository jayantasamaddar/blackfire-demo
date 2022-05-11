import { FC, ReactElement } from 'react';
import { Chart, Widget } from '../../components';
import { widgetsData } from '../../data/widgets';

const WidgetList: FC = (): ReactElement => {
  return (
    <div className="widget-list flex flex-wrap justify-evenly items-stretch md:gap-1 lg:gap-2">
      {widgetsData.map(widget => {
        return (
          <Widget key={widget.id} {...widget} className="cursor-pointer">
            <Chart syncId="xyz" data={widget.data} color={widget.chartColor} />
          </Widget>
        );
      })}
    </div>
  );
};

export default WidgetList;
