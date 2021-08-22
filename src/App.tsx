import React from 'react';
import {Breather} from "./components/Breather";
import SettingsModal from "./components/SettingsModal";

function App() {
    return (
        <div className="container">
            <Breather/>
            <SettingsModal/>
        </div>
    );
}

export default App;
