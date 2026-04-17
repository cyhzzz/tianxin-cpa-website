import { useState } from 'react';
import { FadeIn, Stagger, HoverLift, fadeUp } from '@/components/MotionPrimitives';

const BAIDU_MAP_URL = 'https://api.map.baidu.com/marker?location=29.1425,121.008&title=天台天信会计师事务所&content=浙江省天台县赤城街道赤城大厦5楼&output=html';

const serviceAreas = ['天台县', '临海市', '三门县', '仙居县', '椒江区', '黄岩区'];

const contactItems = [
  { icon: '📞', label: '政府网短号', value: '660187', href: 'tel:660187' },
  { icon: '📱', label: '手机', value: '139 5850 3261', href: 'tel:13958503261' },
  { icon: '☎️', label: '固定电话', value: '0576-8388 6633', href: 'tel:057683886633' },
  { icon: '✉️', label: '电子邮箱', value: '457897313@qq.com', href: 'mailto:457897313@qq.com' },
];

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ padding: '80px 0 60px' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(./assets/team_meeting.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(0,35,102,0.92) 0%, rgba(0,20,60,0.80) 100%)',
        }} />
        <div className="container relative" style={{ maxWidth: '1200px' }}>
          <FadeIn variants={fadeUp} style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
              CONTACT US
            </div>
            <h1 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, var(--font-size-headline))', color: 'oklch(0.98 0.005 250)', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
              期待与您合作
            </h1>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'oklch(0.70 0.01 250)', marginTop: 'var(--spacing-md)', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>
              一通电话，开启专业服务之旅
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--spacing-3xl)' }}>

            {/* Left: Contact Info */}
            <FadeIn style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-sm)' }}>
                联系方式
              </div>
              <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-serif)' }}>
                联系我们
              </h2>

              {/* Contact Cards — KPMG-style */}
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="service-card"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: '8px',
                      padding: 'var(--spacing-lg)',
                      border: '1px solid var(--border)',
                      textDecoration: 'none',
                      display: 'block',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{item.icon}</div>
                    <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--muted-foreground)', marginBottom: '2px' }}>{item.label}</div>
                    <div className="font-semibold" style={{ fontSize: 'var(--font-size-body)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>{item.value}</div>
                  </a>
                ))}
              </div>

              {/* Quick Action — flex:1 to stretch */}
              <div style={{ background: 'linear-gradient(135deg, var(--brand-navy) 0%, #001a4d 100%)', borderRadius: '8px', padding: 'var(--spacing-2xl)', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'white', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>
                  专业咨询，即刻开始
                </h3>
                <p style={{ fontSize: 'var(--font-size-label)', color: 'rgba(255,255,255,0.70)', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                  无论您需要审计、评估还是税务服务，一通电话即可获得专业指导
                </p>
                <a href="tel:057683886633" className="pill-btn inline-block" style={{ backgroundColor: 'var(--brand-gold)', color: 'white', fontSize: 'var(--font-size-label)', fontWeight: 700, border: 'none' }}>
                  立即咨询
                </a>
              </div>

            </FadeIn>

            {/* Right: Address Card + Service Areas */}
            <FadeIn variants={fadeUp} delay={0.2}>
              {/* Address & Map Link */}
              <div style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)', marginBottom: 'var(--spacing-xl)' }}>
                <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-xs)' }}>ADDRESS</div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>办公地址</h3>
                <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                  浙江省台州市天台县赤城街道赤城大厦5楼
                </p>
                <a
                  href={BAIDU_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card inline-flex items-center cursor-pointer"
                  style={{ backgroundColor: 'var(--brand-ice)', borderRadius: '8px', padding: 'var(--spacing-lg)', border: '1px solid var(--border)', textDecoration: 'none', gap: 'var(--spacing-md)' }}
                >
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                  <div>
                    <div className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>在百度地图中查看</div>
                    <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-sky)' }}>点击导航前往 ↗</div>
                  </div>
                </a>
              </div>

              {/* Service Areas */}
              <div style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-xs)' }}>
                  SERVICE AREA
                </div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                  服务区域
                </h3>
                <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                  我们立足天台，服务覆盖台州市及周边地区，包括但不限于：
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: 'var(--spacing-sm)' }}>
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center" style={{ gap: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)', marginTop: 'var(--spacing-xl)' }}>
                <div className="flex items-center" style={{ gap: 'var(--spacing-md)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--brand-ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    🕐
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>工作时间</div>
                    <div style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-serif)', marginTop: '2px' }}>周一至周五 8:30—17:30</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>SERVICE PROCESS</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>预约咨询流程</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <Stagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--spacing-lg)' }}>
            {[
              { step: '01', title: '电话咨询', desc: '拨打83886633或手机13958503261，说明您的需求' },
              { step: '02', title: '专业评估', desc: '我们根据需求推荐适合的服务方案和报价' },
              { step: '03', title: '签约服务', desc: '确认方案后签订委托协议，正式启动服务' },
              { step: '04', title: '交付成果', desc: '按约定时间交付报告，提供后续跟踪支持' },
            ].map((item) => (
              <HoverLift key={item.step}>
                <div className="service-card" style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-xl)', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--brand-gold)', fontWeight: 700, fontFamily: 'var(--font-serif)', marginBottom: 'var(--spacing-sm)' }}>{item.step}</div>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-xs)', fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>FAQ</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>常见问题</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

const faqs = [
  { q: '年度审计需要准备哪些材料？', a: '通常需要：营业执照复印件、上年度审计报告、总账明细账等会计账簿、银行对账单、重要合同、资产盘点表等。我们会提前提供详细的资料清单。' },
  { q: '代理记账的收费标准是多少？', a: '根据企业规模和业务复杂程度不同，小规模纳税人月费200-400元，一般纳税人月费400-800元。小微企业可凭服务补贴券享受费用减免，详情请来电咨询。' },
  { q: '验资报告需要多长时间？', a: '资料齐全的情况下，一般3-5个工作日即可出具验资报告。加急服务可在1-2个工作日完成。' },
  { q: '天台县小微企业服务补贴券怎么申请？', a: '登录天台县小微企业服务平台在线申请，选择我事务所和所需服务，上传营业执照等材料即可。审核通过后凭券接受服务，享受费用减免。' },
  { q: '你们能上门服务吗？', a: '可以。天台县城内企业我们可上门取送票据和资料，偏远乡镇可安排定期上门。首次咨询免费。' },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <FadeIn>
      <div className="flex flex-col" style={{ gap: 'var(--spacing-sm)' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)', overflow: 'hidden' }}>
            <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="flex items-center justify-between w-full cursor-pointer" style={{ padding: 'var(--spacing-lg)', textAlign: 'left', background: 'none', border: 'none' }}>
              <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--brand-navy)', fontWeight: 500, fontFamily: 'var(--font-serif)', flex: 1 }}>{faq.q}</span>
              <span style={{ color: 'var(--brand-blue)', fontSize: '1.2rem', transition: 'transform 0.2s', transform: openIdx === idx ? 'rotate(180deg)' : 'none', flexShrink: 0, marginLeft: 'var(--spacing-md)' }}>▼</span>
            </button>
            {openIdx === idx && (
              <div style={{ padding: '0 var(--spacing-lg) var(--spacing-lg)', fontSize: 'var(--font-size-label)', color: 'var(--muted-foreground)', lineHeight: 1.8, fontFamily: 'var(--font-serif)' }}>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default Contact;
