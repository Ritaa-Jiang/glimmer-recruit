# 0929 git学习
- 了解了git的历史、工作原理、操作和基本命令
- 安装git并练习使用git
# 1003 html学习
- 了解html的相关知识，阅读菜鸟文档，编写html网页
- 练习使用f12开发者工具

18:00 
遇到问题:git显示 LF will be replaced by CRLF the next time Git touches it
原因分析1:在文本处理中，CR（CarriageReturn），LF（LineFeed），CR/LF是不同操作系统上使用的换行符
见[论坛](https://blog.csdn.net/u012757419/article/details/105614028)
解决方式:使用命令行 $ git config --global core.autocrlf true

