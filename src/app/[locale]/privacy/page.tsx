
import Commonbar from "@/components/Commonbar";
import Header from "@/components/Header";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FileText, FileUser, Share2, Shield, User, Cookie, Link as LinkIcon, RefreshCcw, Gavel, Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || '';

export const metadata: Metadata = {
  title: 'Privacy Policy | ACE Software Solutions Pvt. Ltd',
  description: 'Read the Privacy Policy of ACE Software Solutions Pvt Ltd. Learn how we collect, use, protect, and safeguard your personal data across our services.',

  openGraph: {
    title: 'Privacy Policy | ACE Software Solutions Pvt. Ltd',
    description: 'Read the Privacy Policy of ACE Software Solutions Pvt Ltd. Learn how we collect, use, protect, and safeguard your personal data across our services.',
    url: `${domainUrl}/privacy`,
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

const PrivacyPolicy = () => {
  const t = useTranslations("privacyPolicy");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Commonbar />
      <Header />

      <div className="py-16 px-2 md:px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white shadow-xl rounded-3xl p-10 text-center hover:scale-[1.02] transition-transform">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{t("title")}</h1>
            <p className="text-sm font-bold text-gray-800 mb-6">
              {t("effectiveDate")}: <span className="italic">[12/09/2025]</span>
            </p>
            <p className="text-gray-800 md:text-lg text-justify md:text-center leading-relaxed">
              {t("prefix")} <strong>ACE Software Solutions Pvt Ltd</strong>{" "}
              {t("intro")}{" "}
              <Link
                href="https://acesoft.in"
                className="text-[#F7666F] font-medium hover:underline"
              >
                acesoft.in
              </Link>{" "}
              {t("suffix")}
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <FileText size={28} className="text-[#F7666F]" />{" "}
              {t("informationWeCollect.title")}
            </h2>
            <h3 className="mb-4 text-gray-800">{t("informationWeCollect.des")}</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              <li>
                <strong>{t("informationWeCollect.personalInformation.title")}</strong>{" "}
                – {t("informationWeCollect.personalInformation.des")}
              </li>
              <li>
                <strong>{t("informationWeCollect.usageData.title")}</strong> –{" "}
                {t("informationWeCollect.usageData.des")}
              </li>
              <li>
                <strong>{t("informationWeCollect.cookiesAndTracking.title")}</strong>{" "}
                – {t("informationWeCollect.cookiesAndTracking.des")}
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <FileUser size={28} className="text-[#F7666F]" /> {t("howWeUse.title")}
            </h2>
            <h3 className="mb-4 text-gray-800">{t("howWeUse.des")}</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              <li>{t("howWeUse.point1")}</li>
              <li>{t("howWeUse.point2")}</li>
              <li>{t("howWeUse.point3")}</li>
              <li>{t("howWeUse.point4")}</li>
              <li>{t("howWeUse.point5")}</li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <RefreshCcw size={28} className="text-[#F7666F]" />{" "}
              {t("dataRetention.title")}
            </h2>
            <p className="text-gray-800">{t("dataRetention.des")}</p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <Share2 size={28} className="text-[#F7666F]" /> {t("sharing.title")}
            </h2>
            <h3 className="mb-4 text-gray-800">{t("sharing.des")}</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              <li>{t("sharing.point1")}</li>
              <li>{t("sharing.point2")}</li>
              <li>{t("sharing.point3")}</li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <Shield size={28} className="text-[#F7666F]" /> {t("security.title")}
            </h2>
            <p className="text-gray-800">{t("security.des")}</p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <User size={28} className="text-[#F7666F]" /> {t("yourRights.title")}
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              <li>{t("yourRights.point1")}</li>
              <li>{t("yourRights.point2")}</li>
              <li>{t("yourRights.point3")}</li>
            </ul>
            <p className="text-gray-800 mt-3">
              {t("yourRights.unsubscribe")}{" "}
              <a
                href="mailto:info@acesoft.in"
                className="text-[#F7666F] hover:underline"
              >
                info@acesoft.in
              </a>
              .
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <Cookie size={28} className="text-[#F7666F]" /> {t("cookies.title")}
            </h2>
            <p className="text-gray-800">{t("cookies.des")}</p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <LinkIcon size={28} className="text-[#F7666F]" />{" "}
              {t("thirdParty.title")}
            </h2>
            <p className="text-gray-800">{t("thirdParty.des")}</p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <RefreshCcw size={28} className="text-[#F7666F]" /> {t("changes.title")}
            </h2>
            <p className="text-gray-800">{t("changes.des")}</p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <Gavel size={28} className="text-[#F7666F]" /> {t("governingLaw.title")}
            </h2>
            <p className="text-gray-800">{t("governingLaw.des")}</p>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-transform flex flex-col space-y-4">
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
              <Mail size={28} className="text-[#F7666F]" /> {t("contact.title")}
            </h2>
            <div className="text-gray-800 space-y-2">
              <h3 className="font-semibold">ACE Software Solutions Pvt Ltd</h3>
              <p>{t("contact.des")}</p>
              <p className="flex items-center gap-2">
                <span className="flex items-center justify-center -mt-4 rounded-full text-[#F7666F]">
                  <MapPin size={22} />
                </span>
                {t("contact.address")}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} className="text-[#F7666F]" />
                <Link
                  href="mailto:info@acesoft.in"
                  className="font-medium hover:underline"
                >
                  info@acesoft.in
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={20} className="text-[#F7666F]" />
                +91 9840137210
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
