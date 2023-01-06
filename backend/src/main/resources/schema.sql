create table if not exists Comment(
    id identity,
    content varchar(255) not null,
    creationDate date not null,
    post bigint not null
);

create table if not exists Post(
    id identity,
    tag varchar(64) not null,
    content varchar(255) not null,
    title varchar(64) not null,
    creationDate date not null
);

alter table Comment
    add foreign key (post) references Post(id)