#!/bin/bash
basePath="`echo $HOME`/.branch_manager"
issueFile="`echo $basePath`/current_issue.txt"

if [ ! -d $basePath ] || [ ! -f $issueFile ]; then
  return 0
fi

issue=`cat $issueFile`
message=`cat $1`

echo "[$issue] $message" > $1