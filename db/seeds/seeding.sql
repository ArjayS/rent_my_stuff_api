INSERT INTO users (user_name, user_email, user_password, user_image)
VALUES
('Sylvia Palmer', 'spalmer@gmail.com', '12345', 'https://i.imgur.com/LpaY82x.png'),
('Terrence Malcolm', 'tmalcolm@gmail.com', '12345', 'https://i.imgur.com/Nmx0Qxo.png'),
('Mildred Nazir', 'mnazir@gmail.com', '12345', 'https://i.imgur.com/T2WwVfS.png'),
('Charles Roy', 'croy@gmail.com', '12345', 'https://i.imgur.com/FK8V841.jpg'),
('Sven Jones', 'sjones@gmail.com', '12345', 'https://i.imgur.com/twYrpay.jpg'),
('Susan Reynolds', 'sreynolds@gmail.com', '12345', 'https://i.imgur.com/TdOAdde.jpg'),
('Alec Quon', 'aquon@gmail.com', '12345', 'https://i.imgur.com/3tVgsra.jpg'),
('Viktor Jain', 'vjain@gmail.com', '12345', 'https://i.imgur.com/iHq8K8Z.jpg'),
('Liam Chu', 'lchu@gmail.com', '12345', 'https://i.imgur.com/nPywAp1.jpg'),
('Sam Stanic', 'sstanic@gmail.com', '12345', 'https://i.imgur.com/okB9WKC.jpg');

INSERT INTO items (item_name, item_location, item_base_price, item_status, item_image, item_description, owner_id) 
VALUES 
('Stapler', 'Milton, ON', 5, true, 'Stapler picture', 'This stapler has a very springy bite', 1),
('Scissor', 'Milton, ON', 2, false, 'Scissors picture', 'A very sharp scissors', 1),
('Pen', 'Milton, ON', 1, true, 'Pen picture', 'A pen that still has ink on it', 1),
('Measuring Tape', 'Victoria, BC', 2, false, 'Measuring Tape picture', 'It has both inches and cm on it', 2),
('Lighter', 'Victoria, BC', 2, true, 'Lighter picture', 'Just charge it and your good to go!', 2),
('Ipad', 'Victoria, BC', 15, true, 'Ipad picture', 'Brand new Ipad', 2),
('Speakers', 'Couborg, ON', 7, true, 'Speakers picture', 'A high-quality speakers', 3),
('Calculator', 'Couborg, ON', 4, true, 'Calculator picture', 'Amazing calculator that has a Sine, Cosine, and Tan buttons', 3),
('Battery Bank', 'Couborg, ON', 7, false, 'Battery Bank picture', 'Good for extra battery during hikes', 3),
('SDD Hard drive', 'Chatham-Kent, ON', 4, false, 'SDD Hard Drive picture', 'Extra storage for your files', 4),
('Desktop Computer', 'Chatham-Kent, ON', 20, false, 'Desktop Computer picture', 'Has a 4090 TI that has not yet caught on fire!', 4),
('Xbox Controller', 'Chatham-Kent, ON', 9, false, 'Xbox Controller picture', 'Vintage Xbox Controller', 4),
('PS5 Controller', 'Calgary, AB', 5, true, 'PS5 Controller picture', 'The pad and the thumbstick still works!', 5),
('Nintendo Wii', 'Calgary, AB', 15, true, 'Nintendo Wii picture', 'A classic and is still working!', 5),
('PS5', 'Calgary, AB', 25, true, 'PS5 picture', 'Recently bought PS5', 5),
('Laptop', 'Edmonton, AB, ON', 30, true, 'Laptop picture', 'A working laptop that can run Solidworks for 8 hours straight', 6),
('Guitar', 'Edmonton, AB', 10, false, 'Guitar picture', 'A very sharp scissors', 6),
('Mic Stand', 'Edmonton, AB', 9, true, 'Mic Stand picture', 'A pen that still has ink on it', 6),
('Charger', 'Vancouver, BC', 8, false, 'Charger picture', 'It has both inches and cm on it', 7),
('Microphone', 'Vancouver, BC', 18, true, 'Microphone picture', 'Just charge it and your good to go!', 7),
('Nintendo Switch', 'Vancouver, BC', 20, true, 'Nintendo Switch picture', 'Brand new Ipad', 7),
('Portable Heater', 'Regina, SK', 15, true, 'Portable Heater picture', 'A high-quality speakers', 8),
('3D Printer', 'Regina, SK', 30, false, '3D Printer picture', 'Amazing calculator that has a Sine, Cosine, and Tan buttons', 8),
('Mechanical Keyboard', 'Regina, SK', 15, false, 'Mechanical Keyboard picture', 'Good for extra battery during hikes', 8),
('E-Reader', 'Winnipeg, MB', 17, false, 'E-Reader picture', 'Extra storage for your files', 9),
('Label Maker', 'Winnipeg, MB', 13, true, 'Label Maker picture', 'Has a 4090 TI that has not yet caught on fire!', 9),
('Lamp', 'Winnipeg, MB', 8, false, 'Lamp picture', 'Vintage Xbox Controller', 9),
('Mouse', 'Killarney, MB', 6, false, 'Mouse picture', 'The pad and the thumbstick still works!', 10),
('Camera', 'Killarney, MB', 3, false, 'Camera picture', 'A classic and is still working!', 10),
('Industrial Fan', 'Killarney, MB', 20, false, 'Industrial Fan picture', 'Recently bought PS5', 10);

INSERT INTO reservations (guest_id, item_id, rsrv_start_date, rsrv_end_date, rsrv_date_returned, rsrv_price_bid, rsrv_approval) VALUES
(2, 1, '2022-11-18', '2022-11-25', '2022-11-25', 800, true),
( null, 2, null, null, null, 800, false),
(5, 3, '2022-11-19', '2022-11-27', '2022-11-27', 500, true),
(10, 4, '2022-11-17', '2022-11-19', '2022-11-19', 600, true),
(3, 5, '2022-11-14', '2022-11-21', '2022-11-22', 200, true),
(7, 6, '2022-11-15', '2022-11-25', '2022-11-25', 1200, true),
(4, 7, '2022-11-18', '2022-11-23', '2022-11-23', 700, true),
(10, 8, '2022-11-19', '2022-11-21', '2022-11-21', 500, true),
( null, 9, null, null, null, 1300, true),
( null, 10, null, null, null, 900, false),
( null, 11, null, null, null, 500, true),
( null, 12, null, null, null, 400, true),
(2, 13, '2022-11-20', '2022-11-21', '2022-11-23', 600, true),
(1, 14, '2022-11-20', '2022-11-26', '2022-11-26', 900, true),
(7, 15, '2022-11-19', '2022-11-21', '2022-11-21', 1000, true),
(10, 16, '2022-11-19', '2022-11-21', '2022-11-21', 300, true),
( null, 17, null, null, null, 500, false),
(7, 18, '2022-11-17', '2022-11-22', '2022-11-22', 400, true),
( null, 19, null, null, null, 700, true),
(1, 20, '2022-11-19', '2022-11-27', '2022-11-27', 700, true),
(2, 21, '2022-11-18', '2022-11-25', '2022-11-25', 500, true),
(2, 22, '2022-11-19', '2022-11-27', '2022-11-27', 900, true),
( null, 23, null, null, null, 500, true),
( null, 24, null, null, null, 700, false),
( null, 25, null, null, null, 600, true),
(8, 26, '2022-11-15', '2022-11-19', '2022-11-19', 900, true),
( null, 27, null, null, null, 400, false),
( null, 28, null, null, null, 500, true),
( null, 29, null, null, null, 600, true),
( null, 30, null, null, null, 900, false);

INSERT INTO user_reviews (guest_id, owner_id, item_id, rent_worthy, rent_message )
VALUES 
(1, 6, 16, 9, 'This person sent the item in the actual end date in good condition!'),
(1, 5, 13, 3, 'Returned the item immediately but in a slightly bad condition.'),
(1, 4, 10, 10, '10/10 would allow this person trustworthy'),
(1, 6, 17, 8, 'The guitar string broke but they replaced it when they gave it back'),
(1, 9, 25, 7, 'They returned the item in a good condition!'),
(2, 3, 8, 2, 'The button of the plus sign isnt working correctly when they renturned it!'),
(2, 8, 22, 9, 'My heater was returned in good condition!'),
(2, 1, 1, 9, 'They put their at most respect on the stapler!'),
(2, 10, 29, 7, 'There was a scratch on the side of my Camera'),
(3, 2, 5, 9, 'They refilled the lighter when they returned it'),
(3, 8, 24, 8, 'They took care of my keyboard!'),
(3, 7, 21, 1, 'They returned my Switch with a huge scratch on the screen!');


INSERT INTO item_reviews (guest_id, item_id, item_rating, item_message) 
VALUES 
(3, 1, 4, 'This stapler was springy!'),
(5, 1, 2, 'Pretty bad when I used it!'),
(4, 1, 3, 'It was mid'),
(10, 1, 5, 'I helped Elon Musk acquiring Twitter. I used this Stapler to finalize acquiring it!'),
(8, 1, 5, '5/5 would rent it again'),
(5, 4, 3, 'The tape measure was mid when I used it'),
(1, 4, 3, 'The tape measure was mid when I used it'),
(2, 4, 3, 'The tape measure was mid when I used it'),
(6, 4, 3, 'The tape measure was mid when I used it'),
(5, 7, 1, 'The Speakers was cutting out and had to reset the bluetooth connection often'),
(7, 7, 3, 'The Speakers was mid'),
(9, 7, 4, 'The Speakers was good');