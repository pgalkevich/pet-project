import { classnames } from 'shared/lib/classnames/classnames';
import classes from './ErrorScreen.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface IErrorScreenProps {
    className?: string;
}

export const ErrorScreen = ({ className }: IErrorScreenProps) => {
    const { t } = useTranslation('common');

    const reloadPage = (): void => location.reload();
    
    return (
        <div className={classnames(classes.ErrorScreen, {}, [className])}>
            <p>{t('error-screen.message')}</p>
            <Button onClick={reloadPage}>
                {t('error-screen.reload')}
            </Button>
        </div>
    );
};
