import {ReactElement} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/theme-provider";
import {classnames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


const App = (): ReactElement => {
    const { theme } = useTheme();

    return (
        <div className={classnames('app', {}, [theme])}>
            <Navbar />
            <div className='page-wrapper'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;