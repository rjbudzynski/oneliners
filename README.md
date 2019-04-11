# oneliners

# Files:

- ONELINERS: a collection of more or less witty oneliners (sayings or quotes) gathered from the interwebz
- split.py: generates the data/ dir
- data/: a directory of numbered single-oneliner files, plus a file `len` with the number of them
- randomOneliner.\*: programs whose purpose is to pull a single random oneliner via http(s)

# But why?

- it's a poor man's microservice that works without any executable code (server-side) and can be hosted statically
- it's an exercise in coding the exact same (client-side) functionality in different languages
- it's simple and easy to understand

# First observations:

- python: the most terse and easy to understand code
- golang: man, error handling in go is a drag. Exceptions are not such a dumb idea after all. And the executables are *huge* (even when stripped)
- javascript (node.js): all that asynchronicity can be a headache when the task you want to perform is in reality synchroneous.

comments to: Robert@Budzynski.xyz
