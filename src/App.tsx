import GlobalStyle from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/themes.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Result from "./pages/Result.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyle />
            <QueryClientProvider client={client}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/result"} element={<Result />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
