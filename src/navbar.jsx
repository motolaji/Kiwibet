import { useState } from "react";
import KiwiLogoGreen from "./images/kiwi_logogreen.png"
import Wave from './images/wave.png'

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full
         bg-[#0F0F12]
          shadow" 
          style={{
         backgroundImage: `url()`,
         scrollBehavior: 'smooth',


    }}
          >
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8" 
//             style={{
//       backgroundImage: `url(https://assets.website-files.com/624f34ee3b91afefdf14076f/624f8a14314de6afdb6b32c0_image-mesh-hero-blockchain-template.svg)`,
//       backgroundSize: 'cover',
//    }}
   >
                <div>
                    <div className="flex items-center justify-between py-0 md:py-5 md:block">
                        <a href="./">
                            {/* <h2 className="text-2xl font-bold">LOGO</h2> */}
                            <img 
                            className="object-cover w-28 h-20"
                            // style={{width:'120px', height:'100px'}} 
                            src={KiwiLogoGreen}/>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"/>
                                    </svg> ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"/> </svg> )} </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-0 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}>
                        <ul  onClick={() => setNavbar(!navbar)} className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-clash font-bold">
                            <li className="text-[#00b082] hover:text-white">
                                <a href="#">Home</a>
                            </li>
                            <li className="text-[#00b082] hover:text-white">
                                <a href="#About">About</a>
                            </li>
                            <li className="text-[#00b082] hover:text-white">
                                <a href="#Subscribe">Subscribe to KiwiBet Premium</a>
                            </li>
        
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}