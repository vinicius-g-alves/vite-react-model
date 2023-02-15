import { ReactElement } from "react";

import { ConfigProvider } from "antd";

// import Routes from "./routes";
// import Providers from "./providers";

function App(): ReactElement<unknown> {
  return (
    <ConfigProvider>
      {/* <Providers>
        <Routes />
      </Providers> */}
    </ConfigProvider>
  );
}

export default App;
