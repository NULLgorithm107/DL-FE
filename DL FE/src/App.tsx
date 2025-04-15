import { use, useEffect, useState } from 'react'

import './App.css'
import Toggle from './atoms/Toggle'
import MainPage from './MainPage';
import NonLLMPage from './NonLLMPage';
import ShortestPath from './modules/SHortestPath';

function App() {
  const [isLLM, setIsLLM] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const navbar_options = [
    'Shortest Path',
    'About',
    'Contact',
    'Services',
  ]
  const llm_options=[
    'O1',
    'O2',
    'O3',
  ]

  useEffect(() => {
    if(isLLM){
      setCurrentPage('O1')
    }else{
      setCurrentPage('Home')
    }
  }
  , [isLLM]);
  const handleclick=(option:string)=>{
    setCurrentPage(option)
    
  }
  return (
    <>
      <div style={{ display: 'flex', height: '100vh',width:'100vw', backgroundColor: 'white' }}>
        <div style={{ width: '20%', backgroundColor: 'black', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Toggle
              initial={isLLM}
              onToggle={(value) => {
                setIsLLM(value)
              }}
            />
            <div>
              {!isLLM ? 'Turn on LLM' : 'Turn off LLM'}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', padding: '10px' }}>
            {!isLLM && navbar_options.map((option, index) => (
              <div key={index}
                style={{
                  padding: '10px', cursor: 'pointer', borderRadius: '5px', textAlign: 'center',
                  backgroundColor: currentPage === option ? 'rgb(68, 95, 177)' : 'white',
                  color: currentPage === option ? 'white' : 'black',
                }}
                onClick={() => {
                  setCurrentPage(option)
                }}
              >
                {option}
              </div>
            ))}
            {isLLM && llm_options.map((option, index) => (
              <div key={index}
                style={{
                  padding: '10px', cursor: 'pointer', borderRadius: '5px', textAlign: 'center',
                  backgroundColor: currentPage === option ? 'rgb(68, 95, 177)' : 'white',
                  color: currentPage === option ? 'white' : 'black',
                }}
                onClick={() => {
                  // setCurrentPage(option)
                  handleclick(option)
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '80%',paddingRight:'50px' }}>
            {/* {isLLM ? <MainPage selectedPage={currentPage}/> : <NonLLMPage selectedPage={currentPage}/>} */}
            {
              currentPage === 'Shortest Path' ? <ShortestPath/> :
              <></>
            }
        </div>
      </div>
    </>
  )
}

export default App
