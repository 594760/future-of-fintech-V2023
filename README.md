# Future of Fintech - Kodekonkurranse Vår 2023
## Innholdsfortegnelse
- [Oppgave beskrivelse](#oppgave-beskrivelse)
- [Hvordan kjøre programmet](#hvordan-kjøre-programmet)
- [Oppbygning](#oppbygning)
- [Kommentarer](#kommentarer)

## Oppgave beskrivelse
Jeg har valgt å lage en veldig simpel app i det prosjektet som ble utlevert. Der er en side du kan bruke for å bergene 
hvor mye man kan forvente å betale i måneden på strøm med utgangspunkt i strømforbruket du har i løpet av et år.

## Hvordan kjøre programmet
Dette funker både i Windows og Linux(Ubuntu), jeg har ikke fått teste det på MAC men mener dette skal funke der også.

For å få kjøre dette må man ha [Node](https://nodejs.org/en/) og [Git](https://git-scm.com/) installert. Du trenger også
litt kunnskap i å bruke terminalen.

Etter man har Clonet ned programmet fra GitHub, går man inn i prosjekt mappen med terminalen for også bruke kommandoen 
for å starte serveren
```bash
npm run dev
```
eller
```bash
yarn dev
```
Når du starter serveren vil du få opp hvilken port som blir brukt som standard starter den på 
[http://localhost:3000/](http://localhost:3000/). Men vis port 3000 er i bruk prøver den 3001, 3002 osv... 
det vil stå i terminalen hvilke port med url som blir brukt.

Når du kommer inn er det en lenke oppe i hjørne som sender deg til min løsning.

![Bilde av startside](/public/pic-of-start-site.png)

## Oppbygning
Under [/components/powerPriceExpection](/components/powerPriceExpection) har jeg laget tre .jsx filer.

[PowerPriceExpectation.jsx](/components/powerPriceExpection/PowerPriceExpectation.jsx) er bare overskriften som er på 
siden.

[InputComponent.jsx](/components/powerPriceExpection/InputComponent.jsx) er den komponenten som tar inn inputen og viser
resultatet fra GetProvidersData.jsx

[GetProvidersData.jsx](/components/powerPriceExpection/GetProvidersData.jsx) dette er en komponent som henter inn dataen
fra API-et og regner ut hva man kan forvente å betale i strøm i månden.

I tillegg har jeg en enkel css fil for å få det til å se litt penere ut.
[PowerPriceExpectation.module.css](/components/powerPriceExpection/PowerPriceExpectation.module.css) 

Til slutt har du filen som inneholder hva som skal vises på websiden
[powerClaculation.js](/pages/powerCalculation.js)

## Kommentarer

Har jeg hatt litt mere tid ville jeg ha sett litt mere på hvordan man kan ta inn informasjon fra en fil 
(f.ekscsv eller json) med strømforbruket til å regne ut en forventet  pris på strøm. Men siden jeg ikke hadde kunnskap 
om React og Next.js gikk mye av tide på få til og forstå hvordan det funket.
