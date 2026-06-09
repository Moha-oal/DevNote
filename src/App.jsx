import { useState } from 'react'
import {
  Globe,
  ShoppingCart,
  Database,
  ShieldCheck,
  MessageCircle,
  Bot,
  Bell,
  Server,
  Zap,
  HeartPulse,
  Send,

  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Check,
  Code2,
  Lock,
  Sparkles,
} from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'WhatsApp', href: '#whatsapp' },
    { label: 'Plans', href: '#plans' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-navy tracking-tight">
            Dev<span className="text-royal">Note</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-navy text-white px-5 py-2 rounded-lg hover:bg-navy-light transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate hover:text-navy transition-colors py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium bg-navy text-white px-5 py-2.5 rounded-lg text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.05)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-ice border border-slate-200 rounded-full px-4 py-1.5 mb-8">
            <Lock className="w-3.5 h-3.5 text-royal" />
            <span className="text-xs font-medium text-slate">
              Secure by Design. Built for Performance.
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
            Bespoke Web Development
            <span className="block mt-2">
              &amp; Secure Digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-cyan">
                Infrastructure
              </span>
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
            We build fast, secure, and custom-tailored web experiences that
            elevate your business. No templates. No shortcuts. Just clean code
            and premium craftsmanship.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-3.5 rounded-xl font-medium hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20"
            >
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-8 py-3.5 rounded-xl font-medium hover:bg-navy hover:text-white transition-all"
            >
              Get a Quote
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 md:gap-12 text-sm text-slate-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-royal" />
              <span>ISO-Grade Security</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Zap className="w-4 h-4 text-royal" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-royal" />
              <span>Custom Built</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: Globe,
    title: 'Corporate & Business Websites',
    description:
      'High-end landing pages and corporate portfolios designed to elevate your brand presence and build trust with stakeholders.',
    tags: ['Landing Pages', 'Portfolios', 'Brand Identity'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platforms',
    description:
      'Seamless, fast, and conversion-optimized digital storefronts with secure payment gateways and intuitive user journeys.',
    tags: ['Online Stores', 'Payment Integration', 'Inventory'],
  },
  {
    icon: Database,
    title: 'Custom Web Applications',
    description:
      'Tailored internal tools, SaaS MVPs, and secure database-driven platforms built to your exact specifications.',
    tags: ['SaaS', 'Dashboards', 'API-Driven'],
  },
  {
    icon: ShieldCheck,
    title: 'Cyber-Secure Design',
    description:
      'Clean code, optimal performance, and robust security testing baked into every project from day one. No afterthoughts.',
    tags: ['Penetration Testing', 'SSL/TLS', 'OWASP'],
  },
]

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-ice">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-royal">
            What We Build
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Services & Website Types
          </h2>
          <p className="mt-4 text-slate text-lg">
            Every project is built from scratch with meticulous attention to
            security, performance, and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-slate-200/60 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-royal/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal/10 transition-colors">
                <s.icon className="w-6 h-6 text-royal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {s.title}
              </h3>
              <p className="text-slate leading-relaxed mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-ice text-slate px-3 py-1 rounded-full border border-slate-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const whatsappFeatures = [
  {
    icon: MessageCircle,
    title: 'API & CRM Automation',
    description:
      'Integrate customer web forms directly with WhatsApp Business API to instantly alert your sales team the moment a lead comes in.',
  },
  {
    icon: Bot,
    title: 'Automated Chatbots & Workflows',
    description:
      'Custom interactive auto-responders that qualify leads, answer FAQs, and engage customers 24/7 without manual intervention.',
  },
  {
    icon: Bell,
    title: 'Notification Systems',
    description:
      'Automated WhatsApp alerts for orders, bookings, and customer updates triggered directly from your website in real time.',
  },
]

function WhatsApp() {
  return (
    <section id="whatsapp" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600">
              WhatsApp Integration
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Advanced WhatsApp Business Automation
            </h2>
            <p className="mt-4 text-slate text-lg leading-relaxed">
              Transform your customer communication with seamless WhatsApp
              Business integrations. Automate responses, capture leads, and
              keep your team informed in real time.
            </p>

            <div className="mt-10 space-y-8">
              {whatsappFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">
                      {f.title}
                    </h3>
                    <p className="text-slate leading-relaxed text-sm">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-cyan/5 rounded-3xl p-8 md:p-12 border border-emerald-100">
              <div className="space-y-4">
                {[
                  {
                    from: 'bot',
                    text: "Hi! Welcome to DevNote. I'm here to help you get started. What are you looking for?",
                  },
                  {
                    from: 'user',
                    text: "I need a custom e-commerce site for my business.",
                  },
                  {
                    from: 'bot',
                    text: "Great choice! I'll connect you with our team right away. A specialist will reach out within 5 minutes.",
                  },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                        msg.from === 'user'
                          ? 'bg-emerald-500 text-white rounded-br-md'
                          : 'bg-white text-navy shadow-sm border border-slate-100 rounded-bl-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-slate-light border border-slate-200">
                  Type a message...
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Plans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-ice">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-royal">
            Post-Launch Support
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Maintenance & Subscription Plans
          </h2>
          <p className="mt-4 text-slate text-lg">
            Your website deserves ongoing care. Choose a plan that keeps your
            digital presence secure, fast, and up to date.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Essential */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-ice rounded-xl flex items-center justify-center">
                <Server className="w-5 h-5 text-royal" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">
                  Essential Care
                </h3>
                <span className="text-xs text-slate">
                  Foundation-level protection
                </span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Ultra-secure cloud hosting',
                'Basic monthly backups',
                'Core security updates & patches',
                'SSL certificate management',
                'Uptime monitoring',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center border-2 border-navy text-navy py-3 rounded-xl font-medium hover:bg-navy hover:text-white transition-all text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Premium */}
          <div className="relative bg-navy rounded-2xl p-8 text-white shadow-2xl shadow-navy/20">
            <div className="absolute -top-3 right-8">
              <span className="bg-gradient-to-r from-royal to-cyan text-white text-xs font-bold px-4 py-1 rounded-full">
                Recommended
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-cyan-light" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Premium Growth</h3>
                <span className="text-xs text-slate-light">
                  Complete peace of mind
                </span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in Essential Care',
                'Regular automated full backups',
                'Advanced malware monitoring',
                'Dedicated priority support hours',
                'Minor content updates included',
                'Monthly performance & security audits',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-cyan-light shrink-0 mt-0.5" />
                  <span className="text-slate-light">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center bg-gradient-to-r from-royal to-cyan text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    websiteType: '',
    overview: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', business: '', websiteType: '', overview: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-royal">
              Let's Talk
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Start Your Project
            </h2>
            <p className="mt-4 text-slate text-lg leading-relaxed">
              Tell us about your vision. We'll get back to you within 24 hours
              with a tailored proposal — no obligations, no pressure.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:hello@devnote.agency"
                className="flex items-center gap-4 text-slate hover:text-navy transition-colors group"
              >
                <div className="w-11 h-11 bg-ice rounded-xl flex items-center justify-center group-hover:bg-royal/10 transition-colors">
                  <Mail className="w-5 h-5 text-royal" />
                </div>
                <span className="text-sm">hello@devnote.agency</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-slate hover:text-navy transition-colors group"
              >
                <div className="w-11 h-11 bg-ice rounded-xl flex items-center justify-center group-hover:bg-royal/10 transition-colors">
                  <Phone className="w-5 h-5 text-royal" />
                </div>
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-4 text-slate">
                <div className="w-11 h-11 bg-ice rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-royal" />
                </div>
                <span className="text-sm">Remote-first, worldwide</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-ice rounded-xl flex items-center justify-center hover:bg-royal/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-royal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-ice border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Business Type
              </label>
              <input
                type="text"
                required
                value={formData.business}
                onChange={(e) =>
                  setFormData({ ...formData, business: e.target.value })
                }
                className="w-full bg-ice border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                placeholder="E-Commerce, Agency, SaaS..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Required Website Type
              </label>
              <select
                required
                value={formData.websiteType}
                onChange={(e) =>
                  setFormData({ ...formData, websiteType: e.target.value })
                }
                className="w-full bg-ice border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all appearance-none"
              >
                <option value="">Select a type...</option>
                <option>Corporate & Business Website</option>
                <option>E-Commerce Platform</option>
                <option>Custom Web Application</option>
                <option>SaaS / Dashboard</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Project Overview
              </label>
              <textarea
                required
                rows={4}
                value={formData.overview}
                onChange={(e) =>
                  setFormData({ ...formData, overview: e.target.value })
                }
                className="w-full bg-ice border border-slate-200 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all resize-none"
                placeholder="Describe your project goals, timeline, and any specific requirements..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy text-white py-3.5 rounded-xl font-medium hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 flex items-center justify-center gap-2 text-sm"
            >
              {submitted ? (
                'Consultation Request Sent!'
              ) : (
                <>
                  Request a Consultation
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              Dev<span className="text-cyan-light">Note</span>
            </span>
          </div>
          <p className="text-xs text-slate-light">
            &copy; {new Date().getFullYear()} DevNote. All rights reserved. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhatsApp />
      <Plans />
      <Contact />
      <Footer />
    </div>
  )
}
