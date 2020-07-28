# Watermark View

这是一个方便预览 [watermark-dom](https://github.com/saucxs/watermark-dom) 所生成的页面水印效果的 Chrome 插件。

## 实现思路

直接 css 叠加 `mix-blend-mode: color-burn;` 蒙层。自己用的是黑色水印，测试采用蓝色蒙层显示的效果较好，如果蒙层也用黑色则只能显示白色背景上的水印，其他颜色背景上叠加后都是一片黑（todo: 原理）
