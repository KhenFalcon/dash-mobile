import Link from "next/link";
import Image from "next/image";

import logo from '@/images/white logo.png';

export default function Navbar() {
    return (
        <>
            <div id="navbar">
                <div id="left-nav">
                    <h1><Link href="../"><b><i>D-ASH</i></b></Link></h1>
                    <h3><Link href="../about">About Us</Link></h3>
                    <h3><Link href="../contact">Contact Us</Link></h3>
                </div>
                <div id="right-nav">
                    <h3><Link href="../quotes">Get a Quote</Link></h3>
                    <h3><Link href="../reservations">Reservations</Link></h3>
                </div>
            </div>
            <div id="logo-container">
                <Image id="nav-logo" src={logo} alt="Logo" width={100} height={100} />
            </div>
        </>
    );
}