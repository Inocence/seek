const QuikSearch = () => {
    const hrefStyle = 'underline underline-offset-4 ml-5';

    return (
        <div className="hidden md:flex justify-center mt-16">
            <div className="w-11/12">
                <div className="text-2xl">Quick search</div>
                <div className="flex space-x-2 mt-3 text-gray-500 text-base">
                    <div className="basis-1/12">Classifications</div>
                    <div className="flex basis-auto">
                        <a href="" className={hrefStyle}>Accounting</a>
                        <a href="" className={hrefStyle}>Education & Training</a>
                        <a href="" className={hrefStyle}>Government & Defence</a>
                        <a href="" className={hrefStyle}>Healthcare & Medical</a>
                        <a href="" className={hrefStyle}>Sales</a>
                        <a href="" className={hrefStyle}>View all<i className="fa-solid fa-chevron-down ml-1"></i>⁠</a>
                    </div>
                </div>
                <div className="flex space-x-2 mt-3 text-gray-500 text-base">
                    <div className="basis-1/12">Major cities</div>
                    <div className="flex basis-auto">
                        <a href="" className={hrefStyle}>Sydney</a>
                        <a href="" className={hrefStyle}>Melbourne</a>
                        <a href="" className={hrefStyle}>Brisbane</a>
                        <a href="" className={hrefStyle}>Gold Coast</a>
                        <a href="" className={hrefStyle}>Perth</a>
                        <a href="" className={hrefStyle}>Adelaide⁠</a>
                        <a href="" className={hrefStyle}>Hobart</a>
                        <a href="" className={hrefStyle}>Darwin</a>
                        <a href="" className={hrefStyle}>Canberra</a>
                    </div>
                </div>
                <div className="flex space-x-2 mt-3 text-gray-500 text-base">
                    <div className="basis-1/12">Other</div>
                    <div className="flex basis-auto">
                        <a href="" className={hrefStyle}>All Jobs</a>
                        <a href="" className={hrefStyle}>Work From Home Jobs</a>
                        <a href="" className={hrefStyle}>FIFO Jobs</a>
                        <a href="" className={hrefStyle}>Ethical Jobs</a>
                        <a href="" className={hrefStyle}>Government Jobs</a>
                        <a href="" className={hrefStyle}>Web3 Jobs</a>
                        <a href="" className={hrefStyle}>Salary Calculator</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuikSearch;