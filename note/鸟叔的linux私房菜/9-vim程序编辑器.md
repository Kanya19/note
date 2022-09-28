1,linux上的编辑器很多，如：emacs,pico,nano,joe,vim等；

2,vim是vi的高级版本；

3,vim操作：
    a,多文件操作(vim之间是独立的)：vim file1 file2 打开多文件，:n 访问下一个文件， :N 访问上一个文件， :files列出当前vim开启的所有文件；
    b,多窗口操作：:sp filename 即可划分窗口，当filename不存在，打开两个当前文件， ctrl + w +上下箭头切换窗口；
    
4,windows(dos)与linux的换行符不同的差异导致在windows下编辑的文本不能在linux下运行，反之亦然；
    a,使用前使用格式转换命令：dos2unix,unix2dos