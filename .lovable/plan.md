
# Logo scherp maken: PNG naar SVG

## Probleem
De header en footer gebruiken `logo.png`, wat onscherp kan worden bij schaling (vooral op retina-schermen). Er staat al een `logo.svg` in het project.

## Oplossing
De import in twee bestanden wijzigen van `logo.png` naar `logo.svg`:

### Wijzigingen

**1. `src/components/layout/Header.tsx`**
- Import wijzigen van `@/assets/logo.png` naar `@/assets/logo.svg`

**2. `src/components/layout/Footer.tsx`**
- Import wijzigen van `@/assets/logo.png` naar `@/assets/logo.svg`

---

**Opmerking:** Als de bestaande `logo.svg` niet het juiste logo is, kun je een nieuwe SVG uploaden en dan passen we die aan. SVG is altijd de beste keuze voor logo's omdat het op elk formaat en scherm scherp blijft.
