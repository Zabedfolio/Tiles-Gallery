import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png'





const NavBar = () => {
    return (
        <div className="border-b px-2 border-gray-200">
            <nav className=" flex justify-between items-center  py-3 container  mx-auto ">
                <div className="flex gap-1 items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        loading="eager"
                        width={40}
                        height={40}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">TileNest.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-photos"}>All Photos</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">
                    <ul className="flex items-center  text-sm gap-4">
                        <button className='btn bg-[#5a00ff]  text-white'>
                            <Link href={"/signup"}>SignUp</Link>
                        </button>
                        <button className='btn bg-[#5a00ff]  text-white'>
                            <Link href={"/signin"}>SignIn</Link>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;