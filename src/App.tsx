import { useCurrencyRateFromUAHQuery } from './store/minfin/minfin.api';

function App() {
  const {
    isLoading: isRateLoading,
    isError: isRateError,
    data: rateData,
  } = useCurrencyRateFromUAHQuery('USD');

  console.log(rateData);

  return <div className="App"></div>;
}

export default App;
