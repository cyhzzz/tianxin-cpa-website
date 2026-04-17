import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, Stagger, HoverLift, fadeUp } from '@/components/MotionPrimitives';

const articles = [
  {
    id: '1', category: '政策法规', title: '2026年企业所得税汇算清缴注意事项', date: '2026-03-15', summary: '梳理2026年度企业所得税汇算清缴中的关键变化，帮助天台企业顺利完成年度申报。',
    content: `2026年度企业所得税汇算清缴工作即将启动，企业在申报过程中需特别关注以下要点：

一、政策变化要点
2026年企业所得税汇算清缴延续了去年的多项优惠政策，同时在部分扣除标准上有所调整。企业应重点关注研发费用加计扣除比例的微调，以及固定资产加速折旧政策的最新执行口径。

二、天台企业常见风险
1. 橡胶行业原料采购票据不合规：部分企业从小作坊采购原料，发票取得不及时；
2. 医化企业研发费用归集不规范：研发与生产混同，加计扣除基数不准确；
3. 汽配企业出口退税申报差错：汇率折算与报关单不一致。

三、申报建议
1. 提前梳理全年财务数据，确保账实相符；
2. 及时收集并核验各项扣除凭证；
3. 关注天台县税务局发布的年度申报公告；
4. 对于复杂涉税事项，建议提前咨询专业意见。

天台天信会计师事务所可为您提供企业所得税汇算清缴全程辅导服务，确保合规申报、合理节税。`,
  },
  {
    id: '2', category: '行业动态', title: '天台橡胶行业转型升级中的财务挑战与应对', date: '2026-03-01', summary: '天台橡胶产业正从传统制造向智能制造转型，企业面临成本核算、税务合规等多重财务挑战。',
    content: `天台县橡胶产业起步于上世纪六十年代，是全国知名的橡胶制品生产基地。近年来，随着环保标准提升和智能制造推进，天台橡胶企业正加速转型升级。

一、转型中的财务挑战
1. 设备更新投资大：智能生产线投入动辄数百万元，折旧政策选择直接影响当期利润；
2. 环保投入增加：废水废气处理设施投入增加，相关支出如何合理归集和税前扣除；
3. 研发投入上升：新材料研发、工艺改进投入持续增长，研发费用加计扣除需规范归集；
4. 成本核算精细化：多品种、小批量生产模式下，传统成本分摊方法已难以满足管理需求。

二、我们的建议
1. 合理利用固定资产加速折旧政策，平衡税负与现金流；
2. 建立环保投入专项台账，确保相关支出税前扣除凭证合规；
3. 规范研发费用归集流程，设立研发辅助账，充分享受加计扣除优惠；
4. 引入作业成本法等先进成本核算方法，提升成本信息准确性。

天台天信会计师事务所长期服务天台橡胶行业，深谙行业特点与财务难点，可为企业转型提供全方位财税支持。`,
  },
  {
    id: '3', category: '专业文章', title: '天台医化企业环保税与排污许可合规实务', date: '2026-02-15', summary: '苍山医化园区企业如何做好环保税申报与排污许可合规，避免罚款与信用风险。',
    content: `天台苍山医化园区是浙江省重要的特色生态产业平台，园区内医药化工企业面临日益严格的环保监管要求。

一、环保税申报要点
1. 应税污染物识别：医化企业排放的废水、废气中污染物种类多，需逐一识别应税污染物；
2. 计算方法选择：自动监测数据优先，无监测数据的可采用排污系数法或物料衡算法；
3. 减排优惠适用：纳税人排放应税污染物浓度值低于国家和地方排放标准30%的，减按75%征收；低于50%的，减按50%征收。

二、排污许可合规
1. 许可证执行报告：按证排污、按期报告，执行报告需在排污许可证管理信息平台上填报；
2. 自行监测方案：按排污许可证要求开展自行监测，监测数据需上传至监管平台；
3. 台账记录规范：生产设施运行、污染治理设施运行、监测等台账记录需完整保存。

三、违规风险
环保税申报不实将面临补税、罚款及滞纳金；排污许可违规可能被处以罚款、限制生产甚至吊销许可证，影响企业信用评级和银行授信。

天台天信会计师事务所可为医化企业提供环保税申报辅导和排污许可合规审查服务，帮助企业降低合规风险。`,
  },
  {
    id: '4', category: '政策法规', title: '天台县小微企业服务补贴券使用指南', date: '2026-01-20', summary: '2025年度天台县小微企业服务补贴券签约中介名单已公布，天信会计为您详解使用流程。',
    content: `2025年度，天台天信会计师事务所成功入选天台县小微企业服务补贴券签约中介服务机构。本指南帮助小微企业了解补贴券的申请和使用流程。

一、什么是服务补贴券？
服务补贴券是天台县政府为支持小微企业发展而发放的财政补贴凭证，小微企业可凭券购买签约中介机构的专业服务，享受一定比例的费用减免。

二、适用服务范围
1. 财务审计：年度财务报表审计、专项审计；
2. 代理记账：建账、记账、纳税申报；
3. 税务咨询：税收政策咨询、纳税辅导；
4. 财务咨询：内控制度建设、财务管理优化。

三、申请流程
1. 登录天台县小微企业服务平台在线申请；
2. 选择签约中介机构和所需服务；
3. 上传企业营业执照等材料；
4. 审核通过后获取补贴券；
5. 凭券接受服务，享受费用减免。

四、注意事项
1. 每家企业每年最高补贴额度以当年公告为准；
2. 补贴券不得转让、不得兑现；
3. 服务完成后需在平台确认服务评价。

天台天信会计师事务所作为签约中介，可为小微企业提供审计、记账、税务咨询等专业服务，欢迎来电咨询。`,
  },
  {
    id: '5', category: '专业文章', title: '天台文旅项目工程造价审计实务要点', date: '2026-01-05', summary: '天台山文旅项目投资规模不断扩大，工程造价审计如何确保资金使用合规高效。',
    content: `近年来，天台县持续打造"浙东唐诗之路目的地"品牌，文旅项目投资规模不断扩大。天台山风景名胜区入选浙江省千万级核心大景区培育名单，相关基建项目工程造价审计需求持续增长。

一、文旅项目造价审计特点
1. 工程类型多样：包括景观工程、古建修缮、步道栈道、游客中心等，各类型计价规范不同；
2. 变更签证频繁：文旅项目受地形、文物保护等因素影响，设计变更较多，签证审核量大；
3. 材料价格波动：景观石材、仿古建材等价格受市场影响大，价格确认难度高；
4. 资金来源复杂：涉及中央补助、省级专项资金、地方配套等多种资金渠道。

二、审计重点
1. 合同价款审核：合同条款是否明确、暂估价是否合理；
2. 变更签证审核：变更程序是否合规、签证内容是否真实；
3. 工程量审核：竣工图与实际是否一致、计算规则是否正确；
4. 取费标准审核：费率适用是否正确、优惠让利是否到位。

三、实践案例
某天台山景区改造提升项目，送审造价2,800万元，经我所审计核减258万元，核减率9.2%。主要核减原因为：土方工程量虚增、景观石材价格偏高、部分签证内容与实际不符。

天台天信会计师事务所拥有专业的造价工程师，可为文旅项目提供全过程造价咨询和结算审计服务。`,
  },
  {
    id: '6', category: '行业动态', title: '天台汽配企业数字化转型中的财务信息化实践', date: '2025-12-18', summary: '天台汽车零部件企业加速数字化转型，财务信息化如何跟上步伐。',
    content: `天台县是全国知名的汽车用品制造基地，近年来随着银轮股份等龙头企业引领，汽配企业加速推进数字化转型。财务信息化是企业管理升级的关键环节。

一、汽配企业财务信息化痛点
1. 成本核算粗放：多品种、多批次生产，传统手工核算难以精确分摊制造费用；
2. 存货管理混乱：原材料、半成品、产品种类繁多，手工台账易出错；
3. 销售对账困难：客户数量多、订单碎片化，应收账款核对工作量大；
4. 税务申报效率低：出口退税、研发加计扣除等业务手工操作耗时耗力。

二、财务信息化推进路径
1. 选择适合的财务软件：根据企业规模和业务特点，选择用友、金蝶或行业定制方案；
2. 业务财务一体化：打通ERP与财务系统的数据接口，实现自动记账和成本归集；
3. 建立标准成本体系：按BOM清单设定标准成本，实现成本差异实时分析；
4. 部署税务管理模块：自动采集发票数据，实现增值税、所得税的智能申报。

三、天信的实践
我们已为多家天台汽配企业完成财务信息化辅导，帮助企业实现从手工记账到系统化管理的跨越，财务报表编制时间缩短60%，成本核算准确率提升至98%以上。

天台天信会计师事务所可为企业提供财务信息化选型咨询、系统实施辅导及培训服务。`,
  },
  {
    id: '7', category: '政策法规', title: '浙江省2025年推动经济高质量发展政策解读', date: '2025-11-25', summary: '天台县出台配套政策支持实体经济发展，企业如何精准把握政策红利。',
    content: `2025年，天台县人民政府印发《关于推动经济高质量发展若干政策》，围绕科技创新、产业升级、小微企业扶持等方面推出一系列奖补措施。

一、科技创新支持
1. 高新技术企业认定奖励：首次认定奖励20万元，重新认定奖励10万元；
2. 研发费用加计扣除：一般企业按100%加计扣除，形成无形资产的按200%摊销；
3. 科技型中小企业贷款贴息：最高贴息比例不超过贷款利率的30%。

二、产业升级扶持
1. 数字化改造补助：设备投资额的10%—20%补助，最高100万元；
2. 绿色制造奖励：获评绿色工厂的企业给予一次性奖励；
3. "专精特新"企业培育：国家级专精特新"小巨人"企业奖励50万元。

三、小微企业扶持
1. 服务补贴券：可购买审计、记账、咨询等专业服务；
2. 融资担保支持：政府性融资担保机构担保费率降至1%以下；
3. 创业补贴：首次创业并正常经营6个月以上的，给予一次性创业补贴。

企业如需了解具体申报条件和流程，欢迎联系天台天信会计师事务所获取专业指导。`,
  },
  {
    id: '8', category: '专业文章', title: '天台农业企业财务规范化路径探索', date: '2025-11-10', summary: '天台黄茶、高山蔬菜等特色农业企业如何从粗放管理走向财务规范化。',
    content: `天台县是浙江省重要的特色农业产区，天台黄茶、高山蔬菜、中药材等农产品享誉省内外。然而，许多农业企业仍存在财务管理粗放、账务不规范等问题，制约了企业发展和政策享受。

一、农业企业财务常见问题
1. 现金交易多：农产品收购多为现金交易，票据获取困难，成本核算不准确；
2. 个人账户混用：企业收支与个人账户混同，难以区分经营性收支；
3. 存货管理薄弱：农产品季节性强，入库出库记录不完整；
4. 补贴核算不清：各类农业补贴未按规定进行会计处理。

二、规范化路径
1. 开立企业对公账户，实现公私账户分离；
2. 推行银行转账结算，减少现金交易，确保收支可追溯；
3. 建立农产品存货台账，记录入库、出库、损耗情况；
4. 规范政府补贴的会计处理，区分与资产相关和与收益相关的补贴。

三、政策红利
财务规范化的农业企业可享受：高新技术企业认定（农业企业也可申请）、研发费用加计扣除、农业产业化龙头企业认定及相关奖补。

天台天信会计师事务所已为多家天台茶叶、中药材企业提供代理记账和财务规范化服务，助力企业从粗放管理走向精细运营。`,
  },
];

const categories = ['全部', '政策法规', '行业动态', '专业文章'];

const categoryColors: Record<string, string> = {
  '政策法规': 'var(--brand-navy)',
  '行业动态': 'var(--brand-blue)',
  '专业文章': 'var(--brand-gold)',
};

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredArticles = activeCategory === '全部' ? articles : articles.filter(a => a.category === activeCategory);

  if (selectedArticle) {
    return (
      <div>
        <section className="relative overflow-hidden" style={{ padding: '80px 0 60px' }}>
          <div className="absolute inset-0" style={{ backgroundImage: 'url(./assets/hero_office.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,35,102,0.92) 0%, rgba(0,20,60,0.80) 100%)' }} />
          <div className="container relative" style={{ maxWidth: '800px' }}>
            <FadeIn variants={fadeUp}>
              <button onClick={() => setSelectedArticle(null)} className="pill-btn" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-label)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                ← 返回列表
              </button>
              <div className="flex items-center" style={{ gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                <span style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, color: 'white', backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '56px' }}>{selectedArticle.category}</span>
                <span style={{ fontSize: 'var(--font-size-small)', color: 'rgba(255,255,255,0.7)' }}>{selectedArticle.date}</span>
              </div>
              <h1 className="font-semibold" style={{ fontSize: 'clamp(1.5rem, 3vw, var(--font-size-headline))', color: 'white', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>{selectedArticle.title}</h1>
            </FadeIn>
          </div>
        </section>
        <section style={{ padding: 'var(--spacing-3xl) 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <FadeIn>
              <div style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-2xl)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 'var(--font-size-body)', color: 'var(--foreground)', lineHeight: 2, fontFamily: 'var(--font-serif)', whiteSpace: 'pre-line' }}>{selectedArticle.content}</div>
              </div>
              <div style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
                <button onClick={() => setSelectedArticle(null)} className="pill-btn pill-btn-primary" style={{ fontSize: 'var(--font-size-label)', cursor: 'pointer' }}>← 返回文章列表</button>
              </div>
            </FadeIn>
          </div>
        </section>
        <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-3xl) 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <FadeIn className="text-center">
              <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>需要专业咨询？</h2>
              <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-serif)' }}>点击"联系我们"，获取更多专业解读与咨询服务。</p>
              <Link to="/contact" className="pill-btn pill-btn-primary inline-block" style={{ fontSize: 'var(--font-size-label)' }}>联系我们</Link>
            </FadeIn>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden" style={{ padding: '80px 0 60px' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(./assets/hero_office.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,35,102,0.92) 0%, rgba(0,20,60,0.80) 100%)' }} />
        <div className="container relative" style={{ maxWidth: '1200px' }}>
          <FadeIn variants={fadeUp} style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: 'var(--font-size-small)', color: 'var(--brand-gold)', fontWeight: 600, marginBottom: 'var(--spacing-sm)', letterSpacing: '0.15em' }}>INDUSTRY INSIGHTS</div>
            <h1 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, var(--font-size-headline))', color: 'oklch(0.98 0.005 250)', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>政策解读 · 行业洞察</h1>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'oklch(0.70 0.01 250)', marginTop: 'var(--spacing-md)', lineHeight: 1.7, fontFamily: 'var(--font-serif)' }}>聚焦天台产业特色，分享专业观点与实务经验</p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Category filter */}
          <FadeIn style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <div className="flex flex-wrap" style={{ gap: 'var(--spacing-sm)' }}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className="cursor-pointer" style={{
                  padding: '8px 20px', borderRadius: '56px', border: '1px solid', fontSize: 'var(--font-size-label)', fontWeight: 500, fontFamily: 'var(--font-serif)',
                  borderColor: activeCategory === cat ? 'var(--brand-navy)' : 'var(--border)', backgroundColor: activeCategory === cat ? 'var(--brand-navy)' : 'var(--card)', color: activeCategory === cat ? 'white' : 'var(--brand-navy)',
                  transition: 'all 0.2s',
                }}>{cat}</button>
              ))}
            </div>
          </FadeIn>

          <Stagger key={activeCategory} stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--spacing-lg)' }}>
            {filteredArticles.map((article) => (
              <HoverLift key={article.id}>
                <div className="service-card flex flex-col" style={{ backgroundColor: 'var(--card)', borderRadius: '8px', padding: 'var(--spacing-xl)', height: '100%', cursor: 'pointer' }} onClick={() => setSelectedArticle(article)}>
                  <div className="flex items-center" style={{ gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                    <span style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, color: categoryColors[article.category] || 'var(--brand-navy)', backgroundColor: 'var(--brand-ice)', padding: '4px 12px', borderRadius: '56px' }}>{article.category}</span>
                    <span style={{ fontSize: 'var(--font-size-small)', color: 'var(--muted-foreground)' }}>{article.date}</span>
                  </div>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--font-size-title)', color: 'var(--brand-navy)', lineHeight: 1.4, marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>{article.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-label)', color: 'var(--muted-foreground)', lineHeight: 1.7, flex: 1, fontFamily: 'var(--font-serif)' }}>{article.summary}</p>
                  <div style={{ fontSize: 'var(--font-size-label)', color: 'var(--brand-sky)', fontWeight: 500, marginTop: 'var(--spacing-lg)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.gap = '8px'; }} onMouseLeave={(e) => { e.currentTarget.style.gap = '4px'; }}>
                    阅读全文 →
                  </div>
                </div>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--brand-ice)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeIn className="text-center">
            <h2 className="font-semibold" style={{ fontSize: 'var(--font-size-headline)', color: 'var(--brand-navy)', marginBottom: 'var(--spacing-md)', fontFamily: 'var(--font-serif)' }}>获取最新专业资讯</h2>
            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-serif)' }}>点击"联系我们"，获取更多专业解读与咨询服务。</p>
            <Link to="/contact" className="pill-btn pill-btn-primary inline-block" style={{ fontSize: 'var(--font-size-label)' }}>联系我们</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default News;
