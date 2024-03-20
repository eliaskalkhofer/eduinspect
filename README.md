# EduInspect

## Was ist EduInspect?
Eduinspect ist eine Hospitationssoftware, die von einem Team aus vier Schülern entwickelt und implementiert wurde. Ihr Hauptziel ist es, Lehrkräfte im Schulalltag zu unterstützen, indem sie die Möglichkeit bietet, während des Unterrichts einen zweiten Pädagogen im Raum präsent zu haben. Diese Zusatzkraft kann dann wertvolle Rückmeldungen zum Unterricht geben und konstruktive Verbesserungsvorschläge machen, um den Lernprozess für die Schülerinnen und Schüler zu optimieren und eine bestmögliche Lernumgebung zu schaffen.

### Dynamisches, responsives Design
Die Software ist vollständig dynamisch und verfügt über ein responsives Design, das bedeutet, dass sie sich automatisch an jedes Bildschirmformat und jedes Gerät anpasst. Dadurch können Lehrkräfte die Software problemlos auf verschiedenen Geräten wie Desktop-Computern, Laptops, Tablets und Smartphones verwenden, ohne dass die Benutzererfahrung beeinträchtigt wird.

### Progressive Web App (PWA)
Die Software ist eine Progressive Web App (PWA), was bedeutet, dass sie wie eine herkömmliche Website funktioniert, aber auch über zusätzliche Funktionen verfügt, die normalerweise nur in nativen Apps verfügbar sind. Dadurch können Benutzer die Software direkt über den Webbrowser öffnen und verwenden, ohne dass sie zuerst installiert werden muss, sie können jedoch auf direkt auf jedem Gerät installiert werden (Windows, Mac, Linux, Android, Apple). PWAs bieten eine schnelle Ladezeit und die Möglichkeit, auf dem Startbildschirm eines Geräts gespeichert zu werden, was die Benutzerfreundlichkeit und Zugänglichkeit weiter verbessert.

Hierzu öffnen Sie die Seite einfach über Chrome (nicht in Firefox unterstützt) und klicken in der Adressleiste auf den Downloadbutton.

## Warum unsere Schule EduInspect
Eine Schule kann von der Hospitationssoftware Eduinspect aus verschiedenen Gründen  profitieren:

1. **Verbesserung der Lehrmethoden**: Aufgrund der Möglichkeit, Lehrkräften für den Unterricht Feedback mitgeben zu können, können sie diese Unterrichtsmethoden verbessern und sich kontinuierlich weiterentwickeln.
2. **Unterstützung neuer Lehrkräfte**: Neue Lehrkräfte können von der Anwesenheit eines erfahrenen Kollegen profitieren, der ihnen nach dem Unterricht Feedback gibt und sie bei der Verbesserung ihrer Unterrichtspraxis unterstützt.
3. **Förderung des kollegialen Austauschs**: Eduinspect fördert den Austausch zwischen den Lehrkräften, da sie die Möglichkeit haben, sich gegenseitig zu beobachten, voneinander zu lernen und bewährte Praktiken zu teilen.
4. **Verbesserung des Lernerfolgs**: Indem der Unterricht kontinuierlich optimiert wird, kann Eduinspect dazu beitragen, den Lernerfolg der Schülerinnen und Schüler zu steigern und eine anregende Lernumgebung zu schaffen.

## So funktioniert die Anwendung:
### Landingpage
Unterhalb der Beschreibung auf der Landingpage befinden sich zwei deutlich gekennzeichnete Schaltflächen: `Login` und `Registrieren`.

### Registrieren
Auf der Seite für die Registrierung werden folgende Daten des Benutzers benötigt:
+ Vorname
+ Nachname
+ Passwort
+ Passwort bestätigen

Der Benutzername wird automatisch aus den ersten drei Buchstaben des Nachnamens und dem ersten Buchstaben des Vornamens generiert. Dieses Kürzel wird in Großbuchstaben formatiert.

**Beispiel:** 
Vorname: `Max` 
Nachname: `Mustermann` 
Generiertes Kürzel: `MUSM`

### Login
Für den Login geben Sie einfach Ihr Kürzel und das von Ihnen gewählte Passwort ein. Bei korrekter Eingabe werden Sie unmittelbar zur Startseite der Webanwendung `Home` weitergeleitet.

## Struktur der Webanwendung - nach erfolgreicher Anmeldung 
In der linken Navigationsleiste sind die Unterseiten logisch strukturiert und bieten einen klaren roten Faden durch die Applikation.

### Home
Die Home-Seite bietet eine übersichtliche Darstellung der relevanten Daten für den angemeldeten Benutzer:

+ `Meine gesamten Hospitationen`: Hier wird die Anzahl der aktuell angebotenen Stunden angezeigt. Diese Angabe bezieht sich ausschließlich auf die eigenen Hospitationsangebote.
+ `Offene Hospitationen`:  Diese Karte zeigt alle Stunden mit dem Status **verfügbar** an.
+ `Vergebene Hospitationen`: Hier sind alle Stunden aufgeführt, die bereits an andere Benutzer vergeben wurden und somit den Status **vergeben** haben.
+ `Abgeschlossene Einheiten`: Diese Karte enthält alle Hospitationen, die bereits abgeschlossen wurden und den Status **abgeschlossen** tragen.

==> _Die detaillierte Übersicht über die Stunden und ihre Stati ist auf der Seite `Einheit anbieten` zu finden._

## Hospitation
Die Seite `Hospitation` oder `Hospitation tätigen` bietet eine Übersicht über alle von Kollegen angebotenen Stunden. 
Durch Klicken auf den grünen Pfeil (rechts in jeder Tabellenzeile) kann man das Angebot eines Kollegen annehmen und sich somit für die Teilnahme an seinem oder ihrem Unterricht registrieren. Darüber hinaus besteht die Möglichkeit, über der Tabelle nach einer bestimmten Hospitation oder einem bestimmten Hospitationsdetail zu suchen, um alle relevanten Ergebnisse zu erhalten.

## Hospitationsliste
Die Hospitationsliste bietet eine Zusammenstellung aller angenommenen Hospitationsangebote von Kollegen. Auf einen Blick lassen sich hier die Themen, Startzeiten und behandelten Fächer der einzelnen Stunden erkennen. Zusätzlich können auch eventuelle zusätzliche Informationen, die der Kollege bei der Angebotserstellung hinzugefügt hat, eingesehen werden.

Nach dem Klick auf den orangen Pfeil rechts von einem Eintrag erfolgt eine Weiterleitung zu einer Seite, auf der zusätzliches Feedback zum Unterricht, Unterrichtsstil oder ähnlichen Aspekten gegeben werden kann. Dieses Feedback wird dem Kollegen angezeigt und kann ihm bei der zukünftigen Gestaltung seines Unterrichts unterstützen.

Nachdem Feedback gegeben wurde oder falls keine Rückmeldung erfolgt, kann durch Klicken auf die Schaltfläche `Abschließen` die entsprechende Hospitation als abgeschlossen markiert und aus der Auflistung entfernt werden.

## Einheit anbieten
Auf der Seite `Einheit anbieten` befindet sich eine Tabelle mit den derzeit angebotenen Unterrichtseinheiten und deren Details. Durch klicken auf den Button mit dem Bleistift-Symbol können die Details einer angebotenen Einheit angepasst werden. Neben diesem Button befindet sich noch ein weiterer Button, um das Angebot zu revertieren bzw. das Angebot zu löschen. 

### Angebot erstellen
Über der Tabelle befindet sich eine orange Schaltfläche `Hospitation anbieten`, um eine neues Hospitationsangebot für andere Lehrer hinzuzufügen. 

Hierbei müssen folgende Details über die Einheit angegeben werden:
+ `Datum`: Das Datum an dem die Unterrichtseinheit Stattfindet.
+ `Anfangszeit`: Die Anfangszeit der besagten Unterrichtseinheit.
+ `Endzeit`: Die Endzeit der Unterrichtseinheit (auch relevant für Doppelstunden, ...)
+ `Raumnummer`: Hier wird die Raumnummer des Raumes angegeben, in dem der Unterricht stattfindet.
+ `Fach`: Das Fach, das in dieser Einheit unterrichtet wird.
+ `Information`: Zusätzliche Informationen wie Lehrstoff, ...

All diese Informationen werden nach dem Erstellen bei den Kollegen als Details des Angebots in der Tabelle angezeigt.

Nachdem diese Details eingegeben wurde klicken Sie einfach auf die orange Schaltfläche `Einheit erstellen`, um sie für Kollegen anzubieten oder auf Zurück, um die Erstellung des Angebots abzubrechen.

## Eingang
Im Menü `Eingang` befinden sich alljene Stunden, die Kollegen angenommen haben.

## Feedback
Unter dem Menüpunkt "Feedbackübersicht" sind sämtliche Rückmeldungen ersichtlich, die einem von Kollegen im Zusammenhang mit dem eigenen Unterricht gegeben wurden. Diese Rückmeldungen dienen als wertvolle Quelle für die persönliche Weiterentwicklung und ermöglichen es, sich an ihnen zu orientieren oder daraus zu lernen.

Die Feedbacks bieten Einblicke in verschiedene Aspekte des Unterrichts, wie beispielsweise Unterrichtsstil, Methoden, Interaktion mit den Schülern und die Wirksamkeit der Lehrinhalte. Durch die Analyse und Reflexion dieser Rückmeldungen können Lehrkräfte ihre Unterrichtspraxis gezielt verbessern und an die Bedürfnisse ihrer Schülerinnen und Schüler anpassen.

Darüber hinaus ermöglicht die Feedbackübersicht auch einen Austausch unter Kollegen, indem beispielsweise bewährte Praktiken geteilt oder Herausforderungen diskutiert werden können. Auf diese Weise trägt das Feedback nicht nur zur individuellen Lehrerentwicklung bei, sondern fördert auch eine kooperative und unterstützende Lehrkultur innerhalb der Schule.

![Testimage](https://github.com/eliaskalkhofer/eduinspect/blob/main/public/landing_image_right.jpg)
