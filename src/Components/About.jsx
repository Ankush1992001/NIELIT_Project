import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const About = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white" data-aos="fade-right" id="about">
            <div className="my-8 flex flex-col md:flex-row gap-10">
                <div className="md:w-2/3 space-y-8" data-aos="fade-right">
                    <h1 className="text-3xl space-x-3 font-semibold">About NIELIT</h1>
                    <hr />
                    <p className="md:w-2/3 text-justify">The National Institute of Electronics and Information Technology (NIELIT), formerly DOEACC Society, is an autonomous scientific society under the Ministry of Electronics & Information Technology, Government of India. It provides both formal and non-formal education and develops industry-oriented training programs in advanced IECT areas. NIELIT is a premier institution for Examination and Certification in IECT and accredits institutes for IT and Electronics courses in the non-formal sector.</p>
                </div>

                {/* contect Items */}
                <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start" data-aos="fade-right">
                    <div className="space-y-6 mt-2">
                        <h1 className="text-3xl  space-x-3 font-semibold ">
                            Contact Us
                        </h1>
                        <hr />
                        <ul className="space-y-1">
                            <li className="text-2xl text-secondary space-x-3 font-semibold">NIELIT Haridwar</li>
                            <li>2nd Floor, Government Polytechnic Building, Plot No. 6C,</li>
                            <li>Sector-11, Near Pentagon Mall, SIDCUL, Haridwar,</li>
                            <li>Uttarakhand-249403, Phone: 01334 235617, 9368349990.</li><br />
                            <li className="text-2xl text-secondary space-x-3 font-semibold">NIELIT Dehradun Study Centre</li>
                            <li>2nd Floor, Engineer's Bhawan, Near ISBT Dehradun </li>
                            <li>Uttarakhand-248002, Phone: 7302602223.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-4">
                <p>
                    Mobile: 9368349990 (Call & WhatsApp) / E-mail: haridwar@nielit.gov.in
                </p>
                <div className="flex items-center space-x-5">
                    <a href="https://www.instagram.com/nielithdw" target="_blank"><FaInstagram className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#E1306C] transition-all duration-300 text-5xl" /></a>
                    <a href="https://www.facebook.com/nielithdw" target="_blank"><ImFacebook2 className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#1877F2] transition-all duration-300 text-5xl" /></a>
                    <a href="https://x.com/nielithdw" target="_blank"><FaXTwitter className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#1DA1F2] transition-all duration-300 text-5xl" /></a>
                    <a href="https://www.linkedin.com/in/nielithdw/" target="_blank"><FaLinkedinIn className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#0077B5] transition-all duration-300 text-5xl" /></a>
                    <a href="https://www.youtube.com/@NIELITHaridwar" target="_blank"><IoLogoYoutube className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#FF0000] transition-all duration-300 text-5xl" /></a>
                </div>
            </div>
        </div>
    )
}

export default About
