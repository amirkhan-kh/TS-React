import React, { useState } from 'react';
import { Container } from './components/containers/container/Container';
import { Button } from './components/ui/Button';
import { ThemeProvider } from './context/theme';
import { Card } from './components/ui/card/Card';
import { LangProvider } from './context/lang';
import { CardGrid } from './components/containers/cardGrid';

const App: React.FC = () => {
    const [theme, setTheme] = useState<string>("light");
    const [lang, setLang] = useState<string>("en");

    const toggleTheme = (): void => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <LangProvider lang={lang} setLang={setLang}>
            <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
                <Container>
                    <Button text="Submit" onClick={toggleTheme} className="bg-slate-500 px-4 py-2 rounded-xl text-white" />
                    <h1>TYPE SCRIPT</h1>
                    <h1>{lang}</h1>
                </Container>
                <Container className="mx-auto">
                    <CardGrid>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardGrid>
                </Container>
            </ThemeProvider>
        </LangProvider>
    );
};

export default App;
