import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <SignIn />
    </ThemeProvider>
  );
};

export default App;
