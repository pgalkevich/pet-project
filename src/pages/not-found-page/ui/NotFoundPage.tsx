import { classnames } from 'shared/lib/classnames/classnames';
import classes from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
    const { t } = useTranslation('common');

    return (
        <div className={classnames(classes.NotFoundPage, {}, [className])}>
            {t('not-found-page')}
        </div>
    );
};
