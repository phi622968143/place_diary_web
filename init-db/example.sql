-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： db:3306
-- 產生時間： 2024 年 01 月 05 日 16:09
-- 伺服器版本： 5.7.44
-- PHP 版本： 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `test1`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `acc` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `series` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` blob,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `article`
--

INSERT INTO `article` (`id`, `acc`, `series`, `title`, `content`, `created_at`, `updated_at`) VALUES
(1, 'garry', '挑戰極限系列', '11/27', 0xe4b880e58fa3e6b0a3e68a8ae5beaee7949fe789a9e5a0b1e5918ae5819ae5ae8c0d0ae585a9e5b08fe69982e8a487e7bf92e68789e58a9be4b880e58d8aefbc8b38e68890e5b7a5e7b5b1e4bd9ce6a5ade79c9fe79a84e5a4aae788bde595a6, '2023-11-27 04:11:13', '2023-11-27 04:11:13'),
(15, 'garry', '鍋燒燒', '11.26', 0xe5a5bde5a5bde59083e79a843930e58583e98d8be78792, '2023-11-28 08:09:33', '2023-11-28 08:09:33'),
(16, 'garry', '鍋燒燒', 'test 2', 0xe59694e59694e68b9ce8a897e595a6, '2023-11-28 08:16:26', '2023-11-28 08:16:26'),
(20, 'garry', '鍋燒燒', 'test 2', 0xe59694e59694e68b9ce8a897e595a6, '2023-11-28 08:29:34', '2023-11-28 08:29:34'),
(51, 'garry', '跟大家說你好', '11/29', 0xe8b79fe887aae5b7b1e8aaaae4bda0e5a5bd20e59ca8e995b7e698a5e897a4efbc9aefbc89, '2023-11-29 02:38:41', '2023-11-29 02:38:41'),
(52, 'garry', '挑戰極限系列', '11/29', 0x646562756720e588b020332e20776d6c, '2023-11-29 02:45:45', '2023-11-29 02:45:45'),
(54, 'garry', '夜市系列', '永大夜市', 0xe4bebfe5ae9ce58f88e5a5bde59083e5969420, '2023-11-29 12:45:36', '2023-11-29 12:45:36'),
(55, 'garry', '夜市系列', '武聖夜市', 0xe69c89e9bb9ee981a02ce4bd86e69db1e8a5bfe98284e4b88de98caf, '2023-11-29 12:46:05', '2023-11-29 12:46:05'),
(56, 'garry', '夜市系列', '花園夜市', 0xe4babae69c89e9bb9ee5a49a2ce694a4e4bd8de9878de8a487e680a7e9ab98, '2023-12-04 06:13:11', '2023-12-04 06:13:11'),
(57, 'leana', 'docker', 'Garry 12/05', 0x696e74726f20646f636b657220746f206d696e6572202e, '2023-12-04 17:11:00', '2023-12-04 17:11:00'),
(58, 'ryo', '上班', '12/06', 0xe4bb96e58091e58f88e59ca8e99cb8e4bd94e4bd8de7bdaee4ba860d0ae982a3e5808be9bb91e4babae98284e5b8b6e59089e4bb963d3d, '2023-12-06 10:38:46', '2023-12-06 10:38:46'),
(59, 'ryo', '小不點', '1206', 0xe881bde8aaaae4bb96e588b0e588a5e79a84e58886e5ba97e4ba8620e5a5bde7bea8e68595e4b88de794a8e8a2abe5b08fe9acbce9a0ade785a9, '2023-12-06 10:42:12', '2023-12-06 10:42:12'),
(61, 'garry', 'place', '12.11', 0x70656e64696e673a200d0a5550444154452861727469636c652f70726f66696c65292c0d0a44524f50287365726965732f61727469636c65292020202020202020, '2023-12-10 17:07:10', '2023-12-19 14:46:47'),
(62, 'garry', 'PLACE', '12/11(afternoon)', 0x66696e2064656c2c6265206361726566756c2061626f757420636861722073657474696e673d3d, '2023-12-11 07:47:06', '2023-12-11 07:47:06'),
(64, 'garry', 'PLACE', 'tool', 0x64697371757320666f722077656220636f6d6d656e74696e67, '2023-12-11 12:07:42', '2023-12-11 12:07:42'),
(65, 'garry', 'Music', '1212', 0xe8aabfe695b462617373e5bca6, '2023-12-11 17:09:09', '2023-12-11 17:09:09'),
(66, 'garry', '挑戰極限系列', '12/12', 0xe59ca8697679e5be8539e5b08fe6998220e6af94e5b1b1e794b0e6b6bce98284e4b985, '2023-12-11 17:10:01', '2023-12-11 17:10:01'),
(67, 'garry', 'PLACE', 'todo_4_backend', 0x2072656769737465725f7475726e6261636b2c0d0a6c6f675f6f75742c0d0a736f6d65207465737428646562756729, '2023-12-11 17:14:26', '2023-12-22 13:54:44'),
(68, 'garry', 'PLACE', 'way', 0x202074696d6520636f6e74726f6c2026200d0a0d0a617070656e64206c6561726e696e6720686f72697a6f6e74616c, '2023-12-12 10:06:35', '2023-12-23 14:37:32'),
(71, 'garry', 'Music', '社課＿最後一堂', 0xe8ac9be8a7a3e4ba86e6adb7e58fb2e4bba5e58f8ae5a49ae881bde79a84e5bf85e8a6812ce58fafe4bba5e689bee887aae5b7b1e5969ce6ada1e79a84e69bb2e9a2a8e58f8de8a686e7a094e7a9b62ce4bd86e698afe6a882e79086e98284e698afe5be88e9878de8a681e79a84efbc81, '2023-12-12 15:53:50', '2023-12-12 15:53:50'),
(72, 'garry', '日記', '1212', 0xe4b88be58d88e8b79fe98a98e8beb0e8818ae588b0e784a1e8818ae98099e4bbb6e4ba8be683852c0d0ae68891e683b3e5afa6e99a9be79a84e696b9e998bfe5b0b1e698afe79ba1e58fafe883bde58ebbe58897e587bae883bde5819ae588b0e79a84e4ba8be68385e8b79fe68c89e983a8e5b0b1e78fade590a7efbc810d0aefbc88e981a9e5baa6e5a89be6a882e4bc91e99692e4bba5e58f8ae4b88de8ac9be68890e69e9ce5be88e9878de8a681efbc89, '2023-12-12 15:57:45', '2023-12-22 13:33:27'),
(73, 'garry', '日記', '12/14/23', 0x20466f6375732c66756c66696c6c6d656e742e0d0a0d0a42652077617465722e0d0a4669727374206f66206765742075703a2077616c6b696e672028746f207061726b292e0d0a676e2e, '2023-12-13 17:48:48', '2024-01-04 08:13:32'),
(79, 'garry', '日記', '創立營隊(一些想法)', 0x2020e8ae93e9ab98e4b8ade7949fe4b88de58faae4ba86e8a7a3e5a4a7e5adb8e7949fe6b4bb0d0a28e5adb8e6a5ad2ce7a4bee59c982ce69c8be58f8b2ce68880e6849b292c0d0ae69bb4e4ba86e8a7a3e69caae4be86e881b7e6b6afe799bce5b1952c0d0ae7949ae887b3e58fafe4bba5e8ae93e4bb96e58091e5afa6e5819ae4b880e4ba9be5b08fe4bd9ce5938128e58886e7b584292020202020202020, '2023-12-14 05:10:28', '2023-12-25 11:31:51'),
(81, 'garry', '日記', '常春藤_12.14', 0xe5b1b1e794b0e6b6bce5a5bde6a99fe8bb8aefbc88e4bd86e698afe98284e698afe5a5bde58fafe6849befbc89, '2023-12-14 14:27:07', '2023-12-14 14:27:07'),
(82, 'garry', 'Music', '山田涼', 0xe4bb96e5a5bde5838fe69c83e78ea9e59089e4bb9620e98284e68ea8e896a6e68891e59089e4bb96e8bb9fe9ab946775697461722070726f0d0a, '2023-12-14 14:30:15', '2023-12-14 14:30:15'),
(85, 'garry', 'PLACE', '0.2', 0x20202020202020203120706572696f642073657474696e672c0d0a0d0a312e352061667465722031207573696e67206463626f7420746f2068656c7020757365727320746f20696d70726f7665200d0a0d0a32207465726d20736f7274696e67200d0a0d0a3320617263686976652061667465722066696e28207769746820636c61737320616c736f202920202020202020202020202020202020, '2023-12-14 18:37:18', '2023-12-20 07:16:48'),
(88, 'garry', '日記', '12/16 週六', 0xe5b9abe5aea2e688b6e89995e79086e5ae89e8a39de5958fe9a18c2ce4b88be6aca1e68789e8a9b2e8a681e69bb4e4bb94e7b4b0e4ba86e8a7a3e5b08de696b9e79a84e5958fe9a18c0d0ae79fa5e98193e5b08de696b9e79a84e69982e99693e8a68fe58a832ce5be88e6a392e79a84e5aea2e688b62ce5adb8e588b0e5b08ae9878de79a84e9878de8a681e680a70d0a0d0ae8b79fe88081e788b8e8818ae4ba8628e8ba81efbc9defbc9d29e8a2abe7b3bbe4b88ae69599e68e88e99bbbe79a84e5958fe9a18c2ce6b292e683b3e588b0e58fafe883bde69c83e8b79fe694bfe6b2bbe79086e5a0b4e69c89e9979cefbc9f0d0ae4bd86e4b99fe4b88de8a68be5be97e595a62ce5b0b1e785a7e4bb96e6848fe6809de694b9e980b22ce58fafe883bde58faae698afe795b6e4b88be6b292e8a2abe5b08ae9878de590a70d0ae795a2e7ab9fe4b880e79bb4e8a2abe68993e696b7efbc9defbc9d2ce79cbce79d9be99689e99689e5b0b1e9818ee58ebbe4ba86efbd9e0d0a0d0ae6999ae4b88ae79c8be4ba86e8b387e8a88ae4b98be5a49c0d0ae998bfefbd9ee5a5bde683b3e7b584e59c98efbd9e0d0a0d0ae8b695e5bfabe7b7b4e790b4e68b89786464, '2023-12-16 14:33:15', '2023-12-16 14:33:15'),
(91, 'garry', 'Music', '方向', 0xe58588e68993e59fbae7a48e2ce788bee581b6e79c8be79c8be6ad8c0d0ae6b0b4e588b0e6b8a0e6889028e5b9b3e8a1a129, '2023-12-16 14:50:25', '2023-12-24 17:26:17'),
(99, 'garry', 'PLACE', 'dec_19', 0x7570646174655f61727469636c6520737563636573730d0a0d0a70726f626c656d5f736f6c7665643a2073657373696f6e206661696c20746f20706173730d0a706572686170732064756520746f20666f726d207375626d69742072656c6f6164696e6720706167652e0d0a0d0a736f20692070617373207661722062792075726c20616e6420737563636573730d0a0d0a72656d61696e696e673a666f726d2068617320726564756e64616e7420737061636520202020202020202020202020202020, '2023-12-19 14:49:28', '2023-12-19 14:53:10'),
(101, 'garry', '日記', '微生物期末', 0x2020202020202020202020202020202074796e64616c202d3ee9ab98e6baabe9ab98e5a393e6aebae88f8c2ce784b6e5be8ce59b9ee588b0e5b8b8e6baabe5b8b8e5a3932ce8ae93e98692e4be86e79a84e7b4b0e88f8ce98692e4be862ce5868de6aebae68e892ce4b880e5a4a9e4b880e6aca1e7b8bde585b1e4b889e5a4a90d0a0d0a6d69636861656c69732d3e76287329203d2076206d6178202a205b735d202f206b6d202b205b735d200d0a0d0a6d6963726f2067726f7774682070686173652d3e206c6167202c20657870202c2073746174696f6e202c2064656174680d0a0d0a706879746f72656d6564696174696f6e2d3e20e588a9e794a8e6a48de789a9e8bd89e7a7bbe59c9fe5a3a4e4b8ade69c89e5aeb3e789a9e8b3aa2ce98194e588b0e4bfaee5bea9e59c9fe5a3a4e79a84e68890e69588202020202020202020202020202020200d0a0d0a636f6c69666f726d2d3ee7b39ee4bebfe98f88e79083e88f8c2ce693ace6a1bfe88f8c, '2023-12-20 08:18:45', '2023-12-20 08:36:29'),
(106, 'garry', 'PLACE', 'to_do', 0x207570646174655f61727469636c652072657061697220760d0a0d0a7061636b61676520, '2023-12-20 17:12:37', '2023-12-22 17:33:51'),
(107, 'garry', 'PLACE', 'fin_1220', 0x6d65726765206172616f6e20616e64206d7920636f6465, '2023-12-20 17:13:32', '2023-12-20 17:13:32'),
(109, 'garry', 'Music', '忙的時候', 0xe887b3e5b091e59fbae7a48ee7b7b4e7bf92e8a681e69c89, '2023-12-20 17:15:45', '2023-12-20 17:15:45'),
(113, 'garry', 'coding', 'git', 0x2020207570646174650d0a67697420616464202e0d0a67697420636f6d6d6974202d6d2022220d0a6769742070757368206f726967696e206272616e63680d0a0d0a76657273696f6e206d657267650d0a67697420636865636b6f7574202d622c0d0a66697820636f6e666c6963742c0d0a676974206d65726765, '2023-12-21 13:04:05', '2023-12-23 18:35:32'),
(114, 'garry', 'coding', 'docker', 0x202020646f20617320646f6320760d0a0d0a6c616d702861706163686520706870206d7973716c290d0a0d0a3c6120687265663d2268747470733a2f2f6861636b6d642e696f2f40746974616e67656e652f646f636b65722d6c616d70223e70687020646f636b65723c2f613e, '2023-12-22 02:17:14', '2023-12-22 17:38:38'),
(115, 'garry', 'coding', 'sharing_chatgpt', 0x202020203c6120687265663d2268747470733a2f2f7777772e66616365626f6f6b2e636f6d2f67726f7570732f707974686f6e74772f7065726d616c696e6b2f31303136333535353038333135333433382f223e6368616770745f617069e8aab2e7a88b3c2f613e2031325f323820646561646c696e65, '2023-12-22 02:17:40', '2023-12-23 18:34:07'),
(116, 'garry', '日記', '12/22_提醒', 0xe8b79fe88081e5b8abe98193e6ad89, '2023-12-22 14:26:25', '2023-12-22 14:26:25'),
(119, 'garry', 'PLACE', 'doc', 0x203c6120687265663d2268747470733a2f2f646f63732e676f6f676c652e636f6d2f646f63756d656e742f642f3136796974476141574c37545a48716a41437168305a35424c375862535575396363754c76394f4d63666b672f65646974223ee59c98e99a8ae69687e4bbb63c2f613e, '2023-12-22 17:36:40', '2023-12-22 17:37:08'),
(124, 'garry', 'PLACE', 'discuss', 0x746f2061766f696420746f6f206d7563682072656c79696e67206f6e20475054, '2023-12-23 18:37:01', '2023-12-23 18:37:01'),
(126, 'garry', '日記', '12/23', 0x20e697a9e4b88ae8b5b7e4be86e7b7b4e59089e4bb96e69bb4e4bb94e7b4b0e78ea9e4ba86e99fb3e7aeb10d0ae79c9fe79a84e6b292e69c89e69588e69e9ce599a8e4b99fe58fafe4bba578440d0a0d0ae4b88be58d88e69c89e9bb9ee6b5aae8b2bb0d0ae8a681e8a8ade5ae9ae8b79fe68ea7e7aea1e59ca8e5ba8ae4b88ae79a84e69982e996930d0ae8b79fe88081e6b19fe8a88ee8ab96e5b088e6a1880d0ae4ba86e8a7a3e79599e799bde79a84e9878de8a681e680a7e4bba5e58f8ae887aae4bfa12ce79bb8e4bfa1e4ba8be68385e69c83e8ae8ae5a5bd2ce58faae698afe99c80e8a681e69982e99693, '2023-12-23 18:44:49', '2023-12-23 18:49:29'),
(127, 'garry', 'Music', '12/24 愛了暈了 ', 0x20e88081e5a4a7e98081e79a847069636be8ae93e68891e5a5bde5aeb3e7be9ef09f9297f09f9297f09f9297, '2023-12-23 18:50:35', '2023-12-23 19:22:02'),
(129, 'garry', 'PLACE', 'Table data type', 0x20414c544552205441424c45207461626c655f6e616d65204d4f4449465920636f6c20424c4f422028646174612074797065293b0d0a0d0a6578706c61696e20626c6f623a62696e617279206c61726765206f626a, '2023-12-23 19:34:06', '2023-12-23 19:34:16'),
(132, 'garry', '日記', '無題', 0xe79599e799bde4b88de698afe6b5aae8b2bbe69982e996930d0a0d0ae8808ce698afe59897e8a9a6e694bee5b088e6b3a82ce58ebbe5ae8ce68890e59084e7a8aee4ba8be683850d0ae5908ce69982e4b99fe5ae89e68e92e4b880e4ba9be69c89e6848fe7bea9e79a84e694bee9ac86e6b4bbe58b950d0ae98194e588b0e5b9b3e8a1a1e8808ce58f88e6bbbfe8b6b3e78b80e6858b, '2023-12-24 17:15:13', '2023-12-24 17:16:45'),
(133, 'garry', '日記', 'todo_week', 0x207374617469737469632c7061636b6167652c6465627567286c6974746c65290d0a0d0a6d6f766520617474656e74696f6e20746f206f746865720d0a7061727473206f66206c697665730d0a65783a2073706f72742c6d757369632c64726177, '2023-12-24 17:23:07', '2023-12-25 18:03:07'),
(134, 'garry', 'Music', '練習', 0xe68c87e59e8b28e99fb3e5908d292ce788ace6a0bce5ad902c0d0ae4b880e4ba9be5b081e99689e5928ce5bca62c0d0ae99bbbe59089e4bb96e68a80e5b7a7, '2023-12-24 17:25:15', '2023-12-24 17:25:15'),
(135, 'garry', '日記', '12/25', 0x20e5af86e7a2bce5adb8e5a0b1e5918ae5ae8ce688902876290d0ae5b7a5e7b5b12876292066e5a4a770e5b08fe69c89e5b7aee588a520e58187e8a8ade698afe6b292e69c89e5b7ae200d0a70e5b08fe4bba3e8a1a8e68b92e7b5950d0a713a20e79c8b66207461626c652c207120313220e8a3bde4bd9ce8a1a8e6a0bc0d0ae8b79fe69c8be58f8be79e8ee6b7b7e591b5e591b5, '2023-12-25 10:46:35', '2024-01-04 04:14:49'),
(136, 'garry', 'coding', 'os', 0x3c6120687265663d2268747470733a2f2f6c696e75782e76626972642e6f72672f6c696e75785f62617369635f747261696e2f63656e746f73382f756e697430352e706870223ee8b387e69699e5a4bee6ac8ae999903c2f613e, '2023-12-25 10:49:43', '2023-12-25 10:49:43'),
(138, 'garry', 'coding', 'js event', 0x3c6120687265663d2268747470733a2f2f6d656469756d2e636f6d2f6a6f7264616e74746364657369676e2f6a6176617363726970742d2545352542302538462545352541442542382d6576656e742d2545342542412538422545342542422542362d6570322d316139383534663832353563223e6576656e743c2f613e, '2023-12-25 19:20:11', '2023-12-25 19:20:11'),
(139, 'garry', '日記', 'review', 0x20206e6f726d616c20706c6f7420726561736f6e0d0a63286f6e7374616e7429207628766172293a206966206e6f207061747465726e206f6e206c762c747275652c0d0a726570726573656e7420737461626c696c697479206f662072656772657373696f6e2e, '2023-12-26 09:34:07', '2023-12-26 09:48:43'),
(141, 'garry', '日記', 'to_do_12.30', 0x312e207374617469737469635f70622f7265706f727420726573656172636828e5bcb5e9878fefbc890d0a0d0a322e206c6561726e696e6720746563682f706c616e0d0a0d0a332e20656e672f766f6c756d65, '2023-12-30 10:13:48', '2023-12-30 10:14:16');

-- --------------------------------------------------------

--
-- 資料表結構 `my_table`
--

CREATE TABLE `my_table` (
  `id` int(11) NOT NULL,
  `account` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pwd_hashed` varbinary(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `my_table`
--

INSERT INTO `my_table` (`id`, `account`, `pwd_hashed`) VALUES
(34, 'garry', 0x38306536616565343835373734623962353538333438663530303735323534316366613565396131363563326464326330383339616263376365376130343033),
(35, 'apple', 0x65663230653261356337373166636537633764646334656138366564623430383962353830336438363866366264643564666533393365656138666365383339),
(36, 'apple', 0x65663230653261356337373166636537633764646334656138366564623430383962353830336438363866366264643564666533393365656138666365383339),
(37, 'apple', 0x62363133363739613038313464396563373732663935643737386333356663356666313639376334393337313536353363366337313231343432393263356164),
(38, 'apple', 0x65663230653261356337373166636537633764646334656138366564623430383962353830336438363866366264643564666533393365656138666365383339),
(39, 'apple', 0x65663230653261356337373166636537633764646334656138366564623430383962353830336438363866366264643564666533393365656138666365383339);

-- --------------------------------------------------------

--
-- 資料表結構 `series`
--

CREATE TABLE `series` (
  `series_id` int(11) NOT NULL,
  `account_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `series_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `series_content` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `series`
--

INSERT INTO `series` (`series_id`, `account_name`, `series_title`, `series_content`, `created_at`, `updated_at`) VALUES
(12, 'garry', 'Music', 'have fun with P&L', '2023-12-11 07:41:41', '2023-12-11 07:41:41'),
(13, 'garry', 'PLACE', 'ToDo', '2023-12-11 07:42:34', '2023-12-11 07:42:34'),
(29, 'garry', '夜市系列', '記錄一些夜市的特色', '2023-12-11 17:10:51', '2023-12-11 17:10:51'),
(30, 'garry', '日記', '一些小小的累積', '2023-12-12 15:55:25', '2023-12-12 15:55:25'),
(41, 'garry', 'coding', 'some resources and learning', '2023-12-16 17:23:10', '2023-12-16 17:23:10');

-- --------------------------------------------------------

--
-- 資料表結構 `user_profile`
--

CREATE TABLE `user_profile` (
  `account_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `avatar_url` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'default_avatar.jpg',
  `intro` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `user_profile`
--

INSERT INTO `user_profile` (`account_name`, `user_id`, `avatar_url`, `intro`, `created_at`, `updated_at`) VALUES
('garry', 1, '', 'My place;place backend and launcher.', '2023-11-15 17:32:48', '2024-01-05 15:31:13');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `my_table`
--
ALTER TABLE `my_table`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`series_id`);

--
-- 資料表索引 `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`account_name`),
  ADD UNIQUE KEY `unique_user_id` (`user_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `my_table`
--
ALTER TABLE `my_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `series`
--
ALTER TABLE `series`
  MODIFY `series_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
