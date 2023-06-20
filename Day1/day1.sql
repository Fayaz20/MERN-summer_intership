-- create a table
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT NOT NULL
);
-- insert some values
INSERT INTO students VALUES (1, 'Fayaz', 'M');
INSERT INTO students VALUES (2, 'Akilan', 'M');
INSERT INTO students VALUES (3, 'Anirudh', 'M');
INSERT INTO students VALUES (4, 'Fardheen', 'M');
INSERT INTO students VALUES (5, 'Arjun', 'M');
INSERT INTO students VALUES (6, 'Jeeva', 'M');
INSERT INTO students VALUES (7, 'Bharathan', 'M');
INSERT INTO students VALUES (8, 'Deepak', 'M');
INSERT INTO students VALUES (9, 'Dharsan', 'M');
INSERT INTO students VALUES (10, 'Gokul', 'M');
SELECT * FROM students;
ALTER TABLE students ADD age INTEGER;
update students set age=20 where id=1;
update students set age=19 where id=2;
update students set age=20 where id=3;
update students set age=19 where id=4;
update students set age=18 where id=5;
update students set age=19 where id=6;
update students set age=19 where id=7;
update students set age=19 where id=8;
update students set age=20 where id=9;
update students set age=19 where id=10;
SELECT * FROM students;
ALTER TABLE students drop column gender;
SELECT * FROM students;
SELECT * FROM students where age=20;
SELECT * FROM students order by name;
SELECT age,count(*) as count FROM students group by age;
CREATE TABLE courses(
  id INTEGER PRIMARY KEY,
  course_name TEXT NOT NULL,
  faculty TEXT NOT NULL
);
INSERT INTO courses VALUES (1, 'Biology', 'Aa');
INSERT INTO courses VALUES (2, 'Maths', 'Bb');
INSERT INTO courses VALUES (3, 'English', 'Cc');
INSERT INTO courses VALUES (4, 'History', 'Dd');
INSERT INTO courses VALUES (5, 'Maths', 'Ee');
INSERT INTO courses VALUES (6, 'Biology', 'Ff');
INSERT INTO courses VALUES (7, 'English', 'Gg');
INSERT INTO courses VALUES (8, 'History', 'Hh');
INSERT INTO courses VALUES (9, 'Geo', 'Ii');
INSERT INTO courses VALUES (10, 'English', 'Jj');
SELECT * FROM courses;
SELECT courses.course_name,students.name,courses.faculty FROM courses inner join students on courses.id=students.id;
SELECT * FROM courses left join students on courses.id=students.id;
SELECT * FROM courses right join students on courses.id=students.id;
SELECT sum(age) as sum  FROM students where age=20;
SELECT avg(age) as average  FROM students;
