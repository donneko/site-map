
![site map title image png](./docs/img/site-map.png)

Easily creates a site map.
> Warning: in development


## Quick start

> Caution
Site scan may take 1–30 seconds. Large sites may take longer or trigger warnings.

Input
```
npx site-map https://www.donneko.net/
```

Output
```
donneko@QZ103 site-map % npx site-map https://www.donneko.net/

> site-map@0.0.1 test
> tsx test.ts

>└─ net
>    └─ donneko
>        └─ www
>            ├─ site
>            │   ├─ nav.htm
>            │   ├─ main.htm
>            │   ├─ news.htm
>            │   ├─ about.htm
>            │   ├─ works.htm
>            │   ├─ site-works
>            │   │   ├─ work-index.htm
>            │   │   ├─ img-1.htm
>            │   │   ├─ img
>            │   │   │   ├─ DONNEKO.png
>            │   │   │   ├─ DONNEKO2.png
>            │   │   │   └─ LIve.png
>            │   │   ├─ img-2.htm
>            │   │   ├─ img-onigiri.htm
>            │   │   ├─ img-live.htm
>            │   │   └─ default.htm
>            │   ├─ diary.htm
>            │   └─ links.htm
>            └─ cdn-cgi
>                └─ content
```