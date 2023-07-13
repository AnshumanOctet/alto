import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
    return (


        <footer className="bg-[#1c1c1c]">
            <div className="flex justify-between  py-[70px] w-[85%] mx-auto ">
                <div className="flex flex-col">
                    <ul>
                        <li>
                            <a href="#" className="text-lg">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Banner
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Our Expertise
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                BLDC Labs
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Our Process
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Why Alto?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Applications
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <ul>
                        <li>
                            <a href="#">
                                BLDC Labs
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Why BLDC?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Alto for BLDC
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Our Research
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Why Alto
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col">
                    <ul>
                        <li>
                            <a href="#">
                                Manufacturing
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                How We Help
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Capabilities
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Customizations
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col">
                    <ul>
                        <li>
                            <a href="#">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                All Products
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                BLDC Motors
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Induction Motors
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Drivers
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Accessories
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col">
                    <ul>
                        <li>
                            <a href="#">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                About Alto
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Mission Statement
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Achievements
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Responsibilities
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <ul>
                        <li>
                            <a href="#">
                                Connect With Us
                            </a>
                        </li>
                        <li className="flex gap-5">
                            <div>
                                <StaticImage
                                    src="../images/ic_sharp-email.png"
                                    alt="mail-icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div>
                                <StaticImage
                                    src="../images/mdi_linkedin.png"
                                    alt="linkedin-icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div>
                                <StaticImage
                                    src="../images/ion_logo-medium.png"
                                    alt="mail-icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="  bg-[#171717] py-2.5">
                <div className="flex justify-between items-center w-[85%] mx-auto ">
                    <p className="text-xs text-[#929292] ">@2016 Alto. All Rights Reserved</p>
                    <div className="text-xs text-[#ffffff] flex gap-5">
                        <span>
                            <a href="#" className="footer-link">Terms of Service</a>
                        </span>
                        <span>
                            |
                        </span>
                        <span>
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </span>
                    </div>
                </div>
            </div>



        </footer>
    )
}

export default Footer;