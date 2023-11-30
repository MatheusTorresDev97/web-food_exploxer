import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <NotFound />
    </ThemeProvider>
  );
};

export default App;
