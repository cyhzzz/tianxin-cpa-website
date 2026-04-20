import { Link } from 'react-router-dom';
import { FadeIn, Stagger } from '@/components/MotionPrimitives';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--brand-navy)', color: '#a8a8a8' }}>
      <div className="container" style={{ maxWidth: '1200px', paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-2xl)' }}>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--spacing-2xl)' }}>
            <div className="md:col-span-1">
              <div className="flex items-center" style={{ gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
                <img src="./assets/logo.svg" alt="天信" style={{ height: '32px', width: '32px' }} />
                <div>
                  <div className="font-semibold" style={{ fontSize: 'var(--font-size-body)', color: '#ffffff', fontFamily: 'var(--font-serif)' }}>天台天信</div>
                  <div style={{ fontSize: '10px', color: '#8d8d8d', letterSpacing: '0.1em', fontWeight: 500 }}>TIANXIN CPA</div>
                </div>
              </div>
              <p style={{ fontSize: 'var(--font-size-label)', color: '#8d8d8d', lineHeight: '1.8', fontFamily: 'var(--font-serif)' }}>
                前身成立于1999年，2001年正式注册，深耕天台27年，专注审计、评估、税务等专业服务。
              </p>
            </div>
            <div>
              <h4 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: '#ffffff', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>专业服务</h4>
              <Stagger stagger={0.05} className="flex flex-col" style={{ gap: 'var(--spacing-sm)' }}>
                {['审计验资', '资产评估', '税务服务', '代理记账', '财务咨询', '工程造价'].map((s) => (
                  <Link key={s} to="/services" className="cursor-pointer" style={{ fontSize: 'var(--font-size-label)', color: '#8d8d8d' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#a8a8a8'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#8d8d8d'; }}>
                    {s}
                  </Link>
                ))}
              </Stagger>
            </div>
            <div>
              <h4 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: '#ffffff', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>快速链接</h4>
              <Stagger stagger={0.05} className="flex flex-col" style={{ gap: 'var(--spacing-sm)' }}>
                {[{ to: '/about', label: '关于天信' }, { to: '/services', label: '专业服务' }, { to: '/news', label: '行业洞察' }, { to: '/contact', label: '联系我们' }].map((l) => (
                  <Link key={l.to} to={l.to} className="cursor-pointer" style={{ fontSize: 'var(--font-size-label)', color: '#8d8d8d' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#a8a8a8'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#8d8d8d'; }}>
                    {l.label}
                  </Link>
                ))}
              </Stagger>
            </div>
            <div>
              <h4 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: '#ffffff', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}>联系方式</h4>
              <div className="flex flex-col" style={{ gap: 'var(--spacing-md)', fontSize: 'var(--font-size-label)', color: '#8d8d8d' }}>
                <div>政府网短号：660187</div>
                <div>手机：139 5850 3261</div>
                <div>座机：0576-8388 6633</div>
                <div>邮箱：457897313@qq.com</div>
                <div>浙江省天台县赤城街道赤城大厦5楼</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between" style={{ marginTop: 'var(--spacing-3xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid rgba(255,255,255,0.06)', gap: 'var(--spacing-sm)' }}>
            <p style={{ fontSize: 'var(--font-size-small)', color: '#6f6f6f' }}>© 2001—2026 天台天信会计师事务所有限公司</p>
            <p style={{ fontSize: 'var(--font-size-small)', color: '#6f6f6f', letterSpacing: '0.1em' }}>TIANXIN CERTIFIED PUBLIC ACCOUNTANTS</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
