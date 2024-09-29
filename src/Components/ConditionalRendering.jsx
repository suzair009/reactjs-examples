import { useState } from "react"

//Conditional Rendering Example....

const ConditionalRendering = ()=>{

    const[login,isLoggedin] = useState(false);

    let _element = "";

    function handleRequest(){
        isLoggedin(true);
    }

    if(login){
        _element = <h2>Welcome, User!!!</h2>;
    }
    else{
        _element = <h2>Please logged in</h2>
    }

    return (
            <div>
                {
                //_element
                    //isLoggedin ? <p>Welcome User!!!</p> : <p>Please Login!!!</p>
                    isLoggedin && <p>Welcome, User!!!</p>
                }
                 <button onClick={handleRequest}>Click</button>
            </div>
    );

}

export default ConditionalRendering;