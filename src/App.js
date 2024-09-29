import logo from "./logo.svg";
import "./App.css";
import Hello from "./Components/Hello";
import Welcome from "./Components/Welcome";
import Greetings from "./Components/Greetings";
import {
  firstCompoenet as FC,
  SecondComponent as SC,
} from "./Components/CompenetList";
import MyMainComponenet from "./Components/CompenetList";
import JSXhello from "./Components/JSXcomponent";
import JSXRules from "./Components/JSXRules";
import StudentData from "./Components/StudentData";
import Educationaldetails from "./Components/Educationaldetails";
import Employee from "./Components/Employee";
import UserExample from "./Components/UserExample";
import EventHandling from "./Components/EventHandling";
import ConditionalRendering from "./Components/ConditionalRendering";

function App() {
  const student = {
    firstname: "Syed",
    lastname: "Uzair",
    email: "roxentech009@gmail.com",
  };

  const education = {
    institute: "Virtual Iniversity",
    section: "A",
    faculty: "Computer Science",
  };

  const skills = ["HTML5,", "CSS3,", "JAVASCRIPT,", "JAVA "];

  return (
    <div className="App">
      {/* <Hello />
      <Welcome name="Test" />
      <Greetings name="Syed" />
      <FC/>
      <SC/>
      <MyMainComponenet />
      <JSXhello />
      <JSXRules /> */}
      <table>
        <tr>
          <td>
            <StudentData student={student} data={skills} />
          </td>
          <td>
            <Educationaldetails education={education} />
          </td>
        </tr>
        <tr>
          <td> <Employee /></td>
           <td>
              <UserExample />
          </td>
        </tr>
        <tr>
            <td>
                <EventHandling />
            </td>
            <td>
                <ConditionalRendering />
            </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
