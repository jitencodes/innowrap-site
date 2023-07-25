import Image from 'next/image';

const HiringBanner = () => {
    const style = {
        backgroundImage: 'linear-gradient(269.47deg, #2623D4 2.09%, #2163FB 95.75%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      };
  return (
    <section className='px-6 md:px-12 lg:px-20 xl:px-40'>
        <div className="flex flex-col md:flex-row">
            <div className="flex order-2 md:order-1 md:w-1/2 max-[600px]:w-full bg-light-bg px-6 lg:px-20 py-6 md:py-12 lg:py-24 flex-col">
                <p className="text-black font-semibold text-justify md:text-left text-lg md:text-[26px] lg:text-[32px] leading-tight mb-3 md:mb-6">
                Startups and SMEs lack the infrastructure to hire 
                <span style={style} className="font-bold">
                    economical tech talent from emerging markets
                </span>
                </p>

                <p className="text-black font-semibold text-base md:text-xl mb-2 md:mb-4">Startups , especially in the west </p>
                <ul>
                    <li className="mb-3 text-sm md:text-base">
                        <span className="mr-2"> 🡢</span> Have to shell out a fortune to hire local talent. 
                    </li>
                    <li className="mb-3 text-sm md:text-base">
                        <span className="mr-2">🡢</span> Don&#39;t have the infrastructure to hire and manage         quality talent from emerging economies that         comes with significant cost advantages.&quot;
                    </li>
                </ul>
            </div>
            <div className="flex order-1 md:order-2 md:w-1/2 max-[600px]:w-full">
                <Image
                src="/images/hiring-page/banner-1.png"
                width={370}
                height={500}
                layout="responsive"
                alt='economical tech talent from emerging markets'
                    />

            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="flex md:w-1/2 max-[600px]:w-full">
                <Image
                src="/images/hiring-page/banner-3.png"
                width={370}
                height={500}
                layout="responsive"
                alt='Clients quotes'
                    />
            </div>
            <div className="flex md:w-1/2 max-[600px]:w-full bg-light-bg px-6 lg:px-20 py-6 md:py-12 lg:py-24 flex-col">
                <p className="text-black font-semibold text-justify md:text-left text-lg md:text-[26px] lg:text-[32px] leading-tight mb-3 md:mb-6">
                <span style={style} className="font-bold">
                “Innowrap levels the playing field
                </span>
                for all companies large or small by helping them” 
                </p>

                <ul>
                    <li className="mb-3">
                        <span className="mr-2"> 🡢</span>  Access and interview top-notch remote indian          devs pre-vetted through a rigorous screening         process 
                    </li>
                    <li className="mb-3">
                        <span className="mr-2">🡢</span> Effectively hire and manage these devs at 75%         lower salary expenses than local Talent with         same experience. 
                    </li>
                </ul>
            </div>            
        </div>
    </section>
  )
}

export default HiringBanner