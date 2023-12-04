
import './App.css';

import Brand from './components/brand';
import Invoice from './components/invoice'
import EditableTable from './components/table'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <Brand title="brand"></Brand>
      </header>
      <body className='App-body'>
      <Invoice title="buzz" ></Invoice>
      <EditableTable title="tab"></EditableTable>

      </body>
      <footer>
       
      </footer>
    </div>
  );
}

export default App;
