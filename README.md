# Fagfredag i Webstep Fokus om SPA

Dette er et repository med eksempelkode fra fagfredag i Webstep Fokus hvor tema var Single Page Application (SPA) rammeverk.


For å kjøre igang, installer node (med package manager) fra http://nodejs.org/.
kjør så: 

```
git clone https://github.com/olavhaugen/fagfredag-spa.git
cd fagfredag-spa
npm install -g grunt-cli
npm install
grunt
```

For å hente data i JSON-format og med riktige CORS-headere, bruk http://yr-proxy.tosh.no med samme URL som til yr, f.eks:

```
http://yr-proxy.tosh.no/sted/Norge/Telemark/Sauherad/Gvarv/varsel.xml
```
eller 
```
http://yr-proxy.tosh.no/sted/Norge/Telemark/Sauherad/Gvarv/varsel.json
```