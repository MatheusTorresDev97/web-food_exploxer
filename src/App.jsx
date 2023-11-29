import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
