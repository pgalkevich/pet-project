import { classnames } from 'shared/lib/classnames/classnames';
import classes from './Loader.module.scss';

interface ILoaderProps {
    className?: string;
    isSimple?: boolean;
}

export const Loader = ({ className, isSimple = true }: ILoaderProps) => {
    const simpleLoader = (
        <div className={classnames(
            classes['lds-ring'],
            {},
            [className],
        )}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );

    const fullSizeLoader = (
        <div className={classes.Wrapper}>
            {simpleLoader}
        </div>
    );

    return isSimple ? simpleLoader : fullSizeLoader;
};
