#! /usr/bin/python3

import sys, os, shutil

try:
    arg = sys.argv[1]
except IndexError:
    exit(f'{sys.argv[0]}: data file name required.')
if os.path.exists('data'):
    shutil.rmtree('data')
os.mkdir('data')

with open(arg) as lines:
    for k, line in enumerate(lines):
        with open(f'data/{k}', 'w') as f:
            f.write(line.strip())
with open(f'data/len', 'w') as f:
    f.write(str(k + 1))
