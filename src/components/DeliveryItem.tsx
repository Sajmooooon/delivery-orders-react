import {useState} from "react";
import {AiOutlineClose, AiFillPlusCircle, AiOutlineCheck, AiFillPhone} from "react-icons/ai"
import {BsFillPinMapFill, BsFillTrash3Fill, BsFillPencilFill, BsPatchPlus, BsPatchMinus, BsCheckCircle, BsXCircle} from "react-icons/bs"
import Delivery from "../models/delivery";


export const DeliveryItem:React.FC<{delivery:Delivery}> = (props) => {
    const [detail, setDetail] = useState(false)

    console.log(encodeURI(props.delivery.address))

    const toggleDetail = () =>{
        setDetail(!detail)
    }

    return (
        <div className="w-full bg-gray-300 text-black rounded-md my-2.5 cursor-pointer select-none shadow-md shadow-gray-500/80" >

            <div className="flex flex-col p-5 text-lg text-left ">
                <div className="flex justify-between font-medium">
                    <div className="flex flex-col w-full" onClick={toggleDetail}>
                        <span className="mb-2">{props.delivery.date}
                        </span>
                        <p>
                            {props.delivery.address}
                        </p>
                    </div>
                    <div className="w-fit flex text-4xl justify-center  items-center gap-5">
                        {props.delivery.active && !props.delivery.selected &&
                            <BsPatchPlus className="text-blue-500"/>}
                        {props.delivery.active && props.delivery.selected &&
                            <BsPatchMinus className="text-rose-500"/>}

                        <a href={"tel:"+props.delivery.phoneNumber}><AiFillPhone className="text-emerald-500 hover:text-emerald-700 delay-300 transition  ease-in"/></a>
                        <a href={"https://www.google.com/maps/place/"+encodeURI(props.delivery.address)} target="_blank"> <BsFillPinMapFill className="text-sky-500 hover:text-sky-700 delay-300 transition  ease-in"/></a>
                        { !props.delivery.active &&
                            <BsXCircle className="text-red-500 hover:text-red-700 delay-300 transition  ease-in"/>
                        }
                        { props.delivery.active &&
                            <BsCheckCircle className="text-green-500 hover:text-green-700 delay-300 transition  ease-in"/>
                        }
                    </div>
                </div>
                {detail &&
                    <>
                    <div className="flex flex-col text gap-y-2 mt-5 pt-5 border-t-2 border-gray-500" onClick={toggleDetail} >
                        <div className="flex font-medium">
                            Order: <p className="ml-1 font-normal">{props.delivery.order}</p>
                        </div>
                        <div className="flex font-medium">
                            Details: <p className="ml-1 font-normal">{props.delivery.addressDetail}</p>
                        </div>

                    </div>
                        <div className="flex gap-5 justify-between mt-5">
                            <button className="py-2 px-4 flex items-center gap-2 border-2 border-orange-500"><BsFillPencilFill/> Edit</button>
                            <button className="py-2 px-4 flex items-center gap-2 border-2 border-rose-800"><BsFillTrash3Fill/> Delete</button>

                        </div>
                    </>}
            </div>



        </div>
    )
}