import { Link } from "react-router-dom";
import Chocolate from "./Chocolate";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
    const [chocolates, setChocolates] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chocolate')
            .then(res => res.json())
            .then(data => setChocolates(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/chocolate/${id}`,{
                        method:"DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Chocolate has been deleted.',
                                    'success'
                                )
                                const remaining = chocolates.filter( chocolate=> chocolate._id !== id)
                                setChocolates(remaining)
                            }
                        })
                }
            }))
    }

    return (
        <div className="mb-20">
            <div className='bg-[#955A2C] text-white my-10 text-3xl text-center mx-auto rounded-xl p-3 w-[600px] font-semibold'>Chocolate Management System</div>
            <div className="w-[80%] mx-auto">
                <div>
                    <Link to="/addchocolate"><h1 className="border mb-10 p-2 w-36 text-center rounded-lg">+ New Chocolate</h1></Link>
                </div>
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto">

                            <div className="w-full mx-auto overflow-auto">
                                <table className="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Image</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Country/Factory</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Category</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            chocolates.map(chocolate => <Chocolate handleDelete={handleDelete} chocolate={chocolate} key={chocolate._id}></Chocolate>)
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;