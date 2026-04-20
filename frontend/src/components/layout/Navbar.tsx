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
      {/* 优化后的导航栏 */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e0e0e0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <nav className="flex items-center justify-between" style={{ height: '60px' }}>
            <Link to="/" className="flex items-center" style={{ gap: '12px' }}>
              <img src="./assets/logo.svg" alt="天信" style={{ height: '32px', width: '32px' }} />
              <div>
                <div style={{ fontSize: '16px', color: 'var(--brand-navy)', fontWeight: 600, letterSpacing: '0.04em' }}>天台天信</div>
                <div style={{ fontSize: '10px', color: 'var(--muted-foreground)', letterSpacing: '0.12em', fontWeight: 400 }}>TIANXIN CPA · SINCE 2001</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center" style={{ gap: '32px' }}>
              {navLinks.filter(l => l.to !== '/contact').map((link) => (
                <Link key={link.to} to={link.to} className="relative cursor-pointer" style={{ 
                  fontSize: '15px', 
                  fontWeight: 500, 
                  color: location.pathname === link.to ? 'var(--brand-navy)' : 'var(--muted-foreground)', 
                  paddingBottom: '8px', 
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {link.label}
                  {location.pathname === link.to && (
                    <span className="absolute bottom-0 left-0 right-0" style={{ 
                      height: '3px', 
                      backgroundColor: 'var(--brand-gold)',
                      transform: 'scaleX(1)',
                      transition: 'transform 0.3s ease'
                    }} />
                  )}
                  <span className="absolute bottom-0 left-0 right-0" style={{ 
                    height: '3px', 
                    backgroundColor: 'var(--brand-gold)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease'
                  }} />
                </Link>
              ))}
              <div style={{ position: 'relative' }}>
                <button 
                  onClick={() => setContactOpen(!contactOpen)}
                  className="cursor-pointer" 
                  style={{ 
                    padding: '8px 20px', 
                    fontSize: '14px', 
                    height: '40px', 
                    lineHeight: '1.2',
                    backgroundColor: 'var(--brand-navy)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 500,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--brand-blue)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--brand-navy)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  联系我们
                </button>
              </div>
            </div>

            <button 
              className="md:hidden flex flex-col justify-center items-center cursor-pointer" 
              style={{ 
                width: '60px', 
                height: '60px', 
                gap: '6px', 
                background: 'none', 
                border: 'none'
              }} 
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label="Menu"
            >
              <span style={{ 
                display: 'block', 
                width: '20px', 
                height: '2px', 
                backgroundColor: 'var(--brand-navy)', 
                transition: 'all 0.3s', 
                transform: mobileOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }} />
              <span style={{ 
                display: 'block', 
                width: '20px', 
                height: '2px', 
                backgroundColor: 'var(--brand-navy)', 
                transition: 'all 0.3s', 
                opacity: mobileOpen ? 0 : 1
              }} />
              <span style={{ 
                display: 'block', 
                width: '20px', 
                height: '2px', 
                backgroundColor: 'var(--brand-navy)', 
                transition: 'all 0.3s', 
                transform: mobileOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }} />
            </button>
          </nav>

          {mobileOpen && (
            <div className="md:hidden" style={{ paddingBottom: '20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f0' }}>
              <div className="flex flex-col" style={{ gap: '0' }}>
                {navLinks.map((link) => (
                  <Link 
                    key={link.to} 
                    to={link.to} 
                    className="cursor-pointer" 
                    style={{ 
                      fontSize: '15px', 
                      fontWeight: 500, 
                      color: location.pathname === link.to ? 'var(--brand-navy)' : 'var(--muted-foreground)', 
                      padding: '16px 0', 
                      borderBottom: '1px solid #f0f0f0', 
                      display: 'block',
                      transition: 'color 0.3s ease'
                    }} 
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: 'var(--brand-ice)', fontSize: '14px', borderRadius: '8px', margin: '0 16px' }}>
                  <div style={{ fontWeight: 600, color: 'var(--brand-navy)', marginBottom: '12px' }}>联系我们</div>
                  <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '8px' }}>政府网短号：660187</div>
                  <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '8px' }}>手机：139 5850 3261</div>
                  <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '8px' }}>座机：0576-8388 6633</div>
                  <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.8 }}>邮箱：457897313@qq.com</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 优化后的联系我们下拉菜单 */}
      {contactOpen && (
        <div className="hidden md:block fixed z-[60]" style={{ top: '70px', right: 'max(1rem, calc((100vw - 1200px)/2 + 1rem))', width: '340px' }}>
          <div style={{ 
            backgroundColor: '#ffffff', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)', 
            border: '1px solid #e0e0e0', 
            padding: '20px',
            borderRadius: '12px',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ fontSize: '16px', color: 'var(--brand-navy)', fontWeight: 600, marginBottom: '16px' }}>联系我们</div>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.32px', marginBottom: '4px' }}>政府网短号</div>
                <a 
                  href="tel:660187" 
                  style={{ 
                    fontSize: '16px', 
                    color: 'var(--brand-navy)', 
                    fontWeight: 600,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-navy)'}
                >
                  660187
                </a>
              </div>
              <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.32px', marginBottom: '4px' }}>手机</div>
                <a 
                  href="tel:13958503261" 
                  style={{ 
                    fontSize: '14px', 
                    color: 'var(--brand-navy)', 
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-navy)'}
                >
                  139 5850 3261
                </a>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.32px', marginBottom: '4px' }}>固定电话</div>
                <a 
                  href="tel:057683886633" 
                  style={{ 
                    fontSize: '14px', 
                    color: 'var(--brand-navy)', 
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-navy)'}
                >
                  0576-8388 6633
                </a>
              </div>
              <div style={{ height: '1px', backgroundColor: '#f0f0f0' }} />
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.32px', marginBottom: '4px' }}>电子邮箱</div>
                <a 
                  href="mailto:457897313@qq.com" 
                  style={{ 
                    fontSize: '14px', 
                    color: 'var(--brand-blue)', 
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--brand-blue)'}
                >
                  457897313@qq.com
                </a>
              </div>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setContactOpen(false)} 
              className="block text-center" 
              style={{ 
                marginTop: '16px', 
                width: '100%',
                padding: '10px 0',
                backgroundColor: 'var(--brand-navy)',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-blue)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-navy)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              查看更多
            </Link>
          </div>
          <div style={{ position: 'fixed', inset: 0, zIndex: -1 }} onClick={() => setContactOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
