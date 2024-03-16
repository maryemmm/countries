import { useState } from 'react';
import { signupFields } from '../../../constants/formFields';
import Input from '../../Inputs/Input';
import FormAction from '../Login/FormAction';
import supabase from '../../../Utils/api';

const fields=signupFields;
let fieldsState:any={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=async(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
        email: signupState?.email,
        password: signupState?.password,
      })
      console.log('data',data)
      console.log('error',error)
  }


    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction text="Signup" />
        </div>

         

      </form>
    )
}