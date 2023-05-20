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

insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (1, 2, 'rdanis0@mit.edu', 'pjAsOKA', 'Google', 'https://drive.google.com/uc?id=1kiu9rCCJHhKUvlGK1PzFr4dEtGTc_BDT', 'Quisque ut erat. Curabitur gravida nisi at nibh.', 'Sasebo', 'Japan', 'http://gmpg.org');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (2, 2, 'tbeckey1@washingtonpost.com', 'NeijfYWj9k', 'Apple', 'https://drive.google.com/uc?id=1-LOlbE68yAmXj3LF9084suqyjOdN5yM1', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'Sumuragung', 'Indonesia', 'http://jimdo.com');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (3, 5, 'shellmore2@slideshare.net', '6XhcR3Qmr', 'Netflix Games', 'https://drive.google.com/uc?id=1jaVUO-4FPKgqHrRfATfsuZJRpOiauZu0', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', 'Quy Đạt', 'Vietnam', 'https://slashdot.org');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (4, 1, 'oestevez3@hao123.com', 'DuYCimz', 'Microsoft', 'https://drive.google.com/uc?id=1w4BIRZgkZjmmpmWuKjxGCcuqudknIWLN', 'In sagittis dui vel nisl. Duis ac nibh.', 'Muyudian', 'China', 'https://dedecms.com');
insert into employers (id, career_id, email, password, company_name, company_logo, company_description, city, country, social_media) values (5, 3, 'apeert4@sun.com', 'Kx1FdVxP', 'Amazon', 'https://drive.google.com/uc?id=1y1m4nX6km_ub2DQ7tbckD72uFPeM9Y6e', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Anchorage', 'United States', 'https://marketwatch.com');

insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (1, 5, 1, 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', '2023-05-05 19:02:24');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (2, 4, 5, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2023-05-06 02:36:40');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (3, 4, 2, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2023-05-05 12:32:09');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (4, 4, 5, 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '2023-05-04 09:04:23');
insert into messages (id, job_seeker_id, employer_id, message, time_stamp) values (5, 5, 3, 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', '2023-05-04 04:52:35');

insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (1, 1, 2, 'Technical SEO Specialist', 'We’re looking for a Technical SEO Specialistthat will possess authentic optimism at their core. You will be someone who is looking for a challenge and is driven to create solutions that generate meaningful results — you will be proud of your work. You will be accountable for analyzing our current situation and making strategic & tactical recommendations to help them accomplish their goals.', '68,480', 'San Francisco CA', 'USA', 'Google Analytics, PPC Management', '01-05-2023', true);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (2, 4, 4, 'Senior Software Engineer', 'You will contribute to the technical design and implementation of a system critical to the everyday work of software development. You will collaborate with your team and work cross-functionally to tackle problems and design beautiful solutions. You will drive projects independently, and leverage organizational skills to thrive in a fast paced development team.', '120,000', 'Montreal QC', 'Canada', 'Kotlin, Swift, Python, Cloud Infrastructure', '03-05-2023', false);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (3, 3, 3, 'UX Designer', 'As a Senior UX Designer you will be responsible for creating the best possible experience for our players. As a UX Designer you will work closely with Game designers, Artists, Developers, Producers, UX researchers and UI artists. You will present your designs to the team, ask and receive feedback, organize workshops, etc. You will be part of a team of highly motivated professionals.', '80,720', 'Helsinki', 'Finland', 'Figma, Unity, UX Research, Prototyping', '04-05-2023', false);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (4, 5, 1, 'Data Center Operations Technician', 'The Infrastructure Operations organization is looking for Data Center Technicians to take AWS Data Centre Operations to the next level. The position will help ensure overall availability and reliability to meet or exceed defined service levels of data center operations. This position involves hardware and network diagnostics followed by physical repair and includes participation in an on-call rotation. All candidates should be willing to work both independently and with a team. Work prioritization, organizational skills, effective communication, and the ability to react quickly are critical to being successful.', '75,000', 'São Paulo', 'Brazil', 'Linux, Network Design, CompTIA A+, CCNA, ', '01-05-2023', true);
insert into job_listings (id, employer_id, career_id, job_title, job_description, salary, city, country, skills, date_posted, isClosed) values (5, 2, 5, 'Quality Engineer', 'As a Quality Engineer on our Engine team you will help drive the planning and implementation of automated testing solutions to improve the quality and efficiency of our game development processes. You will be working directly with our automation team and collaborating with game developers to aid in building reliable test code, tools, and infrastructure. We develop using the Unreal Engine (UE5) which means we program in C++ as our major language.', '90,000', 'Vancouver BC', 'Canada', 'C#, Python, Quality Testing', '04-05-2023', true);

insert into favourites (id, job_seeker_id, job_listing_id) values (1, 3, 5);
insert into favourites (id, job_seeker_id, job_listing_id) values (2, 3, 3);
insert into favourites (id, job_seeker_id, job_listing_id) values (3, 4, 2);
insert into favourites (id, job_seeker_id, job_listing_id) values (4, 1, 1);
insert into favourites (id, job_seeker_id, job_listing_id) values (5, 1, 5);

insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (1, 4, null, 'false', 'false', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (2, 2, null, 'true', 'false', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (3, 1, null, 'true', 'false', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (4, 5, null, 'false', 'false', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (5, 3, null, 'true', 'false', 'false');

insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (6, null, 1, 'false', 'false', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (7, null, 3, 'false', 'true', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (8, null, 5, 'false', 'true', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (9, null, 4, 'false', 'false', 'false');
insert into matches (id, job_seeker_id, job_listing_id, seeker_status, employer_status, not_interested) values (10, null, 2, 'false', 'true', 'false');
