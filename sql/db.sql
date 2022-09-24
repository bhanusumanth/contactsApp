CREATE TABLE contacts(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  fullname VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE
);

-- Add deleted field in the data table - set existing isDeleted to false
ALTER TABLE contacts ADD (isDeleted BOOLEAN default false);