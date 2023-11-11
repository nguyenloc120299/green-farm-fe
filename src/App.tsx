import RenderRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider, Spin, theme as a } from "antd";
import "globalStyles/global.css";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Chakra Petch",
        },
        components: {
          Input: {

          }
        }
      }}
    >
      <div className="App">
        <Router>
          <RenderRouter />
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
