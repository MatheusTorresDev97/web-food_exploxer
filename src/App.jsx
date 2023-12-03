import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Order from "./pages/Order";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Order />
    </ThemeProvider>
  );
};

export default App;
