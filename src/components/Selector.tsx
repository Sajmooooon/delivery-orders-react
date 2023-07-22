import {useState} from "react";
import SelectorItem from "./SelectorItem";

export const Selector = () => {
    const [selectedItem, changeSelectedItem] = useState("active")

    const toggleItem = (item:string) =>{
        changeSelectedItem(item)
    }

    return (
        <div className="left-0 right-auto flex justify-start gap-2 text-2xl mt-5">
            <SelectorItem buttonName="Active" selected={selectedItem==="active"} selectItem={(e)=> toggleItem("active")}/>
            <span>/</span>
            <SelectorItem buttonName="Inactive" selected={selectedItem==="inactive"} selectItem={(e)=> toggleItem("inactive")}/>
        </div>
    )
}