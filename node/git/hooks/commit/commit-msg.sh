#!/bin/bash
basePath="`echo $HOME`/.branch_manager"
issueFile="`echo $basePath`/current_issue.txt"

if [ ! -d $basePath ] || [ ! -f $issueFile ]; then
  echo `cat $1`
  return 0
fi

issue=`cat $issueFile`
echo "[$issue] $1"