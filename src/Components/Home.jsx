import homeimg from "../assets/key2.png"
const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" data-aos="fade-right">
            <div className="graditentBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                    {/* Banner Image */}
                    <div data-aos="zoom-out">
                        <img src={homeimg} alt="Home Image" className="lg:h-[386px]" />
                    </div>
                    {/* Banner Content */}
                    <div className="md:w-3/5" data-aos="zoom-out">
                        <h2 className="md:text-7xl text-2xl font-bold text-white mb-6 leading-relaxed">
                            IT Application Engineer (B Level - IT)<br />Program Overview
                        </h2>
                        <p className="text-[#EBEBEB] text-2xl mb-8">The IT Application Engineer program is structured to develop the capability to analyze, develop, and manage software projects. It is designed to provide a comprehensive foundation in computing and business functions relevant to information technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
