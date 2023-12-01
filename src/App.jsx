import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShoppingCart />
    </ThemeProvider>
  );
};

export default App;
