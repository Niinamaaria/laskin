//import { useEffect, useState } from 'react';
import './app.scss';
import Header from '../header';
import Calculator from '../calculator';
//import testdata from '../../testdata';

function App(props) {

/*const [data, setData] = useState([]);

useEffect(() => {
  setData(testdata);
}, []);

 const handleCalculatorSubmit = (newcalculation) => {
  let storeddata = data.splice();
  storeddata.push(newcalculation);
  setData(storeddata); 
} */

/*const handleChange = (newvalue) => {
  //alert(newvalue);
    let storedvalues = values.splice();
    storedvalues.push(newvalue);
    //storedvalues.sort();
    setData(storedvalues);
}  */

/*const handleValueChange = (newvalue) => {
  alert(newvalue);
  let storedvalue = values.splice();
  storedvalue.push(newvalue);
  setValue(storedvalue);
} */

  return (
    <div className="app">
       <Header />   
       <Calculator /*onChange={handleValueChange}/* onChange={handleChange} data={data} onCalculatorSubmit={handleCalculatorSubmit} *//>
    </div>
  );
}

export default App;
