import React, { useState } from 'react';
import { BsSortDown } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import './CategorySection.css';
import { SiAddthis } from "react-icons/si";
import dp from "../assets/beautiful-girl-stands-park_8353-5084.avif"
import dp2 from "../assets/download (2).jpeg"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiSquareMinus } from "react-icons/ci";



const CategorySection = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showUsers, setUsers] = useState(true);

    const categories = [
        { title: 'Art & Craft', color: '#800080' },
        { title: 'Lights', color: '008080' },
        { title: 'Directing', color: '#0000FF' },
        { title: 'Catering', color: '#FFA500' },
        { title: 'Cinematography', color: '#FFA500' },
    ];

    const users = [
        { name: 'John Doe', role: 'DOP' },
        { name: 'John Doe', role: 'SDE 2' },
        { name: 'John Doe', role: 'Marketing' },
        { name: 'John Doe', role: 'Product' },

    ]

    const [selectedCategories, setSelectedCategories] = useState(categories);

    const addToSelectedCategories = (category) => {
        setSelectedCategories((prevSelected) => [...prevSelected, category]);
    };

    const removeFromSelectedCategories = (category) => {
        setSelectedCategories((prevSelected) => prevSelected.filter((c) => c.title !== category.title));
    };

    // Categories Component
    const Categories = () => {
        return (
            <div className='flex flex-col items-start justify-start dropdown'>
                <div className='flex flex-col gap-2'>
                    {categories.map((category) => (
                        <button key={category.title} onClick={() => addToSelectedCategories(category)}>
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>
        );
    };



    return (
        <div className=' w-full xl:w-[20vw] xl:h-[100vh] flex flex-col gap-6 px-5 mt-4'>
            <button onClick={() => setShowCategories((prev) => !prev)} className='w-[100px] gap-2 font-bold p-1 flex items-center justify-center bg-yellow-400 rounded-md'>
                <span>Category</span> <BsSortDown />
            </button>

            {showCategories && <Categories />}

            <div className='flex flex-wrap gap-4'>
                {selectedCategories.map((category) => (
                    <div key={category.title} className='bg-slate-200 items-center flex gap-1 font-semibold text-sm rounded-md p-1'>
                        <p>{category.title}</p>
                        <button onClick={() => removeFromSelectedCategories(category)}>
                            <RxCross2 />
                        </button>
                    </div>
                ))}
            </div>


            {/* 2nd section */}

            <div className='flex items-center gap-4'>
                <button onClick={() => setUsers((prev) => !prev)}>
                    {!showUsers ? <SiAddthis color='#800080' /> : <CiSquareMinus />}
                </button>
                <p>Cinematography</p>
                <div className='flex relative items-end'>
                    <img className='w-5 h-5 rounded-full absolute left-3' src={dp2} />
                    <img className='w-5 h-5 rounded-full absolute left-5' src={dp} />
                    <img className='w-5 h-5 rounded-full left-6' src={dp} />

                </div>
                <HiOutlineDotsHorizontal color='gray' />




            </div>
            <div className='flex flex-col'>
                {showUsers &&
                    users.map((user) => (
                        <div className='flex gap-3 items-center'>
                            <input type='checkbox' />
                            <img src={dp2} className='w-5 h-5 rounded-full'></img>
                            <div>
                                <p className='text-xs font-bold'>{user.name}</p>
                                <p className='text-xs text-gray-500'>{user.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="">
                {
                    selectedCategories.map((category, index) => {
                        return (<div key={index} className='flex items-center gap-4 mb-8'>
                            <button >
                                <SiAddthis color={category.color} />
                            </button>
                            <p>{category.title}</p>
                            <div className='flex relative items-end'>
                                <img className='w-5 h-5 rounded-full absolute left-3' src={dp2} />
                                <img className='w-5 h-5 rounded-full absolute left-5' src={dp} />
                                <img className='w-5 h-5 rounded-full left-6' src={dp} />

                            </div>
                            <HiOutlineDotsHorizontal color='gray' />

                        </div>);
                    })
                }
            </div>
        </div>
    );
};

export default CategorySection;
