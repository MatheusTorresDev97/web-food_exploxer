import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Favorites />
    </ThemeProvider>
  );
};

export default App;
