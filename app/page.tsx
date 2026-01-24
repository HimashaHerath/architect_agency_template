"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  brandName,
  contactDetails,
  marqueeItems,
  navLinks,
  projects,
  services,
  socialLinks,
  stats,
} from "@/data/site";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState(0);
  const selectedProject = projects[activeProject];
  const distance = prefersReducedMotion ? 0 : 24;
  const blur = prefersReducedMotion ? "blur(0px)" : "blur(6px)";
  const ease = [0.22, 1, 0.36, 1];
  const viewport = { once: true, amount: 0.3 };
  const hoverLift = prefersReducedMotion ? {} : { y: -6 };
  const imageHover = prefersReducedMotion ? {} : { scale: 1.02 };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: distance, filter: blur },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, y: distance, scale: prefersReducedMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease,
      },
    },
  };

  return (
    <div className="page-shell">
      <div className="relative z-10">
        <motion.header
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div
            className="font-display text-lg uppercase tracking-[0.2em]"
            variants={item}
          >
            {brandName}
          </motion.div>
          <motion.nav
            className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.2em] text-muted-foreground"
            variants={item}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
          <motion.div variants={item}>
            <Button className="rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-foreground shadow-lg shadow-lime-400/30 hover:bg-[color:var(--accent)]/90">
              Start a Project
            </Button>
          </motion.div>
        </motion.header>

        <main>
          <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={item}>
                <Badge className="bg-[color:var(--accent)] text-foreground">
                  Architect agency
                </Badge>
              </motion.div>
              <motion.h1
                className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
                variants={item}
              >
                Spaces that feel quiet, bold, and inevitable.
              </motion.h1>
              <motion.p className="max-w-xl text-lg text-muted-foreground" variants={item}>
                We are a design-led studio shaping architecture, interiors, and
                cultural spaces with a focus on light, material honesty, and
                long-term adaptability.
              </motion.p>
              <motion.div className="flex flex-wrap items-center gap-4" variants={item}>
                <Button className="rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-lg">
                  Explore Work
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-foreground/20 px-6 text-sm font-semibold text-foreground"
                >
                  View Services
                </Button>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.2em] text-muted-foreground"
                variants={item}
              >
                <div>
                  <p className="text-[0.65rem]">Offices</p>
                  <p className="text-foreground">Melbourne + Oslo</p>
                </div>
                <div>
                  <p className="text-[0.65rem]">Availability</p>
                  <p className="text-foreground">New briefs Q3 2024</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid gap-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(15,12,10,0.25)]"
                variants={imageItem}
                whileHover={imageHover}
                transition={{ type: "spring", stiffness: 160, damping: 20 }}
              >
                <Image
                  src="/images/hero-collage.png"
                  alt="Architectural collage preview"
                  width={640}
                  height={520}
                  className="h-[320px] w-full object-cover"
                  priority
                />
                <Badge className="absolute left-5 top-5 bg-[color:var(--accent)] text-foreground">
                  Featured concept
                </Badge>
              </motion.div>
              <motion.div
                variants={item}
                whileHover={hoverLift}
                transition={{ type: "spring", stiffness: 160, damping: 20 }}
              >
                <Card className="border border-black/10 bg-[#0f0e0c] text-white shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-white/60">
                      <span>Project 01</span>
                      <span>2024</span>
                    </div>
                    <CardTitle className="font-display text-2xl uppercase tracking-tight text-white">
                      Harborline Pavilion
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Adaptive reuse for a waterfront arts hub with a layered glass
                      facade.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-between border-t border-white/10 text-xs uppercase tracking-[0.2em] text-white/60">
                    <span>Public + Cultural</span>
                    <span>2,800 sqm</span>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          <section className="border-y border-black/10 bg-[color:var(--accent)] py-4 overflow-hidden">
            <div className="marquee-track text-xs font-semibold text-foreground">
              {marqueeItems.concat(marqueeItems).map((itemText, index) => (
                <span key={`${itemText}-${index}`}>{itemText}</span>
              ))}
            </div>
          </section>

          <motion.section
            id="about"
            className="relative bg-[#0f0e0c] py-20 text-[#fdfbf7]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={container}
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div className="space-y-6" variants={container}>
                <motion.div variants={item}>
                  <Badge className="bg-white/10 text-white">About us</Badge>
                </motion.div>
                <motion.h2
                  className="font-display text-3xl uppercase tracking-tight sm:text-4xl"
                  variants={item}
                >
                  Design-led architecture with a precise, human focus.
                </motion.h2>
                <motion.p className="text-lg text-white/70" variants={item}>
                  Linea Atelier blends spatial research, sustainable engineering,
                  and custom material palettes to craft places that feel
                  effortless. We collaborate with artists, developers, and
                  cultural institutions to shape a shared vision.
                </motion.p>
                <motion.div variants={item}>
                  <Button className="rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-foreground">
                    Contact Studio
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div className="space-y-4" variants={container}>
                <motion.div variants={imageItem}>
                  <Image
                    src="/images/studio-mood.png"
                    alt="Studio moodboard with architectural imagery"
                    width={560}
                    height={620}
                    className="rounded-[28px] border border-white/10 object-cover"
                  />
                </motion.div>
                <motion.p
                  className="text-sm uppercase tracking-[0.2em] text-white/60"
                  variants={item}
                >
                  Material studies and spatial narrative boards.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="work"
            className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={container}
          >
            <motion.div className="space-y-6" variants={container}>
              <motion.div variants={item}>
                <Badge className="bg-foreground text-background">Selected Work</Badge>
              </motion.div>
              <motion.h2
                className="font-display text-3xl uppercase tracking-tight sm:text-4xl"
                variants={item}
              >
                From early concept to final detail.
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground" variants={item}>
                Each project is treated as a dialogue between site, climate, and
                story. Our teams prototype quickly, then slow down for the
                moments that matter.
              </motion.p>
              <motion.div
                className="space-y-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
                variants={item}
              >
                {projects.map((project, index) => {
                  const isActive = index === activeProject;

                  return (
                    <motion.button
                      key={project.title}
                      type="button"
                      onClick={() => setActiveProject(index)}
                      className={`flex items-center gap-3 text-left transition ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                      whileHover={prefersReducedMotion ? {} : { x: 6 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      aria-pressed={isActive}
                    >
                      <span>[{String(index + 1).padStart(2, "0")}]</span>
                      <span>{project.title}</span>
                    </motion.button>
                  );
                })}
              </motion.div>
              <motion.div
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
                variants={item}
              >
                <p className="text-foreground">{selectedProject.title}</p>
                <p>{selectedProject.location}</p>
              </motion.div>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.title}
                className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(15,12,10,0.2)]"
                variants={imageItem}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                transition={{ duration: 0.5, ease }}
                whileHover={imageHover}
              >
                <Badge className="absolute left-5 top-5 bg-[color:var(--accent)] text-foreground">
                  [{String(activeProject + 1).padStart(2, "0")}]
                </Badge>
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project preview`}
                  width={680}
                  height={520}
                  className="h-[420px] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.section>

          <motion.section
            id="services"
            className="bg-gradient-to-br from-[#0b0a09] via-[#11100e] to-[#15130f] py-20 text-[#fdfbf7]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={container}
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <motion.div className="space-y-6" variants={container}>
                <motion.div variants={item}>
                  <Badge className="bg-white/10 text-white">Services</Badge>
                </motion.div>
                <motion.h2
                  className="font-display text-3xl uppercase tracking-tight sm:text-4xl"
                  variants={item}
                >
                  Flexible teams, tailored scopes.
                </motion.h2>
                <motion.p className="text-lg text-white/70" variants={item}>
                  From single-family homes to cultural institutions, we build
                  agile teams around each commission, with expertise that spans
                  feasibility, design, and delivery.
                </motion.p>
                <div className="space-y-4">
                  {services.map((service) => (
                    <motion.div
                      key={service.title}
                      variants={item}
                      whileHover={hoverLift}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                    >
                      <Card className="border border-white/10 bg-white/5 text-white">
                        <CardHeader className="space-y-1">
                          <CardTitle className="font-display text-lg uppercase tracking-tight text-white">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-white/60">
                            {service.detail}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div variants={item}>
                  <Button className="rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-foreground">
                    Start a Briefing
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div className="space-y-6" variants={container}>
                <motion.div variants={imageItem}>
                  <div className="relative">
                    <Image
                      src="/images/project-grid.png"
                      alt="Monochrome architecture collage"
                      width={560}
                      height={420}
                      className="rounded-[28px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
                    />
                    <Image
                      src="/images/services-mood.png"
                      alt="Design service moodboard"
                      width={320}
                      height={240}
                      className="absolute -bottom-10 right-6 w-[62%] rounded-[22px] border border-white/20 object-cover shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                    />
                  </div>
                </motion.div>
                <motion.p
                  className="text-sm uppercase tracking-[0.2em] text-white/60"
                  variants={item}
                >
                  We turn concepts into spaces that speak, refined and built to
                  last.
                </motion.p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="studio"
            className="mx-auto max-w-6xl px-6 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={container}
          >
            <motion.div className="space-y-4" variants={container}>
              <motion.div variants={item}>
                <Badge className="bg-foreground text-background">Studio</Badge>
              </motion.div>
              <motion.h2
                className="font-display text-3xl uppercase tracking-tight sm:text-4xl"
                variants={item}
              >
                Measured impact, crafted with intent.
              </motion.h2>
            </motion.div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={item}
                  whileHover={hoverLift}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                >
                  <Card className="border border-black/10 bg-white/90 shadow-[0_20px_40px_rgba(15,12,10,0.12)]">
                    <CardHeader className="space-y-3">
                      <CardTitle className="font-display text-3xl uppercase tracking-tight text-foreground">
                        {stat.value}
                      </CardTitle>
                      <CardDescription className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {stat.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      {stat.detail}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            className="bg-[#efe9df] py-20"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={container}
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <motion.div className="space-y-6" variants={container}>
                <motion.div variants={item}>
                  <Badge className="bg-foreground text-background">Start a project</Badge>
                </motion.div>
                <motion.h2
                  className="font-display text-3xl uppercase tracking-tight sm:text-4xl"
                  variants={item}
                >
                  Tell us about the site, timeline, and ambitions.
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground" variants={item}>
                  Share your brief and we will respond within two business days
                  with next steps and a tailored team.
                </motion.p>
                <motion.div
                  className="grid gap-4 text-sm uppercase tracking-[0.2em] text-muted-foreground"
                  variants={item}
                >
                  {contactDetails.map((detail) => (
                    <div key={detail.label}>
                      <p className="text-foreground">{detail.label}</p>
                      <p>{detail.value}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                variants={item}
                whileHover={hoverLift}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              >
                <Card className="border border-black/10 bg-white shadow-[0_24px_50px_rgba(15,12,10,0.15)]">
                  <CardHeader>
                    <CardTitle className="font-display text-xl uppercase tracking-tight text-foreground">
                      Project inquiry
                    </CardTitle>
                    <CardDescription>
                      Let us know the scale and goals of your project.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Full name
                      </label>
                      <Input placeholder="Alex Kim" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Email
                      </label>
                      <Input type="email" placeholder="alex@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Project type
                      </label>
                      <Input placeholder="Cultural center, mixed-use, residential" />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Project details
                      </label>
                      <Textarea placeholder="Tell us about the site, size, and goals." />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full bg-foreground text-background">
                      Send Request
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <motion.footer
          className="bg-[#0f0e0c] py-12 text-[#fdfbf7]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
            <motion.div className="space-y-4" variants={item}>
              <p className="font-display text-lg uppercase tracking-[0.2em]">
                {brandName}
              </p>
              <p className="text-sm text-white/70">
                Architecture and interior design studio shaping timeless spaces.
              </p>
            </motion.div>
            <motion.div
              className="space-y-2 text-sm uppercase tracking-[0.2em] text-white/60"
              variants={item}
            >
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block hover:text-white">
                  {link.label}
                </a>
              ))}
            </motion.div>
            <motion.div
              className="space-y-2 text-sm uppercase tracking-[0.2em] text-white/60"
              variants={item}
            >
              {socialLinks.map((social) => (
                <span key={social}>{social}</span>
              ))}
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
