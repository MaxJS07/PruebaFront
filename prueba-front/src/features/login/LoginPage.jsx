import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import {usersMock} from "../../mocks/usersMock.js"
import {useAuth} from "../../hooks/useAuth.js"

const LoginPage = () => {

    const {login} = useAuth();
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        //Buscamos los user en el mock
        const foundUser = usersMock.find((user) =>
            user.email === data.email &&
            user.password === data.password
        )

        if(foundUser){
            const {password, ...safeUser} = foundUser;
            login(foundUser)
            navigate("/posts")
        }else{
            alert("Correo y contraseña incorrectos")
        }
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-500'>
        <div className='flex flex-col items-center gap-5 bg-white shadow p-5 w-xl sm:w-md'>
            <p className='font-bold text-black'>INICIE SESIÓN</p>
            <form className='flex flex-col items-center justify-center min-w-full' onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Correo electrónico</legend>
                    <input type="text" className='input min-w-full' placeholder='Correo' {...register("email", {required: "Email requerido"})}/>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Contraseña</legend>
                    <input type="text" className='input' placeholder='Contraseña' {...register("password", {required: "Contra requerida"})}/>
                </fieldset>
                <div className='flex flex-row justify-center items-center mt-5'>
                    <button type="submit" className='btn btn-primary'>
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default LoginPage