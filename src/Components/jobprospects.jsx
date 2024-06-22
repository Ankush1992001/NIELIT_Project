import jobprospects from "../assets/jobprospects.png"
const Jobprospects = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto " data-aos="fade-right" id="job-prospects">
            <div className="graditentBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    {/* Banner Image */}
                    <div data-aos="zoom-out">
                        <img src={jobprospects} alt="Home Image" className="lg:h-[386px]" />
                    </div>
                    {/* Banner Content */}
                    <div className="md:w-3/5" data-aos="zoom-out">
                        <h2 className="md:text-7xl text-2xl font-bold text-white mb-6 leading-relaxed">
                            Job prospects
                        </h2>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Freelancer (For self-employed)</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Full Stack Developer</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Data Scientist/Analyst</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• IoT Architect/Developer</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Business Intelligence Analyst</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Information Security Analyst</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Training Faculty</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• R & D Scientist</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Senior Software Developer</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Consultant</p>
                        <p className="text-[#EBEBEB] text-2xl mb-1">• Solution Architect</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobprospects
