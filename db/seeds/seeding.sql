INSERT INTO users (name, email, password, user_image)
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

INSERT INTO items (title, location, status, item_image, description, owner_id) 
VALUES 
('Stapler', 'Milton, ON', true, 'Stapler picture', 'This stapler has a very springy bite', 1),
('Scissor', 'Milton, ON', false, 'Scissors picture', 'A very sharp scissors', 1),
('Pen', 'Milton, ON', true, 'Pen picture', 'A pen that still has ink on it', 1),
('Measuring Tape', 'Victoria, BC', false, 'Measuring Tape picture', 'It has both inches and cm on it', 2),
('Lighter', 'Victoria, BC', true, 'Lighter picture', 'Just charge it and your good to go!', 2),
('Ipad', 'Victoria, BC', true, 'Ipad picture', 'Brand new Ipad', 2),
('Speakers', 'Couborg, ON', true, 'Speakers picture', 'A high-quality speakers', 3),
('Calculator', 'Couborg, ON', true, 'Calculator picture', 'Amazing calculator that has a Sine, Cosine, and Tan buttons', 3),
('Battery Bank', 'Couborg, ON', false, 'Battery Bank picture', 'Good for extra battery during hikes', 3),
('SDD Hard drive', 'Chatham-Kent, ON', false, 'SDD Hard Drive picture', 'Extra storage for your files', 4),
('Desktop Computer', 'Chatham-Kent, ON', false, 'Desktop Computer picture', 'Has a 4090 TI that has not yet caught on fire!', 4),
('Xbox Controller', 'Chatham-Kent, ON', false, 'Xbox Controller picture', 'Vintage Xbox Controller', 4),
('PS5 Controller', 'Calgary, AB', true, 'PS5 Controller picture', 'The pad and the thumbstick still works!', 5),
('Nintendo Wii', 'Calgary, AB', true, 'Nintendo Wii picture', 'A classic and is still working!', 5),
('PS5', 'Calgary, AB', true, 'PS5 picture', 'Recently bought PS5', 5),
('Laptop', 'Edmonton, AB, ON', true, 'Laptop picture', 'A working laptop that can run Solidworks for 8 hours straight', 6),
('Guitar', 'Edmonton, AB', false, 'Guitar picture', 'A very sharp scissors', 6),
('Mic Stand', 'Edmonton, AB', true, 'Mic Stand picture', 'A pen that still has ink on it', 6),
('Charger', 'Vancouver, BC', false, 'Charger picture', 'It has both inches and cm on it', 7),
('Microphone', 'Vancouver, BC', true, 'Microphone picture', 'Just charge it and your good to go!', 7),
('Nintendo Switch', 'Vancouver, BC', true, 'Nintendo Switch picture', 'Brand new Ipad', 7),
('Portable Heater', 'Regina, SK', true, 'Portable Heater picture', 'A high-quality speakers', 8),
('3D Printer', 'Regina, SK', false, '3D Printer picture', 'Amazing calculator that has a Sine, Cosine, and Tan buttons', 8),
('Mechanical Keyboard', 'Regina, SK', false, 'Mechanical Keyboard picture', 'Good for extra battery during hikes', 8),
('E-Reader', 'Winnipeg, MB', false, 'E-Reader picture', 'Extra storage for your files', 9),
('Label Maker', 'Winnipeg, MB', true, 'Label Maker picture', 'Has a 4090 TI that has not yet caught on fire!', 9),
('Lamp', 'Winnipeg, MB', false, 'Lamp picture', 'Vintage Xbox Controller', 9),
('Mouse', 'Killarney, MB', false, 'Mouse picture', 'The pad and the thumbstick still works!', 10),
('Camera', 'Killarney, MB', false, 'Camera picture', 'A classic and is still working!', 10),
('Industrial Fan', 'Killarney, MB', false, 'Industrial Fan picture', 'Recently bought PS5', 10);

INSERT INTO reservations (guest_id, item_id, start_date, end_date, date_returned, item_price, approval) VALUES
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

-- INSERT INTO user_reviews (guest_id, owner_id, item_id, trustworthy, message) -- An owner can review and rate a guest and vice versa. However, a user will have a page for themselves that shows there rent history and posted items for item/rent traceability back to them.
-- VALUES 
-- (),
-- (),
-- (),
-- (),
-- ();

-- INSERT INTO item_reviews (guest_id, item_id, rating, message) -- A guest can only rate and leave a review once for the item that they rented
-- VALUES 
-- (),
-- (),
-- (),
-- (),
-- ();