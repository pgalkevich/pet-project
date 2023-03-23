import {ReactElement, Suspense} from 'react';
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
            <Suspense fallback="">
                <Navbar />
                <div className='page-wrapper'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;