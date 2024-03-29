1,linux正统文件系统：linux second Extended file system,ext2fs；

2,linux文件系统的记录机理(indexed alloction)：
    a,超级区块(1024B)：记录此文件系统的整体信息；
    b,inode记录文件的属性(128B/256B) ：read write execute owner group ctime；以及记录文件分布的数据块索引,inode也采用类似页表分级技术；
    c,数据块,存放真实的文件内容；

3,ext2文件系统限制：
    a,根据block大小,有不同的最大单一文件大小限制；
    b,区块初始化后不可更改；
    c,每个区块内最多只能够放置一个文件的数据！

4,读取文件内容的顺序：根目录inode->分级目录inode->文件inode->数据块； 可以看出,文件名是储存在目录inode中；

5,linux下可以并存多个文件系统,是因为VFS(virtual filesystem switch)管理；

6,ext：适合小容量(格式化慢), xfs适合大容量；

7,硬链接与符号链接(当文件移动时仍然有效)：
    a,硬链接,两个相同文件,当编辑时,两边都同时执行写操作,当一个被删除时,另一个仍然存在,优点就是安全性；硬链接不能跨越文件系统以及链接目录；
    b,符号链接(软连接)：相当于windows创建快捷方式；

8,新增一块磁盘步骤：
    a,对磁盘进行划分,以建立可用的硬盘分区；
    b,格式化硬盘分区,建立文件系统,每种文件系统格式都不一样；
    c,将该分区挂载到某个目录(访问入口)；

9,永远不要操作正在执行的文件系统,会引起一些不稳定现象,先卸载分区,才能删除分区；

10,挂载目录的条件：
    a,单一文件系统不应该被重复挂载在不同的挂载点(目录)；
    b,单一目录不应该挂载多个文件系统；
    c,要作为挂载点的目录,理论上应该都是空目录才行；

11,mount博大精深：
    a,挂载文件系统到某个目录；
    b,挂载目录到另一目录(类似软链接)；

12,内存交换分区：
    a,设置一个内存交换分区；
    b,建立一个虚拟内存的文件；
    c,两种方式：①gdisk创建分区->mkswap格式化swap文件系统格式->swapon启动swap    ②dd创建大文件->mkswap格式化文件系统->swapon启动swap
    
13,一个可以被挂载的数据通常称为文件系统,而不是硬盘分区；因此Linux是可以并存多个文件系统；