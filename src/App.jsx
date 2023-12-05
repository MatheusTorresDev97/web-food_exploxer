import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Routes from "./routes";

import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";
import { RequestProvider } from "./hooks/useRequest";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RequestProvider>
        <AuthProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </AuthProvider>
      </RequestProvider>
    </ThemeProvider>
  );
};

export default App;
