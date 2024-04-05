import { User } from "lucide-react";
export const Nav = () => {
    return (
        <div className="w-full">
            <nav className="flex w-full justify-between items-center px-6  h-16 ">
                {/* logo */}
                <div className="flex flex-row justify-center items-center space-x-1.5">
                    <div className="flex flex-col justify-center items-center space-y-0.5">
                        <div className="h-2.5 w-7 rounded-full bg-black"></div>
                        <div className="h-1.5 w-4 rounded-full bg-black"></div>
                    </div>
                    <h1 className="font-semibold font-sans text-black">
                        Go<span>Doctor</span>
                    </h1>
                </div>

                {/* navigation */}
                <div className="flex justify-center items-center space-x-1 text-black text-lg font-sans ">
                    {["Home", "Insight", "Resources", "Community", "Trendeing"].map(
                        (link) => (
                            <span
                                key={link}
                                className="px-5 py-2 hover:bg-[#333441] rounded-full font-medium hover:cursor-pointer hover:text-white"
                            >
                                {link}
                            </span>
                        )
                    )}
                </div>

                {/* user auth section */}
                <div>
                    <User className="h-8 w-8 rounded-full bg-white text-black" />
                </div>
            </nav>
            <div className="w-full px-3 rounded-full bg-slate-700 h-0.5"></div>
        </div>
    )
}