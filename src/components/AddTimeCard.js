import React, { useState } from 'react'

const AddTimeCard = ({ addTimeCard, setTimeCard }) => {



  const[formData, setFormData]=useState({
  user: "",
  task: "",
  Startdate:"",
  EndDate:""
  });

  
  function changeHandler(event){
    const{name, value, type}=event.target

    setFormData(prevStateData=>{
      return{
        ...prevStateData,
        [event.target.name]: event.target.value
      }
    })
  }


  function submitHandler(e){
    e.preventDefault();
    setFormData(formData);
    setTimeCard((prev)=> !prev)
   }




  return (
    <div
      className='absolute w-[250px]  bg-white border-stone-700 border-2
       z-20 right-24 mt-12 rounded-md '>
      <form className='flex flex-col justify-center p-2'>
        <div className='flex gap-2'>
          <label htmlFor='user'>User:</label>
          <input onChange={changeHandler}
            type='text'
            placeholder='User Name'
            id='user'
            name='user'
          />
        </div>

        <div className='flex gap-2'>
          <label htmlFor='task'>User:</label>
          <input onChange={changeHandler}
            type='text'
            placeholder='Task Name'
            id='task'
            name='task'
          />
        </div>

        <div className='flex gap-2'>
          <label htmlFor='Startdate' >Start Date:</label>
          <input onChange={changeHandler}
          type='date'
          id='Startdate'
          name='Startdate'
          />
        </div>

        <div className='flex gap-2'>
          <label htmlFor='EndDate' >End Date:</label>
          <input onChange={changeHandler}
          type='date'
          id='EndDate'
          name='EndDate'
          />
        </div>

        <button
         onClick={submitHandler} 
         className="w-32 bg-blue-500 rounded-md p-1">
          Add Time Card
          </button>


      </form>
    </div>
  )
}

export default AddTimeCard