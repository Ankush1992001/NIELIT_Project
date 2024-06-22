import circel from '../assets/circel.png'
const Fees = () => {
    return (
        <div className="md:px-14 max-w-s mx-auto py-10" id='fees-Structure'>
            <div className="text-center" data-aos="zoom-in">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary md-2">Course <span className="text-secondary">Fee</span> Structure</h2>
            </div>
            {/* Fees Card ===========---------------->*/}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-14 md:w-11/12 mx-auto">
                <div className="border py-10 md:px-6 px-2 rounded-lg shadow-3xl m-2.5" data-aos="flip-left">
                    <h3 className="text-3xl font-bold text-center text-primary">
                        Course Fee
                    </h3>
                    {/* <p className="text-secondary text-4xl font-bold text-center my-5">Rs. 6,000/-</p> */}
                    <ul className="mt-4 space-y-2 px-4">
                        <li className="flex gap-3 text-2xl mt-10"><img src={circel} className="h-4 w-4 mt-2" alt="" />Rs. 6,000/- per module</li>
                    </ul>
                </div>
                <div className="border py-10 md:px-6 px-2 rounded-lg shadow-3xl m-2.5" data-aos="flip-right">
                    <h3 className="text-3xl font-bold text-center text-primary">
                    Discounts and Waivers
                    </h3>
                    <ul className="mt-4 space-y-2 px-4 text-xl">
                        <li className="flex gap-3"><img src={circel} className="h-4 w-4 mt-2" alt="" />General/OBC Candidates: 50% discount on the course fee to first 20 students in a batch.</li>
                        <li className="flex gap-3"><img src={circel} className="h-4 w-4 mt-2" alt="" />SC/ST Candidates: No course fee (NIL)</li>
                    </ul>
                </div>
                <div className="border py-10 md:px-6 px-2 rounded-lg shadow-3xl m-2.5" data-aos="flip-left">
                    <h3 className="text-3xl font-bold text-center text-primary">
                    Payment Options
                    </h3>
                    <p className="text-secondary text-4xl font-bold text-center my-5"></p>
                    <ul className="mt-4 space-y-2 px-4 text-xl">
                        <li className="flex gap-3 mt-10"><img src={circel} className="h-4 w-4 mt-2" alt="" />Course fee can be paid in installments.</li>
                    </ul>
                </div>
                <div className="border py-10 md:px-6 px-2 rounded-lg shadow-3xl m-2.5" data-aos="flip-right">
                    <h3 className="text-3xl font-bold text-center text-primary">
                    Other Fees
                    </h3>
                    <p className="text-secondary text-4xl font-bold text-center my-5"></p>
                    <ul className="mt-4 space-y-2 px-4 text-xl">
                        <li className="flex gap-3 mt-10"><img src={circel} className="h-4 w-4 mt-2" alt="" />Registration /Examination /Project Fee Payable Extra</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fees
