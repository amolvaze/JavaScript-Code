import React, {useState} from 'react';
//import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://jsonplaceholder.typicode.com/todos';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete({onSelectItem}) {
 const[data, setData] = useState([])
 const[value, setValue] = useState('')

 const fetchData = () => {
    //  console.log(value)
     setData(value.split(''))
    //  axios.get(ITEMS_API_URL, { params: { q: value} })
    //  .then(res => setData(res.data))
 }

 const debounceFetchData = 
      lodash.debounce(fetchData, DEBOUNCE_DELAY)

 function handleChange() { 
   
    debounceFetchData();
  }

  return (
    <div className="wrapper">
      <div className="control">
        <input type="text" value = {value} className="input" 
       onChange={(e) =>{ 
           setValue(e.target.value);
           handleChange();
       }}
        
       />
      </div>
      <div className="list is-hoverable" > 
         { 
             data.map(d => (
      <div 
      key= {d} 
      onClick = {() => onSelectItem(d)} 
      className = "list-item">{d}</div>
  
             ))
         }
      </div>
    </div>
  );
}

