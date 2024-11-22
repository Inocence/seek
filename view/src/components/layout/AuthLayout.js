const AuthLayout = ( { children } ) => {
    return (
        <div>
            <div className="container max-w-full">
                <nav>
                    <div className="flex">
                        <a href="" className="flex items-center">
                            <img src="./web-logo.jpg" className="h-12 w-12 mr-1" />
                            <span className="mr-4 text-2xl font-bold">Geek</span>
                        </a>
                    </div>
                </nav>
                <main>{ children }</main>
                <footer className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between text-sm  border-t-2 border-gray-200 mt-11 py-8">
                    <div className="text-base"><i className="fa-solid fa-location-dot mr-1"></i>Australia<i className="fa-solid fa-chevron-up ml-1"></i></div>
                    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                        <a href="" className="hover:underline">Terms & conditions</a>
                        <a href="" className="hover:underline">Security & Privacy</a>
                        <span className="">© SEEK. All rights reserved</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default AuthLayout;