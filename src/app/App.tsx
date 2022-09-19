import {ReactElement} from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/theme-provider";
import {classnames} from "shared/lib/classnames/classnames";
import {AppRouter} from "app/providers/router";


const App = (): ReactElement => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classnames('app', {}, [theme])}>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/about'}>About</Link>
            <br/>
            <button onClick={toggleTheme}>Change Theme</button>
            <AppRouter />
        </div>
    );
};

export default App;