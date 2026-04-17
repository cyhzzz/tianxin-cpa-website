# 天台天信会计师事务所官网 - 源码分支

## 分支说明

- **gh-pages**: GitHub Pages 部署分支（构建产物 + README）
- **src**: 源码和素材分支（React/TypeScript 完整源码）

## 源码目录结构

```
frontend/
├── index.html                  # HTML 入口
├── package.json                # 项目依赖
├── pnpm-lock.yaml              # 锁定文件
├── vite.config.ts              # Vite 配置（base: './' 用于 GitHub Pages）
├── tsconfig.json               # TypeScript 配置
├── public/
│   └── assets/                 # 静态资源
│       ├── logo.svg            # 原始矢量 Logo (174KB)
│       ├── hero_office.png     # 首页 Hero 背景图 (压缩 379KB)
│       ├── team_meeting.png    # 团队图片 (压缩 356KB)
│       ├── audit_work.png      # 审计工作图 (压缩 324KB)
│       └── city_skyline.png    # 城市天际线 (压缩 449KB)
└── src/
    ├── main.tsx                # 应用入口
    ├── App.tsx                 # 路由配置（HashRouter）
    ├── App.css                 # 全局样式补充
    ├── index.css               # 设计系统（oklch 色彩变量 + 组件类）
    ├── components/
    │   ├── MotionPrimitives.tsx # 动画组件（FadeIn, Stagger, HoverLift）
    │   └── layout/
    │       ├── Navbar.tsx       # 导航栏（吸顶 + 联系我们下拉）
    │       └── Footer.tsx       # 页脚
    ├── pages/
    │   ├── Index.tsx           # 首页（服务、案例、行业、简介）
    │   ├── About.tsx           # 关于天信（简介、高管、部门、资质、历程）
    │   ├── Services.tsx        # 专业服务（6大业务详细页）
    │   ├── News.tsx            # 行业洞察（分类筛选 + 文章详情）
    │   └── Contact.tsx         # 联系我们（联系方式、FAQ、服务流程）
    ├── hooks/
    │   └── use-mobile.ts       # 移动端检测 Hook
    └── lib/
        ├── api-client.ts       # API 客户端
        └── utils.ts            # 工具函数
```

## 品牌素材

品牌素材位于 `assets/source-materials/` 目录：

| 文件 | 说明 |
|------|------|
| `天台天信会计师事务所logo-原始.svg` | 原始矢量 Logo |
| `天台天信会计师事务所logo-现代-蓝.svg` | 现代风格深蓝 Logo |
| `天台天信会计师事务所logo-现代-朱红.svg` | 现代风格朱红 Logo |
| `天台天信会计师事务所_官网素材.md` | 官网文案素材 |
| `tianxin-brand-system.html` | 品牌系统 |
| `天台天信 — 品牌标识系统.pdf` | 品牌标识系统 |

## 本地开发

```bash
cd frontend
pnpm install
pnpm dev
```

## 构建与部署

```bash
cd frontend
pnpm build
npx gh-pages -d dist -r https://github.com/cyhzzz/tianxin-cpa-website.git
```

## 修改网站内容

### 快速修改（改源码）

1. 修改 `frontend/src/pages/` 下对应页面的 `.tsx` 文件
2. 重新构建：`pnpm build`
3. 部署到 gh-pages：`npx gh-pages -d dist`

### 关键数据位置

| 内容 | 文件 | 位置 |
|------|------|------|
| 首页案例 | `Index.tsx` | `const cases = [...]` |
| 服务详情 | `Services.tsx` | 各服务对象数组 |
| 文章内容 | `News.tsx` | `const articles = [...]` |
| 团队信息 | `About.tsx` | 团队架构部分 |
| 联系方式 | `Contact.tsx` + `Navbar.tsx` | 电话、邮箱、地址 |
| 公司数据 | `Index.tsx` + `About.tsx` | 年份、人数、面积等 |

### 设计体系

- **主色**: 海军蓝 `oklch(0.30 0.12 260)`
- **辅色**: 品牌金 `oklch(0.62 0.13 75)`
- **背景**: 冰蓝 `oklch(0.97 0.005 250)`
- **字体**: Noto Serif SC (标题) + Noto Sans SC (正文)

## 联系方式

- 座机: 0576-83886633
- 手机: 13958503261
- 政府网短号: 660187
- 邮箱: 457897313@qq.com
- 地址: 浙江省天台县赤城大厦5楼
