### 其他的都在注释里了！
### new findings
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 
    自动补全：
    div+div
    <div></div>
    <div></div>
    div+.green
    <div></div>
    <div class="green"></div> -->

    <!-- 
    同时编辑多行：
    shift+alt+鼠标左键选中修改的部分在往下拉选中其他行即可 
    -->

    <!-- 
    alt+z自动换行 
    -->
</body>

</html>
```

### 原因分析
 ```html
min-height: 100vh;
``` 
>  
    原因分析：(引用)
    要让 .area 在竖直方向上居中，需要确保 body 元素有足够的高度来支持居中对齐，并且 .area 元素本身需要有一个固定的高度或者最小高度，这样才能使用 align-items: center; 来实现竖直居中。
    由于 body 元素的高度是由其内容决定的，如果没有设置 min-height: 100vh;，那么 body 的高度可能不足以覆盖整个视口，导致 .area 无法在竖直方向上居中。
    给 body 元素设置 min-height: 100vh;，这样 body 的高度至少会等于视口的高度，从而允许 .area 在竖直方向上居中。如果不想使用 min-height: 100vh;，那么您可以考虑给 body 设置一个固定的高度，或者使用其他方法来确保 body 的高度足够。

### 原因分析
 ```html
min-height: 100vh;
``` 
原因分析：
区分min-height: 100%; 与min-height: 100vh;
即便父元素限制了宽高，只要子元素设置height:100vh，那么子元素的高度就会和屏幕一样高了

![辨析](https://pic.imgdb.cn/item/671271b3d29ded1a8c0ab023.png "辨析")

摘自[菜鸟教程](https://blog.csdn.net/sunyctf/article/details/131210374)

