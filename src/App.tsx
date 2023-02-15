import { ReactElement } from "react";

import { ConfigProvider } from "antd";

import Routes from "./routes";

function App(): ReactElement<unknown> {
  return (
    <ConfigProvider>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
