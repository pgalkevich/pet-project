import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = (): ReactElement => {
    const { t } = useTranslation('main-page');

    return (
        <div>
            { t('title')}
        </div>
    );
};

export default MainPage;