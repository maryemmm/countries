import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { loginFields } from "../../../constants/formFields";
import { handleUserAuthentication } from '../../../Data/slices/auth';
import { useAppDispatch, useAppSelector } from '../../../Utils/hooks';
import Input from "../../Inputs/Input";
import ExtraForm from './ExtraForm';
import FormAction from './FormAction';
import { useNavigate } from "react-router-dom"
import supabase from '../../../Utils/api';

const fields=loginFields;
let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){

    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        authenticateUser();
    }

    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const authenticateUser =async () =>{
      const { email, password } = loginState
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if(!error){
        toast.success('Logged in successfully')
        const settedSession = await supabase.auth.setSession({
          access_token:data?.session?.access_token,
          refresh_token:data?.session?.refresh_token,
        })
 
         //const forgetPassword = await supabase.auth.resetPasswordForEmail(email, {
         //   redirectTo: 'https://localhost:3000/update-password',
         // })
        navigate('/countries')
        }
        else if(error?.status===400 && error){
        toast.error(error?.message)
        }
    }
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
        </div>
        <ExtraForm/>
        <FormAction text="Login"/>
      </form>
    )
}