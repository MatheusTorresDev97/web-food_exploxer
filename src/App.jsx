import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import AllOrders from "./pages/AllOrders";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AllOrders />
    </ThemeProvider>
  );
};

export default App;
