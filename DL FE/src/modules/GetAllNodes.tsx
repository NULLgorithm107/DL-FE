import { useEffect, useState } from 'react'
import { callAPI } from '../service/ApiHelper';

function GetAllNodes() {

    const [nodes, setNodes] = useState<any[]>([]);
    // const [startNode, setStartNode] = useState<string>('');
    // const [endNode, setEndNode] = useState<string>('');
    // const [Output, setOutput] = useState<any[]>([]);

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

    // const handleSubmit = async () => {
    //     // if(!startNode || !endNode){
    //     //     alert('Please select both start and end nodes');
    //     //     return;
    //     // }
    //     const response = await callAPI('/graph/nodes','POST');
    //     console.log('response',response)
    //     if(response.found){
    //         setOutput(response.path);
    //     }
    // }
 
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
            height:'90%',
            display:'flex',
            gap:'10px',
            width:'100%',
        }}>
            {/* <div style={{width:'50%',border:'1px solid black',borderRadius:'5px',padding:'10px'}}>
                <h2>Input</h2>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px',
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',}}>
                    <div>
                        <label htmlFor="start">Select Start Node: </label>
                        <select id="dropdown" value={startNode} onChange={(event)=>setStartNode(event.target.value)}
                        style={{width:'100%',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px'}}>
                            <option value="" disabled>Select one</option>
                            {nodes.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="end">Select End Node: </label>
                        <select id="dropdown" value={endNode} onChange={(event)=>setEndNode(event.target.value)}
                        style={{width:'100%',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px'}}>
                            <option value="" disabled>Select one</option>
                            {nodes.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div> */}
            <div style={{width:'100%',border:'1px solid black',borderRadius:'5px',padding:'10px', overflow: 'auto', backgroundColor: "#778bc7"}}>
                <h2>Output</h2>
                {/* <div>
                    <pre style={{display:'flex',textWrap:'wrap'}}>
                    {JSON.stringify(Output,null,2)}
                    </pre>
                </div> */}
                <div>
                    <pre style={{display:'flex',textWrap:'wrap'}}>
                    {JSON.stringify(nodes,null,2)}
                    </pre>
                </div>

            </div>
        </div>
     </div>
    </>
  )
}

export default GetAllNodes
