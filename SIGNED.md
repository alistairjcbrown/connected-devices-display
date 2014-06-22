##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTps+5AAoJEJEOHi8Q7zzzxc4H/j9x5Atf6gaZ5E38zM9Ak0W4
8RRB754pofQJEuggtbyeyMb4EfQLQHpVDO4BjbTiTPLXlYWGzv+rmOX9D4EmBW+G
QY+mFx0ufrY2LnheSA8Ojgxow5USpyY+mCkpGoD5dzHg19uaUGFfRvuArC3ilkH1
+l1dUbWd3SrIa1djD8fZISnzUtCOU2zFNhZYRu0/SkgnuhRipQQ/Dz2sVjLXbak+
6sTHMk8R5PMPfOtZ/J/csS3Ahi4ZTruNn0K43qR2ePhvH0pkpFRgt5zbQEHGH/C1
tTiDCwtZ3h/tHg/T3hFYla+XKGcJ18qVPbXfbhmrfLwBJx/v8GD6kUSnmUBP5+g=
=eSYY
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size    exec  file                          contents                                                        
              ./                                                                                            
36              .bowerrc                    905a917b24f76502d770326c3a38a937971b346bc4183ebb4166f0be160f184e
59              .gitignore                  9f8511ac0fb40e0c8a42d0d69f6e9436264f23db450d3f96ae32c4a7f432a9c1
3988            Gruntfile.js                4e64e68e738e55b4ef4700d26939b7207c20ab91d1cd5b9952539c5306d3cfcb
1081            LICENSE                     0e7bf3c5852cb41c33a213aed24d4321df388f819323e0027c3c91a009429df8
297             README.md                   8a742659f892fb40ce1aed7e4fae729adbf208ef22f590119837322f1a540e01
439             bower.json                  c2774d522c319f372224603d6787e72e2b4e7090e0470f3995d37731546d2bda
                css/                                                                                        
1098              reset.css                 f96b44c7b969277b79410066c40296ed729b95c6173625b677326736363b7775
43                style.css                 ba7765fd4c58f9303d6b12e5502414384e6aee95679b0b888764e37b6170af88
                data/                                                                                       
2                 data.json                 44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a
1046            index.html                  a9b967e04ba01fe15d590825ea80d541f990d0d43b6a572b170ca10acf22ec08
                js/                                                                                         
137931            app.min.js                5d98f99ca8c825a8372b745b679017388c388cffc21fbceac65445aac33c9317
                  src/                                                                                      
512                 app.js                  bbbfb421130d5bb3434bb702280f83e5cab39129a99df04b37e99fbfeb46344c
                    core/                                                                                   
                      shim/                                                                                 
505                     backbone.js         e373e39636426f811ea26de7c67e2a3e711abfbad6807d59925a0928379c8fd5
459                     jquery.js           b55831762eaf073ba2959cd289262c37b07b5488d75e977f6ba6989a298443bc
385                     lodash.js           17c835d16e35f6b996fd1eba1beb677b121ecfbfeb60e505137c84551c3ee7be
404                     underscore.js       6d901784b2b9356cf84bcb28665ba4af013fa8b565781b71fa9a2266055faaec
                      util/                                                                                 
595                     check-type.js       977d15c74ae8daf626109c09382842aac8bbbb3b6da2d7d7e6bafb53c3a1aca3
317                 main.js                 b5a4b4778448978c95914dfd20bf650e2ff30596091b3da97454dd885c3095f7
1526                require.config.js       b139226c02d326975c3abf7e26b31b2e09876fbbe11848b0aae0aacaa0bb907a
                  tests/                                                                                    
424                 app.test.js             34f4acff8634d617a7b681ebdbe2c4b7ec4cffe24b9c25add7ca06bbebbc8ed4
                    core/                                                                                   
                      shim/                                                                                 
1355                    mocha.js            b459c971c9ee77fa4632ee9e2dda3f06e348d4db1a8b648bd1531a47bdb6d56f
                      util/                                                                                 
1181                    check-type.test.js  ea710f7749c6822a62b600a3fdbff28cc1d8539153cc661c287ef06c4359ceed
1313                    index.test.html     560be80813460d80b548fa41130d60dc9b48b010d33bb871138cca9d44162b8f
1290                index.test.html         313b03c037d6a40f5f6c7fff07f7cdd0a251524b5488ab116f35c8925e8b32cf
428                 runner.test.js          8432c17220a726637d8c5ba9e2f1735ab7a4572295ed4c5a228c6475b2924c0c
332             package.json                013f8688fdcca112fddc670bb1cf077e9a987d6842ec444c16822adb9847723a
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing