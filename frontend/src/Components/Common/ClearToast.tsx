import classNames from 'classnames';

const ClearToast = () => {
    return (
        <div className={classNames([
            'absolute bg-gray-700 -right-1 -top-3 -translate-y-full px-3 py-1 text-white text-lg rounded-xl',
        ])}
        >
            <div className='relative'>
                <div className=''>Clear</div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/4 w-4 h-4 bg-gray-700 rotate-45 rounded-sm"></div>
            </div>
        </div>
    );
}

export default ClearToast;
