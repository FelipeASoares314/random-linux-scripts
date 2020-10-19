#!/bin/bash
basePath=`~/.branch_manager`
issueFile=`$basePath/current_issue.txt`

if [ ! -d $basePath || ! -f $issueFile ]; then
  echo `cat $1`
  return 0
fi

issue=`cat $issueFile`
echo `[$issue] $1`