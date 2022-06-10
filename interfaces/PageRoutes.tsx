import { ReactElement } from "react";

export interface PageRoutes {
  name: string;
  route: string;
  subRoutes?: Array<{ name: string, route: string }>;
  icon?: ReactElement;
}
