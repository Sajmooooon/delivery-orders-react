import {AiTwotoneCar} from 'react-icons/ai'

const MainHeader = () => {
    return (
        <header className="w-full text-3xl p-2 flex justify-between mb-2 " style={{"borderBottom":"2px solid #ece1fa"}}>
            <h1 className="flex justify-center items-center">
                <AiTwotoneCar className="mr-2" />
                Orders
            </h1>

            <div>
                <button className="p-2 border-2 border-sky-500 hover:bg-sky-500 hover:border-gray-100 delay-500 transition ease-in">
                    Add Order
                </button>
            </div>


        </header>
    )
}

export default MainHeader