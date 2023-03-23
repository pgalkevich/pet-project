import {classnames} from "shared/lib/classnames/classnames";
import classes from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, EButtonTheme} from "shared/ui/Button";
import {useTheme} from "app/providers/theme-provider";

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation('common');
    const { theme } = useTheme();

    const onToggle = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            onClick={onToggle}
            className={classnames(classes.LangSwitcher, {}, [classes[theme]])}
        >
            {t('lang-toggle')}
        </Button>
    );
};
