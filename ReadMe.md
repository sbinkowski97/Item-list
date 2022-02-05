# Aplikacja Shopping list

Do wykonania aplikacji użyłem HTML5, CSS, JS(React, Express) oraz bazy danych MongoDB

## Api/Serwer
Aplikacja posiada architekturę client-serwer dlatego do jej zrealizowania wykonałem serwer który zarządza bazą danych, użytkownikami oraz zmiennymi środowiskowymi
## Lokalne środowisko
 - [Visual Studio Code](https://code.visualstudio.com/)🔥
 - [MongoDB Compass](https://www.mongodb.com/products/compass)
## Komendy
W zależności od tego co chcemy zrobić do aplikacji zostały dorobione dodatkowe komendy które ułatwiają zarządzanie aplikacją, wszystkie znajdują się w "package.json" w nodzie "scripts".

## Zmienne środowiskowe 
w pliku .env powyższej aplikacji powinny zostać uzupełnione minimum 2 pola, saltkey oraz connection string, pierwszy z nich będzie definiował złożoność enkrypcji haseł użytkowników, drug jest connection stringiem cloudowej lub lokalnej bazy danych, powinno działać na Azure Cosmos i AtlasDB

## Prezentacja aplikacji
Aplikacja została zahostowana na cloudzie herokuu dłuższy czas temu, znajduje się pod linkiem:

https://shopping-list-sbin.herokuapp.com/

Z racji tego że jest domyślnie połączona z atlasem możę potrwać zanim się załaduje lub odblokuje możliwość rejestracji ze względu na wersje demo klastra w którym się znajduje

## Zaliczenie przedmiotu
W związku z tym że nie udało mi się przekonwertować powyższej aplikacji na działanie z usługami cloud Azure pozwoliłem sobie użyć sample aplikacji microsoftu i na nie wykonać powyższe zadanie (Host aplikacji oraz połączenie z dodatkową usługą w tym przypadku AzureSQL)

![image](https://i.imgur.com/O6ijEKi.png)

Całe zarządzanie aplikacją zostało wykonane za pomocą Visual Studio Community 2022 Integracja działa

Link do aplikacji: https://dotnetappsqldb20220205182605.azurewebsites.net/