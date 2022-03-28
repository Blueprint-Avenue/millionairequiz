import './app.css';

function App() {


const moneyPyramid = [
  {id:1, amount:'$ 100'},
  {id:1, amount:'$ 200'},
  {id:1, amount:'$ 300'},
  {id:1, amount:'$ 500'},
  {id:1, amount:'$ 1000'},
  {id:1, amount:'$ 2000'},
  {id:1, amount:'$ 4000'},
  {id:1, amount:'$ 8000'},
  {id:1, amount:'$ 16000'},
  {id:1, amount:'$ 32000'},
  {id:1, amount:'$ 64000'},
  {id:1, amount:'$ 125000'},
  {id:1, amount:'$ 250000'},
  {id:1, amount:'$ 500000'},
  {id:1, amount:'$ 1000000'},
]

  return (
    <div className="app">
     <div className="main">main</div>
     <div className="pyramid">
       <ul className='moneyList'>
         <li className='moneyListItem active'>
           <span className='moneyListItemNumber'>4</span>
           <span className='moneyListItemAmount'>$ 400</span>
         </li>


       </ul>
     </div>
    </div>
  );
}

export default App;
