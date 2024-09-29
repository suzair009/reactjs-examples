const Educationaldetails = (props) => {
  
//Destructing varibales

   const {institute,section,faculty} = props;
    const _elements = 
    <div>
      <h2>Educational Information:</h2>
      <h3>Institute: {props.education.institute}</h3>
      <h3>Section: {props.education.section}</h3>
      <h3>Faculty: {props.education.faculty}</h3>
    </div>
  
  return _elements;
};

export default Educationaldetails;
