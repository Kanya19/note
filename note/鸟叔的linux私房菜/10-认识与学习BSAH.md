1,bash的内容很多,包括变量的设置与使用,bash操作环境的创建,数据流重定向的功能；

2,bash是一个软件工具(系统启动后会自动启动bash),用于用户界面交互,执行流：用户输入字符串->shell解释->调用真正的应用程序(cp,mv)->系统调用->内核(kernel)->硬件；

3,bash也有类似C语言相关的命令：printf,while等；

4,shell总类有许多,不同shell有各自的特性,linux默认用的是Bourne shell (sh) path : /bin/sh -> Bourne again shell(bash) path : /bin/bash；

5,bash命令有分内置(如cd)和外部命令(即/bin/目录下的可执行文件)；

6,bash变量环境：
    a,活动中的用户间的环境变量是互不干扰的；

7,bash本身是一个进程,那么在bash(父进程)下启动另一个bash(子进程),父进程定义的变量不能再子进程用,可以采用export导入环境变量方式传递,子进程想要传递变量给父进程,则可以使用点命令source；

8,bash命令的执行优先级：a,alias  b,shell builtin  c,顺序查找$PATH指定路径下的命令

9,bash的环境配置文件：/etc/profile 这个是系统整体的设置文件；

10,数据流重定向：将数据给它定向到其他地方去；

11,管道命令：即前一个命令的输出作为后面一个命令的输入,并不是所有命令为管道命令,常见管道命令有：cut,grep,sort,wc,uniq,tee,tr,col,join,paste,expand,split,xargs等；