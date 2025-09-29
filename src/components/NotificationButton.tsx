'use client';

import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FaWpforms } from "react-icons/fa6";
 import { FaWhatsapp } from "react-icons/fa";
interface NotificationButtonProps {
  productPath: string;
  productName: string;
}

const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const NotificationButton: React.FC<NotificationButtonProps> = ({ productPath, productName }) => {

  const t = useTranslations('ProductEnquiry');

  const [showDemo, setShowDemo] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [DemoClosed, setDemoClosed] = useState(false);
  const [CallbackClosed, setCallbackClosed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const demoTimer = setTimeout(() => {
      setShowDemo(true);
    }, 2000);

    const callbackTimer = setTimeout(() => {
      setShowCallback(true);
    }, 4000);

    return () => {
      clearTimeout(demoTimer);
      clearTimeout(callbackTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrolledPercent = scrollY / pageHeight;

      if (scrolledPercent > 0.3) {
        setShowDemo(true);
        setShowCallback(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClose = () => {
    setDemoClosed(true);
    setTimeout(() => {
      setDemoClosed(false);
    }, 10000);
  };
  const handleCallbackClose = () => {
    setCallbackClosed(true);
    setTimeout(() => {
      setCallbackClosed(false);
    }, 20000);
  };

 const handleClick = () => {
    const message = encodeURIComponent(
      "Hello, I want to know more about your services."
    );
    window.open(`https://wa.me/${WhatsappNumber}?text=${message}`, "_blank");
  };


  return (
    <div className="fixed top-[60%] right-0 z-[200] space-y-2 flex flex-col items-end">

  {showDemo && !DemoClosed  && (
    <div className="animate-slideInRight  flex items-center bg-[#0067FF] text-white py-2 px-2 rounded-l-lg shadow-lg relative ">
      <button
        onClick={() =>  router.push(productPath ? `/demo/${productPath}` : '/demo/all-products')}
        className="bg-white text-black rounded px-2 mr-5 py-1 text-[12px] font-semibold flex items-center gap-1 w-full cursor-pointer "
      >
        {t('contacts.demo')} <FaCalendarDays className="text-[13px]" />
      </button>
      <button
        onClick={handleDemoClose}
        className="absolute right-1 text-white hover:text-red-300 text-lg font-bold"
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  )}

    {showCallback && !CallbackClosed && (
    <div className="animate-slideInRight  flex items-center bg-[#E42527] text-white py-2 px-2 rounded-l-lg shadow-lg relative  ">
      <button
        // href="/request_callback"
          onClick={() =>  router.push(productName ? `/request_callback/${productPath}` : '/request_callback/all-products')}
        className=" bg-white  text-black rounded px-3 mr-5 py-1 text-[13px] font-semibold flex items-center gap-1 w-full hover:cursor-pointer"
      >       
      {t('ContactTitle')}  <FaWpforms className='text-lg rotate-6'/>
      </button>
  
      <button
        onClick={handleCallbackClose}
        className="absolute right-1 text-white hover:text-red-300 text-lg font-bold"
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  )}


      <div className="group">
        <button onClick={handleClick} className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-2 px-3 rounded-l-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300">
          
          <FaWhatsapp className="relative text-3xl" />
          
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
            Chat with us
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900"></div>
          </div>
        </button>
      </div>
</div>

  );
};

export default NotificationButton;
