import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <Profile />
    </ThemeProvider>
  );
};

export default App;
