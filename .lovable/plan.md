
# Arabisch (AR) toevoegen aan taalschakelaar

## Wat wordt er aangepast

In de utility bar bovenaan de website wordt de taalschakelaar uitgebreid van **NL / EN** naar **NL / EN / AR**.

## Wijziging

**Bestand:** `src/components/layout/UtilityBar.tsx`

De huidige code (regel 29-37):
```text
NL / EN
```

Wordt:
```text
NL / EN / AR
```

Er wordt een extra scheidingsteken (/) en een AR-knop toegevoegd, met dezelfde styling als de bestaande taalbuttons.

---

## Technische details

- Toevoegen van een extra `<span>` met "/" scheidingsteken
- Toevoegen van een nieuwe `<button>` voor AR met dezelfde classes als EN (opacity-70 standaard, hover naar opacity-100)
- Geen nieuwe dependencies of andere bestanden nodig
