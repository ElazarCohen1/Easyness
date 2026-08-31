"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(169,140,88,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-[#a98c58]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a98c58]">
              {t("Eyebrow")}
            </span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-[#a98c58]" />
          </div>

          <h1 className="bg-linear-to-b from-[#a98c58] via-[#8a7345] to-[#6f5b37] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {t("Title")}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-500">
            {t("Subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="rounded-3xl border border-[#a98c58]/20 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(169,140,88,0.15)] sm:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-stone-500">
                      {t("Form.FirstNameLabel")}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-stone-900 outline-none transition focus:border-[#a98c58]/50 focus:ring-2 focus:ring-[#a98c58]/20"
                      placeholder={t("Form.FirstNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-stone-500">
                      {t("Form.LastNameLabel")}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-stone-900 outline-none transition focus:border-[#a98c58]/50 focus:ring-2 focus:ring-[#a98c58]/20"
                      placeholder={t("Form.LastNamePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-stone-500">
                    {t("Form.EmailLabel")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-stone-900 outline-none transition focus:border-[#a98c58]/50 focus:ring-2 focus:ring-[#a98c58]/20"
                    placeholder={t("Form.EmailPlaceholder")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-stone-500">
                    {t("Form.MessageLabel")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-stone-900 outline-none transition focus:border-[#a98c58]/50 focus:ring-2 focus:ring-[#a98c58]/20"
                    placeholder={t("Form.MessagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl border border-[#a98c58]/50 bg-linear-to-b from-[#c9b48a] to-[#a98c58] py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-105"
                >
                  {t("Form.Submit")}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="flex h-full flex-col justify-between rounded-3xl border border-[#a98c58]/20 bg-stone-50/60 p-8">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-white">
                    <Mail size={16} className="text-[#a98c58]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      {t("Info.EmailLabel")}
                    </p>
                    <a
                      href={`mailto:${t("Info.Email")}`}
                      className="mt-1 block text-sm text-stone-700 transition hover:text-[#a98c58]"
                    >
                      {t("Info.Email")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-white">
                    <Phone size={16} className="text-[#a98c58]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      {t("Info.PhoneLabel")}
                    </p>
                    <a
                      href={`tel:${t("Info.Phone").replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-stone-700 transition hover:text-[#a98c58]"
                    >
                      {t("Info.Phone")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-white">
                    <Clock size={16} className="text-[#a98c58]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      {t("Info.ResponseTimeLabel")}
                    </p>
                    <p className="mt-1 text-sm text-stone-700">{t("Info.ResponseTime")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#a98c58]/15 pt-6">
                <p className="text-sm leading-relaxed text-stone-500">{t("Info.Note")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}