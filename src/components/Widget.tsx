import { FC, ReactElement, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  primaryValue: number;
  primaryUnit?: string | null;
  secondaryValue?: number | null;
  secondaryUnit?: string | null;
  secondaryText: string;
  difference?: number | null;
  differenceSubtext?: string | null;
  data?: object;
  chartType?: string;
  className?: string;
  text?: string;
}

const Widget: FC<Props> = (props): ReactElement => {
  const {
    primaryValue,
    primaryUnit,
    secondaryValue,
    secondaryUnit,
    secondaryText,
    difference,
    differenceSubtext,
    className,
    text,
    children,
  } = props;

  return (
    <div
      className={`widget flex grow basis-1/2 sm:basis-1/3 lg:basis-1/6 bg-white rounded-xl h-40 drop-shadow-lg border border-slate-300 ${
        className || ''
      }`}
    >
      <div className="widget-container flex flex-col w-full p-5">
        <div
          className={`primary flex cursor-pointer justify-${
            !text || text === 'left'
              ? 'start'
              : text === 'right'
              ? 'end'
              : 'center'
          }`}
        >
          <h3 className="primary-value">{primaryValue}</h3>
          {primaryUnit && (
            <p className="primary-unit flex items-end">&nbsp;{primaryUnit}</p>
          )}
        </div>
        <div className="secondary flex cursor-pointer">
          <p className={`secondary-value flex gap-1 text-xs w-full`}>
            {secondaryValue && (
              <span className="flex">
                {secondaryValue}
                {secondaryUnit && secondaryUnit}
              </span>
            )}
            <span className={`w-full text-${text || 'left'}`}>
              {secondaryText}
            </span>
          </p>
        </div>
        {difference && differenceSubtext && (
          <div className="difference flex text-xs cursor-pointer">
            <p className="difference-value flex">
              {differenceSubtext && <span>{differenceSubtext}</span>}&nbsp;
              {difference && <span>{difference}%</span>}
            </p>
          </div>
        )}
        {children && (
          <div className="widget-content flex flex-col gap-2">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Widget;
