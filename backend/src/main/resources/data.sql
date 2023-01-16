insert into Post ( TAG, USERNAME, CONTENT, PUBLISH_DATE )
values ( 'edu', 'imprezowiczka', 'Impreza dzisiaj u mnie',  '2023-01-10 12:00:00' );
insert into Post ( TAG, USERNAME, CONTENT, PUBLISH_DATE )
values ( 'party', 'kujon', 'Wspólna nauka kolos ktoś coś', '2023-01-10 18:00:00' );

insert into Comment ( CONTENT, USERNAME, POST_ID )
values ( 'z tobą zawsze!!!', 'kujon', (SELECT id from POST WHERE id=1) );
insert into Comment ( CONTENT, USERNAME, POST_ID )
values ( 'jestem za', 'kujon', (SELECT id from POST WHERE id=1) );

insert into Users ( USERNAME, PASSWORD, ROLES )
values ( 'zwykly', '$2a$12$YnMKcr340MUc7apZX9sJ0.PIRvDV9o4FEVu5oxomELFlpdMs8bamy', 'ROLE_USER' );

insert into Users ( USERNAME, PASSWORD, ROLES )
values ( 'admin', '$2a$12$YnMKcr340MUc7apZX9sJ0.PIRvDV9o4FEVu5oxomELFlpdMs8bamy', 'ROLE_USER,ROLE_ADMIN' );