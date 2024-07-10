import React from 'react'
import profilelogo from "../assets/NIELIT-Logo.png"
import ccc from "../assets/couse_ccc.jpg"
import alevel from "../assets/course_alevel.jpg"
import ablevel from "../assets/course_olevel.jpg"
import short from "../assets/short.jpg"



const OtherCourses = () => {
    return (
        <>
            <section className='courses'>
                <div className='w-4/5 m-auto'>
                    <div className="text-center" data-aos="zoom-in">
                        <h2 className="md:text-5xl text-3xl font-extrabold text-primary  mt-14">Course <span className="text-secondary">Fee</span> Structure</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 my-20 md:w-11/12 mx-auto">
                        <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank">
                            <div className='box rounded-lg shadow-shadow1 bg-white shadow-3xl' data-aos="fade-up">
                                <div className='images rounded-t-lg relative overflow-hidden h-52 w-ful'>
                                    <img src={ccc} alt='' className='rounded-t-lg object-cover w-full h-48 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300' />
                                </div>
                                <div className='text p-2'>
                                    <h3 className='text-[#071952] my-2 -mt-4 font-medium'>
                                        Course on Computer Concepts<br /><span className="text-primary"> (CCC)</span></h3>
                                    <div className='user flex items-center justify-between mt-6'>
                                        <div className='flex items-center '>
                                            <img className='w-15 h-10 object-cover shadow-shadow1' src={profilelogo} alt='' />
                                        </div>
                                        <div className='flex items-center text-primary'>
                                            <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank"><span className='text-[12px] keyBg1 p-1 px-3 text-white rounded-[5px]'>Visit</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank">
                            <div className='box rounded-lg shadow-shadow1 shadow-3xl bg-white' data-aos="fade-up">
                                <div className='images rounded-t-lg relative overflow-hidden h-52 w-ful'>
                                    <img src={ablevel} alt='' className='rounded-t-lg object-cover w-full h-48 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300' />
                                </div>
                                <div className='text p-2'>
                                    <h3 className='text-[#071952] my-2 -mt-4 font-medium'>
                                        O-Level<br /><span className="text-primary"> Course</span></h3>
                                    <div className='user flex items-center justify-between mt-6'>
                                        <div className='flex items-center '>
                                            <img className='w-15 h-10 object-cover shadow-shadow1' src={profilelogo} alt='' />
                                        </div>
                                        <div className='flex items-center text-primary'>
                                            <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank"><span className='text-[12px] keyBg1 p-1 px-3 text-white rounded-[5px]'>Visit</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank">
                            <div className='box rounded-lg shadow-shadow1 bg-white shadow-3xl' data-aos="fade-up">
                                <div className='images rounded-t-lg relative overflow-hidden h-52 w-ful'>
                                    <img src={alevel} alt='' className='rounded-t-lg object-cover w-full h-48 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300' />
                                </div>
                                <div className='text p-2'>
                                    <h3 className='text-[#071952] my-2 -mt-4 font-medium'>
                                        A-Level <br /><span className="text-primary"> Course</span></h3>
                                    <div className='user flex items-center justify-between mt-6'>
                                        <div className='flex items-center '>
                                            <img className='w-15 h-10 object-cover shadow-shadow1' src={profilelogo} alt='' />
                                        </div>
                                        <div className='flex items-center text-primary'>
                                            <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank"><span className='text-[12px] keyBg1 p-1 px-3 text-white rounded-[5px]'>Visit</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank">
                            <div className='box rounded-lg shadow-shadow1 shadow-3xl bg-white' data-aos="fade-up">
                                <div className='images rounded-t-lg relative overflow-hidden h-52 w-ful'>
                                    <img src={short} alt='' className='rounded-t-lg object-cover w-full h-48 transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300' />
                                </div>
                                <div className='text p-2'>
                                    <h3 className='text-primary my-2 -mt-4 font-medium'>
                                        Short Term<br /><span className="text-primary"> Courses</span></h3>
                                    <div className='user flex items-center justify-between mt-6'>
                                        <div className='flex items-center '>
                                            <img className='w-15 h-10 object-cover shadow-shadow1' src={profilelogo} alt='' />
                                        </div>
                                        <div className='flex items-center text-primary'>
                                            <a href="https://nielit.gov.in/haridwar/content/online-courses" target="blank"><span className='text-[12px] keyBg1 p-1 px-3 text-white rounded-[5px]'>Visit</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OtherCourses
