import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Routes from "./routes";

import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
