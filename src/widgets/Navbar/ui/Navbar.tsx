import React from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

interface INavBarProps {
    className?: string;
}

export const Navbar = ({ className }: INavBarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classnames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    {t('home')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};
