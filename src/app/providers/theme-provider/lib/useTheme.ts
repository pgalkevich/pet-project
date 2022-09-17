import {useContext} from "react";
import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";

interface IUseThemeResult {
    theme: ETheme;
    toggleTheme: () => void;
}

export const useTheme = (): IUseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return { theme, toggleTheme };
}