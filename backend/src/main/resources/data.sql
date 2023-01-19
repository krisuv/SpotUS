insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, ROLE )
values ( 'Wiktoria', 'Gry', 'wiki@wp.pl', '$2a$10$aJhcK8Ye/VFPDxWzmusjEuk77LvvxvcebfcQIMQGZPoqNel4hPjz.', 'USER' );
insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, ROLE )
values ( 'Julia', 'Pac', 'julie@stud.usz.edu.pl', '$2a$10$aJhcK8Ye/VFPDxWzmusjEuk77LvvxvcebfcQIMQGZPoqNel4hPjz.', 'USER' );
insert into Users ( FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, ROLE )
values ( 'Norbert', 'Kot', 'norberKot@stud.usz.edu.pl', '$2a$10$ZShx6Jmcc6n1IQZUSFGyeuQ.s3oZqLB0VTgOqgoEs5MozVL761.rK', 'USER' );

insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE )
values ( 'edu', 'Impreza dzisiaj u mnie', (SELECT id from USERS WHERE id=1),  '2023-01-10 12:00:00' );
insert into Post ( TAG, CONTENT, USER_ID, PUBLISH_DATE )
values ( 'party', 'Wspólna nauka kolos ktoś coś', (SELECT id from USERS WHERE id=2), '2023-01-10 18:00:00' );

insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'z tobą zawsze!!!', (SELECT id from USERS WHERE id=2), (SELECT id from POST WHERE id=1) );
insert into Comment ( CONTENT, USER_ID, POST_ID )
values ( 'jestem za', (SELECT id from USERS WHERE id=3), (SELECT id from POST WHERE id=1) );

