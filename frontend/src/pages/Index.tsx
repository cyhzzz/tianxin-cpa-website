import { Link } from 'react-router-dom';
import { FadeIn, Stagger, HoverLift, fadeUp } from '@/components/MotionPrimitives';

const services = [
  { icon: '📋', title: '审计验资', desc: '年度财务审计、专项审计、验资报告，独立、客观、公正的审计意见。', tag: 'AUDIT' },
  { icon: '🏛️', title: '资产评估', desc: '企业价值评估、不动产评估、无形资产评估，助力科学决策。', tag: 'VALUATION' },
  { icon: '📊', title: '税务服务', desc: '税务代理、税务筹划、涉税鉴证，合规节税、降低风险。', tag: 'TAX' },
  { icon: '📒', title: '代理记账', desc: '建账、记账、报税一体化，让企业专注核心业务。', tag: 'BOOKKEEPING' },
  { icon: '💡', title: '财务咨询', desc: '内控设计、财务管理咨询，搭建高效财务体系。', tag: 'CONSULTING' },
  { icon: '🏗️', title: '工程造价', desc: '基建预决算审计，确保投资合理、合规、可控。', tag: 'ENGINEERING' },
];

const cases = [
  { title: '天台县会计审计框架协议采购项目', industry: '政府采购', type: '审计服务', result: '入围2025-2026年度供应商，天台县财政局委托', icon: '🏛️' },
  { title: '天台县汽车置换更新补贴审计审查', industry: '政府项目', type: '审计服务', result: '中标天台县经信商务局2024年度补贴审计项目', icon: '📋' },
  { title: '天台农汇通农产品批发有限公司股权转让审计', industry: '国有企业', type: '审计验资', result: '完成33.5%股权转让审计，出具专项审计报告', icon: '📊' },
  { title: '天台县国有资产经营有限公司财务审计', industry: '国有企业', type: '审计服务', result: '完成年度财务审计，为国资运营提供专业保障', icon: '🏛️' },
  { title: '天台县智能制造项目财政补助资金审计', industry: '政府项目', type: '审计服务', result: '2024年完成财政专项补助资金审计，确保资金合规使用', icon: '⚙️' },
  { title: '天台县工业经济奖励政策申报审计', industry: '政府项目', type: '审计服务', result: '2025年受托审计，保障政策奖励资金发放合规', icon: '📋' },
  { title: '天台某橡胶制品企业年度审计', industry: '橡胶产业', type: '审计验资', result: '规范财务核算，助力企业获得银行授信800万元', icon: '🛞' },
  { title: '苍山医化园区某药企资产评估', industry: '医药化工', type: '资产评估', result: '为股权转让提供公允价值依据，评估价值1.2亿元', icon: '💊' },
  { title: '天台山文旅集团税务筹划', industry: '文化旅游', type: '税务服务', result: '合规节税比例达18%，年度节省税费超50万元', icon: '🏔️' },
  { title: '天台某茶叶加工企业代理记账', industry: '现代农业', type: '代理记账', result: '从零建立财务体系，一年内通过高新企业初审', icon: '🍃' },
  { title: '赤城街道安置房工程预决算审计', industry: '建筑工程', type: '工程造价', result: '核减率9.2%，为财政节约资金320万元', icon: '🏗️' },
  { title: '天台某新能源企业财务尽职调查', industry: '新能源', type: '财务咨询', result: '识别3项重大财务风险，为投资决策提供关键依据', icon: '⚡' },
  { title: '平桥镇某橡塑公司验资报告', industry: '橡胶产业', type: '审计验资', result: '5个工作日完成验资，助力企业增资扩产', icon: '🏭' },
  { title: '天台县某汽车零部件企业内控建设', industry: '汽车零部件', type: '财务咨询', result: '3个月搭建内控框架，资金审批效率提升40%', icon: '⚙️' },
];

const industries = ['政府采购', '国有企业', '橡胶产业', '医药化工', '汽车零部件', '文化旅游', '现代农业', '建筑工程', '新能源', '民营企业', '制造业'];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(./assets/hero_office.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(0,51,141,0.93) 0%, rgba(0,30,80,0.88) 50%, rgba(0,51,141,0.78) 100%)' }} />
        <div className="container relative" style={{ maxWidth: '1200px', paddingTop: '120px', paddingBottom: '100px' }}>
          <FadeIn variants={fadeUp} style={{ maxWidth: '700px' }}>
            <div className="flex items-center" style={{ gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <img src="./assets/logo.svg" alt="天信" style={{ height: '56px', width: '56px', filter: 'brightness(0) invert(1)' }} />
              <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em' }}>EST. 2001 · ZHEJIANG</div>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', color: 'oklch(0.97 0.005 250)', lineHeight: 1.15, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              诚信为本
              <br />
              <span className="gold-underline" style={{ color: 'oklch(0.97 0.005 250)' }}>操守为重</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'oklch(0.72 0.01 250)', lineHeight: 1.8, marginBottom: 'var(--spacing-2xl)', fontWeight: 300 }}>
              天台县唯一具有独立法人资格的会计审计专业机构，
              <br />深耕天台二十七载，以质量求信誉，以信誉求发展。
            </p>
            <div className="flex flex-wrap" style={{ gap: 'var(--spacing-md)' }}>
              <Link to="/contact" className="pill-btn pill-btn-gold">联系我们</Link>
              <Link to="/services" className="pill-btn pill-btn-outline">了解服务 →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-2xl) 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <Stagger stagger={0.1} className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 'var(--spacing-xl)' }}>
            {[{ n: '27', s: '年', l: '行业积淀' }, { n: '8', s: '名', l: '注册会计师' }, { n: '30+', s: '名', l: '专业队伍' }, { n: '6', s: '大', l: '业务领域' }].map((s) => (
              <HoverLift key={s.l} className="text-center">
                <div className="font-bold stat-number" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--brand-navy)', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
                  {s.n}<span style={{ color: 'var(--brand-gold)', fontSize: '0.7em' }}>{s.s}</span>
                </div>
                <div style={{ fontSize: 'var(--font-size-label)', color: 'var(--muted-foreground)', marginTop: '4px', letterSpacing: '0.05em' }}>{s.l}</div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>PROFESSIONAL SERVICES</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>六大核心业务领域</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <Stagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
            {services.map((s) => (
              <HoverLift key={s.title}>
                <div className="service-card" style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-2xl)', height: '100%' }}>
                  <div style={{ fontSize: '10px', color: 'var(--brand-blue)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>{s.tag}</div>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>{s.icon}</div>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-sm)', fontFamily: 'var(--font-serif)' }}>{s.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-label)', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center cursor-pointer" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-blue)', fontWeight: 500, marginTop: 'var(--spacing-lg)', gap: '4px', transition: 'gap 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.gap = '8px'; }} onMouseLeave={(e) => { e.currentTarget.style.gap = '4px'; }}>
                    了解详情 →
                  </Link>
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Client Cases — KPMG-style insight rows */}
      <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>CLIENT CASES</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>服务案例</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', marginTop: 'var(--spacing-md)', maxWidth: '600px', marginInline: 'auto', fontFamily: 'var(--font-serif)' }}>
              扎根天台，服务覆盖橡胶、医化、汽配、文旅、农业等核心产业
            </p>
          </FadeIn>
          <Stagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--spacing-md)' }}>
            {cases.map((c) => (
              <HoverLift key={c.title}>
                <div className="service-card flex flex-col" style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-xl)', height: '100%' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-md)' }}>
                    <span style={{ fontSize: '1.8rem' }}>{c.icon}</span>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--brand-blue)', backgroundColor: 'var(--brand-ice)', padding: '3px 10px', borderRadius: '56px', letterSpacing: '0.1em' }}>{c.industry}</span>
                  </div>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)', fontFamily: 'var(--font-serif)' }}>{c.title}</h3>
                  <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: 'var(--spacing-sm)' }}>{c.type}</div>
                  <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--muted-foreground)', lineHeight: 1.7, flex: 1 }}>✓ {c.result}</p>
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industry Coverage */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>INDUSTRY COVERAGE</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>服务行业</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <Stagger stagger={0.05} className="flex flex-wrap justify-center" style={{ gap: 'var(--spacing-sm)' }}>
            {industries.map((ind) => (
              <HoverLift key={ind}>
                <div style={{ backgroundColor: 'var(--card)', borderRadius: '56px', padding: '10px 24px', border: '1px solid var(--border)', fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', fontWeight: 500, fontFamily: 'var(--font-serif)' }}>
                  {ind}
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Trusted By */}
      <section style={{ padding: 'var(--spacing-2xl) 0', backgroundColor: 'var(--brand-ice)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }}>TRUSTED BY LOCAL ENTERPRISES ACROSS INDUSTRIES</div>
          </FadeIn>
          <Stagger stagger={0.05} className="flex flex-wrap justify-center" style={{ gap: 'var(--spacing-md)' }}>
            {['橡胶制品企业', '医药化工企业', '汽车零部件企业', '文旅开发企业', '农业合作社', '政府及事业单位', '制造业企业', '新能源企业', '建筑施工单位'].map((name) => (
              <div key={name} style={{ backgroundColor: 'var(--card)', borderRadius: '6px', padding: '8px 20px', border: '1px solid var(--border)', fontSize: 'var(--font-size-small)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>{name}</div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--spacing-3xl)', alignItems: 'center' }}>
            <FadeIn>
              <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>ABOUT TIANXIN</div>
              <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', lineHeight: 1.3, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>深耕天台<br />二十七载专业沉淀</h2>
              <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', lineHeight: 1.9, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                天台天信会计师事务所前身成立于1999年，2001年正式注册，是天台县唯一具有独立法人资格的会计审计专业机构。拥有30+名专业人员，执业注册会计师8人，中高级职称15人，自有办公场地500平方米。
              </p>
              <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', lineHeight: 1.9, marginBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-serif)' }}>
                我们始终坚持"独立、客观、公正"的执业原则，为天台及周边地区数百家企业提供审计验资、资产评估、税务代理、代理记账、财务咨询及工程造价等全方位专业服务。
              </p>
              <Link to="/about" className="pill-btn pill-btn-primary">了解更多</Link>
            </FadeIn>
            <FadeIn variants={fadeUp} delay={0.2}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="./assets/team_meeting.png" alt="天信专业团队" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div className="absolute bottom-0 left-0 right-0" style={{ background: 'linear-gradient(transparent, rgba(0,51,141,0.85))', padding: 'var(--spacing-2xl)' }}>
                  <div style={{ fontSize: 'var(--font-size-label)', color: 'oklch(0.95 0.005 250)', fontFamily: 'var(--font-serif)' }}>天台天信 · 专业团队</div>
                  <div style={{ fontSize: 'var(--font-size-small)', color: 'oklch(0.70 0.01 250)' }}>TIANXIN CPA · SINCE 2001</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn>
            <div className="text-center" style={{ background: 'linear-gradient(135deg, oklch(0.30 0.12 260) 0%, oklch(0.24 0.10 255) 100%)', borderRadius: '8px', padding: 'var(--spacing-3xl)', position: 'relative', overflow: 'hidden' }}>
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, oklch(0.62 0.13 75 / 0.05) 0%, transparent 60%)' }} />
              <div className="relative">
                <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'oklch(0.97 0.005 250)', lineHeight: 1.3, marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>需要专业咨询？</h2>
                <p style={{ fontSize: 'var(--font-size-body)', color: 'oklch(0.70 0.01 250)', marginBottom: 'var(--spacing-xl)', maxWidth: '500px', marginInline: 'auto' }}>
                  点击"联系我们"，获取政府网短号、手机号、座机及邮箱等全部联系方式
                </p>
                <div className="flex flex-wrap justify-center" style={{ gap: 'var(--spacing-md)' }}>
                  <Link to="/contact" className="pill-btn pill-btn-gold">联系我们</Link>
                  <a href="tel:057683886633" className="pill-btn pill-btn-outline">拨打座机</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
