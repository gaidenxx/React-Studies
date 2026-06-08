import { useActionState } from 'react';
import { isEmail, isNotEmpty, isEqualToOtherValue, hasMinLength } from '../util/validation.js'

function signupActions(prevFormState, formData) {
  const data = Object.fromEntries(formData.entries());
  data.acquisition = formData.getAll('acquisition');
  data.terms = formData.get('terms');

  console.log(Object.fromEntries(formData.entries()));
  // const email = formData.get('email');

  let errors = [];

  if (!isEmail(data.email)) {
    errors.push('Invalid email address.');
  }

  if (!isNotEmpty(data.password) || !hasMinLength(data.password, 6)){
    errors.push('You must provide a password with at least six characters.');
  }

  if (!isEqualToOtherValue(data.password, data.confirmPassword)){
    errors.push('Passwords do not match.');
  }

  if (!isNotEmpty(data.firstName) || !isNotEmpty(data.lastName)) {
    errors.push('Please provide both your first and last name.');
  }

  if (!isNotEmpty(data.role)) {
    errors.push('Please select a role');
  }

  if (!data.terms) {
    errors.push('You must agree to the terms and conditions.');
  }

  if (data.acquisition.length === 0) {
    errors.push('Please select at least one acquisition channel.');
  }

  if (errors.length > 0){
    // console.log({ errors, enteredValues: {
    //   ...data
    // }});
    return { errors, enteredValues: {
      ...data
    }};
  }

  return { errors: null }
}

export default function Signup() {
  // Needs a function with formData control as first param, second param is a initial value when signupActions was not called yet
  const [formState, formAction, pending] = useActionState(signupActions, {error: null});

  console.log('formState: ', formState)

  return (
    // formAction to initiate the signupActions function via useActionState
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState.enteredValues?.email}/>
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState.enteredValues?.password}/>
        </div>

        <div className="control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirmPassword"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="first-name" name="firstName" defaultValue={formState.enteredValues?.firstName}/>
        </div>

        <div className="control">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="last-name" name="lastName" defaultValue={formState.enteredValues?.lastName}/>
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState.enteredValues?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisition.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisition.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input 
            type="checkbox" 
            id="other" 
            name="acquisition" 
            value="other"
            defaultChecked={formState.enteredValues?.acquisition.includes('other')}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" 
          defaultChecked={formState.enteredValues?.terms}/>I
          agree to the terms and conditions
        </label>
      </div>

      {formState.errors && 
        <ul className='error'>
          {formState.errors.map((error) => 
            <li key={error}>{error}</li>
          )}
        </ul>
      }

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
