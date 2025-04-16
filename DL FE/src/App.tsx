import { use, useEffect, useState } from 'react'

import './App.css'
import Toggle from './atoms/Toggle'
import MainPage from './MainPage';
import NonLLMPage from './NonLLMPage';
import ShortestPath from './modules/SHortestPath';
import GetAllNodes from './modules/GetAllNodes';
import Accounts from './modules/Accounts';
import Connections from './modules/Connections';
import Follow from './modules/Follow';
import Unfollow from './modules/Unfollow'; 
import Post from './modules/Post';
import Like from './modules/Like';
import Unlike from './modules/Unlike';
import UserPosts from './modules/UserPosts';
import UserSimilar from './modules/UserSimilar';
import UserRecommendedPosts from './modules/UserRecommendedPosts';
import PageRank from './modules/PageRank';
import Statistics from './modules/Statistics';
import CommonConnections from './modules/CommonConnections';
import LLMConvert from './modules/LLMConvert';
import LLMProfile from './modules/LLMProfile';
import LLMQuery from './modules/LLMQuery';

function App() {
  const [isLLM, setIsLLM] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const navbar_options = [
    'Shortest Path',
    'Get All Nodes',
    'Accounts',
    'Connections',
    'Follow',
    'Unfollow',
    'Post',
    'Like',
    'Unlike',
    'User Posts',
    'Similar Users',
    'User Recommended Posts',
    'PageRank Analysis',
    'Statistics',
    'Common Connections',
  ]
  const llm_options=[
    'Convert',
    'Query',
    'Profile',
  ]

  useEffect(() => {
    if(isLLM){
      setCurrentPage('Convert')
    }else{
      setCurrentPage('Shortest Path')
    }
  }
  , [isLLM]);
  const handleclick=(option:string)=>{
    setCurrentPage(option)
    
  }
  return (
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', padding: '10px', overflow: 'auto'}}>
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
              currentPage === 'Shortest Path' ? <ShortestPath/> : currentPage === 'Get All Nodes' ? <GetAllNodes/>:  currentPage === 'Accounts' ? <Accounts/>: currentPage === 'Connections' ? <Connections/>: currentPage === 'Follow' ? <Follow/>: currentPage === 'Unfollow' ? <Unfollow/>: currentPage === 'Post' ? <Post/>: currentPage === 'Like' ? <Like/>: currentPage === 'Unlike' ? <Unlike/>: currentPage === 'User Posts' ? <UserPosts/>: currentPage === 'Similar Users' ? <UserSimilar/>: currentPage === 'User Recommended Posts' ? <UserRecommendedPosts/>: currentPage === 'PageRank Analysis' ? <PageRank/>: currentPage === 'Statistics' ? <Statistics/>: currentPage === 'Common Connections' ? <CommonConnections/>: currentPage === 'Convert' ? <LLMConvert/>: currentPage === 'Profile' ? <LLMProfile/>: currentPage === 'Query' ? <LLMQuery/>:
              <></>
            }
        </div>
      </div>
  )
}

export default App
