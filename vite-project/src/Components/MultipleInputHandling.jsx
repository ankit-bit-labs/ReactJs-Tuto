import React from 'react'
import { useState } from 'react';

const MultipleInputHandling = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
    });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    };

    const submitHandler = (e) => {
        e.preventDefault();
        alert("Your form has been submitted successfully "+ formData.name +" "+ formData.email +" "+ formData.password +" "+ formData.age +" "+ formData.phone);
        console.log(formData);

        setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
    });

}

  return (
    <>
    <form onSubmit={submitHandler}>
        <div>
            Name:
            <input value={formData.name}  name="name" 
            onChange={onChangeHandler}
            type="text" placeholder='Enter your name' />
        </div>
        <div>
            Email:{""}
            <input value={formData.email} name="email" 
            onChange={onChangeHandler}
            type="email" placeholder='Enter your email' />
        </div>
        <div>   
            Password:{""}
            <input value={formData.password} name="password" 
            onChange={onChangeHandler}
            type="password" placeholder='Enter your password' />

        </div>
        <div>
            Age:{""}
            <input value={formData.age} name="age" 
            onChange={onChangeHandler}
            type="number" placeholder='Enter your age' />
        </div>
        <div>
            Phone:{""}
            <input value={formData.phone} name="phone" 
            onChange={onChangeHandler}
              type="number" placeholder='Enter your phone number' />
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
    
    </>
  )
}

export default MultipleInputHandling
