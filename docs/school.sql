-- MySQL dump 10.13  Distrib 5.7.27, for osx10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: school_db
-- ------------------------------------------------------
-- Server version	5.7.27

--
-- Table structure for table `student`
--


DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `height` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
INSERT INTO `student` VALUES (1,'太郎',170),(2,'二郎',165),(3,'三郎',174);
UNLOCK TABLES;


-- Dump completed on 2019-10-07 17:30:55
