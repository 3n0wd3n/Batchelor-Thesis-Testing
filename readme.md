# Bachelor-Thesis

Bachelor thesis at University of Palacky 2021/2022 až 2022/2023

**Vznik nápadu na bakálřskou práci** (spíš pro mě jako záznam)

Od začátku školního roku 2021/2022 se moje přítelkyně vydala cestou brigád na vlastní pěst a to tak, že začala doučovat Angličtinu. Když s tím začala, tak ze začátku používala aplikaci pro rozšíření jejího profilu mezi studenty, kteří hledají doučujícího (pro širší záběr zadala víc možností kontaktu od mobilu přes whatsup až po email). Ze začátku bylo fajn když ji studenti začali psát, ale postupem času bylo neúnosné udržovat s každým konverzaci na jiné platformě a domlouvat s každým individuálně hodiny, nebo řešit peníze skrz jiné sociální sítě. Napadlo mě tedy udělat informační systém, který by ji práci s domluvou a plánováním usnadnil při komunikaci se studenty. V dokumentu teď postupně rozeberu všechny aspekty tohoto informačního systému.

**Odkazy**

[PROTOTYP ve Figmě](https://www.figma.com/file/EsdxbekJrScMOYiIbjaQNq/Bachelor-Thesis?node-id=0%3A1)

[PÍSEMNÁ ČÁST v Overleaf](https://www.overleaf.com/read/btfcyfmwnmxq)

[TESTOVACÍ ODKAZ přes Vercel](https://batchelor-thesis-testing.vercel.app/dashboard)

**Rozdělení**

Do informačního systému by se přihlašovalo skrz standartní login. Žádná registrace by nebyla, protože by správce (Bára) každému novému příchozímu dala jeho přihlašovací jméno a heslo (mohl bych generovat). Po zadání přihlašovacích údajů by se rozeznávali tři typy uživatelů.

1. typ (správce/admin)

> - Mazání studentů (pouze zneviditelnit a znemožnit přístup, ale pro pořeby obnovení je student stále v databázi)
>
> - Jednotlivým studentům možnost zapisovat/shrnout co bylo tématem minulých hodiny
>
> - Jednotlivým studentům psát domácí úkoly
>
> - Přikládat individuálně .PDF studentům do sekce s materiály (obecně soubory)
>
> - Individuální osnova/plán pro studenta, který lze měnit správcem podle aktuální potřeby studenta po domluvě
>
> - Změnit čas následující výuky
>
> - Možnost změnit jméno, příjmení
>
> - Přidat odkaz na slovíčka (flash cards)

2. typ (student mladší 18 let)

> - Uvidí osnovu, která naznačuje cestu jakou studium bude probíhat
>
> - Krátké shrnutí hodin v sekci průběžné shrnutí
>
> - Uvidí domácí úkoly
>
> - Uvidí .PDF soubory pro tisk na hodiny
>
> - Uvidí čas následující, na kterém se domluvili, že hodina bude probíhat
>
> - Může se omluvit z hodiny
>
> - Může si změnit heslo

3. typ (student starší 18 let/rodič)

> - Uvidí všechno, co student mladší 18 let plus výčet věci, které jsou pod tímto odstavcem
>
> - Uvidí průběžné (nejespíš měsíční) zhodnocení práce studenta (jen v případě když to bude samozřejmě pro rodiče jinak studentovi staršímu 18 let to nemá moc vyznám tam psát, protože si za to zodpovídá sám).
>
> - Po zádání administrátorem/správcem kolik hodin týdně proběhlo by jednoduchý algoritmus pro výpočet trojčlenky měl vyhodi číslo, kolik to dělá za tu hodinu a posčíta s početem hodin, které proběhly --> závěrem se vždy ukáže v sekci pro administrativní informace počet kolonek (takový blok, který by měl hlavní viditelnou část právě nesplacené číslo a klidně i dole pak informace o tom za co rdič teda platí --> co proběhlo za hodiny) odpovídajících nesplaceným týdnům (je to spíš takových provizorní check-list pro rodiče aby věděli co už poplatili a co jim ještě zbývá, protože se často stává, že Bára, řeší, že si rodiče nepamatují, které týdny už zaplatilia které ne a dohledává se to v mailech).
>
> - Informace o č.ú

Pro všechny jsou samozřejmě jiná práva a každý uvidí něco jiného.

**Technologie**

Využívám NextJS (pro klientskou a serverovou část) a MongoDB (s využítím MongoDB Atlas), kde to celé hostuju na Vercelu.

**O CO BY SE DALA BAKÁLÁŘKA ROZŠÍŘIT**

- REACT NATIVE
- VYHLEDÁVÁNÍ V UŽIVATELÍCH
- PŘIDÁVÁNÍ SOUBORŮ A ODKAZŮ VŠEM (například spelling bee, woordle apod.)
- PLATEBNÍ BRÁNA
- ROZPOZNÁVÁNÍ JESTLI JE ÚLOHA HYPERTEXT A JESTLI ANO, TAK BY UKOL FUNGOVAL JAKO ODKAZ
- INTEGROVANÉ HRY (STORY DICE)
- KALENDÁŘ NA STRANĚ ADMINA, KDE BY VIDĚL VŠECHNY HODINY CO PŘES TÝDEN MÁ ABY VĚDĚL, NA KTERÉ DNY SI MŮŽU KDYŽTAK PŘIDAT STUDENTY
- DOČASNÁ OBNOVA HESLA PŘI ZAPOMENUTÍ ŽÁKA
- PŘIDÁNÍ LEKCE
- ZMĚNA LEKCE PERMANENTNĚ
- KDYŽ BARČA ZMĚNÍ HODINU, TAK UŽIVATEL NA EMAIL DOSTANE UPOZORNĚNÍ
- PŘÍDÁNÍ OKDAZŮ
- MOŽNOST PŘESUNOUT ZÁPISKY V SUMARIZACÍCH NAHORU A DOLU, PROTOŽE PO SMAZÁNÍ JEDNÉ SUMARIZACE Z NĚJAKÉHO DATA UŽ BY NEMUSELY DATUMY JÍT PO SOBĚ
- PŘI ZAKLÁDÁNÍ UŽIVATELE ŘÍCT ADMINOVI JESTLI NEDÁVÁ UŽIVATELE NA DATUM, KTERÉ UŽ MÁ NĚJAKÝ STUDENT ZABRANÉ
- V RODIČOVSKÉM MODU MÍT VŠECHNO V ČEŠTINĚ
- DODĚLAT UPOZORNĚNÍ KDYŽ SE BUDE JEDNAT O DESTRUKTIVNÍ AKCE (odstranění studenta například)
- KONTAKTNÍ INFORMACE NA DÍTĚ NEBO NA ZÁKONNÉHO ZÁSTUPCE

