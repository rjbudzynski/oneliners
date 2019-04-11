# oneliners

## Files:

- ONELINERS: a collection of more or less witty oneliners (sayings or quotes) gathered from the interwebz
- split.py: generates the data/ dir
- data/: a directory of numbered single-oneliner files, plus a file `len` with the number of them
- randomOneliner.\*: programs whose purpose is to pull a single random oneliner via http(s)
- randomOneliner: executable compiled from the go code (linux/amd64)

## But why?

- it's a poor man's microservice that works without any executable code (server-side) and can be hosted statically
- it's an exercise in coding the exact same (client-side) functionality in different languages
- it's simple and easy to understand

## Dependencies:

- python: python3.6, requests module (pip3 install requests, or apt install python3-requests)
- go: just the standard golang environment, I used go1.12.2
- javascript: node.js, node-fetch (npm install node-fetch -g)
- bash (.sh): curl; shuf (you may not have heard of it, but it's in linux coreutils, so probably every linux has it)

## First observations:

- python: the most terse and easy to understand code
- golang: man, error handling in go is a drag. Exceptions are not such a dumb idea after all. And the executables are *huge* (even when stripped)
- javascript (node.js): all that asynchronicity can be a headache when the task you want to perform is in reality synchroneous.

## Notes:

- the compiled executable probably shouldn't be here, but not everyone has a Go build environment handy -- although it took me about three minutes to get one on my laptop.
- at least on my distro, npm modules installed with -g are not getting found by default. Solved by adding `export NODE_PATH=/usr/local/lib/node_modules` to my .bashrc
- golang's `math/rand` is tricky: by default it seeds the pseudorandom source deterministically. If you want "random" results, you must seed it yourself. In most prng libs it's the other way around.
- curl is *powerful* (in case you didn't know).

----

comments to: Robert@Budzynski.xyz
