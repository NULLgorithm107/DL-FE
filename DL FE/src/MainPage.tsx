import { useEffect, useState } from 'react'

function MainPage({selectedPage:any}) {
 
    useEffect(() => {
    },[])
  return (
    <>
      <div style={{ padding: '20px', backgroundColor: 'white',display:'flex',flexDirection:'column',width:'100%',height:'100vh',gap:'20px'}}>
        <div style={{}}>
            <h1 style={{color:'black',textAlign:'center'}}>The Social Graph</h1>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            height:'70%',
            border:'1px solid black',
            borderRadius:'5px',
        }}>
           
            
        </div>
        <div style={{ display:'flex',gap:'10px',width:'100%',alignItems:'center',justifyContent:'center',height:'100px'}}>
            {/* <div style={{padding:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}> */}
                <input type="text" placeholder="Search..." style={{height:'40px',width:'400px', padding: '10px', borderRadius: '5px', border: '1px solid black', fontSize:'16px'}} />
            {/* </div> */}
            {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> */}
                <button style={{
                    height:'60px',padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: 'rgb(68, 95, 177)', color: 'white', cursor: 'pointer',width:'100px',fontSize:'16px',fontWeight:'bold'
                }}>Send</button>
            {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default MainPage
