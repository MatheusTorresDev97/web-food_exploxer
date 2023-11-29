import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
          <SignUp />
    </ThemeProvider>
  );
};

export default App;
