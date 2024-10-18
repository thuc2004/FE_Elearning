import React, { useState } from 'react';
import { Input } from 'antd';
import './index.css';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios';

export default function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [fullNameError, setfullNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateData = (name: string, value: string) => {
        let isValid = true;
        switch (name) {
            case "fullName":
                if (!value) {
                    setfullNameError("tên không được bỏ trống");
                    isValid = false;
                } else {
                    setfullNameError("");
                }
                break;
            case "userName":
                if (!value) {
                    setUsernameError("tên đăng nhập không được bỏ trống");
                    isValid = false;
                } else if (value.length < 6) {
                    setUsernameError("tên đăng nhập phải có ít nhất 6 ký tự");
                    isValid = false;
                } else {
                    setUsernameError("");
                }
                break;
            case "email":
                if (!value) {
                    setEmailError("email không được bỏ trống");
                    isValid = false;
                } else if (!/^\S+@\S+\.\S+$/i.test(value)) {
                    setEmailError("email không hợp lệ");
                    isValid = false;
                } else {
                    setEmailError("");
                }
                break;
            case "password":
                if (!value) {
                    setPasswordError("mật khẩu không được bỏ trống");
                    isValid = false;
                } else if (value.length < 8) {
                    setPasswordError("mật khẩu phải có ít nhất 8 ký tự");
                    isValid = false;
                } else {
                    setPasswordError("");
                }
                break;
            case "confirmPassword":
                if (!value) {
                    setConfirmPasswordError("xác nhận mật khẩu không được bỏ trống");
                    isValid = false;
                } else if (value !== user.password) {
                    setConfirmPasswordError("mật khẩu xác nhận không trùng khớp");
                    isValid = false;
                } else {
                    setConfirmPasswordError("");
                }
                break;
            default:
                break;
        }
        return isValid;
    };

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        validateData(name, value);
    };

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fullNameValid = validateData("fullName", user.fullName);
        const userNameValid = validateData("userName", user.userName);
        const emailValid = validateData("email", user.email);
        const passwordValid = validateData("password", user.password);

        if (fullNameValid && userNameValid && emailValid && passwordValid ) {
            try {
                // Gửi yêu cầu POST để thêm người dùng vào db.json
                const response = await axiosInstance.post('/users/create-user', user);
                console.log(response);
                alert('Đăng ký thành công!');
                navigate("/login");
            } catch (error) {
                console.error("Có lỗi xảy ra khi đăng ký:", error);
            }
        }
    };

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <form onSubmit={handleSubmit} className='w-[500px] border px-2 py-5 rounded shadow-md flex flex-col gap-[12px]'>
                    <h3 className='text-center text-[20px] font-semibold uppercase'>Đăng ký</h3>

                    <div className='flex flex-col gap-2'>
                        <label className='block text-[14px] font-semibold' >Họ và tên</label>
                        <Input onChange={handleChange} name='fullName' placeholder='Nhập họ và tên' />
                        {fullNameError && <span className='error-message'>{fullNameError}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='block text-[14px] font-semibold' >Tên đăng nhập</label>
                        <Input onChange={handleChange} name='userName' placeholder='Nhập tên đăng nhập' />
                        {usernameError && <span className='error-message'>{usernameError}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='block text-[14px] font-semibold'>Email</label>
                        <Input onChange={handleChange} name='email' placeholder='Nhập email' />
                        {emailError && <span className='error-message'>{emailError}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='block text-[14px] font-semibold' htmlFor='password'>Mật khẩu</label>
                        <Input onChange={handleChange} name='password' placeholder='Nhập mật khẩu' type='password' />
                        {passwordError && <span className='error-message'>{passwordError}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='block text-[14px] font-semibold' htmlFor='confirmPassword'>Nhập lại mật khẩu</label>
                        <Input onChange={handleChange} name='confirmPassword' placeholder='Nhập lại mật khẩu' type='password' />
                        {confirmPasswordError && <span className='error-message'>{confirmPasswordError}</span>}
                    </div>

                    <div>
                        <button type='submit' className='w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600'>hoàn thành</button>                       
                    </div>
                </form>
            </div>
        </>
    );
}
