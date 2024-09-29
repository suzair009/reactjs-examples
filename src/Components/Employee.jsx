//state or setState Example
import React from 'react';


class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname:"Syed",
            lastname:"Uzair",
            email:"s.uzair_ullah@hotmail.com"
        }
    }

    updateEmployee(){
        this.setState ({
            firstname:"Test1",
            lastname:"Test2",
            email:"s.test_ullah@hotmail.com"
        })
    }

    render(){
        return(
                <div>
                    <h2>Employee Details</h2>
                    <h3>{this.state.firstname}</h3>
                    <h3>{this.state.lastname}</h3>
                    <h3>{this.state.email}</h3>
                    <button onClick={()=>this.updateEmployee()}>Update</button>
                </div>
        );
            
    }
}

export default Employee;
