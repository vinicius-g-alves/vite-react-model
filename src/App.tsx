import { ReactElement } from "react";

import { ConfigProvider } from "antd";

import Routes from "./routes";
import { createClient, Provider } from "urql";

const client = createClient({
  url: import.meta.env.VITE_API_URL,
});

function App(): ReactElement<unknown> {
  return (
    <Provider value={client}>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
