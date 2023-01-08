insert into Post ( TAG, CONTENT, TITLE )
values ( 2, 'Impreza dzisiaj u mnie', 'Impreza Troszyn' );
insert into Post ( TAG, CONTENT, TITLE )
values ( 1, 'Wspólna nauka kolos ktoś coś', 'Kolos Boro' );
insert into Post ( TAG, CONTENT, TITLE )
values ( 3, 'Finanse poratuje ktoś?', 'Finanse' );
insert into Post ( TAG, CONTENT, TITLE )
values ( 3, 'Finanse poratuje ktoś?', 'Finanse' );

insert into Comment ( CONTENT, POST_ID )
values ( 'z tobą zawsze!!!', (SELECT id from POST WHERE id=1) );
insert into Comment ( CONTENT, POST_ID )
values ( 'jestem za', (SELECT id from POST WHERE id=1) );
insert into Comment ( CONTENT, POST_ID )
values ( 'to kiedy?!!!', (SELECT id from POST WHERE id=3) );
insert into Comment ( CONTENT, POST_ID )
values ( 'to kiedy?!!!', (SELECT id from POST WHERE id=2) );