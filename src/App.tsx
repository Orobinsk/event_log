import React, {useEffect, useState} from 'react';
import './App.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import Navbar from "./components/Navbar";

function App() {
    const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    // }, []);
  return (
    <div className="App">
        <Navbar/>
      <DataTable value={events} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name" style={{ width: '25%' }}></Column>
        <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
        <Column field="company" header="Company" style={{ width: '25%' }}></Column>
        <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
      </DataTable>
    </div>
  );
}

export default App;
