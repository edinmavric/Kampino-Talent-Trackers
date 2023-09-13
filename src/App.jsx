import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChoseSport from './components/ChoseSport';
import Basketball from './components/Basketball';
import Football from './components/Football';
import Volleyball from './components/Volleyball';
import Page404 from './components/404';

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<ChoseSport />} path="/" />
                <Route element={<Basketball />} path="/basketball" />
                <Route element={<Football />} path="/football" />
                <Route element={<Volleyball />} path="/volleyball" />
                <Route element={<Page404 />} path="*" />
            </Routes>
        </>
    );
};

export default App;
