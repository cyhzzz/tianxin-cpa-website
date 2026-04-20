import { Link } from 'react-router-dom';
import { FadeIn, Stagger, HoverLift, fadeUp, fadeRight } from '@/components/MotionPrimitives';

const timeline = [
  { year: '1999', event: '天台天信会计师事务所前身成立' },
  { year: '2001', event: '天台天信会计师事务所有限公司正式注册' },
  { year: '2019', event: '工商信息核准更新，业务持续扩展' },
  { year: '2022', event: '经营范围变更，新增多项咨询服务' },
  { year: '2024', event: '中标多项政府审计项目（汽车补贴审计、智能制造审计等）' },
  { year: '2025', event: '入围天台县会计审计框架协议采购项目，深耕天台27年' },
];

const qualifications = [
  { name: '注册会计师业务许可', icon: '📋' },
  { name: '代理记账许可资质', icon: '📒' },
  { name: '台州市行政审批中介服务网入驻', icon: '🏛️' },
];

const licensedItems = ['注册会计师业务', '代理记账'];
const generalItems = ['资产评估', '税务服务', '咨询策划', '土地调查评估', '商务代理代办', '社会经济咨询', '采购代理', '企业管理咨询', '财务咨询', '市场营销策划'];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '480px' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(./assets/city_skyline.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, rgba(0,51,141,0.93) 0%, rgba(0,30,80,0.88) 50%, rgba(0,51,141,0.78) 100%)',
        }} />
        <div className="container relative" style={{ maxWidth: '1200px', paddingTop: '96px', paddingBottom: '80px' }}>
          <FadeIn variants={fadeUp} style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
              ABOUT TIANXIN
            </div>
            <h1 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, var(--font-size-headline))', color: '#ffffff', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
              深耕天台 · 专业为本
            </h1>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'rgba(255,255,255,0.70)', marginTop: 'var(--spacing-md)', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>
              始于1999，二十七载专业服务，铸就信赖品牌
            </p>
            <div className="flex flex-wrap" style={{ gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
              <Link to="/contact" className="pill-btn pill-btn-gold">联系我们</Link>
              <Link to="/services" className="pill-btn pill-btn-outline">了解服务</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview with info card */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: 'var(--spacing-3xl)' }}>
            <FadeIn className="lg:col-span-3">
              <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
                OVERVIEW
              </div>
              <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', lineHeight: 1.3, marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                天台天信会计师事务所
              </h2>
              <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0 0' }} />
              <div style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', lineHeight: 1.9, fontFamily: 'var(--font-serif)', marginTop: 'var(--spacing-lg)' }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                  天台天信会计师事务所有限公司（统一社会信用代码：91331023704713535H）前身可追溯至1999年7月，2001年4月17日正式注册，是经浙江省财政厅批准设立的有限责任公司制会计师事务所（自然人投资控股）。事务所注册资本30万元，法定代表人为彭庆岳主任会计师。
                </p>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>
                  天台天信是天台县唯一一家从事审计、资产评估、财务咨询等相关会计服务、具有独立法人资格的专业机构。拥有自有办公场地500平方米，专业人员30多人，其中执业注册会计师7人，中高级职称15人。对外投资天台天信企业管理有限公司，关联天台万信税务师事务所有限公司。
                </p>
                <p>
                  本所自成立以来，本着客观、独立、公正的原则，始终坚持"诚信为本、操守为重"的执业理念，秉承以质量求信誉、以信誉求发展的服务宗旨，以维护社会公众利益为根本。
                </p>
              </div>
            </FadeIn>

            <FadeIn variants={fadeRight} delay={0.2} className="lg:col-span-2">
              <div style={{ backgroundColor: '#f4f4f4', borderRadius: '0px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)' }}>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-serif)' }}>
                  基本信息
                </h3>
                <div className="flex flex-col" style={{ gap: 'var(--spacing-md)' }}>
                  {[
                    { label: '全称', value: '天台天信会计师事务所有限公司' },
                    { label: '前身', value: '1999年7月' },
                    { label: '正式注册', value: '2001年4月17日' },
                    { label: '法定代表人', value: '彭庆岳' },
                    { label: '专业人员', value: '30+人' },
                    { label: '执业注会', value: '7人' },
                    { label: '中高级职称', value: '15人' },
                    { label: '关联企业', value: '天台万信税务师事务所' },
                    { label: '地址', value: '浙江省天台县赤城大厦5楼' },
                    { label: '电话', value: '0576-83886633' },
                    { label: '邮箱', value: '457897313@qq.com' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start" style={{ fontSize: 'var(--font-size-label)', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--spacing-xs)' }}>
                      <span style={{ color: 'var(--muted-foreground)' }}>{item.label}</span>
                      <span className="font-medium" style={{ color: 'var(--brand-navy)', textAlign: 'right', maxWidth: '60%', fontFamily: 'var(--font-serif)' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 'var(--spacing-xl)' }}>
                  <Link to="/contact" className="pill-btn pill-btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>联系我们</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Image overlay section */}
      <section style={{ padding: '0 0 var(--spacing-3xl)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn>
            <div style={{ borderRadius: '0px', overflow: 'hidden', position: 'relative' }}>
              <img src="./assets/audit_work.png" alt="专业审计工作" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,51,141,0.85) 0%, rgba(0,51,141,0.4) 50%, transparent 100%)', display: 'flex', alignItems: 'center', padding: 'var(--spacing-3xl)' }}>
                <div style={{ maxWidth: '400px' }}>
                  <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
                    OUR VALUES
                  </div>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: '#ffffff', lineHeight: 1.3, fontFamily: 'var(--font-serif)', marginBottom: 'var(--spacing-md)' }}>
                    独立 · 客观 · 公正
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-label)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>
                    二十七年来，我们以严谨的执业态度和专业的服务能力，赢得了天台及周边地区数百家企业的信赖。
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Business Scope */}
      <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
              BUSINESS SCOPE
            </div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>
              经营范围
            </h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-xl)' }}>
            <FadeIn style={{ height: '100%' }}>
              <div style={{ backgroundColor: 'var(--card)', borderRadius: '0px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)', height: '100%' }}>
                <div style={{ fontSize: '10px', color: 'var(--brand-navy)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>LICENSED BUSINESS</div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>许可项目</h3>
                <div className="flex flex-col" style={{ gap: 'var(--spacing-sm)' }}>
                  {licensedItems.map((item) => (
                    <div key={item} className="flex items-center" style={{ gap: 'var(--spacing-sm)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-navy)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn variants={fadeUp} delay={0.15} style={{ height: '100%' }}>
              <div style={{ backgroundColor: 'var(--card)', borderRadius: '0px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)', height: '100%' }}>
                <div style={{ fontSize: '10px', color: 'var(--brand-blue)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>GENERAL BUSINESS</div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>一般项目</h3>
                <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-sm)' }}>
                  {generalItems.map((item) => (
                    <div key={item} className="flex items-center" style={{ gap: 'var(--spacing-sm)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)', flexShrink: 0 }} />
                      <span style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>OUR TEAM</div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>团队架构</h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>

          {/* Executive Leadership */}
          <FadeIn style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>EXECUTIVE LEADERSHIP</div>
            <Stagger stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--spacing-lg)' }}>
              {[
                { name: '彭庆岳', title: '注册会计师', role: '法定代表人 · 董事长', desc: '创始人之一，全面负责事务所执业质量与战略发展方向' },
                { name: '庞晓群', title: '注册会计师', role: '创始人 · 大股东', desc: '深耕审计领域多年，主持多项政府审计与国企审计项目' },
                { name: '陈辛宏', title: '注册会计师', role: '联合创始人 · 核心合伙人', desc: '参与多项政府框架协议项目对接与业务拓展' },
                { name: '王红兵', title: '注册会计师', role: '核心合伙人', desc: '负责审计项目质量复核与团队管理' },
              ].map((exec) => (
                <HoverLift key={exec.name}>
                  <div style={{ backgroundColor: 'white', borderRadius: '0px', border: '1px solid var(--border)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Navy header with white logo */}
                    <div style={{ background: 'var(--brand-navy)', padding: 'var(--spacing-lg) var(--spacing-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
                          天台天信
                        </div>
                        <div style={{ fontSize: '9px', color: 'var(--brand-gold)', letterSpacing: '0.12em', marginTop: '3px', fontWeight: 400 }}>
                          TIANXIN CPA
                        </div>
                      </div>
                      <img src="./assets/logo.svg" alt="天信" style={{ height: '32px', width: '32px', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                    </div>
                    {/* Name & title section */}
                    <div style={{ padding: 'var(--spacing-xl) var(--spacing-xl) var(--spacing-md)' }}>
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--spacing-lg)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--brand-navy)', letterSpacing: '0.06em', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>{exec.name}</h3>
                        <div style={{ fontSize: '11px', color: 'var(--brand-blue)', fontWeight: 500, letterSpacing: '0.04em' }}>{exec.title}</div>
                      </div>
                    </div>
                    {/* Role & description */}
                    <div style={{ padding: '0 var(--spacing-xl) var(--spacing-xl)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: 'var(--spacing-sm)' }}>{exec.role}</div>
                      <p style={{ fontSize: 'var(--font-size-label)', color: 'var(--muted-foreground)', lineHeight: 1.7, fontFamily: 'var(--font-serif)', flex: 1 }}>{exec.desc}</p>
                    </div>
                  </div>
                </HoverLift>
              ))}
            </Stagger>
          </FadeIn>

          {/* Department Teams */}
          <FadeIn>
            <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>DEPARTMENTS</div>
          </FadeIn>
          <Stagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4" style={{ gap: 'var(--spacing-lg)' }}>
            {[
              { role: '审计部', name: '审计团队', desc: '执业注册会计师7人，中高级职称15人，负责各类审计业务', icon: '📋' },
              { role: '评估部', name: '评估团队', desc: '资产评估师团队，负责企业价值评估、不动产评估等', icon: '🏛️' },
              { role: '税务部', name: '税务团队', desc: '天台万信税务师事务所，负责税务代理、筹划及涉税鉴证', icon: '📊' },
              { role: '记账部', name: '记账团队', desc: '持证代理记账，负责建账、纳税申报、报表编制', icon: '📒' },
              { role: '造价部', name: '造价团队', desc: '负责基建预决算审计、工程造价咨询', icon: '🏗️' },
              { role: '咨询部', name: '咨询团队', desc: '负责内控设计、财务咨询、企业管理咨询', icon: '💡' },
              { role: '行政部', name: '行政支持', desc: '负责客户接待、档案管理、质量控制和持续教育', icon: '📁' },
            ].map((member) => (
              <HoverLift key={member.role}>
                <div className="service-card" style={{ backgroundColor: 'var(--card)', borderRadius: '0px', padding: 'var(--spacing-xl)', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>{member.icon}</div>
                  <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '4px' }}>{member.role}</div>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-xs)', fontFamily: 'var(--font-serif)' }}>{member.name}</h3>
                  <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{member.desc}</p>
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Honors */}
      <section style={{ backgroundColor: 'var(--brand-navy)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
              HONORS & RECOGNITION
            </div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: '#ffffff', fontFamily: 'var(--font-serif)' }}>
              荣誉与认可
            </h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <Stagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
            <HoverLift>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '0px', padding: 'var(--spacing-2xl)', border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
                <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>CREDIT RATING</div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: '#ffffff', marginBottom: 'var(--spacing-sm)', fontFamily: 'var(--font-serif)' }}>🏅 AAA级企业诚信</h3>
                <p style={{ fontSize: 'var(--font-size-label)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>政府采购大数据征信评定为AAA级，诚信分100分（满分），严重违法失信记录0条，行政处罚0条。</p>
              </div>
            </HoverLift>
            <HoverLift>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '0px', padding: 'var(--spacing-2xl)', border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
                <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>QUALITY RECOGNITION</div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: '#ffffff', marginBottom: 'var(--spacing-sm)', fontFamily: 'var(--font-serif)' }}>⭐ 多项优质评级</h3>
                <p style={{ fontSize: 'var(--font-size-label)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>获成长力、管理创新力、竞争力、履约率、服务质量等大数据"优质"评级。</p>
              </div>
            </HoverLift>
            <HoverLift>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '0px', padding: 'var(--spacing-2xl)', border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
                <div style={{ fontSize: '10px', color: 'var(--brand-gold)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: 'var(--spacing-md)' }}>GOVERNMENT FRAMEWORK</div>
                <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: '#ffffff', marginBottom: 'var(--spacing-sm)', fontFamily: 'var(--font-serif)' }}>📋 框架协议入围</h3>
                <p style={{ fontSize: 'var(--font-size-label)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>入围2025-2026年度天台县会计审计、预算绩效评价咨询服务框架协议采购项目。</p>
              </div>
            </HoverLift>
          </Stagger>
        </div>
      </section>

      {/* Qualifications */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
              QUALIFICATIONS
            </div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>
              执业资质
            </h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <Stagger stagger={0.1} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: 'var(--spacing-md)' }}>
            {qualifications.map((q) => (
              <HoverLift key={q.name}>
                <div className="text-center" style={{ backgroundColor: 'var(--card)', borderRadius: '0px', padding: 'var(--spacing-xl)', border: '1px solid var(--border)', height: '100%' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand-ice)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-sm)', fontSize: '1.5rem' }}>
                    {q.icon}
                  </div>
                  <div className="font-medium" style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>
                    {q.name}
                  </div>
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>
              MILESTONES
            </div>
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>
              发展历程
            </h2>
            <div className="section-divider" style={{ margin: 'var(--spacing-md) auto 0' }} />
          </FadeIn>
          <Stagger stagger={0.1} className="flex flex-col" style={{ gap: '0', maxWidth: '700px', marginInline: 'auto' }}>
            {timeline.map((item, idx) => (
              <FadeIn key={item.year} className="flex" style={{ gap: 'var(--spacing-lg)' }}>
                <div className="flex flex-col items-center" style={{ minWidth: '80px' }}>
                  <div className="font-semibold" style={{ fontSize: 'var(--font-size-label)', color: idx % 2 === 0 ? 'var(--brand-gold)' : 'var(--brand-navy)', fontFamily: 'var(--font-serif)' }}>
                    {item.year}
                  </div>
                  <div style={{ width: '2px', flex: 1, backgroundColor: 'var(--border)', marginTop: 'var(--spacing-xs)' }} />
                </div>
                <div style={{ paddingBottom: 'var(--spacing-2xl)' }}>
                  <div style={{ fontSize: 'var(--font-size-body)', color: 'var(--foreground)', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
                    {item.event}
                  </div>
                </div>
              </FadeIn>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <FadeIn>
            <div className="text-center" style={{ background: 'var(--brand-navy)', borderRadius: '0px', padding: 'var(--spacing-3xl)', position: 'relative', overflow: 'hidden' }}>
              <div className="relative">
                <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: '#ffffff', lineHeight: 1.3, marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>需要专业咨询？</h2>
                <p style={{ fontSize: 'var(--font-size-body)', color: 'rgba(255,255,255,0.70)', marginBottom: 'var(--spacing-xl)', maxWidth: '500px', marginInline: 'auto' }}>
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

export default About;
