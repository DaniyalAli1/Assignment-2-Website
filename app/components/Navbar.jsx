import Image from "next/image";
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"

const navLinks = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Enterprise' },
    { name: 'Careers' },
]

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-50" >
            <div className="flex items-center">
                <Image src={Logo} alt="Logo" />

                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <p className="text-[#3685C] font-medium" key={index}>
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex gap-5">
                <p className="hidden text-[#3685C] font-medium lg:block pr-[56px]">Open an Account</p>
                <div className="flex items-center gap-x-2">
                    <Image src={User} alt="User Profile" />
                    <span className="hidden font-medium text-[#36435C] lg:block">Sign in</span>
                </div>
                <div>
                    <Image src={Menu} alt="Menu Button " className="lg:hidden" />
                </div>
            </div>
        </nav>
    );

}