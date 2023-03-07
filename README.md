## The table below shows which commit message gets you which release type when semantic-release runs (using the default configuration):

### Commit message	                                              Release type
`
·   fix(pencil): stop graphite breaking when                      Patch Fix Release
    too much pressure applied	

·   feat(pencil): add 'graphiteWidth' option	                  Minor Feature Release

·   perf(pencil): remove graphiteWidth option                     Major Breaking Release (Note that the BREAKING CHANGE: token must be in the footer of the commit) 
    or
    BREAKING CHANGE: The graphiteWidth option has 
    been removed. The default graphite width of 
    10mm is always used for performance reasons.	
`