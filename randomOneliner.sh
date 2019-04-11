#! /bin/bash
set -e

URL_BASE="https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/"

num=$(($(curl -s "${URL_BASE}len")-1))
index=$(shuf -i 0-${num} -n 1)
curl -s ${URL_BASE}${index}
echo