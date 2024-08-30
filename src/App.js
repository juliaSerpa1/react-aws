import React from 'react';
import './App.css';
import PayloadTable from './components/PayloadTable';

function App() {
  return (
    <div className="App">
      <h1>DynamoDB Data Viewer</h1>
      <PayloadTable />
    </div>
  );
}

export default App;