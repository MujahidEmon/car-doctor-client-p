import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel  w-full my-12 rounded-2xl">
            <div id="slide1" className="carousel-item relative h-[550px] object-cover  w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] left-0 right-0  flex h-full text-white  pl-28">
                    <div className='w-98 content-center space-y-6'>
                        <h1 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-row gap-4'>
                            <button className='bg-[#FF3811] btn shadow-none border-0 text-white'>Discover More</button>
                            <button className='btn btn-outline border border-white shadow-none'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[550px] w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] left-0 right-0  flex h-full text-white  pl-28">
                    <div className='w-98 content-center space-y-6'>
                        <h1 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-row gap-4'>
                            <button className='bg-[#FF3811] btn shadow-none border-0 text-white'>Discover More</button>
                            <button className='btn btn-outline border border-white shadow-none'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[550px] w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] left-0 right-0  flex h-full text-white  pl-28">
                    <div className='w-98 content-center space-y-6'>
                        <h1 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-row gap-4'>
                            <button className='bg-[#FF3811] btn shadow-none border-0 text-white'>Discover More</button>
                            <button className='btn btn-outline border border-white shadow-none'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-[550px] w-full">
                <img
                    src={img4}
                    className="w-full" />
                <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] left-0 right-0  flex h-full text-white  pl-28">
                    <div className='w-98 content-center space-y-6'>
                        <h1 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-row gap-4'>
                            <button className='bg-[#FF3811] btn shadow-none border-0 text-white'>Discover More</button>
                            <button className='btn btn-outline border border-white shadow-none'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative h-[550px] w-full">
                <img
                    src={img5}
                    className="w-full" />
                <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] left-0 right-0  flex h-full text-white  pl-28">
                    <div className='w-98 content-center space-y-6'>
                        <h1 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-row gap-4'>
                            <button className='bg-[#FF3811] btn shadow-none border-0 text-white'>Discover More</button>
                            <button className='btn btn-outline border border-white shadow-none'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative h-[550px] w-full">
                <img
                    src={img6}
                    className="w-full" />
                <div className="absolute bg-linear-to-r from-[#151515] to-[#15151500] left-0 right-0  flex h-full text-white  pl-28">
                    <div className='w-98 content-center space-y-6'>
                        <h1 className='text-5xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-row gap-4'>
                            <button className='bg-[#FF3811] btn shadow-none border-0 text-white'>Discover More</button>
                            <button className='btn btn-outline border border-white shadow-none'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;