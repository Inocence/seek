const RecentSearch = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-2 space-y-2 max-w-7xl px-3 m-auto items-start mt-6">
                <div className="bg-gray-100 py-2 px-5 rounded-lg hover:cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i><span className="ml-4">All jobs. Accounting</span></div>
                <div className="bg-gray-100 py-2 px-5 rounded-lg hover:cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i><span className="ml-4">C. Accounting. Sydeny NSW 2000</span></div>
            </div>
        </div>
    );
}

export default RecentSearch;