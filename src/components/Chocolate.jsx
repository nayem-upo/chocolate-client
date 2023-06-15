import { Link } from "react-router-dom";

const Chocolate = ({ chocolate, handleDelete }) => {
    const { _id, name, image, country, category } = chocolate
    return (
        <tr>
            <td><img className="border-b-2 object-cover h-20 border-gray-200 w-24 p-2 rounded-2xl" src={image} alt="" /></td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{name}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{country}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{category}</td>
            <td className="border-b-2 border-gray-200 text-center w-28">
                <div className="flex justify-evenly">
                    <Link to={`/updatechocolate/${_id}`}><svg className="cursor-pointer bg-[#F6F1EE] rounded-md p-2" width="36px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M15.198 3.52a1.612 1.612 0 012.223 2.336L6.346 16.421l-2.854.375 1.17-3.272L15.197 3.521zm3.725-1.322a3.612 3.612 0 00-5.102-.128L3.11 12.238a1 1 0 00-.253.388l-1.8 5.037a1 1 0 001.072 1.328l4.8-.63a1 1 0 00.56-.267L18.8 7.304a3.612 3.612 0 00.122-5.106zM12 17a1 1 0 100 2h6a1 1 0 100-2h-6z"></path> </g></svg></Link>
                    <svg onClick={() => handleDelete(_id)} className="cursor-pointer bg-[#F6F1EE] rounded-md" width="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
            </td>
        </tr>
    );
};

export default Chocolate;