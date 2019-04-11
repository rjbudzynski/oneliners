#! /usr/bin/python3

import sys, os, shutil

try:
    arg = sys.argv[1]
except IndexError:
    exit(f'{sys.argv[0]}: file name required.')
if os.path.exists('oneliners'):
    shutil.rmtree('oneliners')
os.mkdir('oneliners')

with open(arg) as lines:
    for k, line in enumerate(lines):
        with open(f'oneliners/{k}', 'w') as f:
            f.write(line.strip())
with open(f'oneliners/len', 'w') as f:
    f.write(str(k + 1))
