import { useEffect, useState } from 'react'

function NonLLMPage({selectedPage:any}) {
 
    useEffect(() => {
    },[])
  return (
    <>
     <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        width:'100%',
        alignItems:'center',
        height:'100vh',
     }}>
        <div style={{
            height:'80%',
        }}>

        </div>
        <div>
            <button style={{
                height:'60px',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: 'rgb(68, 95, 177)',
                color: 'white',
                cursor: 'pointer'
            }}>Submit</button>
        </div>
     </div>
    </>
  )
}

export default NonLLMPage
