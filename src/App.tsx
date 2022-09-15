import {ReactElement, Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/main-page/MainPage.async";
import {AboutPageAsync} from "./pages/about-page/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classnames} from "./helpers/classnames/classnames";


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
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;