import React, { useEffect } from 'react'
import Assessments from "../assets/documents.png"
import laptop from "../assets/laptop.png"
import folder from "../assets/folder.png"
import email from "../assets/email.png"
import goals from "../assets/goal.png"
import conference from "../assets/conference.png"
import writing from "../assets/writing.png"
import book from "../assets/book.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
const Key = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className='my-24 md:px-14 max-w-screen-2xl px-14 mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div>
                    <h3 className='text-3xl font-bold text-primary mb-3' data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">Key Features</h3>
                    {/* Key Cards */}
                    <div className='w-full lg:w-4/4'>
                        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 md:mt-16'>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={Assessments} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Regular Assessments</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg1 rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={laptop} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Hands-on <br />Practice</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={folder} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Comprehensive Curriculum</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg1 rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={goals} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Clear Learning Objectives</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg1 rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={email} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Engaging Content Delivery</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={conference} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Expert <br />Faculties</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg1 rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={writing} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Interactive Learning Environment</h5>
                                </div>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.04)] keyBg rounded-[35px] h-100 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer' data-aos="fade-up">
                                <div>
                                    <img src={book} alt="" className="w-36 h-36 object-cover mx-auto mb-5"/>
                                    <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Practical oriented content</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Key
