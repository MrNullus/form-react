import { useState } from 'react';
import { inputs } from './data';

import FormInput from './components/FormInput';
import './styles/global.scss';


function App() {
  const [ values, setValues ] = useState({
    username: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = ( e ) => {
    e.preventDefault();
  };

  const onChange = ({ target }) => {
    setValues({ 
      ...values,  
      [target.name]: target.value
    });
  };

  inputs[4].pattern = values.password;
  console.log(values);

  return (
    <div className="app">
      <h1>Register</h1>

      <form
        onSubmit={handleSubmit}>
        {
          inputs.map(( input ) => {
            return (
              <FormInput 
                key={ input.id }
                { ...input } 
                value={ values[input.name] } 
                onChange={ onChange }
              />
            )
          })
        }

        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
