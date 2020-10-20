import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainDisplay from "./MainDisplay";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MainDisplay />
      </div>
    </Provider>
  );
};

export default App;
