import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const chocolate = useLoaderData();
    const { name, image, country, category, _id } = chocolate;

    const handleUpdateChocolate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const country = form.country.value;
        const category = form.category.value;
        const updatedChocolate = {
            name,
            image,
            country,
            category
        }
        if (name.length > 0 && image.length > 0 && country.length > 0 && category.length > 0) {
            fetch(`http://localhost:5000/chocolate/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedChocolate)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Chocolate Updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Closs'
                        })
                    }
                })

        }
    }

    return (
        <div>
            <div className="">
                <div className='bg-[#955A2C] text-white my-10 text-3xl text-center mx-auto rounded-xl p-3 w-[600px] font-semibold'>Chocolate Management System</div>
                <div className='w-[80%] mx-auto my-3'>
                    <Link to="/"><h1 className="flex gap-2 items-center"><svg width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg> All Chocolates</h1></Link>
                </div>
                <div className='w-[80%] mb-10 mx-auto text-center bg-[#F6F1EE] p-10'>
                    <h1 className="text-2xl font-bold">Update Chocolates</h1>
                    <h1 className="py-2">Use the below form to update a product</h1>
                    <form onSubmit={handleUpdateChocolate} className="w-[80%] mx-auto">
                        <div className="relative mb-4 text-left">
                            <label htmlFor="name" className="text-lg leading-7 font-semibold text-gray-600">Name</label>
                            <input defaultValue={name} placeholder="Hot Pink Chocolate" type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 text-left flex justify-between gap-4">
                            <div className="w-full">
                                <label htmlFor="country" className="text-lg leading-7 font-semibold text-gray-600">Country</label>
                                <input defaultValue={country} placeholder="Enter Country Name" type="text" id="country" name="country" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="image" className="text-lg leading-7 font-semibold text-gray-600">Image URL</label>
                                <input defaultValue={image} placeholder="Image URL" type="text" id="image" name="image" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="relative mb-4 text-left">
                            <label htmlFor="name" className="text-lg leading-7 font-semibold text-gray-600">Category</label>
                            <select defaultValue={category} name="category" className="text-[#a7a0a6]  h-11 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                                <option>Premium</option>
                                <option>Regular</option>
                                <option>Expensive</option>
                            </select>
                        </div>
                        <input className="bg-[#955A2C] cursor-pointer text-white my-2 text-xl text-center mx-auto rounded-md p-2 w-full font-semibold" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateChocolate;