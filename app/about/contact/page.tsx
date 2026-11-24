import Link from "next/link";

export default function Contact () {
    return (
        <section className = "flex gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl align-center justify-center">
            <div className="flex flex-col gap-5 justify-center">
                <span className="uppercase text-sm">Reach out to us</span>
                 <h1 className="text-4xl font-bold md:text-5xl">Contact</h1>
                 <p className="text-lg text-gray-600">
                    You can get in touch with us via email regarding: 
                 </p>
                 <ul className="list-disc list-inside space-y-2">
                    <li className="text-md text-gray-600">
                        <b>Book suggestions</b>: Tell us what we should add to the shelf
                    </li>
                     <li className="text-md text-gray-600">
                        <b>Corrections</b>: Spotted an error? Let us know so we can fix it.  
                    </li>
                     <li className="text-md text-gray-600">
                        <b>Careers</b>: Interested in joining the Tiny Library team? Reach out to us. 
                    </li>
                 </ul>
                 <div className="flex justify-center">
                    <Link
                        href="mailto:hello@tinylibrary.com"
                        className="inline-flex items-center justify-center px-6 py-3
                                text-black transition duration-300 bg-white
                                border-2 border-black hover:bg-black hover:text-white 
                                rounded-md mt-8 "
                    >
                        Email Us
                    </Link>
                </div>
            </div>
            </section>
    )
}