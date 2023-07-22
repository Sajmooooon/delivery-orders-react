import React from 'react'

const SelectorItem:React.FC<{buttonName: string, selected: boolean, selectItem: (e: React.MouseEvent)=>void}> = (props) => {
    return (
        <button className={props.selected ? "text-sky-500" : ""} onClick={props.selectItem}>{props.buttonName}</button>
    )
}

export default SelectorItem