const LoginTips = () => {
    return (
        <div className="mt-16 text-lg max-w-7xl m-auto px-3 md:px-6">
            <div className="bg-gray-100 rounded-3xl p-11">
                <div className="flex justify-between m-auto max-w-xs">
                    <button className="flex-1 py-2 rounded-md border-2 border-black hover:bg-gray-200">Sign in</button>
                    <button className="flex-1 underline">Register</button>
                </div>
                <div className="flex justify-center mt-4">
                    <span>Sign in to manage your SEEK Profile, save searches and view your recommended jobs.</span>
                </div>
            </div>
        </div>
    );
}

export default LoginTips;