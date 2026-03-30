

const Status = () => {
  return (
    <div className="w-full mt-15 mb-10 sm:mt-15 sm:mb-20  lin-col text-center flex py-15">

        <div className="container-div flex justify-evenly flex-col gap-8 sm:gap-0  sm:flex-row items-center">
            <div>
            <h1 className="status-h1">50K+</h1>
            <p className="status-p">Active Users</p>
        </div>
        <div className="sm:w-[1px] w-[80px] bg-[#dddddd9a] sm:h-[80px] h-[1px]"></div>
        
        <div>
            <h1 className="status-h1">200+</h1>
            <p className="status-p">Premium Tools</p>
        </div>
        <div className="sm:w-[1px] w-[80px] bg-[#dddddd9a] sm:h-[80px] h-[1px]"></div>
        <div>
            <h1 className="status-h1">4.9</h1>
            <p className="status-p">Rating</p>
        </div>
        </div>

    </div>
  )
}

export default Status;