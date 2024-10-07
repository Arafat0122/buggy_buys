

const Hero = () => {
    return (
        <div>
            <section
                className="hero relative flex flex-col md:flex-row items-center justify-between bg-cover bg-center pt-14"
                style={{ backgroundImage: "url('https://www.mkwadraat.nl/wp-content/uploads/2018/09/parallax-bg.jpg')" }}
            >
                <div className="overlay absolute inset-0 bg-black opacity-40"></div>

                <div className="left-text p-6 md:p-10 z-10 text-white flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-greatVibes mb-4 text-center md:text-left">
                        Welcome to <br className="flex md:hidden" /> Buggy Buys!
                    </h1>
                    <h2 className="text-lg md:text-4xl font-fraunces mb-4 text-center md:text-left">
                        Your Reliable E-Commerce Store
                    </h2>
                    <p className="text-base md:text-xl font-bitter mb-6 text-center md:text-left">
                        Discover a wide range of products at unbeatable prices. We provide fast shipping and excellent customer service to make your shopping experience seamless.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="/products"
                            className="bg-yellow-400 text-gray-900 font-bitter font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                            role="button"
                            aria-label="Shop Now"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>

                <div className="right-image z-10 mt-6 md:mt-0">
                    <img
                        src="/public/buggy-buys-items-3d.png"
                        alt="3D Product"
                        className="w-3/4 md:w-full mx-auto"
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;