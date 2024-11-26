import CommonButton from "../../../Components/Common/CommonButton";
import ClassifyList from "./ClassifyList";
import WhatList from "./WhatList";
import WhereList from "./WhereList";

const Search = () => {
    const backStyles = {
        backgroundImage: `url('/assets/common/search-bg.svg')`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    const searchInput = "block w-full py-2 px-3 rounded-md border-2 border-transparent ring-8 ring-transparent outline-none focus:ring-blue-300 focus:border-black"


    return (
        <div className="flex text-lg px-3 py-6 m-auto bg-blue-950 justify-center items-center" style={backStyles}>
            <div className='w-full text-lg md:max-w-5xl'>
                <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4  md:flex-row justify-between items-end'>
                    <WhatList searchInput={searchInput} />
                    <ClassifyList searchInput={searchInput} />
                    <WhereList searchInput={searchInput} placeholder={"Enter suburb, city, or region"} />
                    <CommonButton onClick={e => {}} variant={'pinkBackground'}>SEEK</CommonButton>
                </div>
                <div className='hidden md:flex justify-between mt-6 text-white'>
                    <div className='flex justify-between text-base'>
                        <div>
                            <button className='border-2 border-white rounded-3xl px-3 py-2'>All work types<i className="fa-solid fa-chevron-down ml-2"></i></button>
                            {/* <div>
                                    <div><input type="checkbox" /><span>Full time</span></div>
                                    <div><input type="checkbox" /><span>Part time</span></div>
                                </div> */}
                        </div>
                        <div>
                            <button className='border-2 border-white rounded-3xl px-3 py-2 ml-2'>Paying $0<i className="fa-solid fa-chevron-down ml-2"></i></button>
                            {/* <div>
                                    <div><input type="checkbox" /><span>Full time</span></div>
                                    <div><input type="checkbox" /><span>Part time</span></div>
                                </div> */}
                        </div>
                    </div>
                    <button>More options<i className="fa-solid fa-sliders ml-2"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Search;