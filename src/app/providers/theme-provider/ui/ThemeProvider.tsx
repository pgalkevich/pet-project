import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { FC, useMemo, useState } from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<ETheme>(defaultTheme);

    const defaultContextProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultContextProps}>
            {children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;