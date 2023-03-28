import { classnames } from 'shared/lib/classnames/classnames';
import classes from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/theme-provider';
// import SwitcherIcon from 'shared/assets/icons/theme-switcher-dark.svg';
// import themeIconSrc from 'shared/assets/icons/theme-icon.png';
import { Button, EButtonTheme } from 'shared/ui/Button';


export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            className={classnames(classes.ThemeSwitcher, {}, [classes[theme]])}
            onClick={toggleTheme}
        >
            {/*<SwitcherIcon className={classnames(classes.icon, {}, [classes[theme]])} />*/}
            <div className={classnames(classes.icon, {}, [classes[theme]])} />
            {/*<img src={themeIconSrc} alt=""*/}
            {/*     className={classnames(classes.icon, {}, [classes[theme]])}*/}
            {/*/>*/}
        </Button>
    );
};
