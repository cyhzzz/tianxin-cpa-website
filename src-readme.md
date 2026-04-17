# 天台天信会计师事务所官网 - 源码分支

## 分支说明

- **gh-pages**: GitHub Pages 部署分支（构建产物）
- **src**: 源码和素材分支（用于后续更新迭代）

## 目录结构

```
src/
├── assets/
│   ├── built/              # 当前已构建的静态资源
│   │   ├── index-GaVaFq3D.js    # 主JS文件（含React组件）
│   │   ├── index-BiHB5QG-.css   # 主CSS文件
│   │   └── *.png               # 网站图片
│   └── source-materials/   # 源码素材
│       ├── 天台天信会计师事务所logo-现代-蓝.svg
│       ├── 天台天信会计师事务所logo-现代-朱红.svg
│       ├── 天台天信会计师事务所logo-原始.svg
│       ├── 天台天信会计师事务所_官网素材.md    # 官网文案素材
│       ├── tianxin-brand-system.html          # 品牌系统
│       └── 天台天信 — 品牌标识系统.pdf
├── index.html             # 入口文件（来自gh-pages）
└── README.md              # 本文件
```

## 更新网站内容

### 方式一：直接修改构建后的JS/CSS

文件位置：`assets/built/index-GaVaFq3D.js`

由于源码是 React 应用（已 minified），可以直接在构建后的 JS 文件中搜索并替换文本内容。

**常用替换模式：**
- 年份：`24年` → `27年`
- 团队规模：`17名` → `30+名`
- 电话号码：搜索具体号码

### 方式二：重新构建

如果需要大幅修改，建议：
1. 获取原始 React 源码
2. 修改源码后重新构建
3. 将构建产物复制到 `assets/built/`
4. 提交到 gh-pages 分支

## 品牌素材

Logo 和品牌标识位于 `assets/source-materials/` 目录：

| 文件 | 说明 |
|------|------|
| `天台天信会计师事务所logo-现代-蓝.svg` | 现代风格深蓝Logo |
| `天台天信会计师事务所logo-现代-朱红.svg` | 现代风格朱红Logo |
| `天台天信会计师事务所logo-原始.svg` | 原始Logo |
| `天台天信会计师事务所_官网素材.md` | 官网文案素材（来源文档）|

## 部署

推送到 `gh-pages` 分支后，GitHub Pages 会自动部署。

```bash
git checkout gh-pages
# 修改内容后
git add .
git commit -m "update"
git push origin gh-pages
```
