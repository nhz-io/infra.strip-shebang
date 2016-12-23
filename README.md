# Strip shebang so rollup wont choke

Use the structure of this repository in your project to auto-strip 
shebang (and in general, everything that matches: `/^\s*#.*/gm` pattern)

Fine tune by adding globs to `"strip-shebang`" property in **package.json**
The globs should be given relative to **node_modules**

Run by hand:
```
npm run strip-shebang
```

Will also run after `npm install` (**postinstall** script - remove if unnecessary)

(Dedupe is recommended before stripping)