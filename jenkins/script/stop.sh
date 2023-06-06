#! /bin/bash
source /etc/profile

# set -x
# stop nestjs
containerId=`docker ps -a | grep -w nestjs  | awk '{print $1}'`

if [ "$containerId" !=  "" ] ; then
	docker stop $containerId
	echo "成功停止容器 $containerId"
fi

# stop mysql
docker stop mysql

