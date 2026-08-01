"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import { profile } from "@/data/profile";

const easeOut = [0.22, 1, 0.36, 1] as const;

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail className="w-3.5 h-3.5" strokeWidth={1.75} />,
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.phone.replace(/[\s+]/g, "")}`,
    external: true,
    icon: <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />,
  },
  {
    label: "LinkedIn",
    value: "Voir le profil →",
    href: profile.linkedin,
    external: true,
    icon: <LinkedinIcon className="w-3.5 h-3.5" />,
  },
  {
    label: "GitHub",
    value: "Voir le profil →",
    href: profile.github,
    external: true,
    icon: <GithubIcon className="w-3.5 h-3.5" />,
  },
];

const steps = [
  {
    num: "01",
    title: "Échange initial",
    desc: "On discute de votre besoin, du contexte et des contraintes — sans engagement, sous 24h ouvrées.",
  },
  {
    num: "02",
    title: "Cadrage & devis",
    desc: "Je propose une estimation claire du périmètre, du délai et du coût avant de démarrer quoi que ce soit.",
  },
  {
    num: "03",
    title: "Développement",
    desc: "Livraisons régulières, points d'avancement, code maintenable — vous savez toujours où en est le projet.",
  },
];

export default function ContactPage() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 py-20">
      <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.p
        className="font-mono text-accent text-sm mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        03
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-6xl font-semibold max-w-2xl leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
      >
        Discutons de votre prochain projet.
      </motion.h1>
      <motion.p
        className="mt-6 max-w-xl text-muted text-lg leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: easeOut }}
      >
        Disponible pour des missions freelance en remote. Je réponds sous 24h
        ouvrées, et le premier échange pour cadrer votre besoin est sans
        engagement.
      </motion.p>

      <motion.div
        className="mt-16 grid sm:grid-cols-2 gap-px bg-border max-w-3xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group bg-background p-8 hover:bg-surface transition-colors"
          >
            <p className="flex items-center gap-2 text-xs text-muted mb-2">
              {link.icon}
              {link.label}
            </p>
            <p className="text-lg group-hover:text-accent transition-colors break-all">
              {link.value}
            </p>
          </a>
        ))}
        <div className="bg-background p-8">
          <p className="flex items-center gap-2 text-xs text-muted mb-2">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.75} />
            Localisation
          </p>
          <p className="text-lg">{profile.location}</p>
        </div>
      </motion.div>
      </div>

      <div className="mt-24 pt-16 border-t border-border">
        <p className="font-mono text-accent text-sm mb-10">
          Comment on travaille ensemble
        </p>
        <div className="grid sm:grid-cols-3 gap-10 max-w-3xl">
          {steps.map((step) => (
            <div key={step.num}>
              <p className="index-num text-xs text-muted mb-3">{step.num}</p>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
