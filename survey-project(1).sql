-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2025 at 03:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `layers`
--

CREATE TABLE `layers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `layers`
--

INSERT INTO `layers` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'UNHCR', NULL, NULL),
(2, 'Center', NULL, NULL),
(3, 'Partner', NULL, NULL),
(4, 'Facility', NULL, NULL),
(5, 'Dispensary', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `parent` int(5) DEFAULT NULL,
  `created_by` int(5) NOT NULL,
  `updated_by` int(5) NOT NULL,
  `deleted_by` int(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sort` int(11) NOT NULL DEFAULT 0,
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `route` varchar(100) NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`parent`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `sort`, `id`, `name`, `route`, `deleted_at`, `status`) VALUES
(NULL, 0, 0, 0, '2025-03-05 02:06:00', '2025-03-09 23:22:12', 0, 1, 'User Management', '##', NULL, '1'),
(4, 0, 0, 0, '2025-03-09 20:34:43', '2025-03-09 20:34:43', 4, 2, 'User Info', 'user-info', NULL, '1'),
(4, 0, 0, 0, '2025-03-09 20:40:35', '2025-03-09 20:40:35', 4, 3, 'Role', 'role', NULL, '1'),
(4, 0, 0, 0, '2025-03-09 20:40:35', '2025-03-09 20:40:35', 4, 4, 'Role Permission', 'role-permission', NULL, '1'),
(4, 0, 0, 0, '2025-03-09 20:40:35', '2025-03-09 20:40:35', 4, 5, 'Menu Permission', 'menu-permission', NULL, '1'),
(NULL, 0, 0, 0, '2025-03-09 23:23:28', '2025-03-09 23:23:28', 0, 6, 'Controller', '#', NULL, '1');

-- --------------------------------------------------------

--
-- Table structure for table `menu_permissions`
--

CREATE TABLE `menu_permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `layer_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `permitted_route` varchar(191) NOT NULL,
  `menu_from` varchar(191) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_routes`
--

CREATE TABLE `menu_routes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `section` varchar(191) NOT NULL,
  `sort` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_routes`
--

INSERT INTO `menu_routes` (`id`, `name`, `menu_id`, `section`, `sort`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Add', 3, 'add', 1, 1, '2022-05-15 12:42:07', '2022-05-15 12:42:07'),
(2, 'Edit', 3, 'edit', 2, 1, '2022-05-15 12:42:07', '2022-05-15 12:42:07'),
(3, 'Add', 5, 'add', 1, 1, '2022-05-15 12:43:05', '2022-05-15 12:43:05'),
(4, 'Edit', 5, 'edit', 2, 1, '2022-05-15 12:43:05', '2022-05-15 12:43:05'),
(9, 'Delete', 5, 'delete', 2, 1, '2022-05-15 12:47:10', '2022-05-15 12:47:10'),
(10, 'Edit', 6, 'edit', 3, 1, '2022-05-15 12:47:10', '2022-05-15 12:47:10'),
(11, 'Add', 7, 'add', 1, 1, '2022-05-15 12:47:45', '2022-05-15 12:47:45'),
(12, 'Edit', 7, 'edit', 2, 1, '2022-05-15 12:47:45', '2022-05-15 12:47:45'),
(13, 'Delete', 7, 'delete', 3, 1, '2022-05-15 12:47:45', '2022-05-15 12:47:45'),
(14, 'Add', 6, 'add', 1, 1, '2022-05-15 12:48:24', '2022-05-15 12:48:24'),
(16, 'Delete', 6, 'delete', 3, 1, '2022-05-15 12:48:24', '2022-05-15 12:48:24'),
(17, 'Edit', 8, 'edit', 3, 1, '2022-05-15 12:47:45', '2022-05-15 12:47:45'),
(18, 'Add', 12, 'add', 1, 1, '2022-05-15 21:01:38', '2022-05-15 21:01:38'),
(19, 'Edit', 12, 'edit', 2, 1, '2022-05-15 21:01:38', '2022-05-15 21:01:38'),
(20, 'Delete', 12, 'delete', 3, 1, '2022-05-15 21:01:38', '2022-05-15 21:01:38'),
(24, 'Add', 13, 'add', 1, 1, '2022-05-15 21:09:32', '2022-05-15 21:09:32'),
(25, 'Edit', 13, 'edit', 2, 1, '2022-05-15 21:09:32', '2022-05-15 21:09:32'),
(26, 'Delete', 13, 'delete', 4, 1, '2022-05-15 21:09:32', '2022-05-15 21:09:32'),
(30, 'Add', 15, 'add', 1, 1, '2022-05-15 21:11:53', '2022-05-15 21:11:53'),
(31, 'Edit', 15, 'edit', 2, 1, '2022-05-15 21:11:53', '2022-05-15 21:11:53'),
(32, 'Delete', 15, 'delete', 3, 1, '2022-05-15 21:11:53', '2022-05-15 21:11:53'),
(33, 'Add', 16, 'add', 1, 1, '2022-05-15 21:13:15', '2022-05-15 21:13:15'),
(34, 'Edit', 16, 'edit', 2, 1, '2022-05-15 21:13:15', '2022-05-15 21:13:15'),
(35, 'Delete', 16, 'delete', 3, 1, '2022-05-15 21:13:15', '2022-05-15 21:13:15'),
(36, 'Add', 17, 'add', 1, 1, '2022-05-15 21:18:05', '2022-05-15 21:18:05'),
(37, 'Edit', 17, 'edit', 2, 1, '2022-05-15 21:18:05', '2022-05-15 21:18:05'),
(38, 'Delete', 17, 'delete', 3, 1, '2022-05-15 21:18:05', '2022-05-15 21:18:05'),
(42, 'Add', 19, 'add', 1, 1, '2022-05-15 21:20:55', '2022-05-15 21:20:55'),
(43, 'Edit', 19, 'edit', 2, 1, '2022-05-15 21:20:55', '2022-05-15 21:20:55'),
(44, 'Delete', 19, 'delete', 3, 1, '2022-05-15 21:20:55', '2022-05-15 21:20:55'),
(45, 'Add', 20, 'add', 1, 1, '2022-05-15 21:22:23', '2022-05-15 21:22:23'),
(46, 'Edit', 20, 'edit', 2, 1, '2022-05-15 21:22:23', '2022-05-15 21:22:23'),
(47, 'Delete', 20, 'delete', 3, 1, '2022-05-15 21:22:23', '2022-05-15 21:22:23'),
(48, 'Add', 21, 'add', 1, 1, '2022-05-15 21:24:23', '2022-05-15 21:24:23'),
(49, 'Edit', 21, 'edit', 2, 1, '2022-05-15 21:24:23', '2022-05-15 21:24:23'),
(50, 'Delete', 21, 'delete', 3, 1, '2022-05-15 21:24:23', '2022-05-15 21:24:23'),
(51, 'Add', 22, 'add', 1, 1, '2022-05-15 21:25:55', '2022-05-15 21:25:55'),
(52, 'Edit', 22, 'edit', 2, 1, '2022-05-15 21:25:55', '2022-05-15 21:25:55'),
(53, 'Delete', 22, 'delete', 3, 1, '2022-05-15 21:25:55', '2022-05-15 21:25:55'),
(54, 'Add', 23, 'add', 1, 1, '2022-05-15 21:27:21', '2022-05-15 21:27:21'),
(55, 'Edit', 23, 'edit', 2, 1, '2022-05-15 21:27:21', '2022-05-15 21:27:21'),
(56, 'Delete', 23, 'delete', 3, 1, '2022-05-15 21:27:21', '2022-05-15 21:27:21'),
(57, 'Add', 24, 'add', 1, 1, '2022-05-15 21:28:42', '2022-05-15 21:28:42'),
(58, 'Edit', 24, 'edit', 2, 1, '2022-05-15 21:28:42', '2022-05-15 21:28:42'),
(59, 'Delete', 24, 'delete', 3, 1, '2022-05-15 21:28:42', '2022-05-15 21:28:42'),
(60, 'Add', 28, 'add', 1, 1, '2022-05-15 21:33:57', '2022-05-15 21:33:57'),
(61, 'Edit', 28, 'edit', 2, 1, '2022-05-15 21:33:57', '2022-05-15 21:33:57'),
(62, 'Delete', 28, 'delete', 3, 1, '2022-05-15 21:33:57', '2022-05-15 21:33:57'),
(72, 'Add', 31, 'add', 1, 1, '2022-05-15 21:39:56', '2022-05-15 21:39:56'),
(73, 'Edit', 31, 'edit', 2, 1, '2022-05-15 21:39:56', '2022-05-15 21:39:56'),
(74, 'Delete', 31, 'delete', 3, 1, '2022-05-15 21:39:56', '2022-05-15 21:39:56'),
(75, 'Add', 32, 'add', 1, 1, '2022-05-15 21:41:46', '2022-05-15 21:41:46'),
(76, 'Edit', 32, 'edit', 2, 1, '2022-05-15 21:41:46', '2022-05-15 21:41:46'),
(77, 'Delete', 32, 'delete', 3, 1, '2022-05-15 21:41:46', '2022-05-15 21:41:46'),
(78, 'Add', 33, 'add', 1, 1, '2022-05-15 21:43:23', '2022-05-15 21:43:23'),
(79, 'Edit', 33, 'edit', 2, 1, '2022-05-15 21:43:23', '2022-05-15 21:43:23'),
(80, 'Delete', 33, 'delete', 3, 1, '2022-05-15 21:43:23', '2022-05-15 21:43:23'),
(84, 'Add', 35, 'add', 1, 1, '2022-05-15 21:45:40', '2022-05-15 21:45:40'),
(85, 'Edit', 35, 'edit', 2, 1, '2022-05-15 21:45:40', '2022-05-15 21:45:40'),
(86, 'Delete', 35, 'delete', 3, 1, '2022-05-15 21:45:40', '2022-05-15 21:45:40'),
(93, 'Add', 39, 'add', 1, 1, '2022-05-15 21:50:59', '2022-05-15 21:50:59'),
(94, 'Edit', 39, 'edit', 2, 1, '2022-05-15 21:50:59', '2022-05-15 21:50:59'),
(95, 'Delete', 39, 'delete', 3, 1, '2022-05-15 21:50:59', '2022-05-15 21:50:59'),
(96, 'Add', 40, 'add', 1, 1, '2022-05-15 21:52:03', '2022-05-15 21:52:03'),
(97, 'Edit', 40, 'edit', 2, 1, '2022-05-15 21:52:03', '2022-05-15 21:52:03'),
(98, 'Delete', 40, 'delete', 3, 1, '2022-05-15 21:52:03', '2022-05-15 21:52:03'),
(99, 'Add', 41, 'add', 1, 1, '2022-05-15 21:52:58', '2022-05-15 21:52:58'),
(100, 'Edit', 41, 'edit', 2, 1, '2022-05-15 21:52:58', '2022-05-15 21:52:58'),
(101, 'Delete', 41, 'delete', 3, 1, '2022-05-15 21:52:58', '2022-05-15 21:52:58'),
(102, 'Add', 42, 'add', 1, 1, '2022-05-15 21:54:31', '2022-05-15 21:54:31'),
(103, 'Edit', 42, 'edit', 2, 1, '2022-05-15 21:54:31', '2022-05-15 21:54:31'),
(104, 'Delete', 42, 'delete', 3, 1, '2022-05-15 21:54:31', '2022-05-15 21:54:31'),
(105, 'Add', 43, 'add', 1, 1, '2022-05-15 21:55:41', '2022-05-15 21:55:41'),
(106, 'Edit', 43, 'edit', 2, 1, '2022-05-15 21:55:41', '2022-05-15 21:55:41'),
(107, 'Delete', 43, 'delete', 3, 1, '2022-05-15 21:55:41', '2022-05-15 21:55:41'),
(108, 'Add', 44, 'add', 1, 1, '2022-05-15 21:58:08', '2022-05-15 21:58:08'),
(109, 'Edit', 44, 'edit', 2, 1, '2022-05-15 21:58:08', '2022-05-15 21:58:08'),
(110, 'Delete', 44, 'delete', 3, 1, '2022-05-15 21:58:08', '2022-05-15 21:58:08'),
(111, 'Add', 45, 'add', 1, 1, '2022-05-15 22:00:04', '2022-05-15 22:00:04'),
(112, 'Edit', 45, 'edit', 2, 1, '2022-05-15 22:00:04', '2022-05-15 22:00:04'),
(113, 'Delete', 45, 'delete', 3, 1, '2022-05-15 22:00:04', '2022-05-15 22:00:04'),
(120, 'Add', 50, 'add', 1, 1, '2022-05-15 22:04:33', '2022-05-15 22:04:33'),
(121, 'Edit', 50, 'edit', 2, 1, '2022-05-15 22:04:33', '2022-05-15 22:04:33'),
(122, 'Delete', 50, 'delete', 3, 1, '2022-05-15 22:04:33', '2022-05-15 22:04:33'),
(129, 'Add', 60, 'add', 1, 1, '2022-05-15 22:10:58', '2022-05-15 22:10:58'),
(130, 'Edit', 60, 'edit', 2, 1, '2022-05-15 22:10:58', '2022-05-15 22:10:58'),
(131, 'Delete', 60, 'delete', 3, 1, '2022-05-15 22:10:58', '2022-05-15 22:10:58'),
(132, 'Add', 46, 'add', 1, 1, '2022-06-05 02:40:14', '2022-06-05 02:40:14'),
(133, 'Edit', 46, 'edit', 2, 1, '2022-06-05 02:40:14', '2022-06-05 02:40:14'),
(134, 'Delete', 46, 'delete', 3, 1, '2022-06-05 02:40:14', '2022-06-05 02:40:14'),
(138, 'Add', 51, 'add', 1, 1, '2022-06-09 03:55:02', '2022-06-09 03:55:02'),
(139, 'Edit', 51, 'edit', 2, 1, '2022-06-09 03:55:02', '2022-06-09 03:55:02'),
(140, 'Delete', 51, 'delete', 3, 1, '2022-06-09 03:55:02', '2022-06-09 03:55:02'),
(141, 'Add', 18, 'add', 1, 1, '2022-06-09 07:14:03', '2022-06-09 07:14:03'),
(142, 'Edit', 18, 'edit', 2, 1, '2022-06-09 07:14:03', '2022-06-09 07:14:03'),
(143, 'Delete', 18, 'delete', 3, 1, '2022-06-09 07:14:03', '2022-06-09 07:14:03'),
(144, 'Add', 14, 'add', 1, 1, '2022-06-12 04:14:05', '2022-06-12 04:14:05'),
(145, 'Edit', 14, 'edit', 2, 1, '2022-06-12 04:14:05', '2022-06-12 04:14:05'),
(146, 'Delete', 14, 'delete', 3, 1, '2022-06-12 04:14:05', '2022-06-12 04:14:05'),
(150, 'Add', 59, 'add', 1, 1, '2022-06-22 22:48:34', '2022-06-22 22:48:34'),
(151, 'Edit', 59, 'edit', 2, 1, '2022-06-22 22:48:34', '2022-06-22 22:48:34'),
(152, 'Delete', 59, 'delete', 3, 1, '2022-06-22 22:48:34', '2022-06-22 22:48:34'),
(159, 'Add', 29, 'add', 1, 1, '2022-08-15 23:04:06', '2022-08-15 23:04:06'),
(160, 'Edit', 29, 'edit', 2, 1, '2022-08-15 23:04:06', '2022-08-15 23:04:06'),
(161, 'Delete', 29, 'delete', 3, 1, '2022-08-15 23:04:06', '2022-08-15 23:04:06'),
(162, 'Add', 30, 'add', 1, 1, '2022-08-15 23:04:22', '2022-08-15 23:04:22'),
(163, 'Edit', 30, 'edit', 2, 1, '2022-08-15 23:04:22', '2022-08-15 23:04:22'),
(164, 'Delete', 30, 'delete', 3, 1, '2022-08-15 23:04:22', '2022-08-15 23:04:22'),
(170, 'Add', 105, 'add', 1, 1, '2022-08-16 02:59:52', '2022-08-16 02:59:52'),
(171, 'Edit', 105, 'edit', 2, 1, '2022-08-16 02:59:52', '2022-08-16 02:59:52'),
(172, 'Delete', 105, 'delete', 3, 1, '2022-08-16 02:59:52', '2022-08-16 02:59:52'),
(177, 'Add', 98, 'add', 1, 1, '2022-08-16 03:51:26', '2022-08-16 03:51:26'),
(178, 'Edit', 98, 'edit', 2, 1, '2022-08-16 03:51:26', '2022-08-16 03:51:26'),
(180, 'Add', 104, 'add', 1, 1, '2022-08-16 04:02:24', '2022-08-16 04:02:24'),
(181, 'Edit', 104, 'edit', 2, 1, '2022-08-16 04:02:24', '2022-08-16 04:02:24'),
(182, 'Add', 49, 'add', 1, 1, '2022-08-16 04:06:43', '2022-08-16 04:06:43'),
(183, 'Edit', 49, 'edit', 2, 1, '2022-08-16 04:06:43', '2022-08-16 04:06:43'),
(184, 'Add', 69, 'add', 1, 1, '2022-08-16 04:08:05', '2022-08-16 04:08:05'),
(185, 'Edit', 69, 'edit', 2, 1, '2022-08-16 04:08:05', '2022-08-16 04:08:05'),
(186, 'Add', 80, 'add', 1, 1, '2022-08-16 04:08:58', '2022-08-16 04:08:58'),
(187, 'Edit', 80, 'edit', 2, 1, '2022-08-16 04:08:58', '2022-08-16 04:08:58'),
(188, 'Add', 79, 'add', 1, 1, '2022-08-16 04:09:52', '2022-08-16 04:09:52'),
(189, 'Edit', 79, 'edit', 2, 1, '2022-08-16 04:09:52', '2022-08-16 04:09:52'),
(190, 'Add', 26, 'add', 1, 1, '2022-08-16 04:39:45', '2022-08-16 04:39:45'),
(191, 'Edit', 26, 'edit', 2, 1, '2022-08-16 04:39:45', '2022-08-16 04:39:45'),
(192, 'Add', 54, 'add', 1, 1, '2022-08-16 04:40:35', '2022-08-16 04:40:35'),
(193, 'Edit', 54, 'edit', 2, 1, '2022-08-16 04:40:35', '2022-08-16 04:40:35'),
(194, 'Add', 63, 'add', 1, 1, '2022-08-16 04:41:09', '2022-08-16 04:41:09'),
(195, 'Edit', 63, 'edit', 2, 1, '2022-08-16 04:41:09', '2022-08-16 04:41:09'),
(196, 'Add', 82, 'add', 1, 1, '2022-08-16 04:41:49', '2022-08-16 04:41:49'),
(197, 'Edit', 82, 'edit', 2, 1, '2022-08-16 04:41:49', '2022-08-16 04:41:49'),
(198, 'Add', 86, 'add', 1, 1, '2022-08-16 04:42:21', '2022-08-16 04:42:21'),
(199, 'Edit', 86, 'edit', 2, 1, '2022-08-16 04:42:21', '2022-08-16 04:42:21'),
(200, 'Add', 87, 'add', 1, 1, '2022-08-16 04:42:47', '2022-08-16 04:42:47'),
(201, 'Edit', 87, 'edit', 2, 1, '2022-08-16 04:42:47', '2022-08-16 04:42:47'),
(202, 'Add', 88, 'add', 1, 1, '2022-08-16 04:43:13', '2022-08-16 04:43:13'),
(203, 'Edit', 88, 'edit', 2, 1, '2022-08-16 04:43:13', '2022-08-16 04:43:13'),
(204, 'Add', 95, 'add', 1, 1, '2022-08-16 04:43:39', '2022-08-16 04:43:39'),
(205, 'Edit', 95, 'edit', 2, 1, '2022-08-16 04:43:39', '2022-08-16 04:43:39'),
(210, 'Add', 27, 'add', 1, 1, '2022-08-16 04:46:17', '2022-08-16 04:46:17'),
(211, 'Edit', 27, 'edit', 2, 1, '2022-08-16 04:46:17', '2022-08-16 04:46:17'),
(212, 'Add', 55, 'add', 1, 1, '2022-08-16 04:47:37', '2022-08-16 04:47:37'),
(213, 'Edit', 55, 'edit', 2, 1, '2022-08-16 04:47:37', '2022-08-16 04:47:37'),
(214, 'Add', 56, 'add', 1, 1, '2022-08-16 04:48:06', '2022-08-16 04:48:06'),
(215, 'Edit', 56, 'edit', 2, 1, '2022-08-16 04:48:06', '2022-08-16 04:48:06'),
(216, 'Add', 58, 'add', 1, 1, '2022-08-16 04:48:50', '2022-08-16 04:48:50'),
(217, 'Edit', 58, 'edit', 2, 1, '2022-08-16 04:48:50', '2022-08-16 04:48:50'),
(218, 'Add', 61, 'add', 1, 1, '2022-08-16 04:50:27', '2022-08-16 04:50:27'),
(219, 'Edit', 61, 'edit', 2, 1, '2022-08-16 04:50:27', '2022-08-16 04:50:27'),
(222, 'Add', 101, 'add', 1, 1, '2022-08-16 04:51:49', '2022-08-16 04:51:49'),
(223, 'Edit', 101, 'edit', 2, 1, '2022-08-16 04:51:49', '2022-08-16 04:51:49'),
(224, 'Add', 102, 'add', 1, 1, '2022-08-16 04:52:24', '2022-08-16 04:52:24'),
(225, 'Edit', 102, 'edit', 2, 1, '2022-08-16 04:52:24', '2022-08-16 04:52:24'),
(226, 'Add', 96, 'add', 1, 1, '2022-08-16 04:53:05', '2022-08-16 04:53:05'),
(227, 'Edit', 96, 'edit', 2, 1, '2022-08-16 04:53:05', '2022-08-16 04:53:05'),
(228, 'Add', 89, 'add', 1, 1, '2022-08-16 04:54:36', '2022-08-16 04:54:36'),
(229, 'Edit', 89, 'edit', 2, 1, '2022-08-16 04:54:36', '2022-08-16 04:54:36'),
(230, 'Add', 90, 'add', 1, 1, '2022-08-16 04:55:02', '2022-08-16 04:55:02'),
(231, 'Edit', 90, 'edit', 2, 1, '2022-08-16 04:55:02', '2022-08-16 04:55:02'),
(232, 'Add', 92, 'add', 1, 1, '2022-08-16 04:55:28', '2022-08-16 04:55:28'),
(233, 'Edit', 92, 'edit', 2, 1, '2022-08-16 04:55:28', '2022-08-16 04:55:28'),
(234, 'Add', 93, 'add', 1, 1, '2022-08-16 04:55:52', '2022-08-16 04:55:52'),
(235, 'Edit', 93, 'edit', 2, 1, '2022-08-16 04:55:52', '2022-08-16 04:55:52'),
(236, 'Add', 64, 'add', 1, 1, '2022-08-20 19:53:53', '2022-08-20 19:53:53'),
(237, 'Edit', 64, 'edit', 2, 1, '2022-08-20 19:53:53', '2022-08-20 19:53:53'),
(240, 'Add', 66, 'add', 1, 1, '2022-08-20 19:55:09', '2022-08-20 19:55:09'),
(241, 'Edit', 66, 'edit', 2, 1, '2022-08-20 19:55:09', '2022-08-20 19:55:09'),
(242, 'Add', 67, 'add', 1, 1, '2022-08-20 19:55:47', '2022-08-20 19:55:47'),
(243, 'Edit', 67, 'edit', 2, 1, '2022-08-20 19:55:47', '2022-08-20 19:55:47'),
(244, 'Add', 68, 'add', 1, 1, '2022-08-20 19:56:26', '2022-08-20 19:56:26'),
(245, 'Edit', 68, 'edit', 2, 1, '2022-08-20 19:56:26', '2022-08-20 19:56:26'),
(246, 'Add', 83, 'add', 1, 1, '2022-08-20 19:57:11', '2022-08-20 19:57:11'),
(247, 'Edit', 83, 'edit', 2, 1, '2022-08-20 19:57:11', '2022-08-20 19:57:11'),
(248, 'Add', 81, 'add', 1, 1, '2022-08-20 19:57:52', '2022-08-20 19:57:52'),
(249, 'Edit', 81, 'edit', 2, 1, '2022-08-20 19:57:52', '2022-08-20 19:57:52'),
(250, 'Add', 84, 'add', 1, 1, '2022-08-20 19:58:23', '2022-08-20 19:58:23'),
(251, 'Edit', 84, 'edit', 2, 1, '2022-08-20 19:58:23', '2022-08-20 19:58:23'),
(252, 'Add', 85, 'add', 1, 1, '2022-08-20 19:58:50', '2022-08-20 19:58:50'),
(253, 'Edit', 85, 'edit', 2, 1, '2022-08-20 19:58:50', '2022-08-20 19:58:50'),
(254, 'Add', 48, 'add', 1, 1, '2022-08-20 19:59:46', '2022-08-20 19:59:46'),
(255, 'Edit', 48, 'edit', 2, 1, '2022-08-20 19:59:46', '2022-08-20 19:59:46'),
(256, 'Add', 72, 'add', 1, 1, '2022-08-20 20:00:37', '2022-08-20 20:00:37'),
(257, 'Edit', 72, 'edit', 2, 1, '2022-08-20 20:00:37', '2022-08-20 20:00:37'),
(258, 'Add', 73, 'add', 1, 1, '2022-08-20 20:01:05', '2022-08-20 20:01:05'),
(259, 'Edit', 73, 'edit', 2, 1, '2022-08-20 20:01:05', '2022-08-20 20:01:05'),
(260, 'Add', 74, 'add', 1, 1, '2022-08-20 20:01:34', '2022-08-20 20:01:34'),
(261, 'Edit', 74, 'edit', 2, 1, '2022-08-20 20:01:34', '2022-08-20 20:01:34'),
(262, 'Add', 75, 'add', 1, 1, '2022-08-20 20:02:02', '2022-08-20 20:02:02'),
(263, 'Edit', 75, 'edit', 2, 1, '2022-08-20 20:02:02', '2022-08-20 20:02:02'),
(266, 'Add', 77, 'add', 1, 1, '2022-08-20 20:03:00', '2022-08-20 20:03:00'),
(267, 'Edit', 77, 'edit', 2, 1, '2022-08-20 20:03:00', '2022-08-20 20:03:00'),
(268, 'Add', 78, 'add', 1, 1, '2022-08-20 20:03:23', '2022-08-20 20:03:23'),
(269, 'Edit', 78, 'edit', 2, 1, '2022-08-20 20:03:23', '2022-08-20 20:03:23'),
(272, 'Add', 103, 'add', 1, 1, '2022-08-20 20:05:15', '2022-08-20 20:05:15'),
(273, 'Edit', 103, 'edit', 2, 1, '2022-08-20 20:05:15', '2022-08-20 20:05:15'),
(274, 'Add', 99, 'add', 1, 1, '2022-08-21 02:50:04', '2022-08-21 02:50:04'),
(275, 'Edit', 99, 'edit', 2, 1, '2022-08-21 02:50:04', '2022-08-21 02:50:04'),
(276, 'Add', 36, 'add', 1, 1, '2022-08-24 04:29:00', '2022-08-24 04:29:00'),
(277, 'Edit', 36, 'edit', 2, 1, '2022-08-24 04:29:00', '2022-08-24 04:29:00'),
(278, 'Delete', 36, 'delete', 3, 1, '2022-08-24 04:29:00', '2022-08-24 04:29:00'),
(279, 'Add', 47, 'add', 1, 1, '2022-08-24 04:29:12', '2022-08-24 04:29:12'),
(280, 'Edit', 47, 'edit', 2, 1, '2022-08-24 04:29:12', '2022-08-24 04:29:12'),
(281, 'Delete', 47, 'delete', 3, 1, '2022-08-24 04:29:12', '2022-08-24 04:29:12'),
(282, 'Add', 107, 'add', 1, 1, '2022-09-06 00:53:18', '2022-09-06 00:53:18'),
(283, 'Edit', 107, 'edit', 2, 1, '2022-09-06 00:53:18', '2022-09-06 00:53:18'),
(284, 'Add', 108, 'add', 1, 1, '2022-09-06 00:54:24', '2022-09-06 00:54:24'),
(285, 'Edit', 108, 'edit', 2, 1, '2022-09-06 00:54:24', '2022-09-06 00:54:24'),
(286, 'Add', 109, 'add', 1, 1, '2022-09-06 00:55:35', '2022-09-06 00:55:35'),
(287, 'Edit', 109, 'edit', 2, 1, '2022-09-06 00:55:35', '2022-09-06 00:55:35'),
(288, 'Add', 110, 'add', 1, 1, '2022-09-06 02:18:33', '2022-09-06 02:18:33'),
(289, 'Edit', 110, 'edit', 2, 1, '2022-09-06 02:18:33', '2022-09-06 02:18:33'),
(290, 'Add', 111, 'add', 1, 1, '2022-09-06 02:41:50', '2022-09-06 02:41:50'),
(291, 'Edit', 111, 'edit', 2, 1, '2022-09-06 02:41:50', '2022-09-06 02:41:50'),
(292, 'Add', 112, 'add', 1, 1, '2022-09-18 00:29:15', '2022-09-18 00:29:15'),
(293, 'Edit', 112, 'edit', 2, 1, '2022-09-18 00:29:15', '2022-09-18 00:29:15'),
(296, 'Add', 113, 'add', 1, 1, '2022-09-19 02:52:51', '2022-09-19 02:52:51'),
(297, 'Edit', 113, 'edit', 2, 1, '2022-09-19 02:52:51', '2022-09-19 02:52:51'),
(298, 'Add', 114, 'add', 1, 1, '2022-10-24 00:14:44', '2022-10-24 00:14:44'),
(299, 'Edit', 114, 'edit', 2, 1, '2022-10-24 00:14:44', '2022-10-24 00:14:44'),
(300, 'Add', 65, 'add', 1, 1, '2022-11-20 23:36:22', '2022-11-20 23:36:22'),
(301, 'Edit', 65, 'edit', 2, 1, '2022-11-20 23:36:22', '2022-11-20 23:36:22'),
(302, 'Add', 76, 'add', 1, 1, '2022-11-22 03:26:27', '2022-11-22 03:26:27'),
(303, 'Edit', 76, 'edit', 2, 1, '2022-11-22 03:26:27', '2022-11-22 03:26:27'),
(304, 'Add', 115, 'add', 1, 1, '2022-11-22 03:43:08', '2022-11-22 03:43:08'),
(305, 'Edit', 115, 'edit', 2, 1, '2022-11-22 03:43:08', '2022-11-22 03:43:08'),
(306, 'Add', 97, 'add', 1, 1, '2022-11-23 03:43:00', '2022-11-23 03:43:00'),
(307, 'Edit', 97, 'edit', 2, 1, '2022-11-23 03:43:00', '2022-11-23 03:43:00'),
(308, 'Add', 100, 'add', 1, 1, '2022-11-23 03:44:02', '2022-11-23 03:44:02'),
(309, 'Edit', 100, 'edit', 2, 1, '2022-11-23 03:44:02', '2022-11-23 03:44:02'),
(310, 'Add', 94, 'add', 1, 1, '2022-11-27 22:40:39', '2022-11-27 22:40:39'),
(311, 'Edit', 94, 'edit', 1, 1, '2022-11-27 22:40:39', '2022-11-27 22:40:39'),
(312, 'Add', 117, 'add', 1, 1, '2023-01-03 22:33:56', '2023-01-03 22:33:56'),
(313, 'Add', 118, 'add', 1, 1, '2023-01-03 22:37:53', '2023-01-03 22:37:53'),
(314, 'Add', 119, 'add', 1, 1, '2023-01-03 22:39:26', '2023-01-03 22:39:26'),
(315, 'Add', 120, 'add', 1, 1, '2023-01-03 22:41:12', '2023-01-03 22:41:12'),
(316, 'Add', 121, 'add', 1, 1, '2023-01-03 22:42:05', '2023-01-03 22:42:05'),
(318, 'Add', 122, 'add', 1, 1, '2023-01-03 22:44:45', '2023-01-03 22:44:45'),
(319, 'Add', 123, 'add', 1, 1, '2023-01-03 22:45:27', '2023-01-03 22:45:27'),
(320, 'Add', 124, 'add', 1, 1, '2023-01-04 04:37:36', '2023-01-04 04:37:36'),
(321, 'Add', 125, 'add', 1, 1, '2023-01-04 04:38:17', '2023-01-04 04:38:17'),
(325, 'Add', 126, 'add', 1, 1, '2023-02-01 02:17:18', '2023-02-01 02:17:18'),
(326, 'Edit', 126, 'edit', 2, 1, '2023-02-01 02:17:18', '2023-02-01 02:17:18'),
(329, 'add', 127, 'add', 1, 1, '2023-02-01 02:19:05', '2023-02-01 02:19:05'),
(330, 'Edit', 127, 'edit', 2, 1, '2023-02-01 02:19:05', '2023-02-01 02:19:05'),
(331, 'Add', 34, 'add', 1, 1, '2023-02-01 02:19:24', '2023-02-01 02:19:24'),
(332, 'Edit', 34, 'edit', 2, 1, '2023-02-01 02:19:24', '2023-02-01 02:19:24'),
(333, 'Delete', 34, 'delete', 3, 1, '2023-02-01 02:19:24', '2023-02-01 02:19:24'),
(334, 'Add', 128, 'add', 1, 1, '2023-02-01 02:20:38', '2023-02-01 02:20:38'),
(335, 'Edit', 128, 'edit', 2, 1, '2023-02-01 02:20:38', '2023-02-01 02:20:38'),
(336, 'Add', 129, 'add', 1, 1, '2023-02-01 02:21:29', '2023-02-01 02:21:29'),
(337, 'Edit', 129, 'edit', 2, 1, '2023-02-01 02:21:29', '2023-02-01 02:21:29'),
(338, 'Add', 130, 'add', 1, 1, '2023-02-01 02:38:46', '2023-02-01 02:38:46'),
(339, 'Edit', 130, 'edit', 2, 1, '2023-02-01 02:38:46', '2023-02-01 02:38:46'),
(340, 'Add', 131, 'add', 1, 1, '2023-02-01 02:39:58', '2023-02-01 02:39:58'),
(341, 'Edit', 131, 'edit', 2, 1, '2023-02-01 02:39:58', '2023-02-01 02:39:58'),
(342, 'Add', 132, 'add', 1, 1, '2023-02-06 19:57:32', '2023-02-06 19:57:32'),
(343, 'Add', 133, 'add', 1, 1, '2023-02-06 19:58:20', '2023-02-06 19:58:20'),
(344, 'add', 134, 'add', 1, 1, '2023-02-06 19:59:24', '2023-02-06 19:59:24'),
(345, 'Add', 135, 'add', 1, 1, '2023-02-06 20:00:37', '2023-02-06 20:00:37'),
(346, 'Add', 136, 'add', 1, 1, '2023-02-06 20:01:40', '2023-02-06 20:01:40'),
(347, 'Add', 137, 'add', 1, 1, '2023-02-06 20:02:44', '2023-02-06 20:02:44'),
(348, 'Add', 138, 'add', 1, 1, '2023-02-06 20:03:33', '2023-02-06 20:03:33'),
(349, 'Add', 139, 'add', 1, 1, '2023-02-06 20:04:30', '2023-02-06 20:04:30'),
(350, 'Add', 140, 'add', 1, 1, '2023-02-06 20:05:40', '2023-02-06 20:05:40'),
(351, 'Add', 141, 'add', 1, 1, '2023-02-06 20:06:33', '2023-02-06 20:06:33'),
(354, 'Add', 143, 'add', 1, 1, '2023-03-20 03:21:15', '2023-03-20 03:21:15'),
(355, 'Edit', 143, 'edit', 2, 1, '2023-03-20 03:21:15', '2023-03-20 03:21:15'),
(356, 'Add', 144, 'add', 1, 1, '2023-03-20 03:23:09', '2023-03-20 03:23:09'),
(357, 'Edit', 144, 'edit', 2, 1, '2023-03-20 03:23:09', '2023-03-20 03:23:09'),
(358, 'Add', 145, 'add', 1, 1, '2023-03-20 03:24:26', '2023-03-20 03:24:26'),
(359, 'Edit', 145, 'edit', 2, 1, '2023-03-20 03:24:26', '2023-03-20 03:24:26'),
(360, 'Add', 146, 'add', 1, 1, '2023-03-20 03:25:52', '2023-03-20 03:25:52'),
(361, 'Edit', 146, 'edit', 2, 1, '2023-03-20 03:25:52', '2023-03-20 03:25:52'),
(362, 'Add', 147, 'add', 1, 1, '2023-03-20 03:26:43', '2023-03-20 03:26:43'),
(363, 'Edit', 147, 'edit', 2, 1, '2023-03-20 03:26:43', '2023-03-20 03:26:43'),
(364, 'Add', 148, 'add', 1, 1, '2023-03-20 03:27:51', '2023-03-20 03:27:51'),
(365, 'Edit', 148, 'edit', 2, 1, '2023-03-20 03:27:51', '2023-03-20 03:27:51'),
(366, 'Add', 149, 'add', 1, 1, '2023-03-20 03:28:44', '2023-03-20 03:28:44'),
(367, 'Edit', 149, 'edit', 2, 1, '2023-03-20 03:28:44', '2023-03-20 03:28:44'),
(368, 'Add', 62, 'add', 1, 1, '2023-04-05 20:36:09', '2023-04-05 20:36:09'),
(369, 'Edit', 62, 'edit', 2, 1, '2023-04-05 20:36:09', '2023-04-05 20:36:09'),
(370, 'Add', 142, 'add', 1, 1, '2023-04-05 20:48:25', '2023-04-05 20:48:25'),
(371, 'Edit', 142, 'edit', 2, 1, '2023-04-05 20:48:25', '2023-04-05 20:48:25');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Super Admin');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Super Admin'),
(2, ' Admin');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_by` int(5) DEFAULT NULL,
  `updated_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `created_by` int(5) DEFAULT NULL,
  `updated_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(233) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`created_by`, `updated_by`, `created_at`, `updated_at`, `id`, `deleted_at`, `status`, `username`, `password`, `email`) VALUES
(0, NULL, '2025-03-03 19:12:37', '2025-03-03 19:30:06', 1, NULL, '0', 'admin', '$2b$10$Cy6gzqeL/YkibAWdXR6aJuT7F7lHa3IwEWKkqOldO5KqRI8nRnwXW', 'admin@gmail.com'),
(NULL, NULL, '2025-03-09 22:22:06', '2025-03-09 22:36:53', 3, NULL, '1', 'Developer', '$2b$10$pOtoqfdMkzRwyMYuWX8PK.5WX7ZiW6ulnri6K/Dn1jV7djV9CGjrW', 'nano@admin.com'),
(NULL, NULL, '2025-03-09 23:17:57', '2025-03-09 23:17:57', 4, NULL, '1', 'Amana', '$2b$10$NFAdortg9vt.bXZeXg6EdOvZ7yq3/oH3RHJwvTqbSUrHzOp.Vfw4i', 'amana@admin.com');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `layers`
--
ALTER TABLE `layers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_permissions`
--
ALTER TABLE `menu_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_routes`
--
ALTER TABLE `menu_routes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `layers`
--
ALTER TABLE `layers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `menu_permissions`
--
ALTER TABLE `menu_permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu_routes`
--
ALTER TABLE `menu_routes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=372;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
