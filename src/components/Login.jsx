import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='auth-container'>
        <div className='auth-card surface'>
            <div className="auth-logo">
                <Logo width="100%" />
            </div>
            <h2 className="auth-title">Sign in to your account</h2>
            <p className="auth-subtitle">
                Don&apos;t have any account?&nbsp;
                <Link to="/signup" className="auth-link">
                    Sign Up
                </Link>
            </p>
            {error && <p className="auth-error">{error}</p>}
            <form onSubmit={handleSubmit(login)}>
                <div style={{textAlign: 'left'}}>
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type="submit" style={{width: '100%', marginTop: '1rem'}}>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login