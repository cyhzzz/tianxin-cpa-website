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
      {/* Modern white navbar */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <nav className="flex items-center justify-between" style={{ height: '60px' }}>
            <Link to="/" className="flex items-center" style={{ gap: '12px' }}>
              <img src="./assets/logo.svg" alt="天信" style={{ height: '32px', width: '32px' }} />
              <div>
                <div style={{ fontSize: '16px', color: '#161616', fontWeight: 600, letterSpacing: '0.04em' }}>天台天信</div>
                <div style={{ fontSize: '10px', color: '#6b7280', letterSpacing: '0.12em', fontWeight: 400 }}>TIANXIN CPA · SINCE 2001</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
              {navLinks.filter(l => l.to !== '/contact').map((link) => (
                <Link key={link.to} to={link.to} className="relative cursor-pointer" style={{ 
                  fontSize: '15px', 
                  fontWeight: 500, 
                  color: location.pathname === link.to ? '#4589ff' : '#374151', 
                  paddingBottom: '6px', 
                  transition: 'all 0.3s',
                  textDecoration: 'none'
                }}>
                  {link.label}
                  {location.pathname === link.to && <span className="absolute bottom-0 left-0 right-0" style={{ height: '2px', backgroundColor: '#4589ff', borderRadius: '1px' }} />}
                </Link>
              ))}
              <div style={{ position: 'relative' }}>
                <button onClick={() => setContactOpen(!contactOpen)} className="pill-btn pill-btn-primary cursor-pointer" style={{ 
                  padding: '8px 20px', 
                  fontSize: '14px', 
                  height: '40px', 
                  lineHeight: '1.2',
                  backgroundColor: '#4589ff',
                  color: '#ffffff',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 500,
                  transition: 'background-color 0.3s'
                }}>
                  联系我们
                </button>
              </div>
            </div>

            <button className="md:hidden flex flex-col justify-center items-center cursor-pointer" style={{ width: '60px', height: '60px', gap: '5px', background: 'none', border: 'none' }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#374151', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#374151', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#374151', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </nav>

          {mobileOpen && (
            <div className="md:hidden" style={{ paddingBottom: '20px' }}>
              <div className="flex flex-col" style={{ gap: '0' }}>
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="cursor-pointer" style={{ 
                    fontSize: '15px', 
                    fontWeight: 500, 
                    color: location.pathname === link.to ? '#4589ff' : '#374151', 
                    padding: '14px 0', 
                    borderBottom: '1px solid #e5e7eb', 
                    display: 'block',
                    textDecoration: 'none'
                  }} onClick={() => setMobileOpen(false)}>{link.label}</Link>
                ))}
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f9fafb', fontSize: '14px', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 600, color: '#161616', marginBottom: '10px' }}>联系我们</div>
                  <div style={{ color: '#6b7280', lineHeight: 1.8 }}>政府网短号：660187</div>
                  <div style={{ color: '#6b7280', lineHeight: 1.8 }}>手机：139 5850 3261</div>
                  <div style={{ color: '#6b7280', lineHeight: 1.8 }}>座机：0576-8388 6633</div>
                  <div style={{ color: '#6b7280', lineHeight: 1.8 }}>邮箱：457897313@qq.com</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Dropdown Panel */}
      {contactOpen && (
        <div className="hidden md:block fixed z-[60]" style={{ top: '60px', right: 'max(1rem, calc((100vw - 1200px)/2 + 1rem))', width: '320px' }}>
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
