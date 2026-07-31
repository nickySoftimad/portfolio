"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
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
];

export default function ContactPage() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 py-20 min-h-[80vh] flex flex-col justify-center">
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
  );
}
