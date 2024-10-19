### 题目分析：
就是red/blue/green puzzle里分别提供了几个字符串，最后需要得到一个数组包含这里面所有的字符串但是得不重不漏，所以关键在于**去重**

```html
    <script>
      const redPuzzles = ["二教", "图书馆", "二教", "宿舍"];
      const bluePuzzles = ["二教", "三教", "宿舍"];
      const greenPuzzles = ["三教", "宿舍", "二教", "宿舍"];
      const resultPuzzles = collectPuzzle(redPuzzles,
        bluePuzzles,
        greenPuzzles
      );
      //函数传参，在这个函数中可以使用这三个数组
      //就是collectpuzzle返回一个数组并且赋给resultpuzzle
      //所以让collectpuzzle运行的值是不重不漏就行
      </script>
```
![传参](https://pic.imgdb.cn/item/6713d34dd29ded1a8c161f9d.png "传参")

### 参考资料和文章
[CSDN:new Set()的基础用法](https://blog.csdn.net/weixin_43724569/article/details/125633865)
[CSDN:new Set( )的基本使用以及如何去重对象数组](https://blog.csdn.net/sunyctf/article/details/131133515)
[3.2.4 ES6 数组](https://www.runoob.com/w3cnote/es6-array.html)
[3.1.1 ES6 Map 与 Set](https://www.runoob.com/w3cnote/es6-map-set.html)

### 其他的备注在js的代码里了！！

