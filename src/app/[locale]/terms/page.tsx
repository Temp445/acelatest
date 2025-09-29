import React from "react";
import { useTranslations } from "next-intl";
import Commonbar from "@/components/Commonbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from "lucide-react";

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL;

export const metadata: Metadata = {
  title: 'Terms & Conditions | ACE Software Solutions Pvt. Ltd',
  description: 'View the official Terms & Conditions of ACE Software Solutions Pvt Ltd. Understand website usage, privacy policy, intellectual property, and user responsibilities.',

  openGraph: {
    title: 'Terms & Conditions | ACE Software Solutions Pvt. Ltd',
    description: 'View the official Terms & Conditions of ACE Software Solutions Pvt Ltd. Understand website usage, privacy policy, intellectual property, and user responsibilities.',
    url: `${domainUrl}/terms`,
    siteName: 'ACE Software Solutions Pvt. Ltd',
    images: [
      {
        url: `${domainUrl}/og-images/AceLogo.png`,
        width: 1200,
        height: 630,
        alt: 'ACE Software Solutions Pvt. Ltd',
      },
    ],
    type: 'website',
  },
};

const TermsConditions = () => {
  const t = useTranslations("terms")
  return (
    <div>
      <Commonbar />
      <Header />

      <div className="bg-gray-50 min-h-screen py-16 px-2 md:px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 lg:p-14">
          <div className="text-center mb-12">

            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {t("title")}
            </h1>
            <p className="text-gray-700 text-base">
              {t("effectiveDate")}: <span className="italic">[12/09/2025]</span>
            </p>
          </div>

          <p className="md:text-lg text-gray-700 leading-relaxed mb-10">
            {t("prefix")} <span className="font-semibold">acesoft.in</span>, {t("operated")}{" "}
            <span className="font-semibold text-gray-900">
              ACE Software Solutions Pvt Ltd
            </span>{" "}
            {t("intro")}
          </p>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("useof.title")}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 md:text-lg leading-relaxed">
              <li>{t("useof.point1")} </li>
              <li>{t("useof.point2")} </li>
              <li>{t("useof.point3")} </li>

            </ul>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className=" text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("intellectualProperty.title")}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 md:text-lg leading-relaxed">
              <li>{t("intellectualProperty.point1")} </li>
              <li>{t("intellectualProperty.point2")} </li>
            </ul>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("user.title")}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 md:text-lg leading-relaxed">
              <li>{t("user.point1")}</li>
              <li>{t("user.point2")}</li>
            </ul>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("thirdParty.title")}
            </h2>
            <p className=" text-gray-700 md:text-lg leading-relaxed">
              {t("thirdParty.des")}
            </p>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("limitation.title")}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 md:text-lg leading-relaxed">
              <li>{t("limitation.point1")}</li>
              <li>{t("limitation.point2")}</li>
            </ul>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("warrantiesDisclaimer.title")}
            </h2>
            <p className="text-gray-700 md:text-lg leading-relaxed">
              {t("warrantiesDisclaimer.des")}
            </p>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("privacy.title")}
            </h2>
            <p className="text-gray-700 md:text-lg leading-relaxed">
              {t("privacy.des")}
            </p>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("changesToTerms.title")}
            </h2>
            <p className="text-gray-700 md:text-lg leading-relaxed">
              {t("changesToTerms.des")}
            </p>
          </div>

          <div className="mb-10 pb-6 border-b">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("governingLaw.title")}
            </h2>
            <p className="text-gray-700 md:text-lg leading-relaxed">
              {t("governingLaw.des")}
            </p>
          </div>

          <div className="mt-14">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              {t("contact.title")}
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border space-y-2 md:text-lg text-gray-700">
              <p className="font-semibold text-gray-900">
                ACE Software Solutions Pvt Ltd
              </p>
              <p>
                {t("contact.des")}
              </p>
              <p className="flex gap-5">  <span><MapPin /></span>  {t("contact.address")}</p>
              <p className="flex gap-5">
                <span><Mail /> </span>
                <a
                  href="mailto:info@acesoft.in"
                  className="text-[#F7666F] hover:underline"
                >
                  info@acesoft.in
                </a>
              </p>
              <p className="flex gap-5"> <span> <Phone /></span> +91 9840137210</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
