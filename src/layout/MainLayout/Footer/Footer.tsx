import { ReactElement } from "react";

import { Layout } from "antd";

interface IFooter {
  children?: ReactElement;
}

const { Footer } = Layout;

const LayoutFooter = ({ children }: IFooter): ReactElement => (
  <Footer>{children || null}</Footer>
);

export default LayoutFooter;
