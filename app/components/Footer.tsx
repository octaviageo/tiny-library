import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo_new.svg"

export default function Footer() {
    return(
            <section className="container px-4 py-8 mx-auto bg-[#fafafa]">
                <Link href="/">
                    <Image 
                    src={logo} 
                    loading="lazy"
                    alt="Tiny Library Logo" 
                    className="w-32 h-auto mx-auto mb-4" />
                </Link>
            </section>
    )
}