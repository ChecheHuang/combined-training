import React, { useRef } from 'react'
import axios from 'axios'
import { Input, Button } from '../../components/FormComponent'
import { AiFillAlert } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { toastOption } from '../../utils/toastOption'
import { registerApi } from '../../utils/api'

function Register() {
  const nameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const registerRes = await axios.post(registerApi, {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    })
    if (registerRes.data.status === 'error') {
      return toast.error(registerRes.data.msg, toastOption)
    }
    toast.success('註冊成功', toastOption)
    navigate('/login')
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            註冊
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-2 ">
            <Input
              label="輸入帳號"
              inputRef={nameRef}
              required={true}
              type="text"
            />
            <Input
              label="輸入密碼"
              inputRef={passwordRef}
              required={true}
              type="password"
            />
            <Input
              label="確認密碼"
              inputRef={confirmPasswordRef}
              required={true}
              type="password"
            />
          </div>
          <Button text="註冊" click={handleSubmit} icon={<AiFillAlert />} />
        </form>
        <div>
          已經有帳號了
          <Link className=" text-blue-900 font-bold" to="/login">
            去登入
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
