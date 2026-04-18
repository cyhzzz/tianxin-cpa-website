import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于天信' },
  { to: '/services', label: '专业服务' },
  { to: '/news', label: '行业洞察' },
  { to: '/contact', label: '联系我们' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50" style={{ backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
            <nav className="flex items-center justify-between" style={{ height: '60px' }}>
              <Link to="/" className="flex items-center" style={{ gap: 'var(--spacing-sm)' }}>
                <img src="./assets/logo.svg" alt="天信" style={{ height: '36px', width: '36px' }} />
                <div>
                  <div className="font-semibold" style={{ fontSize: '15px', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>天台天信</div>
                  <div style={{ fontSize: '9px', color: 'var(--muted-foreground)', letterSpacing: '0.14em', fontWeight: 500 }}>TIANXIN CPA · SINCE 2001</div>
                </div>
              </Link>

              <div className="hidden md:flex items-center" style={{ gap: 'var(--spacing-xl)' }}>
                {navLinks.filter(l => l.to !== '/contact').map((link) => (
                  <Link key={link.to} to={link.to} className="relative font-medium cursor-pointer" style={{ fontSize: '14px', color: location.pathname === link.to ? 'var(--brand-navy)' : 'var(--muted-foreground)', paddingBottom: '4px' }}>
                    {link.label}
                    {location.pathname === link.to && <span className="absolute bottom-0 left-0 right-0" style={{ height: '2px', backgroundColor: 'var(--brand-gold)', borderRadius: '1px' }} />}
                  </Link>
                ))}
                <div style={{ position: 'relative' }}>
                  <button onClick={() => setContactOpen(!contactOpen)} className="pill-btn pill-btn-primary cursor-pointer" style={{ padding: '0.4rem 1.25rem', fontSize: '14px' }}>
                    联系我们
                  </button>
                </div>
              </div>

              <button className="md:hidden flex flex-col justify-center items-center cursor-pointer" style={{ width: '36px', height: '36px', gap: '5px', background: 'none', border: 'none' }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                <span style={{ display: 'block', width: '18px', height: '2px', backgroundColor: 'var(--foreground)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                <span style={{ display: 'block', width: '18px', height: '2px', backgroundColor: 'var(--foreground)', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
                <span style={{ display: 'block', width: '18px', height: '2px', backgroundColor: 'var(--foreground)', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
              </button>
            </nav>

            {mobileOpen && (
              <div className="md:hidden" style={{ paddingBottom: 'var(--spacing-lg)' }}>
                <div className="flex flex-col" style={{ gap: 'var(--spacing-sm)' }}>
                  {navLinks.map((link) => (
                    <Link key={link.to} to={link.to} className="font-medium cursor-pointer" style={{ fontSize: '15px', color: location.pathname === link.to ? 'var(--brand-navy)' : 'var(--muted-foreground)', padding: 'var(--spacing-xs) 0' }} onClick={() => setMobileOpen(false)}>{link.label}</Link>
                  ))}
                  <div style={{ marginTop: 'var(--spacing-sm)', padding: 'var(--spacing-md)', backgroundColor: 'var(--brand-ice)', borderRadius: '8px', fontSize: '14px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '8px' }}>联系我们</div>
                    <div style={{ color: 'var(--muted-foreground)' }}>政府网短号：660187</div>
                    <div style={{ color: 'var(--muted-foreground)' }}>手机：139 5850 3261</div>
                    <div style={{ color: 'var(--muted-foreground)' }}>座机：0576-8388 6633</div>
                    <div style={{ color: 'var(--muted-foreground)' }}>邮箱：457897313@qq.com</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

      {/* Contact Dropdown Panel */}
      {contactOpen && (
        <div className="hidden md:block fixed z-[60]" style={{ top: '60px', right: 'max(1rem, calc((100vw - 1200px)/2 + 1rem))', width: '340px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,51,141,0.12)', border: '1px solid var(--border)', padding: 'var(--spacing-xl)' }}>
            <div style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)', fontWeight: 600, marginBottom: 'var(--spacing-lg)' }}>联系我们</div>
            <div className="flex flex-col" style={{ gap: 'var(--spacing-md)' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', letterSpacing: '0.1em', marginBottom: '2px' }}>政府网短号</div>
                <a href="tel:660187" className="font-semibold" style={{ fontSize: '18px', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>660187</a>
              </div>
              <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', letterSpacing: '0.1em', marginBottom: '2px' }}>手机</div>
                <a href="tel:13958503261" className="font-medium" style={{ fontSize: '15px', color: 'var(--brand-navy)' }}>139 5850 3261</a>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', letterSpacing: '0.1em', marginBottom: '2px' }}>固定电话</div>
                <a href="tel:057683886633" className="font-medium" style={{ fontSize: '15px', color: 'var(--brand-navy)' }}>0576-8388 6633</a>
              </div>
              <div style={{ height: '1px', backgroundColor: 'var(--border)' }} />
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', letterSpacing: '0.1em', marginBottom: '2px' }}>电子邮箱</div>
                <a href="mailto:457897313@qq.com" className="font-medium" style={{ fontSize: '15px', color: 'var(--brand-blue)' }}>457897313@qq.com</a>
              </div>
            </div>
            <Link to="/contact" onClick={() => setContactOpen(false)} className="pill-btn pill-btn-primary block text-center" style={{ marginTop: 'var(--spacing-lg)', width: '100%' }}>查看更多</Link>
          </div>
          <div style={{ position: 'fixed', inset: 0, zIndex: -1 }} onClick={() => setContactOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
