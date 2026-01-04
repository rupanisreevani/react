function Import1(){
    return(
        <div>
            <h1 style={{backgroundColor:'pink',textAlign:'center'}}>iam sreevani</h1>
            <p style={{backgroundColor:'yellowgreen',textAlign:'center',padding:'15px'}}>today is sunday</p>
            <Import2></Import2>
        </div>
    )
}
export default Import1;
  
function Import2(){
    return(
        <h2>Ganesh is Hero</h2>
    )
}

 export function Content1(){
    return(
        <h1 style={{backgroundColor:'yellow',textAlign:'center'}}>nani</h1>
    )
}

export function Footer(){
    return(
        <div style={{backgroundColor:'red',textAlign:'center'}}>
            <h2> React JS</h2>
            <p>HTML </p>
        </div>
    )
}


 export const Box =()=>{
    return(
        <marquee scrollamount="10" direction="right"  behavior="altenet"  style={{backgroundColor:'aqua',textAlign:'center'}}>Products are available in the box</marquee>
    )
}
