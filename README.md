## Ts-Hub

车号: [av46978499](https://www.bilibili.com/video/av46978499?from=search&seid=9978074355973009970)

Typescript实战教程, 用 `github-api` 尝试 `typescript`

老师 `Github`: https://github.com/hfpp2012

项目地址: https://github.com/hfpp2012/TypeScript-Nodejs-Github-Report

### Setup

创建项目

```bash
git init ts-hub
cd ts-hub
git init -y
tsc --init
```

编辑 `tsconfig.json` 并创建 `dist` | `src` 目录

```bash
mkdir dist src
```

```json
{
  "outDir": "./dist",
  "rootDir": "./src",     
} 
```

创建 `.gitignore` 文件忽略 `node_modules` 和 `dist`

```bash
echo 'node_modules \ndist' > .gitignore
```

现在在 `package.json` 的 `script` 中添加一个命令, 这里说一下, 你可以全局安装 `ts` 也可以只在这个项目中安装 `ts`

```bash
# 只在这个项目中安装
npm i -D typescript

# 全局安装
npm i -g typescript
```

修改字段

```json
{
  "script": {
    "start:dev": "tsc && node dist"
  }
}
```

使用 `got` 发送请求, 在使用 `conf` 来存取数据

----


具体实现看代码, 尝鲜看下方:

```bash
cnpm i -g tiny-hub
tiny-hub
```