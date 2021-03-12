import { LazyExoticComponent, ReactNode } from 'react';

export type Route = {
  component: JSX.Element | LazyExoticComponent<() => JSX.Element>;
  icon?: JSX.Element;
  path: string;
  label: string;
  accessLevel: string[];
  private: boolean;
  navBar: boolean;
  tooltipTitle?: string;
  title?: string;
  ariaLabel?: string;
};

export type PrivateRouteProps = {
  children: ReactNode;
  exact: boolean;
  path: string;
};
