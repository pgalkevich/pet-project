import {classnames} from "shared/lib/classnames/classnames";
import classes from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={
                classnames(
                    classes.AppLink,
                    {},
                    [className, classes[theme]]
                )
            }
            {...otherProps}
    >
            {children}
        </Link>
    );
};
