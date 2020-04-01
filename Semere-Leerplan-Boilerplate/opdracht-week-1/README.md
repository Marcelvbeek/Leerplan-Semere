# Opdracht
Het doel van deze opdracht is om een informatieve webpagina te bouwen die goed werkt op zowel desktop als mobiele apparaten. Deze pagina zal gaan over een bekend persoon (je mag zelf kiezen wie), en moet functioneel vergelijkbaar zijn met de volgende pagina: 
https://codepen.io/freeCodeCamp/full/zNqgVx 

De code mag je plaatsen in een eigen Github repo. We blijven voor deze opdracht dus even buiten de Achmea codebase.

Als je klaar bent met de opdracht kun je een PR maken naar het origineel.

## Criteria: 
Bouw de pagina (app/index.html) met behulp van de volgende technieken: 
- HTML 
- SASS (volgens de BEM conventies) (app/styles/app.scss) 
- Bootstrap (bootstrap code staat onder app/styles/vendor/bootstrap.scss, hoef je dus niet zelf toe te voegen)

Stijl elementen moeten als losse componenten worden opgezet. Welke componenten er nodig zijn wordt uitgelegd in de losse opdrachten hieronder. Geef ook vooral je eigen stijl mee aan de componenten die je maakt. 
Gebruik nog geen Javascript tijdens deze opdracht. 

## Opdrachten (deel 1): 
- Maak een container element voor je pagina waar al je andere elementen in geplaatst zullen gaan worden. Geef dit element een passende classnaam. 
- Maak een titel component voor je pagina met daarin een tekst die het onderwerp van je pagina beschrijft (bv. "Dr. Norman Borlaug"). 
- Maak een image component voor je pagina. Deze moet bestaan uit een <img> element met een <div> element als wrapper. Kies vervolgens een passende afbeelding voor je pagina. 
- Voeg een beschrijvende tekst toe aan je image component. Deze tekst moet binnen het wrapper <div> element van je image component komen te staan. 
- Maak een component waarin je informatie kunt plaatsen over de persoon waar je pagina over gaat. Dit moet minimaal een titel, paragraaf en lijst element bevatten. 
- Maak een link component waarmee je verwijst naar een pagina waar meer informatie staat over de persoon waar je pagina over gaat. Zorg er voor dat wanneer je op de link klikt, de pagina opent in een nieuw tabblad. 
- Maak je eerder gemaakte image component responsive: 
- De breedte van de afbeelding moet zich aanpassen aan de breedte van het wrapper <div> element 
- De breedte van de afbeelding mag niet groter worden dan de oorspronkelijke breedte van de afbeelding 
- De afbeelding moet gecentreerd staan binnen het wrapper <div> element 

## Opdrachten (deel 2): 
Maak een uitbreiding van je image component met de volgende elementen:
- Wanneer je over de afbeelding hovert, moet er een semi-transparante overlay zichtbaar worden
- Verplaats de beschrijvende tekst van je image component, zodat het gecentreerd in het midden van de afbeelding zichtbaar wordt wanneer je over de afbeelding hovert

Bedenk en bouw een button component. Dit component moet aan de volgende eisen voldoen:
- De button moet een zichtbare hover en focus state hebben
- De button moet een stukje tekst en een "arrow" icoontje bevatten

We gaan deze button hergebruiken in een latere opdracht. Plaats deze voor nu eerst ergens op je pagina.

# Technologies
Most relevant technologies used in the Boilerplate:

- **JavaScript:** All the code uses JavaScript.
- **SASS:** SCSS structure with good practises.
- **Linting:** Linting for JavaScript and SASS.
- **BEM (Non strict) + BEMIT:** Some conventions for CSS classes.

### 📚 Setup and scripts

> Before start [download](https://github.com/CKGrafico/Frontend-Boilerplates/archive/basic.zip) or clone the boilerplate.
> **Install** all the dependencies.

```shell
$ npm install
```

**Run** the project for local development.

```shell
$ npm start
```

**Build** the project for a production environment.

```shell
$ npm run build
```

If you want to **test**, there are some options.

```shell
$ npm test # (Will run unit and e2e tests)
$ npm run test:unit # (Only unit tests)
$ npm run test:e2e # (Only e2e tests)
```

The **linting** is configured with [**husky**](https://github.com/typicode/husky) and will run before push, but you can run it.

```shell
$ npm run lint # (Will run scripts and styles linting)
$ npm run lint:scripts # (Only scripts lint)
$ npm run lint:styles # (Only styles lint)
```
