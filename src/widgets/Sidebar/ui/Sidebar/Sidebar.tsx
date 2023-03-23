import {classnames} from "shared/lib/classnames/classnames";
import classes from './Sidebar.module.scss';
import React, {useState} from "react";
import {Button, EButtonTheme} from "shared/ui/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({className}: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = (): void => {
        setCollapsed((isCollapsed: boolean) => !isCollapsed);
    }

    return (
        <div
            className={classnames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}
        >
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button
                    theme={EButtonTheme.CLEAR}
                    onClick={onToggle}

                >
                    <div className={classnames(classes.collapseBtn, {[classes.collapsed]: collapsed})}>
                        <span>{ '<' }</span>
                    </div>
                </Button>
            </div>
        </div>
    );
};
