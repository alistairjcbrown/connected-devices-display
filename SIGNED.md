##### Signed by https://keybase.io/alistairjcbrown
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG v1.4.14 (GNU/Linux)

iQEcBAABAgAGBQJTpiAyAAoJEJEOHi8Q7zzzecoH/AqCstl05lWVtnYtzUFuH2Mf
6+z8Gb8jtvXay1zBDvvcwdTROWh1YGnQMJDNz7j83zvmpBMIJNRTRCtY1di1yADC
MQP8tmYNjEreb6xEy+Xk8zg1RtsUd98OosNN6c0QJKrqXEo88wS16OFpzlBd/Syk
Kpnd9aHWVhSe8gbyAhrywqhwI5v63aQltmqqMbl3RZzHS7Q/fmgxr7ik1W94hxVD
NEdhTn/9N1aE6yzPw4PFzd4749/iURop36yBpfWTQROJcX5ak9/S56JaDJfLKj/R
+KWKbznMvoX4Rg+Zv5MDzaIzHfaPP6QT4UavAsS12K01j0HyBuIi8yFm0GFP6Vo=
=By4X
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size    exec  file                              contents                                                        
              ./                                                                                                
36              .bowerrc                        905a917b24f76502d770326c3a38a937971b346bc4183ebb4166f0be160f184e
59              .gitignore                      9f8511ac0fb40e0c8a42d0d69f6e9436264f23db450d3f96ae32c4a7f432a9c1
3891            Gruntfile.js                    87a47e1befc21b8f64114ee2aab2065cf8e3bdb05f02752a4121296b9645423d
1081            LICENSE                         0e7bf3c5852cb41c33a213aed24d4321df388f819323e0027c3c91a009429df8
297             README.md                       8a742659f892fb40ce1aed7e4fae729adbf208ef22f590119837322f1a540e01
439             bower.json                      c2774d522c319f372224603d6787e72e2b4e7090e0470f3995d37731546d2bda
                css/                                                                                            
1098              reset.css                     f96b44c7b969277b79410066c40296ed729b95c6173625b677326736363b7775
43                style.css                     ba7765fd4c58f9303d6b12e5502414384e6aee95679b0b888764e37b6170af88
                data/                                                                                           
2                 data.json                     44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a
1046            index.html                      a9b967e04ba01fe15d590825ea80d541f990d0d43b6a572b170ca10acf22ec08
                js/                                                                                             
137768            app.min.js                    227dcac8d1d9eab40ff3208c7972016c4576684e4f181e9b38ae388f56590308
                  src/                                                                                          
429                 app.js                      5f93502dc2edb6af7dcf71d3837cfe92f579724e2198cbb4b2e0e09482fe3b61
                    core/                                                                                       
                      shim/                                                                                     
469                     backbone.js             adac50b0c404df23ba3faa307a1d6c8fd279e2d73b73ea991403e9e699cbd00d
459                     jquery.js               b55831762eaf073ba2959cd289262c37b07b5488d75e977f6ba6989a298443bc
379                     lodash.js               518584adf4726782353cdc3c82916bd5f86a34aca999fd389efc7006ac39ee01
398                     underscore.js           ba362e8e968925af724c08f1ecccf3c8d0a91d00d829053870e02dd9223548b6
                      util/                                                                                     
595                     check-type.js           8e2a43daa9fda57d9f4fda9c9b0b00548ce5279bd8a63d4a315381f3028772b8
268                 main.js                     36ed947c31a47f80b96a1d979765915f4c251ba123d489a211bcedff22e93a90
1170                require.config.js           4ccbfdbf812d7be2b0d48bb8a19ec6b153ab0bb9f7a1ef4d20590e511a863d8d
                  tests/                                                                                        
0                   app.test.js                 e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                    core/                                                                                       
                      util/                                                                                     
1229                    check-type.test.js      ed5ea1fe3950872a3746b67ba6b83ba80f26ef8d4ee210bca59975b8ec200f98
920                     index.test.html         56c2f66166353b2e80634ddf36a3d665688598371634b6f8298767d8019d5021
365                     require.config.test.js  2a52b81b9c79585fcb5b66ab022059824a27ebc5f0af0e9cfcf62912e3d981ad
332             package.json                    013f8688fdcca112fddc670bb1cf077e9a987d6842ec444c16822adb9847723a
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