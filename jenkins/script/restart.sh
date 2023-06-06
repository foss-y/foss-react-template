#! /bin/bash
source /etc/profile
# set -x
# restart mysql
docker start mysql

# restart nestjs
containerId=`docker ps -a | grep -w nestjs  | awk '{print $1}'`

if [ "$containerId" !=  "" ] ; then
	docker start $containerId
	echo "成功运行容器 $containerId"
fi
