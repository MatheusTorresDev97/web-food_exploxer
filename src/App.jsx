import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import New from "./pages/New";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  );
};

export default App;
