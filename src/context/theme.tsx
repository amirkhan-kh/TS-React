import { createContext, FC } from "react";
import type { ThemeProviderProps } from "../types/index";
export const ThemeContext: any = createContext('light');


export const ThemeProvider: FC<ThemeProviderProps> = ({ children,toggleTheme, theme}) => {
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}