import './index.css';
import Employee from './components/Employee';
//import EditEmployee from './components/EditEmployee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {
          name: "Caleb", role: "Intern", img: "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg"
      },
      {
          name: "Eckard", role: "Intern", img: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg"
      },
      {
          name: "Caleb", role: "Intern", img: "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg"
      },
      {
          name: "Simone", role: "Manager", img: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg"
      },  
      {
          name: "Caleb2", role: "Developer", img: "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg"
      },
    ]
  );
  /*
  const handleClick = () => {
    setEmployees(employees.concat({ name: 'John Doe' }))
  };
  */
 
  return (
    <div className="App">
      {showEmployees ?
        <>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hier eingeben</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              //console.log(e.target.value);
              setRole(e.target.value);
            }} />
            
        </div>
        <div className="flex flex-wrap justify-center">

            {employees.map( (employee) => {

                console.log(employee);
                return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={role}
                  img={employee.img}
                  />
                )
            } )}
          
        </div>
        </>
      :
      <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
