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
      {/* IBM-style dark masthead */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: '#161616', borderBottom: '1px solid #393939' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <nav className="flex items-center justify-between" style={{ height: '48px' }}>
            <Link to="/" className="flex items-center" style={{ gap: '8px' }}>
              <img src="./assets/logo.svg" alt="天信" style={{ height: '28px', width: '28px', filter: 'brightness(0) invert(1)' }} />
              <div>
                <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 600, letterSpacing: '0.04em' }}>天台天信</div>
                <div style={{ fontSize: '9px', color: '#c6c6c6', letterSpacing: '0.12em', fontWeight: 400 }}>TIANXIN CPA · SINCE 2001</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center" style={{ gap: '24px' }}>
              {navLinks.filter(l => l.to !== '/contact').map((link) => (
                <Link key={link.to} to={link.to} className="relative cursor-pointer" style={{ fontSize: '14px', fontWeight: 400, color: location.pathname === link.to ? '#ffffff' : '#c6c6c6', paddingBottom: '4px', transition: 'color 0.2s' }}>
                  {link.label}
                  {location.pathname === link.to && <span className="absolute bottom-0 left-0 right-0" style={{ height: '2px', backgroundColor: '#0f62fe' }} />}
                </Link>
              ))}
              <div style={{ position: 'relative' }}>
                <button onClick={() => setContactOpen(!contactOpen)} className="pill-btn pill-btn-primary cursor-pointer" style={{ padding: '6px 16px', fontSize: '14px', height: '36px', lineHeight: '1.2' }}>
                  联系我们
                </button>
              </div>
            </div>

            <button className="md:hidden flex flex-col justify-center items-center cursor-pointer" style={{ width: '48px', height: '48px', gap: '5px', background: 'none', border: 'none' }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span style={{ display: 'block', width: '18px', height: '2px', backgroundColor: '#ffffff', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: '18px', height: '2px', backgroundColor: '#ffffff', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '18px', height: '2px', backgroundColor: '#ffffff', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </nav>

          {mobileOpen && (
            <div className="md:hidden" style={{ paddingBottom: '16px' }}>
              <div className="flex flex-col" style={{ gap: '0' }}>
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="cursor-pointer" style={{ fontSize: '14px', fontWeight: 400, color: location.pathname === link.to ? '#ffffff' : '#c6c6c6', padding: '12px 0', borderBottom: '1px solid #393939', display: 'block' }} onClick={() => setMobileOpen(false)}>{link.label}</Link>
                ))}
                <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#262626', fontSize: '14px' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>联系我们</div>
                  <div style={{ color: '#c6c6c6', lineHeight: 1.8 }}>政府网短号：660187</div>
                  <div style={{ color: '#c6c6c6', lineHeight: 1.8 }}>手机：139 5850 3261</div>
                  <div style={{ color: '#c6c6c6', lineHeight: 1.8 }}>座机：0576-8388 6633</div>
                  <div style={{ color: '#c6c6c6', lineHeight: 1.8 }}>邮箱：457897313@qq.com</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Dropdown Panel */}
      {contactOpen && (
        <div className="hidden md:block fixed z-[60]" style={{ top: '48px', right: 'max(1rem, calc((100vw - 1200px)/2 + 1rem))', width: '320px' }}>
          <div style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 6px rgba(0,0,0,0.2)', border: '1px solid #e0e0e0', padding: '16px' }}>
            <div style={{ fontSize: '14px', color: '#161616', fontWeight: 600, marginBottom: '12px' }}>联系我们</div>
            <div className="flex flex-col" style={{ gap: '8px' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#525252', letterSpacing: '0.32px', marginBottom: '2px' }}>政府网短号</div>
                <a href="tel:660187" style={{ fontSize: '16px', color: '#161616', fontWeight: 600 }}>660187</a>
              </div>
              <div style={{ height: '1px', backgroundColor: '#e0e0e0' }} />
              <div>
                <div style={{ fontSize: '12px', color: '#525252', letterSpacing: '0.32px', marginBottom: '2px' }}>手机</div>
                <a href="tel:13958503261" style={{ fontSize: '14px', color: '#161616', fontWeight: 400 }}>139 5850 3261</a>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#525252', letterSpacing: '0.32px', marginBottom: '2px' }}>固定电话</div>
                <a href="tel:057683886633" style={{ fontSize: '14px', color: '#161616', fontWeight: 400 }}>0576-8388 6633</a>
              </div>
              <div style={{ height: '1px', backgroundColor: '#e0e0e0' }} />
              <div>
                <div style={{ fontSize: '12px', color: '#525252', letterSpacing: '0.32px', marginBottom: '2px' }}>电子邮箱</div>
                <a href="mailto:457897313@qq.com" style={{ fontSize: '14px', color: '#0f62fe', fontWeight: 400 }}>457897313@qq.com</a>
              </div>
            </div>
            <Link to="/contact" onClick={() => setContactOpen(false)} className="pill-btn pill-btn-primary block text-center" style={{ marginTop: '12px', width: '100%' }}>查看更多</Link>
          </div>
          <div style={{ position: 'fixed', inset: 0, zIndex: -1 }} onClick={() => setContactOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
