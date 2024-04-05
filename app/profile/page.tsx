"use client";

import DynamicAreaChart from "@/components/component/DynamicAreaChart";

const Profile = () => {
    return (
        <div className="w-full min-h-screen font-sans">
           
           
            <div className="flex ">
                <div className="space-y-6 pt-5 pl-5 w-2/3">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    alt="doctor image"
                                    className="rounded-full"
                                    height="100"
                                    src="/d1.jpg"
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="100"
                                />
                                <div className="space-y-1.5">
                                    <h1 className="text-2xl font-bold tracking-tighter">
                                        Dr. Maria Garcia
                                    </h1>
                                    <p className="text-sm text-gray-500 leading-none dark:text-gray-400">
                                        @mariagarcia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="space-y-4">
                                <section>
                                    <h2 className="text-lg font-semibold">Bio</h2>
                                    <p className="text-sm text-gray-500 leading-none dark:text-gray-400">
                                        Family physician with a passion for patient care and
                                        community health. Dedicated to continuous .
                                    </p>
                                </section>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            Personal Information
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>
                                                <span className="font-bold text-gray-600 mr-2">
                                                    Email:
                                                </span>
                                                <span>john.doe@example.com</span>
                                            </li>
                                            <li>
                                                <span className="font-bold text-gray-600 mr-2">
                                                    Phone:
                                                </span>
                                                <span>+1 (555) 123-4567</span>
                                            </li>
                                            <li>
                                                <span className="font-bold text-gray-600 mr-2">
                                                    Location:
                                                </span>
                                                <span>Example City, Example State</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            Research Interests
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>Cardiovascular Disease</li>
                                            <li>Oncology</li>
                                            <li>Neuroscience</li>
                                        </ul>
                                    </div>
                                    {/* <div>
                                        <h3 className="text-lg font-semibold mb-2">Activity</h3>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                            </svg>
                                            <span>Last active 3 hours ago</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="flex space-x-24">
                                <section>
                                    <h2 className="text-lg font-semibold">Specialties</h2>
                                    <ul className="grid grid-cols-1 gap-2 list-disc list-inside text-sm">
                                        <li>Family Medicine</li>
                                        <li>Preventive Care</li>
                                        <li>Chronic Disease Management</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-lg font-semibold">Qualifications</h2>
                                    <ul className="grid grid-cols-1 gap-2 list-disc list-inside text-sm">
                                        <li>MD, Universidad Autónoma de Madrid</li>
                                        <li>Residency in Family Medicine, </li>
                                        <li>Board Certified in Family Medicine</li>
                                    </ul>
                                </section>
                                {/* <div className="flex  bg-slate-400">
                                    <div className="space-y-2 font-sans">
                                        <h2 className="text-lg font-semibold">Contact</h2>

                                        <p className="text-sm">Email: contact@mariagarciamd.com</p>
                                        <p className="text-sm">Phone: +1 (123) 456-7890</p>

                                    </div>
                                    <div className="space-y-2 font-sans">
                                        <h2 className="text-lg font-semibold">Social</h2>

                                        <p className="text-sm">Twitter: @mariagarciamd</p>
                                        <p className="text-sm">LinkedIn: /in/mariagarciamd</p>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/3 justify-start">
                    <DynamicAreaChart />
                </div>
            </div>

            <div className="w-full px-6 mb-20">
                <h2 className="text-2xl font-bold mt-8 mb-4">Research Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-2">
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-2">
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Clinical Trial for Novel Cancer Treatment
                            </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Exploring a new targeted therapy for advanced-stage cancer
                            patients.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>Last updated 2 days ago</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-2">
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Epidemiological Study on Alzheimers Disease
                            </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Investigating the risk factors and prevalence of Alzheimers
                            disease in a diverse population.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>Last updated 1 week ago</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-2">
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Exploring Gut Microbiome and Cardiovascular Health
                            </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Investigating the relationship between gut microbiome composition
                            and cardiovascular disease risk.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>Last updated 3 weeks ago</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-2">
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Clinical Trial for Novel Cancer Treatment
                            </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Exploring a new targeted therapy for advanced-stage cancer
                            patients.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>Last updated 2 days ago</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-2">
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Epidemiological Study on Alzheimers Disease
                            </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Investigating the risk factors and prevalence of Alzheimers
                            disease in a diverse population.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>Last updated 1 week ago</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-2">
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Exploring Gut Microbiome and Cardiovascular Health
                            </a>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Investigating the relationship between gut microbiome composition
                            and cardiovascular disease risk.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>Last updated 3 weeks ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
