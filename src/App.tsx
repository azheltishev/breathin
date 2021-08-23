import React, {useEffect} from 'react';
import {Breather} from "./components/Breather";
import SettingsModal from "./components/SettingsModal";
import {keepTheme} from './public/themes';

function App() {
    useEffect(() => {
        keepTheme();
    })
    return (
        <div className="container">
            <Breather/>
            <SettingsModal/>
        </div>
    );
}

export default App;
