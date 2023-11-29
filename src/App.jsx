import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import Wrapper from "./components/Wrapper"
import Input from "./components/Input"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Input/>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
