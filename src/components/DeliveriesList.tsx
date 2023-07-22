import {DeliveryItem} from "./DeliveryItem";
import Delivery from "../models/delivery";
import {useState} from "react";


export const DeliveriesList = () => {
    let del:Delivery = new Delivery(1,"+45212123352","Bernolákova 13, Bratislava", "Vedla cerveneho domu","1xM3",
    true,false,new Date().toLocaleTimeString())
    let listDeliveries: Delivery[] = [del]
    let selectedDeliveries: Delivery[] = listDeliveries.filter((item)=>item.active=true)
    return (
        <div>
            {
                selectedDeliveries.map((item)=><DeliveryItem delivery={item}></DeliveryItem>)
            }

        </div>
    )
}