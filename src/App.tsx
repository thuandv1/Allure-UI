import { Provider } from "react-redux";

import store from "_redux/store";
import "assets/scss/global.scss";
import Theme from "components/base/Theme/Theme";
import Router from "routes/Router";

function App() {
return (
    <Provider store={store}>
      <Theme>
        <Router />
      </Theme>
    </Provider>
  );
}

export default App;
