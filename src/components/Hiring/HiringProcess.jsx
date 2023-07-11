import Image from "next/image";
const HiringProcess = () => {
    const style1 = {
        backgroundImage: 'linear-gradient(269.47deg, #2163FB 2.09%,  #2623D4 95.75%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      };
      const style2 = {
          backgroundImage: 'linear-gradient(268.6deg, #2623D4 1.53%, #2163FB 86.9%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        };
  return (
        <>
        <div className="flex px-6 md:px-12 lg:px-20 xl:px-40 flex-col my-10 md:my-20 xl:my-28">
            <p className="text-blue font-semibold mb-3 tracking-[0.2em] uppercase text-center">our hiring process</p>
            <p className="text-black font-semibold text-2xl md:text-[40px] text-center mb-4 md:mb-14">How we curate top developers for you</p>
            <p className="text-black inline-block mb-6 whitespace-pre-line lg:px-32 font-normal leading-tight text-xl md:text-5xl lg:text-[56px] -tracking-[0.05em]">
             We receive
                <span style={style1} className="font-bold ">
                1.5k CVs every week&nbsp;
                </span> 
                into our database which is vetted through a very&nbsp;
                <span style={style2} className="font-bold">
                thorough screening process&quot;
                </span>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 md:mt-8 lg:mt-10 gap-6 md:gap-12">
                <div className="grid relative place-items-center">
                    <Image className="h-[300px] md:h-[500px] md:w-[500px]"
                    src="/images/home/stats-globe.png"
                    height={300}
                    width={300}
                    quality={100}
                    alt='economical tech talent from emerging markets'
                        />
                </div>
                <div className="grid relative place-items-center">
                    <Image className="h-[300px] md:h-[600px] md:w-[600px]"
                    src="/images/home/recruiting-funnel.png"
                    height={300}
                    width={300}
                    quality={100}
                    alt='economical tech talent from emerging markets'
                        />
                </div>
            </div>
        </div>       
        </>
  )
}

export default HiringProcess