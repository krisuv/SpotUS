insert into Post ( ID, TAG, CONTENT, TITLE, CREATIONDATE )
values ( 1, 'PARTY', 'Impreza dzisiaj u mnie', 'Impreza Troszyn', '2023-01-22' );
insert into Post ( ID, TAG, CONTENT, TITLE, CREATIONDATE )
values ( 2, 'EDU', 'Wspólna nauka kolos ktoś coś', 'Kolos Boro', '2023-01-03' );
insert into Post ( ID, TAG, CONTENT, TITLE, CREATIONDATE )
values ( 3, 'EDU', 'Finanse poratuje ktoś?', 'Finanse', '2023-01-07' );
insert into Post ( ID, TAG, CONTENT, TITLE, CREATIONDATE )
values ( 4, 'PARTY', 'Impreza dzisiaj u mnie, wpadać', 'Kurwa jazda', '2023-01-11' );

insert into Comment ( ID, CONTENT, CREATIONDATE, POST )
values ( 1, 'z tobą zawsze!!!', '2023-01-22', 2 );
insert into Comment ( ID, CONTENT, CREATIONDATE, POST )
values ( 2, 'jestem za', '2023-01-22', 4 );
insert into Comment ( ID, CONTENT, CREATIONDATE, POST )
values ( 3, 'to kiedy?!!!', '2023-01-22', 4 );
insert into Comment ( ID, CONTENT, CREATIONDATE, POST )
values ( 4, 'to kiedy?!!!', '2023-01-22', 1 );