CREATE TABLE "paths" (
  "id" serial primary key,
  "name" varchar(120) not null,
  "photos" varchar(240),
  "address" varchar(200) not null,
  "rating" varchar(150),
  "length" varchar(350) not null,
  "pavement" varchar (380) not null,
  "difficulty" varchar (380) not null,
  "crowds" varchar (380) not null,
  "notes" varchar (380),
  "map" varchar (100) 
);

INSERT INTO paths (name, address, rating, length, pavement, difficulty, crowds, map)
VALUES ('Glendalough State Park', 
'25590 Whitetail Lane, Battle Lake, MN 56515', 
'5 Stars', 
'5.4 mi loop, however 1.5 mi of that is on the side of the road so may be best to turn around', 
'SUPER smooth! Very easy to gain speed. There may be some debris on the path but no cracks on this brand new beautiful asphalt.',
'Nice and curvy but not too difficult. No major hills but some inclines are very easy to gain speed on due to the smooth pavement. Great for all levels', 
'Overall pretty quiet no matter what time of day but can be packed on big holiday weekends. Mostly bike traffic so easy to pass/be passed', 
'Lat= 46.3348, Long= -95.6647');

INSERT INTO paths (name, address, rating, length, pavement, difficulty, crowds, notes, map)
VALUES('Battle Creek Regional Park (AKA Suicide Hill)', 
'210 Battle Creek Park Entrance Rd, St. Paul, MN 55119',
'3.5 Stars',
'For a straight run through without having to cross the street, the path is about 1 mile (or a little less) from the pinned parking up to Upper Afton Road. If you cross Upper Afton, the path does continue but you have to cross the road.',
'Definitely debris in spots, a couple HUGE patches of sand, some pavement cracks, not the smoothest. You have to go over multiple bridges that have huge ridges on each side but manageable if you’re going fast enough.',
'Pretty difficult- this is essentially one gradual hill with lots of dips, turns, and bumps. We call it Suicide hill because you will not lose speed once starting from the top and you have to maneuver sharp turns. The bridges also cause some difficulty because you are racing down an incline then hit the sharp incline of the bridge.',
'It opens half hour before sunrise until a half hour after sunset so early or late like that is usually the best time to go for fewer people. The parking lot is only open seasonally so it can get pretty busy especially in the middle of summer.',
'If pinned parking lot is closed, you can park on the street at Upper Afton Rd and go either direction on the path.',
'Lat= 44.9354, Long= -93.0286');

INSERT INTO paths (name, address, rating, length, pavement, difficulty, crowds, notes, map)
VALUES ('Gateway State Trail',
'For lot near smoothest section- 9131 Keswick Ave N, Stillwater, MN 55082',
'3.5 stars for pavement condition and view, but it is a little boring without many hills/curves',
'The full path is 18.3 miles from St. Paul to Stillwater',
'Pavement is rougher in the St. Paul portion so parking and starting at the pin in Stillwater will get you to the smoothest spot. Great for beginners!',
'Pretty flat in St. Paul portion, but near Stillwater has some fun little hills, nothing major. A few bridges to go over, but in general a beginner would do fine here.',
'Tons of bike traffic so best to go in early am or evenings',
'You can also park at the end of the path at Pine Point Park if you have a Washington County pass (or a fee) which is pretty smooth and flat',
'Lat= 45.0805, Long= -92.8970');
