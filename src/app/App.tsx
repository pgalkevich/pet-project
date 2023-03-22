import {ReactElement} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/theme-provider";
import {classnames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = (): ReactElement => {
    const { theme } = useTheme();

    return (
        <div className={classnames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />

        </div>
    );
};

export default App;