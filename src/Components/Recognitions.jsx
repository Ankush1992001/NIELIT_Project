import recognitions from '../assets/Recognitions.png'
import international from '../assets/International.png'
import internship from '../assets/Internship.png'
import suitable from '../assets/suitable.png'
import pdffile from "../assets/Information_Syllabus.pdf";
import screenshot from "../assets/Screenshotinpdf.png";
const Recognitions = () => {
    const samI = [
        { code: 'B1.1-R5', title: 'Management Fundamentals & Information Systems' },
        { code: 'B1.2-R5', title: 'Discrete Structures' },
        { code: 'B1.3-R5', title: 'Software Engineering' },
        { code: 'B1.4-R5', title: 'Operating Systems' },
        { code: 'B1.5-R5', title: 'Data Communications and Computer Networks' },
    ];
    const samIprac = [
        { code: 'B-PR-1-R5 ', title: 'Practical Based on B1.1-R5 to B1.5-R5' }
    ];
    const samII = [
        { code: 'B2.1-R5', title: 'Computer Based Statistical and Numerical Methods' },
        { code: 'B2.2- R5', title: 'Professional & Business Communication' },
        { code: 'B2.3- R5', title: 'Advanced Database Technologies' },
        { code: 'B2.4- R5', title: 'Computer Graphics and Multimedia Systems' },
        { code: 'B2.5- R5', title: 'Cloud Computing and Internet of Things (IoT)' },
    ];
    const samIIprac = [
        { code: 'B-PR-2-R5', title: 'Practical Based on B2.1-R5 to B2.5-R5' }
    ];
    const samIII = [
        { code: 'B3.1-R5', title: 'Software Project Management' },
        { code: 'B3.2-R5', title: 'Artificial Intelligence and Machine Learning' },
        { code: 'B3.3-R5', title: 'Web Technologies' },
    ];
    const optionsub = [
        { code: 'B3.E1-R5', title: 'Digital Marketing' },
        { code: 'B3.E2-R5', title: 'System Modeling & Computing Simulation' },
        { code: 'B3.E3-R5', title: 'Distributed and Parallel Computing' },
        { code: 'B3.E4-R5', title: 'Data Warehousing and Data Mining' },
        { code: 'B3.E5-R5', title: 'Software Testing and Quality Assurance' },
        { code: 'B3.E6-R5', title: 'Digital Image Processing' },
        { code: 'B3.E7-R5', title: 'Accounting and Financial Management' },
        { code: 'B3.E8-R5', title: 'Wireless and Mobile Communication' },
        { code: 'B3.E9-R5', title: 'Blockchain Technology' },
    ];
    const samIIIprac = [
        { code: 'B-PR-3-R5', title: 'Practical Based on B3.1-R5 to B3.3-R5 and all elective modules.  The candidate has to attempt practical exam related to electives depending upon his/her choice.' }
    ];
    const samIV = [
        { code: 'B-PJ-R5 ', title: 'Major Project' },
        { code: 'B-ES-R5', title: 'Employability Skill' },
    ];

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10 " id='recognitions'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary leading-normal' data-aos="fade-right">Recognitions </h2>
            {/* first portion */}
            <div className='highlightBg p-2 rounded-lg flex flex-col md:flex-row-reverse justify-between items-center gap-8' data-aos="fade-right">
                <div className='md:w-1/5' data-aos="zoom-in-left">
                    <img src={recognitions} alt="" />
                </div>
                {/* Recognitions content */}
                <div className='md:w-2.5/4'>
                    <span className='text-secondary md:text-5xl text-3xl font-bold mb-5 leading-normal'>National</span>
                    <p className='text-tartiary text-lg mb-7 mt-4'>Course is recognized for government Jobs and is aligned at level 6 of National Skills Qualifications Framework (NSQF).</p>
                    <p className='text-tartiary text-lg mb-7'>Curriculum has been designed by academic and industry experts and it equips a candidate with latest skills that meets the industry demand.</p>
                </div>
            </div>
            {/* second portion */}
            <div className='lightBg rounded-lg p-2 flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-5' data-aos="fade-right">
                <div className='md:w-1/2'>
                    <img src={international} alt="" data-aos="zoom-in-left" />
                </div>
                {/* Recognitions content */}
                <div className='md:w-2.5/4'>
                    <span className='text-secondary md:text-5xl text-3xl font-bold mb-5 leading-normal'>International</span>
                    <p className='text-tartiary text-lg mb-7 mt-4'><span className='text-primary underline'>SINGAPORE</span><span className='text-primary'> :</span> The NIELIT 'B' Level Qualification, combined with three years of experience, is recognized as equivalent to the Associate Certified IT Project Manager (CITPM) by the National Infocomm Competency Centre (NICC) Singapore and the Singapore Computer Society (SCS).<br />This recognition is based on the MOU signed in August 2002 between NIELIT and NICC & SCS.</p>
                    <p className='text-tartiary text-lg mb-7'><span className='text-primary underline'>JAPAN</span><span className='text-primary'> :</span> The NIELIT 'B' Level qualification is also recognized as equivalent to the Software Design & Development Engineer by the Japan Information Technology Engineers Examination Center (JITEC) of the Information Technology Promotion Agency, Japan.</p>
                </div>
            </div>
            {/* Third portion */}
            <div className='highlightBg rounded-lg p-2 flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-10' data-aos="fade-right">
                <div className='md:w-1/4'>
                    <img src={internship} alt="" data-aos="zoom-in-left" />
                </div>
                {/* Recognitions content */}
                <div className='md:w-2.5/4' id='opportunities'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Internship <span className='text-secondary'>and</span> Placement Opportunities</h2>
                    <p className='text-tartiary text-lg mb-7 mt-4'>Top 3 candidates will be offered and an internship opportunity upon successful completion of the course.<br /> A stipend of upto Rs. 10,000/- per month may be paid during the 3-6 months internship to the eligible candidates.</p>
                    <p className='text-tartiary text-lg mb-7'>Placement assistance will be provided to all deserving candidates.</p>
                </div>
            </div>
            {/* Fourth portion */}
            <div className='lightBg flex rounded-lg p-2 flex-col md:flex-row-reverse justify-between items-center gap-8 mt-10' data-aos="fade-right">
                <div className='md:w-1/4'>
                    <img src={suitable} alt="" data-aos="zoom-in-left" />
                </div>
                {/* Recognitions content */}
                <div className='md:w-2.5/4'>
                    <h2 className='md:text-5xl text-3xl font-bold text-secondary mb-5 leading-normal'>Most <span className='text-primary'> suitable</span> for</h2>
                    {/* <p className='text-tartiary text-lg mb-7 mt-4'><span className='text-primary text-xl'>•</span> Engineering graduates (other than IT/CS), who wish to make a breakthrough in IT field.</p> */}
                    <p className='text-tartiary text-lg mb-7'><span className='text-primary text-xl'>•</span>	BCA/BSc (CS/IT) graduate who are looking for higher education.</p>
                    <p className='text-tartiary text-lg mb-7'><span className='text-primary text-xl'>•</span>	NIELIT ‘A’ Level DOEACC Scheme with graduation.</p>
                    <p className='text-tartiary text-lg mb-7'><span className='text-primary text-xl'>•</span>   PGDCA pass outs who wish to upgrade their education.</p>
                    {/* <p className='text-tartiary text-lg mb-7'><span className='text-primary text-xl'>•</span>	Working persons who wish to upgrade their IT qualification and knowledge for speedy career growth.</p> */}
                </div>
            </div>
            {/* Fiveth portion */}
            <div>
                {/* Recognitions content */}
                <div className="text-center">
                    <h2 className="md:text-5xl text-3xl font-extrabold text-primary md-2" data-aos="zoom-in">Course <span className="text-secondary">Outline</span></h2>
                    <p className='text-tartiary text-lg mb-7 mt-4' data-aos="zoom-in">13 Compulsory modules + 2 Elective Modules.</p>
                    {/* Semester I=======================------------------>>>>>>>>>> */}
                    <div className='my-12 flex flex-col md:flex-row gap-10'>
                        <div className="container mx-auto mt-10">
                            <h1 className="text-2xl font-bold mb-4 border text-primary" data-aos="flip-right">Semester I</h1>
                            <table className="w-full table-auto" data-aos="flip-left">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text font-bold border text-primary">Module Code</th>
                                        <th className="px-4 py-2 text font-bold border text-secondary">Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {samI.map((item) => (
                                        <tr key={item.code}>
                                            <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                            <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="container mx-auto mt-5">
                                <h1 className="text-xl font-bold mb-4 border text-secondary" data-aos="flip-right">Practical I</h1>
                                <table className="w-full table-auto" data-aos="flip-left">
                                    <tbody>
                                        {samIprac.map((item) => (
                                            <tr key={item.code}>
                                                <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                                <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Semester II=======================------------------>>>>>>>>>> */}
                        <div className="container mx-auto mt-10">
                            <h1 className="text-2xl font-bold mb-4 border text-primary" data-aos="flip-right">Semester II</h1>
                            <table className="w-full table-auto" data-aos="flip-left">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text font-bold border text-primary">Module Code</th>
                                        <th className="px-4 py-2 text font-bold border text-secondary">Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {samII.map((item) => (
                                        <tr key={item.code}>
                                            <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                            <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="container mx-auto mt-5">
                                <h1 className="text-xl font-bold mb-4 border text-secondary" data-aos="flip-right">Practical II</h1>
                                <table className="w-full table-auto" data-aos="flip-left">
                                    <tbody>
                                        {samIIprac.map((item) => (
                                            <tr key={item.code}>
                                                <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                                <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Semester III=======================------------------>>>>>>>>>> */}
                    <div className='my-12 flex flex-col md:flex-row gap-10'>
                        <div className="container mx-auto mt-10">
                            <h1 className="text-2xl font-bold mb-4 border text-primary" data-aos="flip-right">Semester III</h1>
                            <table className="w-full table-auto" data-aos="flip-left">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text font-bold border text-primary">Module Code</th>
                                        <th className="px-4 py-2 text font-bold border text-secondary">Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {samIII.map((item) => (
                                        <tr key={item.code}>
                                            <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                            <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="container mx-auto mt-5">
                                <h1 className="text-xl font-bold mb-4 border text-secondary" data-aos="flip-right">Any Two Electives from the following</h1>
                                <table className="w-full table-auto" data-aos="flip-left">
                                    <tbody>
                                        {optionsub.map((item) => (
                                            <tr key={item.code}>
                                                <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                                <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="container mx-auto mt-5">
                                    <h1 className="text-xl font-bold mb-4 border text-secondary" data-aos="flip-right">Practical III</h1>
                                    <table className="w-full table-auto" data-aos="flip-left">
                                        <tbody>
                                            {samIIIprac.map((item) => (
                                                <tr key={item.code}>
                                                    <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                                    <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* Semester IV=======================------------------>>>>>>>>>> */}
                        <div className="container mx-auto mt-10">
                            <h1 className="text-2xl font-bold mb-4 border text-primary" data-aos="flip-right">Semester IV</h1>
                            <table className="w-full table-auto" data-aos="flip-left">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text font-bold border text-primary">Module Code</th>
                                        <th className="px-4 py-2 text font-bold border text-secondary">Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {samIV.map((item) => (
                                        <tr key={item.code}>
                                            <td className="border px-4 py-2 text-tartiary">{item.code}</td>
                                            <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* file Download=======================------------------>>>>>>>>>> */}
                            <div className="container mx-auto mt-16">
                                <div className='flex justify-center' data-aos="flip-left">
                                    <a href={pdffile} download="pdffile">
                                        <img src={screenshot} alt=""
                                            className='border mb-4 h-96 py-2 px-4' />
                                    </a>
                                </div>
                                <table className="w-full table-auto mt-8">
                                    <thead>
                                        <tr>
                                            <th data-aos="flip-right"><a href={pdffile} download="pdffile" className="px-4 py-2 text font-bold border text-secondary underline">Download PDF</a></th>
                                        </tr>
                                    </thead>
                                </table>
                                <table className="w-full table-auto mt-10">
                                    <thead>
                                        <tr>
                                            <th data-aos="flip-right"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdrdGfCxkBZUpML6RhMswdGcdcrmbJoU2onw8rAJOSZUFJYHg/viewform" target='_blank'><button
                                                className='py-3 px-8 bg-secondary text-white font-semibold rounded hover:bg-primary transition-all duration-300'>Register</button></a></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recognitions
