insert into careers (id, career_name) values (1, 'Law');
insert into careers (id, career_name) values (2, 'Construction');
insert into careers (id, career_name) values (3, 'Technology');
insert into careers (id, career_name) values (4, 'Medical');
insert into careers (id, career_name) values (5, 'Finance');

insert into job_seekers (id, career_id, avatar, first_name, last_name, email, password, about_me, resume, skills, city, country, social_media) values (1, 3, 'https://robohash.org/occaecatirerumquidem.png?size=50x50&set=set1', 'Orran', 'Blasik', 'oblasik0@constantcontact.com', 'rWE2UP8SdeM', 'Pellentesque ultrices mattis odio.', 'http://dummyimage.com/160x100.png/cc0000/ffffff', 'Lubrication', 'Azteca', 'Mexico', 'http://digg.com');
insert into job_seekers (id, career_id, avatar, first_name, last_name, email, password, about_me, resume, skills, city, country, social_media) values (2, 4, 'https://robohash.org/facilisipsumsint.png?size=50x50&set=set1', 'Hayley', 'Kretschmer', 'hkretschmer1@illinois.edu', 'OK78CoHvRRSb', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 'http://dummyimage.com/237x100.png/5fa2dd/ffffff', 'PML', 'Serawai', 'Indonesia', 'https://ustream.tv');
insert into job_seekers (id, career_id, avatar, first_name, last_name, email, password, about_me, resume, skills, city, country, social_media) values (3, 1, 'https://robohash.org/exercitationemetneque.png?size=50x50&set=set1', 'Freda', 'Benford', 'fbenford2@dailymotion.com', 'ZgdI6QkkVFp', 'Nulla suscipit ligula in lacus.', 'http://dummyimage.com/166x100.png/5fa2dd/ffffff', 'DVD Studio Pro', 'Petrivka', 'Ukraine', 'https://economist.com');
insert into job_seekers (id, career_id, avatar, first_name, last_name, email, password, about_me, resume, skills, city, country, social_media) values (4, 3, 'https://robohash.org/eumquiofficia.png?size=50x50&set=set1', 'Ammamaria', 'Scrancher', 'ascrancher3@example.com', 'L1PYaDM', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'http://dummyimage.com/192x100.png/5fa2dd/ffffff', 'Italian', 'Bayt Sīrā', 'Palestinian Territory', 'https://mozilla.org');
insert into job_seekers (id, career_id, avatar, first_name, last_name, email, password, about_me, resume, skills, city, country, social_media) values (5, 5, 'https://robohash.org/minimadoloribusincidunt.png?size=50x50&set=set1', 'Marlee', 'Tregenna', 'mtregenna4@slideshare.net', 'hH0GFYrEYM', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 'http://dummyimage.com/173x100.png/cc0000/ffffff', 'Academic Advising', 'Hexi', 'China', 'https://taobao.com');

insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (1, 2, 'rdanis0@mit.edu', 'pjAsOKA', 'Tagtune', 'https://robohash.org/quamestnumquam.png?size=50x50&set=set1', 'Quisque ut erat. Curabitur gravida nisi at nibh.', 'Sasebo', 'Japan', 'http://gmpg.org');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (2, 2, 'tbeckey1@washingtonpost.com', 'NeijfYWj9k', 'Midel', 'https://robohash.org/quisquamdoloremquequi.png?size=50x50&set=set1', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'Sumuragung', 'Indonesia', 'http://jimdo.com');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (3, 5, 'shellmore2@slideshare.net', '6XhcR3Qmr', 'Zoombox', 'https://robohash.org/doloreserroralias.png?size=50x50&set=set1', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', 'Quy Đạt', 'Vietnam', 'https://slashdot.org');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (4, 1, 'oestevez3@hao123.com', 'DuYCimz', 'Cogidoo', 'https://robohash.org/aliasevenietsunt.png?size=50x50&set=set1', 'In sagittis dui vel nisl. Duis ac nibh.', 'Muyudian', 'China', 'https://dedecms.com');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (5, 3, 'apeert4@sun.com', 'Kx1FdVxP', 'Browsezoom', 'https://robohash.org/uttotamaperiam.png?size=50x50&set=set1', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Anchorage', 'United States', 'https://marketwatch.com');

insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (1, 5, 1, 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', '2023-05-05 19:02:24');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (2, 4, 5, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2023-05-06 02:36:40');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (3, 4, 2, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2023-05-05 12:32:09');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (4, 4, 5, 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '2023-05-04 09:04:23');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (5, 5, 3, 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', '2023-05-04 04:52:35');

insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (1, 1, 5, 'Analog Circuit Design manager', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.', 22253, 'Bayanaūyl', 'Kazakhstan', 'Lyris ListManager', '01-05-2023', true);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (2, 7, 3, 'Research Assistant IV', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', 79717, 'Lófos', 'Greece', 'Web Analytics', '03-05-2023', false);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (3, 10, 1, 'Administrative Officer', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 50306, 'Huari', 'Peru', 'Distributed Systems', '04-05-2023', false);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (4, 8, 6, 'Web Developer III', 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 23636, 'Fianarantsoa', 'Madagascar', 'Musical Theatre', '04-05-2023', true);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (5, 1, 6, 'Environmental Tech', 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 22761, 'Shanghuang', 'China', 'GMF', '01-05-2023', true);

insert into favourites (id, job_seeker_id, job_listing_id) values (1, 3, 5);
insert into favourites (id, job_seeker_id, job_listing_id) values (2, 3, 3);
insert into favourites (id, job_seeker_id, job_listing_id) values (3, 4, 2);
insert into favourites (id, job_seeker_id, job_listing_id) values (4, 1, 1);
insert into favourites (id, job_seeker_id, job_listing_id) values (5, 1, 5);

insert into matches (id, job_listing_id, job_seeker_id, seeker_status, employer_status) values (1, 4, 5, true, false);
insert into matches (id, job_listing_id, job_seeker_id, seeker_status, employer_status) values (2, 4, 4, true, false);
insert into matches (id, job_listing_id, job_seeker_id, seeker_status, employer_status) values (3, 4, 3, false, false);
insert into matches (id, job_listing_id, job_seeker_id, seeker_status, employer_status) values (4, 1, 1, true, true);
insert into matches (id, job_listing_id, job_seeker_id, seeker_status, employer_status) values (5, 5, 2, false, false);
