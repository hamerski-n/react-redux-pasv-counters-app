import React from 'react';
import './App.css';
import CountersList from "../counters-list";
import ConfirmationDelete from "../delete-confirmation-modal";
import AddCounterForm from "../add-counter-form";
import CountersTotal from "../counters-total/counters-total";

function App() {
    return (
        <div className="App">
            <CountersTotal/>
            <CountersList/>
            <ConfirmationDelete/>
            <AddCounterForm/>
        </div>
    );
}

export default App;
