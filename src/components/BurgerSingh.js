import React, { useState } from 'react'
import { GrNext } from "react-icons/gr";
import { PiFiles } from "react-icons/pi";
import pic from "../assets/beautiful-girl-stands-park_8353-5084.avif"
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { BsSortDownAlt } from "react-icons/bs";
import AddTimeCard from './AddTimeCard';

const BurgerSingh = () => {

    const [addTimeCard, setTimeCard] = useState(false);


    return (
        <div className='flex flex-col w-[75vw] gap-[1rem] relative'>
            <div>
                <div className='flex gap-2 text-xs font-bold items-center'><span><PiFiles /></span>Projects <span><GrNext /></span>
                    <span className='text-blue-400 '>Project #123</span></div>
            </div>

            <div className='flex flex-col gap-2'>
                <h2 className="font-bold text-3xl ">Burger Singh Television Advertisement</h2>
                <p>Created on: 10 October, 2021</p>
                <div className='flex '>
                    Project Created by:
                    <div className='flex mx-2 justify-center items-center gap-2 rounded-lg border-neutral-300 shadow-md '>
                        <div className='w-5 h-5 rounded-full ml-2'><img className='w-5 h-5 rounded-full' src={pic}></img></div>

                        <p className='text-sm font-semibold mr-2 text-blue-500'>Jane Doe</p>


                    </div>
                </div>
            </div>

            <div className='flex justify-between'>
                <div className="flex gap-3 items-center">
                    <p className='font-bold text-xl'>4 April 2023</p>
                    <FaRegArrowAltCircleLeft size={25} />
                    <FaRegArrowAltCircleRight size={25} />
                </div>

                <div className='flex gap-4  items-center  '>
                    <button onClick={
                        ()=> setTimeCard((prev)=> !prev)
                    } className='flex items-center rounded-lg justify-center gap-2  w-44 h-8 bg-indigo-700 text-white 
                    hover:bg-blue-900 text-sm focus:bg-slate-500'>
                        <CiCircleCheck size={18} />
                        Add Time card
                    </button>

                    <button className='flex items-center gap-2 font-bold  rounded-lg justify-center w-28 h-8 bg-yellow-400'>
                        Filters
                        <BsSortDownAlt />
                    </button>

                </div>
                {
                    addTimeCard &&
                    <AddTimeCard addTimeCard={addTimeCard} setTimeCard={setTimeCard}/>
                }

            </div>
        </div>
    )
}

export default BurgerSingh