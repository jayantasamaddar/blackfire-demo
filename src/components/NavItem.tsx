import React, { FC, ReactElement, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface To {
  pathname: string;
}

interface Props {
  id?: string;
  name: string;
  responsive?: boolean;
  className?: string;
  icon?: ReactElement;
  index?: string;
  to?: string | To;
  unlink?: boolean;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
  nested?: boolean;
}

const NavItem: FC<Props> = (props): ReactElement => {
  const {
    id,
    name,
    responsive,
    className,
    icon,
    index,
    to,
    unlink,
    onClick,
    nested,
  } = props;

  let listItem: string | ReactElement = name;

  if (responsive === true) {
    listItem =
      name === 'Login' ? (
        <i className="fas fa-user-circle fa-2x"></i>
      ) : name === 'Search' ? (
        <i className="fas fa-search fa-lg"></i>
      ) : (
        listItem
      );
  }
  return (
    <>
      {unlink ? (
        <li
          title={name}
          className={`nav-item cursor-pointer ${className ? className : ''}`}
          onClick={onClick}
        >
          {icon ? icon : listItem}
          {nested}
        </li>
      ) : (
        <Link
          to={
            to
              ? to
              : `/${name
                  .replace(/[^a-zA-Z ]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`
          }
        >
          <li
            id={id}
            title={name}
            data-index={index}
            className={`nav-item cursor-pointer ${className || ''}`}
            onClick={onClick}
          >
            {icon ? (
              <div className="flex gap-2 items-center">
                <span>{icon}</span>
                <span>{listItem}</span>
              </div>
            ) : (
              listItem
            )}
          </li>
        </Link>
      )}
    </>
  );
};

export default NavItem;
