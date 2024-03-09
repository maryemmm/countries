import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { loginFields } from "../../../constants/formFields";
import { handleUserAuthentication } from '../../../Data/slices/auth';
import { useAppDispatch, useAppSelector } from '../../../Utils/hooks';
import Input from "../../Inputs/Input";
import ExtraForm from './ExtraForm';
import FormAction from './FormAction';
import { useNavigate } from "react-router-dom"

const fields=loginFields;
let fieldsState:any = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const {isAuthenticated}=useAppSelector(state=>state.auth)
    const navigate=useNavigate()

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/countries')
        }
    },[isAuthenticated])

    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        authenticateUser();
    }

    const dispatch=useAppDispatch()

    const authenticateUser = () =>{
        const { email, password } = loginState;
        const hardcodedCredentials = { email: 'admin@admin.com', password: 'admin123' };
        if (email === hardcodedCredentials.email && password === hardcodedCredentials.password) {
           toast.success('Authentication successful')
           dispatch(handleUserAuthentication({isAuthenticated:true}))
           navigate('/countries');
        } else {
           dispatch(handleUserAuthentication({isAuthenticated:false}))
           toast.error('Authentication failed')
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