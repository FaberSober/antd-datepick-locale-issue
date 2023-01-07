import { ConfigProvider, DatePicker } from 'antd';
import zhCN from 'antd/locale/zh_CN';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <DatePicker />
      </div>
    </ConfigProvider>
  );
}

export default App;
