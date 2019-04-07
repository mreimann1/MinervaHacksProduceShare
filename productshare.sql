--mysql database code
--replace schematemp with schema name
CREATE TABLE `schematemp`.`userlogin` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(35) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `username` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);
 
 -- creating produce table
 CREATE TABLE `schematemp`.`produce` (
  `produceID` INT NOT NULL AUTO_INCREMENT,
  `produceType` VARCHAR(15) NOT NULL,
  `expiration` DATETIME NOT NULL,
  PRIMARY KEY (`produceID`));
--creating inventory table 
--userid and produceid as foreign key
CREATE TABLE `schematemp`.`inventory` (
  `inventoryid` INT NOT NULL AUTO_INCREMENT,
  `userID` INT NOT NULL,
  `produceID` INT NOT NULL,
  `quantity` INT NULL,
  `picturelink` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`inventoryid`),
  UNIQUE INDEX `inventoryid_UNIQUE` (`inventoryid` ASC) VISIBLE,
  INDEX `userID_idx` (`userID` ASC) VISIBLE,
  INDEX `produceID_idx` (`produceID` ASC) VISIBLE,
  CONSTRAINT `userID`
    FOREIGN KEY (`userID`)
    REFERENCES `schematemp`.`userlogin` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `produceID`
    FOREIGN KEY (`produceID`)
    REFERENCES `schematemp`.`produce` (`produceID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

