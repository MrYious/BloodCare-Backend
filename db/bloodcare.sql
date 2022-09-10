-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2022 at 10:03 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bloodcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `address_tbl`
--

CREATE TABLE `address_tbl` (
  `id` int(10) NOT NULL,
  `region` varchar(60) NOT NULL,
  `province` varchar(40) NOT NULL,
  `city` varchar(40) NOT NULL,
  `barangay` varchar(40) NOT NULL,
  `addressLine1` varchar(150) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address_tbl`
--

INSERT INTO `address_tbl` (`id`, `region`, `province`, `city`, `barangay`, `addressLine1`, `createdAt`, `updatedAt`) VALUES
(1, 'Region IV-A (CALABARZON)', 'Laguna', 'City Of San Pedro', 'Estrella', 'B9 L19 PH2 Villa Rosa', '2022-09-09', '2022-09-09'),
(4, 'Region IV-A (CALABARZON)', 'Laguna', 'Los Baños', 'San Antonio', 'B9 L19 P2 Villa Rosa Subvision', '2022-09-09', '2022-09-09'),
(5, 'Region VIII (Eastern Visayas)', 'Leyte', 'Hilongos', 'Kang-iras', 'B9 L19 P2 Villa Rosa Subv, Brgy Estrella', '2022-09-09', '2022-09-09');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `id` int(10) NOT NULL,
  `addressID` int(10) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `middlename` varchar(15) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int(3) NOT NULL,
  `mobileNo` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `profilePicture` varchar(200) DEFAULT NULL,
  `bloodType` varchar(5) NOT NULL,
  `password` varchar(50) NOT NULL,
  `accountType` varchar(25) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`id`, `addressID`, `lastname`, `firstname`, `middlename`, `gender`, `age`, `mobileNo`, `email`, `profilePicture`, `bloodType`, `password`, `accountType`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Rosario', 'Mark', 'Perez', 'Male', 20, '09322831860', 'rosariomark37@gmail.com', NULL, 'O+', 'qwertyuiop', 'Donor', '2022-09-09', '2022-09-09'),
(3, 4, 'Leywin', 'Arthur', 'Perez', 'Male', 21, '09322831860', 'arthur123@gmail.com', '', 'AB+', 'qwertyuiop', 'Looking for Donor', '2022-09-09', '2022-09-09'),
(4, 5, 'Eralith', 'Tessia', 'Cute', 'Female', 21, '09322831860', 'tessia123@gmail.com', '', 'AB-', 'qwertyuiop', 'Donor', '2022-09-09', '2022-09-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address_tbl`
--
ALTER TABLE `address_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `addressID` (`addressID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address_tbl`
--
ALTER TABLE `address_tbl`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
