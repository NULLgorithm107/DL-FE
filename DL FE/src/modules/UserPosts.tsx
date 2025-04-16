import { useEffect, useState } from 'react'
import { callAPI } from '../service/ApiHelper';

function UserPosts() {

    const [nodes, setNodes] = useState<any[]>([]);
    const [username, setUsername] = useState<string>('');
    const [Output, setOutput] = useState<any[]>([]);

    const getNodes = async () => {  
        const response = await callAPI('/graph/nodes','GET');
        console.log('response',response.nodes)
        if(response){
            const nodes = response.nodes.map((node:any) => {
                if(node.node_type[0] === 'Account'){
                    return node.n.name;
                }
            });
            console.log('nodes',nodes)
            setNodes(nodes);
        }
        else{
            console.log('Error fetching nodes')
        }
    }

    const handleSubmit = async () => {
        if(!username){
            alert('Please select both start and end nodes');
            return;
        }
        const response = await callAPI('/accounts/'+username+'/posts','GET');
        console.log('response',response)
        if(response.count){
            setOutput(response.posts);
        }else{
            setOutput(response.error);
        }
    }
 
    useEffect(() => {
        getNodes();
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
        padding:'20px',
        backgroundColor:'#445FB1',
        color:'white',
     }}>
        <div style={{
            height:'80%',
            display:'flex',
            gap:'10px',
            width:'100%',
        }}>
            <div style={{width:'50%',border:'1px solid black',borderRadius:'5px',padding:'10px', backgroundColor: "#778bc7", overflow: 'auto'}}>
                <h2>Input</h2>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px',
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',}}>
                    <div>
                        <label htmlFor="start">Username: </label>
                        <select id="dropdown" value={username} onChange={(event)=>setUsername(event.target.value)}
                        style={{width:'100%',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px'}}>
                            <option value="" disabled>Select one</option>
                            {nodes.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/* <div>
                        <label htmlFor="end">Select End Node: </label>
                        <select id="dropdown" value={endNode} onChange={(event)=>setEndNode(event.target.value)}
                        style={{width:'100%',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px'}}>
                            <option value="" disabled>Select one</option>
                            {nodes.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div> */}
                </div>
            </div>
            <div style={{width:'50%',border:'1px solid black',borderRadius:'5px',padding:'10px', backgroundColor: "#778bc7", overflow: 'auto'}}>
                <h2>Output</h2>
                <div>
                    <pre style={{display:'flex',textWrap:'wrap'}}>
                    {JSON.stringify(Output,null,2)}
                    </pre>
                </div>
            </div>
        </div>
        <div>
            <button style={{
                height:'60px',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer',
                width:'100px',
                fontSize:'16px',
            }}
            onClick={handleSubmit}
            >Submit</button>
        </div>
     </div>
    </>
  )
}

export default UserPosts
