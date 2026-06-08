import { useState } from 'react';

// Components
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0;

  function handleInputs(inputIdentifier, newValue) {
    setUserInput(prevUserInput => { // get/use old userInput object
        return { 
            ...prevUserInput, //copy old value before update one value
            [inputIdentifier]: +newValue // Add '+' to convert string value to number value for calculations
        }
    })
  }

  return (
    <>
      <Header />
      <UserInput 
        onChangeInput={handleInputs}
        userInput={userInput}
      />
      { inputIsValid ?
        <Results 
          userInput={userInput}
        />
        :
        <p className="center">Please enter a duration greater than zero.</p>
      }
      
    </>
  )
}

export default App
