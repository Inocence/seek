const BottomBanner = () => {

    return (
        <div className='flex justify-center mt-20'>
            <div className="h-96 md:64 w-11/12 relative">
                <img className="w-full h-full object-cover object-right md:object-center rounded-2xl" src='/assets/common/bottom-banner.jpg' />
                <div className="text-6xl text-white absolute top-1/2 left-10 transform -translate-y-1/2">Better job matches.</div>
            </div>
        </div>
    );
}

export default BottomBanner;