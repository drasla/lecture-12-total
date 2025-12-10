import GlobalStyle from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/themes.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Result from "./pages/Result.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const client = new QueryClient();

function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
            <GlobalStyle />
            <QueryClientProvider client={client}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={"/"}
                            element={<Home isDark={isDark} setIsDark={setIsDark} />}
                        />
                        <Route path={"/result"} element={<Result />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
