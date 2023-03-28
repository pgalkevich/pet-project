import { classnames } from 'shared/lib/classnames/classnames';
import classes from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum EButtonTheme {
    CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: EButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classnames(classes.Button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
