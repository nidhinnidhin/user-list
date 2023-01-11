import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/car.jpg" height={77} width={128} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/users/user">AllUsers</Link>
        </nav>
     );
}
 
export default Navbar;