import { FC, ReactElement } from 'react';
import { Card, Button } from '../../components';
import { MdStars } from 'react-icons/md';

interface Badges {
  icon: string;
  tooltip: string;
}

interface Data {
  id: string | number;
  title: string;
  badges: Badges[];
}

interface Props {
  data: Data[];
  className?: string;
}

const TopRecommendations: FC<Props> = ({ data }): ReactElement => {
  return (
    <Card
      title="Top Recommendations"
      className="top__recommendations p-5 gap-2"
    >
      <p className="top__recommendations__about text-center md:text-left">
        Top recommendations are the most detected recommendations in all the
        profiles created in the last 7 days in this environment. They are ranked
        from the most recurring to the least recurring.
      </p>
      <div className="top__recommendations__list flex flex-col">
        {data.map(({ id, title, badges }, index) => (
          <div
            className="flex p-3 border-b border-slate-300 items-center justify-between last:border-b-0"
            key={id}
          >
            <div className="flex gap-4">
              <div className="badges flex gap-1 items-center">
                {badges.map(({ icon, tooltip }) => (
                  <div className="badge">
                    <MdStars size={'1.5em'} />
                  </div>
                ))}
              </div>
              <div className="title">
                <p>{title}</p>
              </div>
            </div>

            <div className="action__buttons">
              <Button name="View Doc" />
              <Button name="View Last Profile" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopRecommendations;
