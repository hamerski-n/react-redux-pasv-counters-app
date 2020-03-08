import React from 'react';
import './App.css';
import CountersList from "../counters-list";
import ConfirmationDelete from "../delete-confirmation-modal";

function App() {
    return (
        <div className="App">
            <CountersList/>
            <ConfirmationDelete/>
        </div>
    );
}

export default App;
