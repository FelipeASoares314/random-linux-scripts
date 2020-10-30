#!/bin/bash
git -C `pwd` rev-parse

function branch_to_merge {
    if [ -n "$1" ]; then
        echo "$1";
    else
        echo "master";
    fi
}

current_branch=`git branch --show-current`

echo Checkout to `branch_to_merge`
git checkout `branch_to_merge`

git pull

echo Checkout to $current_branch
git checkout $current_branch

git merge `branch_to_merge`
