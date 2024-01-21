import logo from './logo.svg';
import './App.css';
import SelectItem from './components/SelectItem';
import AddItem from './components/AddItem';
import NewBill from './components/NewBill';
import MyBill from './components/MyBill';
import Items from './components/Items';
import Sales from './components/Sales';

function App() {
  return (
    <div className="App">
      <div>
        <SelectItem/>
      </div>
      <div style={{display:"flex"}}>
        <div style={{backgroundColor:"red"}}>
          <div>
            <NewBill/>
            <MyBill/>
          </div>
          <div>
            <Items/>
            <Sales/>
          </div>
        </div>
        <div style={{backgroundColor:"blue"}}>
          <AddItem/>
        </div>
      </div>
    </div>
  );
}

export default App;
