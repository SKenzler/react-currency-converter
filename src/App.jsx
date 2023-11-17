import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyData from "./hooks/useCurrencyData";
import "./index.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState("aud");
  const [convertedCurrency, setConvertedCurrency] = useState("usd");
  const [convertedResult, setConvertedResult] = useState(0);

  const currencyData = useCurrencyData(currentCurrency);
  const options = Object.keys(currencyData);

  const swap = () => {
    setCurrentCurrency(convertedCurrency);
    setConvertedCurrency(currentCurrency);

    setConvertedResult(amount);
    setAmount(convertedResult);
    console.log(convertedResult, amount, currentCurrency, convertedCurrency);
  };

  const convertCurrency = () => {
    setConvertedResult(amount * currencyData[convertedCurrency]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9uZXl8ZW58MHx8MHx8fDA%3D)",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setCurrentCurrency(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={currentCurrency}
              />
            </div>
            <div className="relative w-full">
              <button
                className="absolute  bg-yellow-400 text-black font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 border-2px-2 px-3 py-2 rounded-lg"
                onClick={swap}
              >
                Swap
              </button>
              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  amount={convertedResult}
                  currencyOption={options}
                  onCurrencyChange={(currency) =>
                    setConvertedCurrency(currency)
                  }
                  onAmountChange={(amount) => setConvertedResult(amount)}
                  selectedCurrency={convertedCurrency}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold px-4 py-3 rounded-lg"
              >
                Convert {currentCurrency} to {convertedCurrency}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
