---
title: Gatsby + Netlify CMS + GitHub快速搭建静态博客
description: Gatsby + Netlify CMS + GitHub快速搭建静态博客
date: 2019-12-30T15:50:01.996Z
---
## 为什么选 Gatsby

相比于Gatsby，我更早的发现了hexo，并且其生态要好于Gatsby，主题也很丰富。但是作为一个具有一点点React技能的（伪）前端开发而言，Gatsby的技术栈，灵活性，以及使用GraphQL来管理资源的这些特性值得为了他来踩这些坑。

## 为什么选用 Netlify

* 可以通过Netlify CMS来在线编辑文章,而脱离本地环境的限制。
* 可以托管静态资源，二级域名可用。
* 方便的CI/CD。
* 具有高度的扩展性。方便自由定制。

## 搭建过程

#### 安装gatsby

```bash
yarn global add gatsby
```

#### 构建项目

```bash
gatsby new blog https://github.com/thomaswangio/gatsby-personal-starter-blog
```

#### 启动项目

```bash
cd blog
yarn start
```

#### 修改`static/admin/config.yml`的name为github,repo为正确的github repo

类似于这样

```yml
backend:
  name: github
  repo: lmikoto/blog
```

#### 代码提交到github

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/lmikoto/blog.git
git push -u origin master
```

#### CI/CD

然后打开[app.netlify.com](https://app.netlify.com)选择“New site from Git”

![](/assets/netlify-dashboard.png)

github上新建一个auth app <https://github.com/settings/developers>

![](/assets/github-oauth-config.png)

在netlify中设置app的信息 Settings > Access control > OAuth

![](/assets/netlify-install-oauth-provider.png)

## 其他可以做的事情
这样一个简单的静态博客就搭建好了。但是相对而言还是有些简陋。缺少一些东西，包括不限于
- 比较美观的代码高亮
- 评论系统
- 适合自己的布局  

但是因为博客是Gatsby，有着比较丰富的生态，已经高度的可定制性，做出这些只是时间上的问题。
