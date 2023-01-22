-- User

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Wiktoria', 'Gry', 'wiki@wp.pl', 'wixatoja', '$2a$10$aJhcK8Ye/VFPDxWzmusjEuk77LvvxvcebfcQIMQGZPoqNel4hPjz.', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Julia', 'Pac', 'julie@stud.usz.edu.pl', 'julie123', '$2a$10$aJhcK8Ye/VFPDxWzmusjEuk77LvvxvcebfcQIMQGZPoqNel4hPjz.', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Norbert', 'Kot', 'norberKot@stud.usz.edu.pl', 'speednorbi', '$2a$10$ZShx6Jmcc6n1IQZUSFGyeuQ.s3oZqLB0VTgOqgoEs5MozVL761.rK', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Wiktoria', 'Kowalik', '231642@stud.usz.edu.pl', 'wikikow', '$2a$12$iF4IxXUc0ywz.SbUrv5WvuXPoCU/hUS.S5JXMEuf9te3leror99Bq', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Kamil', 'Murarz', '235121@stud.usz.edu.pl', 'murarzbetoniarz', '$2a$12$rvNVxwmCoMaNgzlizYlho.e6fp9.odEGMUb03KC1ajD7Ocj8kLnsi', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Aleksandra', 'Ryba', '235275@stud.usz.edu.pl', 'rybka13', '$2a$12$aMJ3YNjZatELShLduOzNWuPJfQph8ucbyOS/N52pXhDCFHKtqouxG', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Mateusz', 'Mariusz', '253293@stud.usz.edu.pl', 'matmar', '$2a$12$WpF7VJRh6QXyGfC2k.xqV.l6tAdo8/sK7KxTZpO.Akqt4.KUCIgdC', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Alicja', 'Nowak', '253123@stud.usz.edu.pl', 'nowaalicja', '$2a$12$C7EWTAIpydq0HUA0gsXXd.hAlBKalSIc/P8e3AVrDz4dFPACFyBIq', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Jan', 'Szybki', '253543@stud.usz.edu.pl', 'szybkijohny', '$2a$12$ZCZiXAgiY1eyV9c.bJQgkeFsn5yRoRxYFnw6psuYtOjYxTAvtodpa', 'USER' );

insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD, ROLE )
values ( 'Nikodem', 'Karabin', '255321@stud.usz.edu.pl', 'ak47', '$2a$12$UXtTMvdcyY.ZTRi2s6QOQemX4HofznkCmPdiqpq.mGzCA9YIMoK3u', 'USER' );


-- Post

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'help', 'Czy ktoś może mi pomóc w przeprowadzce do nowego mieszkania?',
        (SELECT id from USERS WHERE id=4),  '2023-01-11 11:11:00', 34 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'help', 'Hejka wszystkim, mam taką sytuację, że nie zawsze mam czas na wieczorne spacery z psem ze względu na pracę, może ktoś mógłby mi w tym pomóc i jednocześnie znaleźć sobie towarzystwo na wieczorne spacery; )',
         (SELECT id from USERS WHERE id=1), '2023-01-13 21:37:00', 12 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'job', 'Dzień dobry, poszukujemy nowego pracownika do naszego przyjaznego i wesołego zespołu w azjatyckiej restauracji. Zatrudnimy młodego kelnera. Odpowiednie dla studentów, ponieważ istnieje możliwość pracy na drugą zmianę. Zainteresowanych prosimy o kontakt telefoniczny: 896 358 813 ',
        (SELECT id from USERS WHERE id=8), '2023-01-11 21:00:00', 31 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'job', 'Witam, szukam niani do pomocy mojej córeczce.  Potrzebnie będzie Spędzić z nią kilka godzin po przedszkolu, pobawić się zabawkami, poczytać książki i po prostu wesoło spędzić czas. Pracuję w domu i mogę nie być w stanie nadążyć za wszystkim, więc szukam małej pomocy.  Będzie mi miło, jeśli zainteresuje Cię ta oferta.  Płatność możemy uzgodnić na osobistym spotkaniu. Zadzwoń pod numer 765 362 572',
         (SELECT id from USERS WHERE id=1), '2023-01-09 15:14:00', 2 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'uni', 'Dzień dobry drodzy studenci, Samorząd Studencki  organizuje zbiórkę pomocy na schroniska dla zwierząt.  Każda pomoc jest mile widziana, ponieważ nie ma czegoś takiego jak mała pomoc. Przede wszystkim potrzebna jest karma dla zwierząt, kotów i psów, miękkie legowiska i zabawki dla zwierząt. Pomoc będzie zbierana przy wejściu na parterze,  pod adresem Cukrowa 8. Wydział Ekonomii,Finansów i Zarządzania. Z góry dziękujemy',
         (SELECT id from USERS WHERE id=2), '2023-01-03 13:42:00', 28 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'uni', 'Samorząd Studencki organizuje pokaz talentów naszej ukochanej uczelni.  Jeśli masz ochotę, aby wszyscy usłyszeli, jak śpiewasz, jak czytasz wiersze lub jak pięknie tańczysz, to zapraszamy!  Wierzymy, że nasze talenty są naszą dumą i chcemy się nimi dzielić',
         (SELECT id from USERS WHERE id=4), '2023-01-07 16:00:00', 12 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'edu', 'Zapraszamy studentów Wydziału Ekonomii,Finansów i Zarządzania w Szczecinie na praktyki studenckie w informatyce, w Departamencie ds. Teleinformatyki. Wymagania wobec kandydatów: podstawowa wiedza w zakresie obsługi sprzętu komputerowego oraz aplikacji biurowych, zaangażowanie i chęć rozwoju w obszarze IT, dobre umiejetnosci interpersonalne i komunikacyjne, umiejetność pracy w zespole, umiejetność analitycznego myslenia, znajomość jezyka angielskiego na poziome B2. Możesz zwrócić się z chęcią do Dziekanatu i ci z tym pomogą',
         (SELECT id from USERS WHERE id=9), '2023-01-03 18:00:00', 45 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'edu', 'Do 31 stycznia studenci Uniwersytet Szczeciński mogą składać wnioski o przyznanie Nagrody Rektora. Swoje osiągnięcia naukowe, sportowe, artystyczne czy społeczno-organizacyjne z okresu od 1 stycznia 2022 r. do 31 grudnia 2022 r. należy składać wraz z wypełnionym wnioskiem do Działu Spraw Studenckich',
         (SELECT id from USERS WHERE id=4), '2023-01-14 18:5:00', 17 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'sponsored', 'Jesteś studentem i szukasz komfortowego mieszkania w normalnych cenach? W takim razie ta reklama jest dla Ciebie! Nasza aplikacja DomRia to serwis posiadający wyłącznie sprawdzone apartamenty do wynajęcia, najlepsze ceny na rynku oraz bezpośrednią współpracę z właścicielami. Przyjdź do nas i przekonaj się sam.',
         (SELECT id from USERS WHERE id=5), '2023-01-15 17:17:00', 13 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'sponsored', 'Wiemy, że dla studentów najważniejsze są ich gadżety.  Do nauki, pracy i po prostu do komunikowania się z przyjaciółmi.  Jesteśmy serwisem napraw technicznych.  Najwyższa jakość i najszybsza praca, abyś mógł szybko zacząć wracać do swojego  działania!! Znajdujemy się w samym centrum Szczecina, aby było to dla Ciebie wygodniejsze.  Odwiedź naszą stronę NaprawaTechn.pl, aby się z nami skontaktować. Chętnie Ci pomożemy',
         (SELECT id from USERS WHERE id=3), '2023-01-17 15:34:00', 56 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'party', 'Cześć mam 2 bilety na jutrzejszy mecz piłki nożnej, może ktoś chce dotrzymać mi towarzystwa',
         (SELECT id from USERS WHERE id=4), '2023-01-05 12:44:00', 14 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'party', 'Środa to Dzień Studenta, proponuję iść do baru na Deptak i fajnie spędzić wieczór!! Kto ze mną?',
         (SELECT id from USERS WHERE id=2), '2023-01-11 09:34:00', 11 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'party', 'Hejka,chcę się wybrać do kina na „Avatara 2” moze ktoś jeszcze nie był a szuka kogoś do pooglądania. Proponuję czwartek o 19, a potem możemy zajrzeć do baru jeszcz na piwko xD',
         (SELECT id from USERS WHERE id=1), '2023-01-19 13:49:00', 39 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'event', 'Cześć wszystkim, mam dla was propozycję. Moi przyjaciele i ja zamierzamy zagrać w grę Mafia w ten weekend. Byłoby fajniej grać z dużą grupą, o wiele bardziej interesującą. Będziemy w sali bilardowej Olimpic od godziny 18. Będzie nam bardzo miło Was widzieć',
         (SELECT id from USERS WHERE id=2), '2023-01-20 22:11:00', 12 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'event', 'Siema wszystkim, chcę zrobić imprezę sylwestrową u siebie w domu, aby w wesoły sposób pożegnać 2022 rok. Kto jeszcze nie wie jak świętować z przyjemnością zapraszam. Każdy przynosi alkohol, żeby było mu wygodnie do picia, jedzenie (jedzenia i alkoholu nigdy nie jest za dużo). Możecie zabrać ze sobą gry planszowe, aby lepiej się poznać i jeszcze lepiej się bawić. Będziemy odpalać fajerwerki. Nowy Rok będzie na ulice Krętej 23. Zaczynamy o 20!!!Dom będzie jasno urządzony i będzie jasne, gdzie przygotowywana jest hałaśliwa impreza. Chcę jak najwięcej poznawać nowych ludzi, więc zapraszam wszystkich',
         (SELECT id from USERS WHERE id=6), '2023-01-21 08:07:00', 29 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'other', 'W naszym mieście w centrum otworzyła się nowa restauracja sushi, zapraszam ze mną',
         (SELECT id from USERS WHERE id=4), '2023-01-18 23:35:00', 30 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'other', 'Otworzyli już jarmark świąteczny, szukam towarzystwa na grzane wino',
         (SELECT id from USERS WHERE id=9), '2023-01-18 18:04:00', 16 );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE, VOTES )
values ( 'other', 'Cześć mam 2 bilety na jutrzejszy mecz piłki nożnej, może ktoś chce dotrzymać mi towarzystwa??',
         (SELECT id from USERS WHERE id=10), '2023-01-12 13:09:00', 17 );

-- Comment

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'zależy kiedy, ale wstępnie mogę', (SELECT id from USERS WHERE id=1), (SELECT id from POST WHERE id=1) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'mam wolne popołudnie', (SELECT id from USERS WHERE id=3), (SELECT id from POST WHERE id=1) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'chętnie ale za jakieś piwko może 😉', (SELECT id from USERS WHERE id=1), (SELECT id from POST WHERE id=1) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'napisz do mnie mail', (SELECT id from USERS WHERE id=2), (SELECT id from POST WHERE id=2) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'lubię pieski, chętnie pomogę', (SELECT id from USERS WHERE id=3), (SELECT id from POST WHERE id=2) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'wysłałam maila z pytaniami', (SELECT id from USERS WHERE id=1), (SELECT id from POST WHERE id=3) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'Dzwoniłem to nikt nie odbierał', (SELECT id from USERS WHERE id=6), (SELECT id from POST WHERE id=3) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'Mam doświadczenie z młodszym rodzeństwem, zadzwonię', (SELECT id from USERS WHERE id=4), (SELECT id from POST WHERE id=4) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'Chciałabym się z panią spotkać, czy jest to możliwe? ', (SELECT id from USERS WHERE id=8), (SELECT id from POST WHERE id=4) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'na schronisko - zawsze mam odłożony dodatkowy budżet', (SELECT id from USERS WHERE id=5), (SELECT id from POST WHERE id=5) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'Ostatnio kupiłam za dużo karmy, chętnie troszkę oddam', (SELECT id from USERS WHERE id=6), (SELECT id from POST WHERE id=5) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'prawie jak mam talent lol', (SELECT id from USERS WHERE id=4), (SELECT id from POST WHERE id=6) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'Spełniam wymagania, ale mam pytania, mogę się jakoś skontaktować?', (SELECT id from USERS WHERE id=7), (SELECT id from POST WHERE id=7) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'korzystałem, z całego serca polecam', (SELECT id from USERS WHERE id=9), (SELECT id from POST WHERE id=8) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'nie działa mi ta aplikacja', (SELECT id from USERS WHERE id=9), (SELECT id from POST WHERE id=8) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'fajna, prosta w obsłudze, polecam', (SELECT id from USERS WHERE id=9), (SELECT id from POST WHERE id=8) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'ostatnio oddawałem telefon, stosunkowo tanio', (SELECT id from USERS WHERE id=9), (SELECT id from POST WHERE id=9) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'polecam miłą obsługę, nie znam się na telefonach, ale zrozumieli o co mi chodzi i doradzili', (SELECT id from USERS WHERE id=9), (SELECT id from POST WHERE id=9) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'chętnie kupię oba bilety', (SELECT id from USERS WHERE id=10), (SELECT id from POST WHERE id=10) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'sympatyczna koleżanka chętnie dotrzyma towarzystwa i zaprosi na kawę by się odwdzięczyć 😉', (SELECT id from USERS WHERE id=6), (SELECT id from POST WHERE id=10) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'może byc ciężko z wolnymi miejscami', (SELECT id from USERS WHERE id=7), (SELECT id from POST WHERE id=11) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'na tym deptaku to same zwierzęta były ostatnio, nie ubliżając zwierzętom', (SELECT id from USERS WHERE id=9), (SELECT id from POST WHERE id=11) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'deptak to mój drugi dom lol', (SELECT id from USERS WHERE id=10), (SELECT id from POST WHERE id=11) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'już zdążyłem o takim filmie zapomnieć', (SELECT id from USERS WHERE id=3), (SELECT id from POST WHERE id=12) );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'dla nostalgi chętnie się przejdę', (SELECT id from USERS WHERE id=6), (SELECT id from POST WHERE id=12) );

