import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon, Home, Code, Briefcase, FolderOpen, GraduationCap, Mail } from "lucide-react"
import { cn } from "../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveTab(e.currentTarget.textContent || items[0].name)
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={handleScrollClick}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-out",
                "text-white/70 hover:text-white hover:scale-105",
                isActive && "text-cyan-400",
              )}
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0.05) 50%, transparent 70%)',
                }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(139, 92, 246, 0.15) 100%)',
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                >
                  {/* Enhanced lamp glow effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-t-full">
                    <div className="absolute w-16 h-8 bg-cyan-400/30 rounded-full blur-lg -top-3 -left-3" />
                    <div className="absolute w-12 h-6 bg-purple-500/25 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-4 bg-cyan-400/40 rounded-full blur-sm -top-1 left-1" />
                    <div className="absolute w-6 h-3 bg-purple-500/30 rounded-full blur-sm top-0 left-3" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}

// Default navbar component with navigation items
const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Education", url: "#education", icon: GraduationCap },
    { name: "Contact", url: "#contact", icon: Mail },
  ]

  return <NavBar items={navItems} />
}

export default Navbar
