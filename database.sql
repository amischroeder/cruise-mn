CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE "paths" (
  "id" serial primary key,
  "name" varchar(120) not null,
  "photos" varchar(240),
  "address" varchar(200) not null,
  "length" varchar(350) not null,
  "pavement" varchar (380) not null,
  "difficulty" varchar (380) not null,
  "crowds" varchar (380) not null,
  "notes" varchar (380),
  "down_rating" INT,
  "up_rating" INT,
  "latitude" REAL, 
  "longitude" REAL
);

INSERT INTO paths (name, address, length, pavement, difficulty, crowds, notes, latitude, longitude)
VALUES ('Vadnais-Snail Lakes Regional Park (AKA Marshmallow)', '4191 Snail Lake Blvd, Shoreview, MN 55126', 'The path along the water isn’t long- maybe .5-1 mile, but you can continue to take it down highway 96 if you take the Sucker Lake Path', 'Super duper smooth! We call it Marshmallow for the beautiful, smooth, flat pavement. Rarely any debris.', 'Pretty easy- no hills but some gentle inclines. Flat and great for beginners!', 'There can be lots of fisherman along the banks of the river, but usually not too many bikers/pedestrians on the actual path.', 'There are parking lots on both sides of County Road F- both have a segment of the path that are awesome and pretty similar. Park is open 30 minutes before sunrise until 30 minutes after sunset.', '45.0632', '-93.0987');

INSERT INTO paths (name, address, length, pavement, difficulty, crowds, notes, latitude, longitude)
VALUES('Battle Creek Regional Park (AKA Suicide Hill)', 
'210 Battle Creek Park Entrance Rd, St. Paul, MN 55119',
'For a straight run through without having to cross the street, the path is about 1 mile (or a little less) from the pinned parking up to Upper Afton Road. If you cross Upper Afton, the path does continue but you have to cross the road.',
'Definitely debris in spots, a couple HUGE patches of sand, some pavement cracks, not the smoothest. You have to go over multiple bridges that have huge ridges on each side but manageable if you’re going fast enough.',
'Pretty difficult- this is essentially one gradual hill with lots of dips, turns, and bumps. We call it Suicide hill because you will not lose speed once starting from the top and you have to maneuver sharp turns. The bridges also cause some difficulty because you are racing down an incline then hit the sharp incline of the bridge.',
'It opens half hour before sunrise until a half hour after sunset so early or late like that is usually the best time to go for fewer people. The parking lot is only open seasonally so it can get pretty busy especially in the middle of summer.',
'If pinned parking lot is closed, you can park on the street at Upper Afton Rd and go either direction on the path.',
'44.9354', '-93.0286');

INSERT INTO paths (name, address, length, pavement, difficulty, crowds, notes, latitude, longitude)
VALUES ('Gateway State Trail',
'For lot near smoothest section- 9131 Keswick Ave N, Stillwater, MN 55082',
'The full path is 18.3 miles from St. Paul to Stillwater',
'Pavement is rougher in the St. Paul portion so parking and starting at the pin in Stillwater will get you to the smoothest spot. Great for beginners!',
'Pretty flat in St. Paul portion, but near Stillwater has some fun little hills, nothing major. A few bridges to go over, but in general a beginner would do fine here.',
'Tons of bike traffic so best to go in early am or evenings',
'You can also park at the end of the path at Pine Point Park if you have a Washington County pass (or a fee) which is pretty smooth and flat',
'45.0805', '-92.8970');

INSERT INTO paths (name, address, length, pavement, difficulty, crowds, notes, latitude, longitude)
VALUES ('Brown''s Creek', 'Closest lot is 9131 Keswick Ave N, Stillwater, MN 55082', '5.9 miles long and ends near downtown Stillwater', 'Awesome possum', 'Not many hills or curves so great for beginners!', 'Some bike traffic so best to go in early am or evenings, but I’d say generally slightly less busy than it’s neighbor, Gateway', 'When you park, you will only see Gateway Trail. You must take Gateway trail southwest for not even 1/4 mi and you will see the start of Browns on the left', '45.0805', '-92.8970');

INSERT INTO paths (name, address, length, pavement, difficulty, crowds, latitude, longitude)
VALUES ('Lake Rebecca Park (Hastings)', '415 Lock and Dam Rd, Hastings, MN 55033', 'You can make a full loop from the parking spot, thru Jaycee Park/along the river, but a portion is using 2nd st W and Nininger Rd/County 42 which are sidewalks. You can also keep following the path along the river', 'The smoothest stretch is the new section directly cutting thru Lake Rebecca on the Northwest section of the path, but this section is only about .5 mi long. Smoothness does vary after that, especially on the sidewalk portion. The closer you get to Jaycee Park, the crappier the pavement gets.', 'If you do the full loop, there are 2 big hills I believe, but in general the path is very flat and great for beginners!', 'Generally pretty quiet unless big summer weekend, more bikes than peds', '44.7580', '-92.8678');

INSERT INTO paths (name, address, length, pavement, difficulty, crowds, notes, latitude, longitude)
VALUES ('Spring Lake Park/Schaar''s Bluff', '8500 127th Ave E, Hastings, MN 55033', 'In this park there is just over 6 miles of paved trails total, but if you’re following the stretch of the new path, it is about 4 mi one way from the parking spot', 'Brand new asphalt so super smooth and amazing!', 'Some massive hills so if you are a beginner be prepared to hop off and walk a bit. To board the whole thing well, you’d need to be advanced but beginners could definitely do sections of it.', 'Busy when it first opened but things have calmed down- few walkers and peds but will pick up during nice weather', 'Open daily 8am-10pm', '44.7667', '-92.9360');