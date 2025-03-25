-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2025 at 03:31 AM
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
-- Table structure for table `blocks`
--

CREATE TABLE `blocks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `discription` varchar(450) NOT NULL,
  `prompt` varchar(450) NOT NULL,
  `created_by` int(5) DEFAULT NULL,
  `updated_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `phaseId` int(5) NOT NULL,
  `sort` int(5) NOT NULL DEFAULT 1,
  `img` varchar(100) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `status` int(5) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blocks`
--

INSERT INTO `blocks` (`id`, `name`, `discription`, `prompt`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`, `phaseId`, `sort`, `img`, `color`, `status`) VALUES
(1, 'Core Problems', 'Define the fundamental challenges the institution seeks to address, \r\nidentifying key affected groups and understanding the depth of the issue. ', 'Identify the core problems this initiative aims to address. Specify who is \r\nmost affected and why these problems persist. Highlight any contestation or \r\ndiffering perspectives around these problems to understand the broader context \r\nand urgency. ', NULL, NULL, '2025-03-16 16:14:00', '2025-03-16 16:14:00', NULL, 1, 1, NULL, NULL, 1),
(2, 'Map of Institutions and Voids', 'Understanding what institutions currently address similar problems, identifying gaps, and defining how new institutional structures can complement or replace existing ones.', 'Map the landscape of existing institutions, systems, or initiatives relevant to the core problems. Include both direct service providers and indirect actors,such as advocacy organizations, policy-making bodies, and community groups. Analyze their mandates, key tasks,and historical effectiveness. Identify gaps or voids where new institutions, partnerships, or approaches might be needed. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:17:20', NULL, 1, 1, NULL, NULL, 1),
(3, 'Initial Purpose', 'Clarify the core purpose of the institution, ensuring it is grounded in a \r\nwell-defined mission that responds to identified needs. ', 'Define the initial purpose of the institution or initiative. Take into \r\nconsideration how it will address the identified core problems and goals in \r\nrelation to the groups it intends to serve. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:17:20', NULL, 1, 1, NULL, NULL, 1),
(5, 'Constraints & Opportunities', 'A comprehensive overview of what factors may limit institutional success and how strategic opportunities can be leveraged for impact.', 'Evaluate the constraints—political,social, operational, or financial—that could affect the creation of a new institution. Rank these nconstraints by their potential impact and consider any interdependencies that ncould exacerbate challenges. Identify opportunities that can help materialize the ninitial purpose based on insights from the other outputs. Highlight collaborative npossibilities and leverage points to push the boundaries of imagination', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:17:20', NULL, 1, 1, NULL, NULL, 1),
(6, 'Guiding Coalition', 'Mapping out key allies who will support institutional development and help drive its legitimacy and sustainability.', 'Identify the key stakeholders who could form the guiding coalition.Specify their potential roles and contributions in overcoming constraints and leveraging opportunities. Clarify who owns the problem being addressed and outline mechanisms for coordination and shared accountability within the \r\ncoalition. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:17:20', NULL, 1, 1, NULL, NULL, 1),
(7, 'Map of Supporters and Resistors', 'Understanding how different stakeholders align or oppose the institution to refine engagement strategies. ', 'Develop a map of organizations and specify the sectors it belongs to.Now position each mapped organization in terms of how much it will support the initial purpose on a scale from 1 to 5, in which 1 represents the least .supportive and 5 the most supportive. On a different scale, position each \r\norganization in terms of how much it will resist organizations whose work \r\nfocuses on that initial purpose, also from 1 to 5. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:53:13', NULL, 2, 1, NULL, NULL, 1),
(8, 'Legal and Organizational Options', 'Evaluating possible institutional forms that ensure legitimacy,feasibility, and impact. ', 'Explore different legal and governance models for structuring the \r\ninstitution. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:53:13', NULL, 2, 1, NULL, NULL, 1),
(9, 'Refined Purpose', 'Ensuring that the institution’s purpose aligns with stakeholder needs, environmental constraints, and strategic priorities. ', 'Adjust and refine the institution’s purpose based on newly gathered insights. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:53:13', NULL, 2, 1, NULL, NULL, 1),
(10, 'Proto-Institution', 'Prototyping the institution in a low-risk setting to gather insights and refine the design before formalization. ', 'Develop an experimentation framework to test the institution before full implementation. ', NULL, NULL, '2025-03-16 16:17:20', '2025-03-16 16:53:13', NULL, 2, 1, NULL, NULL, 1);

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
(1, 'Super Admin', NULL, NULL),
(2, 'Admin', NULL, NULL),
(3, 'HR', NULL, NULL),
(4, 'Employee', NULL, NULL);

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
  `layer_id` int(5) NOT NULL,
  `role_id` int(5) NOT NULL,
  `menu_id` int(5) NOT NULL,
  `created_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_permissions`
--

INSERT INTO `menu_permissions` (`layer_id`, `role_id`, `menu_id`, `created_by`, `created_at`, `updated_at`, `id`) VALUES
(1, 1, 1, 1, '2025-03-11 00:02:56', '2025-03-11 00:37:35', 1),
(1, 1, 1, 1, '2025-03-11 00:06:56', '2025-03-11 00:06:56', 2),
(1, 1, 2, 1, '2025-03-11 00:11:12', '2025-03-11 00:11:12', 3);

-- --------------------------------------------------------

--
-- Table structure for table `menu_routes`
--

CREATE TABLE `menu_routes` (
  `menu_id` int(5) NOT NULL,
  `sort` int(5) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `section` varchar(115) NOT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_routes`
--

INSERT INTO `menu_routes` (`menu_id`, `sort`, `created_at`, `updated_at`, `id`, `name`, `section`, `status`) VALUES
(1, 0, '2025-03-11 01:20:19', '2025-03-11 01:20:19', 1, 'add', 'add', '1'),
(1, 0, '2025-03-11 01:20:39', '2025-03-11 01:20:39', 2, 'edit', 'edit', '1'),
(1, 0, '2025-03-11 01:20:58', '2025-03-11 01:20:58', 3, 'delete', 'delete', '1'),
(1, 0, '2025-03-11 01:21:23', '2025-03-11 01:21:23', 4, 'getById', 'getById', '1'),
(2, 0, '2025-03-11 01:21:40', '2025-03-11 01:21:40', 5, 'getById', 'getById', '1'),
(2, 0, '2025-03-11 01:21:49', '2025-03-11 01:21:49', 6, 'delete', 'delete', '1'),
(2, 0, '2025-03-11 01:21:57', '2025-03-11 01:21:57', 7, 'edit', 'edit', '1'),
(2, 0, '2025-03-11 01:22:07', '2025-03-11 01:22:07', 8, 'add', 'add', '1');

-- --------------------------------------------------------

--
-- Table structure for table `phases`
--

CREATE TABLE `phases` (
  `id` int(11) NOT NULL,
  `discription` varchar(1500) NOT NULL,
  `created_by` int(5) DEFAULT NULL,
  `updated_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `prompt` varchar(1500) NOT NULL,
  `sort` int(5) NOT NULL DEFAULT 1,
  `img` varchar(100) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `status` int(5) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phases`
--

INSERT INTO `phases` (`id`, `discription`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`, `name`, `prompt`, `sort`, `img`, `color`, `status`) VALUES
(1, 'Every institutional innovation journey begins with understanding the terrain. Much  like a gardener surveys the soil and sunlight to determine what can grow, or an architect  evaluates a site for construction, this phase involves pinpointing the pressures and  opportunities that demand innovation, and what is likely to succeed.  The goal is to clearly define the core problems while mapping the institutional  ecosystem—identifying existing boundaries, relationships, and gaps. This phase also involves  gathering a guiding coalition of stakeholders, laying the groundwork for a collaborative design  process. By understanding the landscape and engaging diverse perspectives, this phase  ensures the institution is rooted in shared understanding and commitment. ', NULL, NULL, '2025-03-16 17:06:35', '2025-03-16 19:12:42', NULL, 'Mapping the Landscape', '', 1, NULL, NULL, 1),
(2, 'Once the institutional landscape is mapped, the next step is to explore different  ways the institution could take shape. Like an architect drafting blueprints or a gardener  planning different planting arrangements, this phase focuses on assessing possibilities, refining  purpose, and identifying the best pathway forward. This includes considering different legal  and organizational structures, designing small-scale prototypes, and refining the institution’s  purpose based on insights from stakeholders and environmental conditions. ', NULL, NULL, '2025-03-16 17:06:35', '2025-03-16 19:12:58', NULL, 'Exploring the Pathways ', '', 1, NULL, NULL, 1),
(3, 'This phase is about putting the essential components in place to ensure the  institution has a stable and functional foundation. Like laying the structural framework of a  building or preparing the soil for long-term cultivation, this stage ensures that governance,  funding, teams, and operational frameworks are ready for action. ', NULL, NULL, '2025-03-16 17:06:35', '2025-03-16 19:13:13', NULL, 'Laying the Foundations ', '', 1, NULL, NULL, 1),
(4, 'At this stage, the institution moves from design to implementation, much like a  structure coming to life with its operational systems or a garden transitioning from seedlings to  a thriving ecosystem. This phase focuses on setting up operations, strengthening partnerships,  refining internal workflows, and ensuring adaptability for long-term sustainability.', NULL, NULL, '2025-03-16 17:06:35', '2025-03-16 19:13:28', NULL, 'Building and Cultivating', '', 1, NULL, NULL, 1),
(5, ' Institutions must evolve with changing times, needs, and expectations. Like a  building that requires maintenance and retrofitting or a garden that needs ongoing care, this  phase focuses on evaluating impact, refining strategies, and ensuring long-term sustainability. ', NULL, NULL, '2025-03-16 17:06:35', '2025-03-16 19:13:42', NULL, 'Learning and Adapting ', '', 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `blockId` int(5) NOT NULL,
  `created_by` int(5) DEFAULT NULL,
  `updated_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `prompt` varchar(1500) NOT NULL,
  `sort` int(5) NOT NULL DEFAULT 1,
  `status` int(5) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `blockId`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`, `prompt`, `sort`, `status`) VALUES
(1, 'What problems are you trying to solve?', 1, NULL, NULL, '2025-03-16 17:18:28', '2025-03-16 17:18:28', NULL, '', 1, 1),
(2, 'What problems are you trying to solve?', 1, NULL, NULL, '2025-03-16 17:19:47', '2025-03-16 17:19:47', NULL, '', 1, 1),
(3, 'Who is mostly affected/impacted by the problem?', 1, NULL, NULL, '2025-03-16 17:19:47', '2025-03-16 17:19:47', NULL, '', 1, 1),
(4, 'Who owns the problem you are trying to solve?', 1, NULL, NULL, '2025-03-16 17:19:47', '2025-03-16 17:19:47', NULL, '', 1, 1),
(5, 'How contested is the purpose you’re dealing with?', 1, NULL, NULL, '2025-03-16 17:19:47', '2025-03-16 17:19:47', NULL, '', 1, 1),
(6, 'What institutions or initiatives currently address these problems?', 2, NULL, NULL, '2025-03-16 17:22:33', '2025-03-16 17:22:33', NULL, '', 1, 1),
(7, 'What are the mandates and key tasks of the existing institutions?', 2, NULL, NULL, '2025-03-16 17:22:34', '2025-03-16 17:22:34', NULL, '', 1, 1),
(8, 'What are the gaps or voids where new approaches are needed?', 2, NULL, NULL, '2025-03-16 17:22:34', '2025-03-16 17:22:34', NULL, '', 1, 1),
(9, 'Have there been prior institutions with a similar purpose?', 2, NULL, NULL, '2025-03-16 17:22:34', '2025-03-16 17:22:34', NULL, '', 1, 1),
(10, 'What is their history? ', 2, NULL, NULL, '2025-03-16 17:22:34', '2025-03-16 17:22:34', NULL, '', 1, 1),
(11, 'What historical attempts have been made to solve this problem?', 3, NULL, NULL, '2025-03-16 17:25:32', '2025-03-16 17:25:32', NULL, '', 1, 1),
(12, 'How does this mission align with societal needs?', 3, NULL, NULL, '2025-03-16 17:25:32', '2025-03-16 17:25:32', NULL, '', 1, 1),
(13, 'What would success look like?', 3, NULL, NULL, '2025-03-16 17:25:32', '2025-03-16 17:25:32', NULL, '', 1, 1),
(14, 'What purpose should the institution serve to address the core problems?', 3, NULL, NULL, '2025-03-16 17:25:32', '2025-03-16 17:25:32', NULL, '', 1, 1),
(15, 'What is the purpose of creating the institution? ', 3, NULL, NULL, '2025-03-16 17:25:32', '2025-03-16 17:25:32', NULL, '', 1, 1),
(16, 'How does this purpose align with societal needs and values? ', 3, NULL, NULL, '2025-03-16 17:25:32', '2025-03-16 17:25:32', NULL, '', 1, 1),
(17, 'What political, social, or financial constraints could affect the initiative?', 5, NULL, NULL, '2025-03-16 17:28:15', '2025-03-16 17:28:15', NULL, '', 1, 1),
(18, 'What opportunities exist to build support or leverage resources for addressing the identified problems?', 5, NULL, NULL, '2025-03-16 17:28:15', '2025-03-16 17:28:15', NULL, '', 1, 1),
(19, 'How much control do you have in getting toward your purpose?', 5, NULL, NULL, '2025-03-16 17:28:15', '2025-03-16 17:28:15', NULL, '', 1, 1),
(20, 'On a scale from 1 to 5, what is the level of dynamism in the context in which you operate? Explain three key signals or evidence.', 5, NULL, NULL, '2025-03-16 17:28:15', '2025-03-16 17:28:15', NULL, '', 1, 1),
(21, 'Who will work with you to create the institution?', 6, NULL, NULL, '2025-03-16 17:30:46', '2025-03-16 17:30:46', NULL, '', 1, 1),
(22, 'What roles can these stakeholders play in supporting or championing the initiative?', 6, NULL, NULL, '2025-03-16 17:30:46', '2025-03-16 17:30:46', NULL, '', 1, 1),
(23, 'How can this coalition overcome constraints and provoke opportunities?', 6, NULL, NULL, '2025-03-16 17:30:46', '2025-03-16 17:30:46', NULL, '', 1, 1),
(24, 'Who are the key supporters and resistors of this initiative, and why does it matter?', 7, NULL, NULL, '2025-03-16 17:39:03', '2025-03-16 17:39:03', NULL, '', 1, 1),
(25, 'How can neutral or resistant stakeholders be shifted toward support?', 7, NULL, NULL, '2025-03-16 17:39:03', '2025-03-16 17:39:03', NULL, '', 1, 1),
(26, 'What legal and organizational options exist to structure this institution, ranging from incremental adjustments to radical transformations?', 8, NULL, NULL, '2025-03-16 17:41:53', '2025-03-16 17:41:53', NULL, '', 1, 1),
(27, 'What existing models can serve as inspiration for institutional design?', 8, NULL, NULL, '2025-03-16 17:41:53', '2025-03-16 17:41:53', NULL, '', 1, 1),
(28, 'How should the initial purpose be refined to align with stakeholder interests, constraints, and emerging opportunities?', 9, NULL, NULL, '2025-03-16 17:43:17', '2025-03-16 17:43:17', NULL, '', 1, 1),
(29, 'What elements of the original purpose should evolve based on insights from Phase 1?', 9, NULL, NULL, '2025-03-16 17:43:17', '2025-03-16 17:43:17', NULL, '', 1, 1),
(30, 'What form of proto-institution (e.g., pilot, program, platform) will best allow for testing and learning before full-scale implementation?', 10, NULL, NULL, '2025-03-16 17:46:37', '2025-03-16 17:46:37', NULL, '', 1, 1),
(31, 'What key questions should be answered through experimentation, and how will feedback be gathered and used?', 10, NULL, NULL, '2025-03-16 17:46:37', '2025-03-16 17:46:37', NULL, '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `sort` int(5) NOT NULL DEFAULT 0,
  `created_by` int(5) NOT NULL DEFAULT 0,
  `updated_by` int(5) NOT NULL DEFAULT 0,
  `deleted_by` int(5) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1',
  `name` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `sort`, `created_by`, `updated_by`, `deleted_by`, `created_at`, `updated_at`, `deleted_at`, `status`, `name`) VALUES
(1, 0, 0, 0, 0, '2025-03-10 22:37:35', '2025-03-10 22:51:59', NULL, '1', 'Super Admin'),
(2, 0, 0, 0, 0, '2025-03-10 22:37:35', '2025-03-10 22:52:05', NULL, '1', 'Admin'),
(3, 0, 0, 0, 0, '2025-03-10 22:51:22', '2025-03-10 22:51:22', NULL, '1', 'HR'),
(4, 0, 0, 0, 0, '2025-03-10 22:52:26', '2025-03-10 22:52:26', NULL, '1', 'Employee'),
(5, 0, 0, 0, 0, '2025-03-10 22:52:26', '2025-03-10 22:52:26', NULL, '1', 'Member');

-- --------------------------------------------------------

--
-- Table structure for table `useraichats`
--

CREATE TABLE `useraichats` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `conversetion_id` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `aiReply` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `useraichats`
--

INSERT INTO `useraichats` (`id`, `userId`, `question_id`, `created_at`, `conversetion_id`, `status`, `aiReply`) VALUES
(6, 2, 23, '2025-03-21 14:40:12', 'test', 1, 'It seems like \"ffreg\" might be a typo, or perhaps an acronym or term that I am not familiar with in the context of institutional innovation or reorganization. Could you please provide more details or clarify your request so I can assist you better? Remember, I\'m here to help with any questions related to institutional innovation or reorganization. Looking forward to your response!'),
(7, 2, 16, '2025-03-21 14:41:18', 'test', 1, 'I\'m here to help with questions about institutional innovation or reorganization. If there\'s something specific you\'d like to discuss or ask, feel free to let me know!'),
(8, 2, 4, '2025-03-21 14:41:54', 'test', 1, 'Hello! How can I assist you today with your institutional innovation or reorganizing questions? Let me know how I can help! 😊'),
(9, 2, 22, '2025-03-21 14:51:24', 'test', 1, 'It seems like there may have been a typing error or a mix-up in your message. Could you please clarify or provide more details on what you need help with? I\'m here to assist you with any questions related to institutional innovation or reorganizing. Thank you!'),
(10, 2, 21, '2025-03-21 14:51:54', 'test', 1, 'Hello! It seems like you might be in need of some assistance regarding institutional innovation or related topics. How can I help you today? 😊'),
(11, 2, 1, '2025-03-21 14:53:15', 'test', 1, 'It seems like your message got cut off or may not have been related to our focus on institutional innovation and reorganization. Could you please provide more context or specify what you need help with? I\'d be happy to assist you with any questions or insights regarding institutional transformation or digital innovation!'),
(12, 2, 2, '2025-03-21 14:53:24', 'test', 1, 'Hello! How can I assist you today with your questions or challenges related to institutional innovation or reorganization? I\'m here to help! 😊'),
(13, 2, 3, '2025-03-21 14:54:03', 'test', 1, 'Hello! How can I assist you with your institutional innovation or reorganization queries today? 😊'),
(14, 2, 5, '2025-03-21 14:55:56', 'test', 1, 'Hello! How can I assist you today? If you have questions related to institutional innovation or need help with reorganizing your processes, feel free to share more details. 😊');

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
(0, NULL, '2025-03-03 19:12:37', '2025-03-20 06:20:27', 2, NULL, '1', 'akash', '$2b$10$Cy6gzqeL/YkibAWdXR6aJuT7F7lHa3IwEWKkqOldO5KqRI8nRnwXW', 'akash@gmail.com');

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
  `created_by` int(5) NOT NULL,
  `updated_by` int(5) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `userId` int(5) NOT NULL,
  `roleId` int(5) NOT NULL,
  `deleted_by` int(5) DEFAULT NULL,
  `status` enum('1','0') NOT NULL DEFAULT '1',
  `id` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`created_by`, `updated_by`, `created_at`, `updated_at`, `userId`, `roleId`, `deleted_by`, `status`, `id`, `deleted_at`) VALUES
(1, NULL, '2025-03-10 23:00:01', '2025-03-10 23:01:13', 1, 1, NULL, '1', 1, NULL),
(1, NULL, '2025-03-10 23:00:01', '2025-03-10 23:01:13', 2, 5, NULL, '1', 3, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blocks`
--
ALTER TABLE `blocks`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `phases`
--
ALTER TABLE `phases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `useraichats`
--
ALTER TABLE `useraichats`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `blocks`
--
ALTER TABLE `blocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menu_routes`
--
ALTER TABLE `menu_routes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `phases`
--
ALTER TABLE `phases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `useraichats`
--
ALTER TABLE `useraichats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
