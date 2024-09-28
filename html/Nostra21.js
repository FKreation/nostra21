$ui.render({
  views: [{
    type: "web",
    props: {
      html: `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praxis Ankündigung</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        .header-section, .info-section, .services-section, .contact-section {
            height: 33.33%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            text-align: center;
            padding: 20px;
        }

        .header-section {
            background-color: #8A2BE2; /* Lila Farbe */
            color: white;
        }

        .info-section {
            background-color: #6A7BA2; /* Grau-blau */
            color: white;
        }

        .services-section {
            background-color: #FFFFFF; /* Weiß */
            color: #000000;
        }

        .contact-section {
            background-color: #F5F5DC; /* Beige */
            color: #000000;
        }

        p {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="header-section">
        <div>
            <p>Dr. Florian Kaatz</p>
            <p>Zahnärztliche Chirurgie & Implantologie</p>
            <p>Eine neue Zeile hinzugefügt</p>
            <p>Im Webbrowser hinzugefügt</p>
        </div>
    </div>
    <div class="info-section">
        <div>
            <p>Ich bin Dr. Florian Kaatz</p>
            <p>Ich bin spezialisiert auf zahnärztliche Chirurgie</p>
            <p>und Implantologie. Ihre Gesundheit und Ihr</p>
            <p>Wohlbefinden stehen bei mir an erster Stelle.</p>
        </div>
    </div>
    <div class="services-section">
        <div>
            <p>Unsere Leistungen:</p>
            <p>Implantologie</p>
            <p>Chirurgie</p>
            <p>Prothetik</p>
            <p>Parodontologie</p>
        </div>
    </div>
    <div class="contact-section">
        <div>
            <p>Praxis-Adresse:</p>
            <p>Beispielstraße 123</p>
            <p>12345 Musterstadt</p>
            <p>Telefon: 01234 567890</p>
            <p>E-Mail: info@praxis-kaatz.de</p>
        </div>
    </div>
</body>
</html>
`
    },
    layout: $layout.fill
  }]
});
