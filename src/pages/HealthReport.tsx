import { FC, ReactElement } from 'react';
import { Widget } from '../components';
import {
  WidgetList,
  TopRecommendations,
  Monitoring,
  BuildsAndTests,
  Hints,
} from '../containers';
import { topRecommendations as recommendations } from '../data/top-recommendations';
import { mostImpactfulTransactions as transactions } from '../data/mostImpactfulTransactions';

const HealthReport: FC = (): ReactElement => {
  return (
    /****************************************************************************************/
    /* Sections
    /****************************************************************************************/
    /*
     * Top Widgets (WidgetList)
     * Tips and Advice
     * Top Recommendations
     * Monitoring
     * Builds and Tests
     * Hints
     */
    /****************************************************************************************/
    <div className="health__report flex flex-col gap-2">
      <WidgetList />
      <div className="tips-widget">
        <Widget
          primaryValue={1}
          secondaryText="Tips and Advice"
          className="items-center justify-center"
          text="center"
        />
      </div>
      <TopRecommendations data={recommendations} />
      <Monitoring data={transactions} />
      <BuildsAndTests />
      <Hints />
    </div>
  );
};

export default HealthReport;
