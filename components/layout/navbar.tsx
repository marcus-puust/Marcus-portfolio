"use client";

import { motion } from "framer-motion";

type SectionId = "home" | "about" | "projects";

const items: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

const topText = {
  rest: { y: 0 },
  hover: { y: "-100%" },
};

const bottomText = {
  rest: { y: "100%" },
  hover: { y: 0 },
};

export default function PillNav() {
  const onClick = (id: SectionId) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-7 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-5 rounded-full border border-black/10 bg-white/70 backdrop-blur-md px-5 py-3 shadow-sm">
        {/* Icon */}
        <div className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Links */}
        <div className="flex items-center gap-10 px-2">
          {items.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={onClick(item.id)}
              initial="rest"
              animate="rest"
              whileHover="hover"
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="group relative text-base text-black/70 hover:text-blue-600"
            >
              <span className="relative block h-6 overflow-hidden">
                {/* Top Text */}
                <motion.span variants={topText} className="block font-light">
                  {item.label}
                </motion.span>

                {/* Bottom Text */}
                <motion.span
                  variants={bottomText}
                  className="absolute left-0 top-0 block font-light text-blue-600"
                >
                  {item.label}
                </motion.span>
              </span>
            </motion.a>
          ))}
        </div>
      </nav>
    </header>
  );
}
