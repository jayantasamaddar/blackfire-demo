import { FC, ReactElement } from 'react';
import { Card } from '../../components';
import { MdInfoOutline } from 'react-icons/md';

const Hints: FC = (): ReactElement => {
  return (
    <Card title="Hints" className="p-5 gap-2">
      <div className="hints flex gap-2">
        <MdInfoOutline size="1.5rem" />
        <p className="hints__about text-center md:text-left">
          Share metrics and insights with your team by granting them access.
        </p>
      </div>
    </Card>
  );
};

export default Hints;
