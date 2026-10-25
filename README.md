# Metamorphosis — China mirror（中国镜像）

A self-contained copy of [Metamorphosis](https://github.com/Kyruaaaa/metamorphosis),
a clock of rocks transformed by heat, for viewing where GitHub and CDNs are slow
or blocked. Nothing is loaded from other websites: the 3D viewer
([model-viewer](https://modelviewer.dev) 3.5.0, BSD-3-Clause) is bundled in
`vendor/`.

这是《Metamorphosis》的独立版本，所有文件（包括 3D 查看器）都在本仓库内，不依赖任何外部 CDN，适合在中国大陆访问。

- 拖动可在 3D 中转动玻璃盘，点击进入时钟。
- 第一次打开需下载约 24 MB 的 3D 模型，请稍候。

Keep it in step with the main site by copying over `index.html` (then point the
viewer back at `vendor/model-viewer.min.js`), `rocks.js` and `models/`.
