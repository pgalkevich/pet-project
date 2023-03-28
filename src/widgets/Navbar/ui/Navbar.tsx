import React from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

interface INavBarProps {
    className?: string;
}

export const Navbar = ({ className }: INavBarProps) => {
    return (
        <div className={classnames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Home</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};
