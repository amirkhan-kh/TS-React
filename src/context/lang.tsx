import { createContext, FC } from "react";
import { LangProviderProps } from '../../types/index';

export const LangContext = createContext<LangProviderProps | undefined>(undefined);

export const LangProvider: FC<LangProviderProps> = ({ children, lang, setLang }) => {
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};
