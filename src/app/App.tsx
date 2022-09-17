import {ReactElement, Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/main-page/";
import {AboutPage} from "pages/about-page/";
import {useTheme} from "app/providers/theme-provider";
import {classnames} from "shared/lib/classnames/classnames";


 const App = (): ReactElement => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classnames('app', {}, [theme])}>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/about'}>About</Link>
            <br/>
            <button onClick={toggleTheme}>Change Theme</button>
            <Suspense fallback={<div>Loading...</div>} >
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage  />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;