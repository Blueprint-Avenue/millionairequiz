import { useEffect, useState, useMemo } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
import './app.css';

function App() {

  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber ] = useState(1);
  const [timeOut, setTimeOut ] = useState(false);
  const [earned, setEarned ] = useState("$ 0");
const data = [
  {
    id:1,
    question:'In children’s stories, how many wishes are granted by a genie or fairy?',
    answers: [
      {
        text:'One',
        correct:false
      },{
        text:'Two',
        correct:false
      },{
        text:'Three',
        correct:true
      },{
        text:'Four',
        correct:false
      }
    ]
  },
  {
    id:2,
    question:'Which legal document states a person’s wishes regarding the disposal of their property after death?',
    answers: [
      {
        text:'Would',
        correct:false
      },{
        text:'Shall',
        correct:false
      },{
        text:' Should',
        correct:false
      },{
        text:' Will',
        correct:true
      }
    ]
  },
  {
    id:3,
    question:'Which of these phrases refers to a brief success?',
    answers: [
      {
        text:'Blaze in the pot',
        correct:false
      },{
        text:' Spark in the tub',
        correct:false
      },{
        text:'Flare in the jug',
        correct:false
      },{
        text:'Flash in the pan',
        correct:true
      }
    ]
  },
  {
    id:4,
    question:'Which of these is a type of hat?',
    answers: [
      {
        text:'Sausage roll',
        correct:false
      },{
        text:'Pork pie',
        correct:true
      },{
        text:'Scotch egg',
        correct:false
      },{
        text:'Potato crisp',
        correct:false
      }
    ]
  },
  {
    id:5,
    question:'In which sport do two teams pull at the opposite ends of a rope?',
    answers: [
      {
        text:'Tug of war',
        correct:true
      },{
        text:'Basketball',
        correct:false
      },{
        text:'Ice hockey',
        correct:false
      },{
        text:'Polo',
        correct:false
      }
    ]
  },
  {
    id:6,
    question:'Where does a cowboy wear chaps?',
    answers: [
      {
        text:'On his head',
        correct:false
      },{
        text:'On his arms',
        correct:false
      },{
        text:'On his legs',
        correct:true
      },{
        text:'On his hands',
        correct:false
      }
    ]
  },
  {
    id:7,
    question:' In 1581, Sir Francis Drake became mayor of which city?',
    answers: [
      {
        text:'Hull',
        correct:false
      },{
        text:'Glasgow',
        correct:false
      },{
        text:'Plymouth',
        correct:true
      },{
        text:'Bristol',
        correct:false
      }
    ]
  },
  {
    id:8,
    question:'The Walrus And The Carpenter is a well-known verse in which children’s novel?',
    answers: [
      {
        text:'Swallows And Amazons',
        correct:false
      },{
        text:'The Hobbit',
        correct: false
      },{
        text:'Through The Looking Glass',
        correct: true
      },{
        text:'Stig Of The Dump',
        correct:false
      }
    ]
  },
  {
    id:9,
    question:'Which of these have to pass a test on ‘The Knowledge’ to get a licence?',
    answers: [
      {
        text:'OnTaxi drivers',
        correct:true
      },{
        text:'Bus drivers',
        correct:false
      },{
        text:'Police officers',
        correct:false
      },{
        text:'Ambulance drivers',
        correct:false
      }
    ]
  },
  {
    id:10,
    question:'In 2001, Donald Campbell’s Bluebird was recovered from which lake?',
    answers: [
      {
        text:'Bala Lake',
        correct:false
      },{
        text:'Kleder Water',
        correct:false
      },{
        text:'Coniston Water',
        correct:true
      },{
        text:'Lake Windermere',
        correct:false
      }
    ]
  },
  {
    id:11,
    question:'In Welsh, what does ‘afon’ mean?',
    answers: [
      {
        text:'Fort',
        correct:false
      },{
        text:'Meadow',
        correct:false
      },{
        text:'Pool',
        correct:false
      },{
        text:'River',
        correct:true
      }
    ]
  },
  {
    id:12,
    question:'Which king wrote a famous denunciation of smoking?',
    answers: [
      {
        text:'Richard I',
        correct:false
      },{
        text:'William I',
        correct:false
      },{
        text:'George I',
        correct:false
      },{
        text:'James I',
        correct:true
      }
    ]
  },
  {
    id:13,
    question:'The young of which creature is known as a squab?',
    answers: [
      {
        text:'Salmon',
        correct:false
      },{
        text:'Horse',
        correct:false
      },{
        text:'Pigeon',
        correct:true
      },{
        text:'Octopus',
        correct:false
      }
    ]
  },
  {
    id:14,
    question:'Who is the patron saint of Spain?',
    answers: [
      {
        text:'St James',
        correct:true
      },{
        text:'St John',
        correct:false
      },{
        text:'St Benedict',
        correct:false
      },{
        text:'St Peter',
        correct:false
      }
    ]
  },
  {
    id:15,
    question:'Which of these is not one of the American Triple Crown horse races?',
    answers: [
      {
        text:'Arlington Million',
        correct:true
      },{
        text:'Belmont Stakes',
        correct:false
      },{
        text:'Kentucky Derby',
        correct:false
      },{
        text:'Preakness Stakes',
        correct:false
      }
    ]
  },
]

const moneyPyramid = useMemo(()=>
  [
    {id:1, amount:'$ 100'},
    {id:2, amount:'$ 200'},
    {id:3, amount:'$ 300'},
    {id:4, amount:'$ 500'},
    {id:5, amount:'$ 1000'},
    {id:6, amount:'$ 2000'},
    {id:7, amount:'$ 4000'},
    {id:8, amount:'$ 8000'},
    {id:9, amount:'$ 16000'},
    {id:10, amount:'$ 32000'},
    {id:11, amount:'$ 64000'},
    {id:12, amount:'$ 125000'},
    {id:13, amount:'$ 250000'},
    {id:14, amount:'$ 500000'},
    {id:15, amount:'$ 1000000'},
  ].reverse(),[]);


useEffect(()=>{
questionNumber > 1 && setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount)
},[moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
       {timeOut ? <h1 className='endText'>You Earned:{earned} </h1> :(
         <>
      <div className='top'>
        <div className="timer"><Timer
        setTimeOut={setTimeOut}
        questionNumber={questionNumber}
        /></div>
      </div>
      <div className='bottom'>
        <Trivia
        data={data}
        setTimeOut={setTimeOut}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        />
        </div></>
        )}
     </div>
     <div className="pyramid">
       <ul className='moneyList'>
         {moneyPyramid.map( m => (
         <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
           <span className='moneyListItemNumber'>{m.id}</span>
           <span className='moneyListItemAmount'>{m.amount}</span>
         </li>
         ))}
       </ul>
     </div>

        </>
      ) : ( <Start setUsername={setUsername} />
      )}

    </div>
  );
}

export default App;
