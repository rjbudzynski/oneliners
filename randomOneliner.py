#! /usr/bin/python3

import requests
import random
from sys import stderr

# urlBase = 'https://budzynski.xyz/oneliners/'
urlBase = 'https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/'

try:
    r = requests.get(urlBase + 'len', timeout=1.0)
    r.raise_for_status()
    num = int(r.text)
    index = random.randrange(0, num)
    r = requests.get(f'{urlBase}{index}', timeout=1.0)
    r.raise_for_status()
    print(r.text)
except requests.exceptions.RequestException as err:
    print(err, file=stderr)
