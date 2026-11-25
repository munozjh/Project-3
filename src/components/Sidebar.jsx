import React from "react";
import { ShieldCheck, User, Code2, Briefcase, Mail, Menu, X } from "lucide-react";

function Sidebar({
  profile,
  activeSection,
  isOpen,
  onToggleMenu,
  onCloseMenu,
  onSelectSection,
}) {
  const navItems = [
    { id: "projects", label: "PORTFOLIO", icon: Code2 },
    { id: "about", label: "ABOUT", icon: User },
    { id: "experience", label: "EXPERIENCE", icon: Briefcase },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={onToggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onCloseMenu}
        />
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="cyber-avatar">
            <ShieldCheck size={44} />
          </div>
          <h2 className="sidebar-name">{profile.name}</h2>
          <p className="sidebar-role">{profile.role || profile.title}</p>
          <span className="sidebar-location">{profile.location}</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => onSelectSection(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-socials">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;