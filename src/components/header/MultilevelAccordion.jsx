import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const MultilevelAccordion = ({menu}) => {
    return (
        <>
            <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-full flex justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                            <span className="font-bold text-base">Home</span>
                            <BiChevronDown className="text-slate-500 font-bold text-xl"/>
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="w-full bg-[#f2f2f2] flex justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                            <p>body</p>

                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
        <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-full flex justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                            <span className="font-bold text-base">Home</span>
                            <BiChevronDown className="text-slate-500 font-bold text-xl"/>
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="w-full bg-[#f2f2f2] flex justify-between items-center text-black border-b border-[#e5e7eb] p-4">
                            <p>body</p>

                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
        </>
    );
};

export default MultilevelAccordion;