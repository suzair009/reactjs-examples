const StudentData  = (props)=>{

    const _element = <div>
                          <h2>Student Data</h2>
                          <h3>FirstName: {props.student.firstname}</h3> 
                          <h3>LastName: {props.student.lastname}</h3> 
                          <h3>Email: {props.student.email}</h3> 

                          <h4>Skills</h4>
                          <h5>{props.data}</h5> 
                    </div>
          return _element;          
    }

export default StudentData;