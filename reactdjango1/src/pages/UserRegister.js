import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
const baseUrl='http://127.0.0.1:8000/chartjs/';

function UserRegister() {

  const navigate = useNavigate();
  const [userData, setUserData]=useState({
    'firstname':'',
    'lastname':'',
    'email':'',
    'city':'',
    'course':'',
    'gender':'',
    'status':''
  });

  // function to change the element value
  const handleChange=(e)=>{
    // console.log(e.target.name, e.target.value)
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    });
  }
  // console.log(userData);

  const submitForm=()=>{
    const userFormData = new FormData();
    userFormData.append("firstname", userData.firstname)
    userFormData.append("lastname", userData.lastname)
    userFormData.append("email", userData.email)
    userFormData.append("city", userData.city)
    userFormData.append("course", userData.course)
    userFormData.append("gender", userData.gender)

    try{
      axios.post(baseUrl, userFormData).then((response)=>{
        setUserData({
          'firstname':'',
          'lastname':'',
          'email':'',
          'city':'',
          'course':'',
          'gender':'',
          'status':'',
          'status':'success'
        });
        console.log(response.data)
      });
    } catch(error){
      console.log(error)
      setUserData({status: 'error'});
    }
        
  };

  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      UserRegister

      <div>
                <button 
                className="button-box3 
                            bg-black hover:bg-blue-500 
                            text-white font-bold 
                            py-2 px-4 border border-gray-400 rounded"
                onClick={() => {
                    navigate("/home")
                }}
                >
                    Home

                </button>

      </div>

      <div className='card-header max-w-lg mx-auto pt-4'>
          <h5 className='text-4xl font-bold text-white text-center'>
                  User Registration Form
          </h5>
      </div>

      <div className='card bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
        <section>
              <h3 class="font-bold text-2xl">Welcome to Tchè Kréyol</h3>
              <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" method="POST" action="#">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="firstname">First Name</label>
                    <input onChange={handleChange} name="firstname" type="text" id="firstname" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                </div>

                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="lastname">Last Name</label>
                    <input onChange={handleChange} name="lastname" type="text" id="lastname" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                </div>

                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <input onChange={handleChange} name="email" type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                </div>

                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="city">City</label>
                    <input onChange={handleChange} name="city" type="text" id="city" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                </div>

                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="course">Course</label>
                    <select onChange={handleChange} name="course" id="course" class='bg-gray-200'>
                      <option value="Computer Science">choose your course</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Computer Engineering">Computer Engineering</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Computer Security">Computer Security</option>
                    </select>

                    {/* <select 
                      multiple={true} 
                      value={['Computer Science', 'Computer Engineering', 'Software Engineering', 'Computer Security']}>

                    </select> */}
                </div>

                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="gender">Gender</label>
                    <select onChange={handleChange} name="gender" id="gender" class='bg-gray-200'>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                </div>

                <div class="flex justify-end">
                    <a 
                      // href="#" 
                      class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                </div>
                <button 
                  onClick={submitForm}
                  class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Submit</button>
            </form>
        </section>

        </div>

      </div>
  )
}

export default UserRegister