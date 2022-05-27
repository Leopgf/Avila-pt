import Link from "next/link";
import {useRouter} from "next/router";


const NavBar= () =>{

    // className={`hover:text-green-800 hover:border-b hover:border-green-800 ${
    //     router.pathname.includes(href) ? 'border-b border-green-800' : ' '
    // }`}
    const router = useRouter();

    return(
        <div className="w-full flex flex-row justify-center py-6 shadow-md">
            <div className="bg-white w-4/5 flex flex-row justify-between items-center font-mono">
                <Link href="/">
                    <a>
                        <img className="w-20 h-15" src="../tek-logo.jpg" alt=""/>
                    </a>
                </Link>

                <Link href="/profile">
                    <a className={`hover:text-green-800 hover:border-b hover:border-green-800 ${
                        router.pathname.includes("/profile") ? 'border-b text-green-800 border-green-800' : ' '
                    }`}>Perfil</a>
                </Link>

                <Link href="/createUser">
                    <a className={`hover:text-green-800 hover:border-b hover:border-green-800 ${
                        router.pathname.includes("/createUser") ? 'border-b text-green-800 border-green-800' : ' '
                    }`}>Crear usuario</a>
                </Link>

                <Link href="/favorites">
                    <a className={`hover:text-green-800 hover:border-b hover:border-green-800 ${
                        router.pathname.includes("/favorites") ? 'border-b text-green-800 border-green-800' : ' '
                    }`}>favoritos</a>
                </Link>
            </div>
        </div>
    )
}


export default NavBar;