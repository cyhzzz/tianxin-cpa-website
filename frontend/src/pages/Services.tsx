import { Link } from 'react-router-dom';
import { FadeIn, fadeUp } from '@/components/MotionPrimitives';

const services = [
  {
    id: 'audit', icon: '📋', title: '审计验资', subtitle: 'AUDIT & CAPITAL VERIFICATION',
    desc: '我们拥有丰富的审计经验，为天台橡胶、医化、汽配、文旅等各行业企业提供年度财务审计、专项审计及验资报告等专业服务。',
    features: ['年度财务审计', '专项审计', '验资报告', '内部审计', '合规审计', '清算审计'],
    localNote: '已为天台县30余家企业完成年度审计，涵盖橡胶制品、医药化工、汽车零部件等支柱产业',
    process: ['了解需求 → 签约', '进场审计（3-5天）', '出具初稿 → 沟通', '正式出具报告'],
  },
  {
    id: 'valuation', icon: '🏛️', title: '资产评估', subtitle: 'ASSET VALUATION',
    desc: '以专业的评估方法和丰富的行业经验，为天台企业股权转让、融资贷款、资产重组等提供科学、公正的资产评估服务。',
    features: ['企业价值评估', '不动产评估', '无形资产评估', '机器设备评估', '股权评估', '单项资产评估'],
    localNote: '曾为苍山医化园区多家药企完成资产评估，评估总值超3亿元',
    process: ['明确评估目的', '现场勘查 → 资料收集', '选择方法 → 评定估算', '出具评估报告'],
  },
  {
    id: 'tax', icon: '📊', title: '税务服务', subtitle: 'TAX SERVICES',
    desc: '深入解读国家和浙江省税收政策，帮助天台企业合规经营、合理节税，尤其擅长橡胶行业原料采购、医化企业研发加计扣除等疑难问题。',
    features: ['税务代理', '税务筹划', '涉税鉴证', '纳税审查', '税务咨询', '税收优惠申请'],
    localNote: '为天台企业年度节税比例达15%—25%，累计为客户节税超千万元',
    process: ['税务诊断 → 风险评估', '制定筹划方案', '方案实施 → 跟踪', '效果评估 → 持续优化'],
  },
  {
    id: 'bookkeeping', icon: '📒', title: '代理记账', subtitle: 'BOOKKEEPING SERVICE',
    desc: '专业的记账团队，为天台中小企业提供建账、记账、报税一体化服务。特别适合初创企业和季节性明显的农业企业。',
    features: ['建账服务', '日常记账', '纳税申报', '财务报表编制', '年终结算', '财税合规'],
    localNote: '签约小微企业服务补贴券中介，小微企业凭券可享费用减免',
    process: ['签约 → 交接票据', '每月记账报税', '季度财务反馈', '年度汇算清缴'],
  },
  {
    id: 'consulting', icon: '💡', title: '财务咨询', subtitle: 'FINANCIAL CONSULTING',
    desc: '基于服务天台企业27年的行业经验，为企业提供内控设计、财务管理、数字化转型等专业咨询服务。',
    features: ['内控制度设计', '财务管理咨询', '预算管理', '成本控制', '风险识别与评估', '管理建议书'],
    localNote: '已辅导天台多家汽配企业完成财务信息化，财务报表编制效率提升60%',
    process: ['调研诊断 → 识别问题', '方案设计 → 评审', '辅导实施 → 跟进', '效果评估 → 持续改进'],
  },
  {
    id: 'engineering', icon: '🏗️', title: '工程造价', subtitle: 'ENGINEERING COST',
    desc: '凭借专业的造价工程师，为天台市政工程、文旅项目、安置房建设等提供预决算审计服务，确保财政资金使用合规高效。',
    features: ['基建预决算审计', '工程量清单编制', '工程结算审核', '招标控制价编制', '工程索赔审核', '全过程造价咨询'],
    localNote: '天台山景区改造项目核减率9.2%，为财政节约资金258万元',
    process: ['项目立项 → 合同审核', '施工过程跟踪', '竣工结算审核', '出具审计报告'],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ padding: '80px 0 60px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(./assets/audit_work.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,35,102,0.92) 0%, rgba(0,20,60,0.80) 100%)' }} />
        <div className="container relative" style={{ maxWidth: '1200px' }}>
          <FadeIn variants={fadeUp} style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>PROFESSIONAL SERVICES</div>
            <h1 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, var(--font-size-headline))', color: '#fff', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>六大核心业务</h1>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0', marginLeft: 0 }} />
            <p style={{ fontSize: 'var(--font-size-body)', color: 'rgba(255,255,255,0.75)', marginTop: 'var(--spacing-md)', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>专业资质齐全，覆盖审计、评估、税务、记账、咨询及工程造价全领域</p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col" style={{ gap: 'var(--spacing-3xl)' }}>
            {services.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div id={service.id} style={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2" style={{ height: '100%' }}>
                    {/* Info Side */}
                    <div style={{ padding: 'var(--spacing-2xl)', order: idx % 2 === 0 ? 1 : 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>{service.subtitle}</div>
                      <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>{service.icon}</div>
                      <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', lineHeight: 1.2, marginBottom: 'var(--spacing-xs)', fontFamily: 'var(--font-serif)' }}>{service.title}</h2>
                      <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0', marginLeft: 0 }} />
                      <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>{service.desc}</p>
                      {/* Local note */}
                      <div style={{ backgroundColor: 'var(--brand-ice)', borderRadius: '6px', padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '4px' }}>TIANXIN ADVANTAGE</div>
                        <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-navy)', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>{service.localNote}</p>
                      </div>
                      <Link to="/contact" className="pill-btn pill-btn-primary inline-block" style={{ fontSize: 'var(--font-size-label)', marginTop: 'auto' }}>联系我们</Link>
                    </div>

                    {/* Features + Process Side */}
                    <div style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--brand-ice)', order: idx % 2 === 0 ? 2 : 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-lg)', letterSpacing: '0.1em', fontFamily: 'var(--font-serif)' }}>服务内容</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center" style={{ gap: 'var(--spacing-sm)' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: idx % 2 === 0 ? 'var(--brand-blue)' : 'var(--brand-navy)', flexShrink: 0 }} />
                            <span style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {/* Service Process */}
                      <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', letterSpacing: '0.1em', fontFamily: 'var(--font-serif)' }}>服务流程</h3>
                      <div className="flex flex-wrap" style={{ gap: '6px' }}>
                        {service.process.map((step, si) => (
                          <div key={si} className="flex items-center" style={{ gap: '6px' }}>
                            <div style={{ backgroundColor: 'var(--brand-navy)', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, flexShrink: 0 }}>{si + 1}</div>
                            <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)', whiteSpace: 'nowrap' }}>{step}</span>
                            {si < service.process.length - 1 && <span style={{ color: 'var(--border)', fontSize: '14px' }}>→</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeIn className="text-center">
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-sm)' }}>GET IN TOUCH</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>找不到需要的服务？</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-xl)', maxWidth: '500px', marginInline: 'auto', fontFamily: 'var(--font-serif)' }}>点击"联系我们"，我们将为您量身定制解决方案。</p>
            <div className="flex flex-wrap justify-center" style={{ gap: 'var(--spacing-md)' }}>
              <Link to="/contact" className="pill-btn pill-btn-primary inline-block" style={{ fontSize: 'var(--font-size-label)' }}>联系我们</Link>
              <a href="tel:057683886633" className="pill-btn pill-btn-gold inline-block" style={{ fontSize: 'var(--font-size-label)' }}>拨打座机</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Services;
