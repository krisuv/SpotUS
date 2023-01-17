insert into Users ( USERNAME, PASSWORD, ROLES )
values ( 'zwykly', 'pass', 'ROLE_USER' );
insert into Users ( USERNAME, PASSWORD, ROLES )
values ( 'admin', 'pass', 'ROLE_USER,ROLE_ADMIN' );

insert into Post ( TAG, USERNAME_ID, CONTENT, PUBLISH_DATE )
values ( 'edu', (SELECT id from USERS WHERE id=1), 'Impreza dzisiaj u mnie',  '2023-01-10 12:00:00' );
insert into Post ( TAG, USERNAME_ID, CONTENT, PUBLISH_DATE )
values ( 'party', (SELECT id from USERS WHERE id=1), 'Wspólna nauka kolos ktoś coś', '2023-01-10 18:00:00' );

insert into Comment ( CONTENT, USERNAME, POST_ID )
values ( 'z tobą zawsze!!!', 'kujon', (SELECT id from POST WHERE id=1) );
insert into Comment ( CONTENT, USERNAME, POST_ID )
values ( 'jestem za', 'kujon', (SELECT id from POST WHERE id=1) );

