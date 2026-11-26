import Link from "next/link";
import Image from "next/image"
import heroImage from "@/public/library.png"
import stack from "@/public/icons/Stack.svg"
import globe from "@/public/icons/GlobeSimple.svg"
import flag from "@/public/icons/Flag.svg"


export default function About () {
    return (
        <main>
            <section className = "grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl ">
            <div>
                <Image 
                    src={heroImage} 
                    alt="Tiny Library" 
                    loading="lazy"
                    width={400} 
                    height={300}
                    className="rounded-lg justify-center" />
            </div>
            <div className="flex flex-col gap-5 justify-center">
                <span className="uppercase text-sm">About Tiny Library</span>
                 <h1 className="text-4xl font-bold md:text-5xl">Small shelf, big impact</h1>
                 <p className="text-md text-gray-600">Tiny Library started as a simple idea: 
                    make it easier for curious readers to actually find books they'll love, 
                    not just scroll endless lists. Every title here is chosen with care, not algorithms.
                 </p>
                 <div className="flex justify-center">
                    <Link
                        href="/about/contact"
                        className="inline-flex items-center justify-center px-6 py-3
                                text-black transition duration-300 bg-white
                                border-2 border-black hover:bg-black hover:text-white 
                                rounded-md mt-8"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            </section>

             <hr className="border-gray-200" aria-hidden="true" />

            <section className="py-12" aria-labelledby="key-features">
                <div className="px-6 mx-auto max-w-7xl">
                    <h2 id="key-features" className="sr-only">
                        Key Features
                    </h2>
                    <div className="grid gap-6 md:gap-0 md:grid-cols-3">
                        <article className="p-6 bg-white">
                            <div className="flex items-center mb-4 space-x-4">
                                <Image src={stack} alt="Stack of books" width={20} height={20} />
                                <h3 className=" text-xl font-semibold font-montserrat-alternates 
                                ">
                                Curated, not crowded
                            </h3>
                            </div>
                            <p className="text-gray-600">
                                Tiny Library keeps the catalogue intentionally small so every book 
                                feels like a recommendation.
                            </p>
                        </article>
                        <article className="p-6 bg-white border-gray-400 md:border-x">
                            <div className="flex items-center mb-4 space-x-4">
                                <Image src={globe} alt="World globe" width={20} height={20} />
                                <h3 className=" text-xl font-semibold font-montserrat-alternates">
                                Easy to browse
                            </h3>
                             </div>
                            <p className="text-gray-600">
                                Clear categories and simple descriptions make it quick to choose 
                                what you actually want to read next.
                            </p>
                        </article>
                        <article className="p-6 bg-white">
                            <div className="flex items-center mb-4 space-x-4">
                                <Image src={flag} alt="Flag icon" width={20} height={20} />
                            <h3 className=" text-xl font-semibold font-montserrat-alternates">
                                Readers first
                            </h3>
                            </div>
                            <p className="text-gray-600">
                                Every part of Tiny Library is designed to help you spend less time 
                                searching and more time reading.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true" />

            <section className="container max-w-3xl px-4 py-8 mx-auto">
                <div className="prose max-w-none">
                    <h2 className="mb-4 text-2xl font-semibold">Our Ethos</h2>
                    <p className="mb-4 text-gray-700 pb-4 border-gray-400 ">
                        At Tiny Library, we believe a good book shouldn't be hard to find. 
                        Our ethos is to create a small, carefully curated space where
                        every title earns its place on the shelf and readers can trust that
                        anything they pick up is worth their time.
                    </p>
                    <div className="border-t p-4 w-70 mx-auto"></div>
                    <p className="text-gray-700">
                        Instead of overwhelming you with thousands of options, 
                        Tiny Library focuses on a modest collection that feels 
                        personal and approachable. We want readers to feel like 
                        they've stepped into a cosy, well-loved library where 
                        someone has already done the hard work of sorting through the noise.
                    </p>
                </div>
            </section>
            {/* <section className="container max-w-3xl px-4 py-8 mx-auto">
                <Link href="/">
                    <img src="./logo_new.svg" alt="Tiny Library Logo" className="w-32 h-auto mx-auto mb-4" />
                </Link>
            </section> */}
        </main>

    )
}