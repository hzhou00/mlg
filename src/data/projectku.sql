/*
Navicat MySQL Data Transfer

Source Server         : project
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : projectku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-28 19:10:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for add
-- ----------------------------
DROP TABLE IF EXISTS `add`;
CREATE TABLE `add` (
  `id` int(60) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `dataid` int(20) NOT NULL,
  `qty` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of add
-- ----------------------------

-- ----------------------------
-- Table structure for liebiao
-- ----------------------------
DROP TABLE IF EXISTS `liebiao`;
CREATE TABLE `liebiao` (
  `id` int(60) NOT NULL,
  `img` varchar(255) NOT NULL,
  `xianjia` varchar(255) NOT NULL,
  `yuanjia` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `xiaoliang` varchar(255) NOT NULL,
  `pingjia` varchar(255) NOT NULL,
  `qty` int(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liebiao
-- ----------------------------
INSERT INTO `liebiao` VALUES ('1', '../image/liebiaotu/t1.jpg', '35', '￥45', '伊诗比蒂宝宝视觉发育小布书（一套三本）BT-1130', '930', '112', '1');
INSERT INTO `liebiao` VALUES ('2', '../image/liebiaotu/t2.jpg', '38', '￥49', '怀乐婴幼儿早教有声小布书早教儿童婴幼儿撕不烂布书', '960', '140', '1');
INSERT INTO `liebiao` VALUES ('3', '../image/liebiaotu/t3.jpg', '41', '￥53', '特宝儿TOP BRIGHT摇摇木马玩具易拼装', '990', '168', '1');
INSERT INTO `liebiao` VALUES ('4', '../image/liebiaotu/t4.jpg', '44', '￥57', '伊诗比蒂多感球形大摇铃 BT-2208 （颜色随机）', '102', '196', '1');
INSERT INTO `liebiao` VALUES ('5', '../image/liebiaotu/t5.jpg', '47', '￥61', '德国Hape工具敲敲乐（12个月以上）', '105', '224', '1');
INSERT INTO `liebiao` VALUES ('6', '../image/liebiaotu/t6.jpg', '50', '￥65', '德国Hape创意绕珠串珠益智木玩具（3岁以上）', '108', '252', '1');
INSERT INTO `liebiao` VALUES ('7', '../image/liebiaotu/t7.jpg', '53', '￥69', '怀乐（HUAILE）婴儿玩具曼哈顿安全牙胶磨牙固齿手抓', '111', '280', '1');
INSERT INTO `liebiao` VALUES ('8', '../image/liebiaotu/t8.jpg', '56', '￥73', '贝恩施宝宝布书 儿童早教撕不烂婴幼儿布书系列 加菲猫', '114', '308', '1');
INSERT INTO `liebiao` VALUES ('9', '../image/liebiaotu/t9.jpg', '59', '￥77', '德国Hape我的工具盒（3岁以上）', '117', '336', '1');
INSERT INTO `liebiao` VALUES ('10', '../image/liebiaotu/t10.jpg', '62', '￥81', '【环保水性漆】木玩世家缤纷动物串珠', '120', '364', '1');
INSERT INTO `liebiao` VALUES ('11', '../image/liebiaotu/t11.jpg', '65', '￥85', '美国怀乐（HUAILE）幼童婴儿手摇铃趣味铃铛球', '123', '392', '1');
INSERT INTO `liebiao` VALUES ('12', '../image/liebiaotu/t12.jpg', '68', '￥89', '【亲肤柔软】伊诗比蒂小熊圈圈 BT-3254', '126', '420', '1');
INSERT INTO `liebiao` VALUES ('13', '../image/liebiaotu/t13.jpg', '71', '￥93', '德国Hape我的工具盒（3岁以上）', '129', '448', '1');
INSERT INTO `liebiao` VALUES ('14', '../image/liebiaotu/t14.jpg', '74', '￥97', '德国Hape彩虹珠算架（3岁以上）', '132', '476', '1');
INSERT INTO `liebiao` VALUES ('15', '../image/liebiaotu/t15.jpg', '110', '￥200', '【锻炼记忆力】德国Hape字母珠算架（3岁以上）', '135', '504', '1');
INSERT INTO `liebiao` VALUES ('16', '../image/liebiaotu/t16.jpg', '136', '￥220', '美国费雪Fisherprice踢踏学习钢琴（0个月以上）C4504', '138', '532', '1');
INSERT INTO `liebiao` VALUES ('17', '../image/liebiaotu/t17.jpg', '162', '￥240', '美国费雪Fisherprice豪华多功能音乐桌（6个月以上）', '141', '560', '1');
INSERT INTO `liebiao` VALUES ('18', '../image/liebiaotu/t18.jpg', '188', '￥260', '怀乐婴幼儿感知动物触感球0-3-6-12个月温水变色玩具', '144', '588', '1');
INSERT INTO `liebiao` VALUES ('19', '../image/liebiaotu/t19.jpg', '214', '￥280', '怀乐儿童大货柜车集装箱小汽车模型车模合金车男孩玩', '147', '616', '1');
INSERT INTO `liebiao` VALUES ('20', '../image/liebiaotu/t20.jpg', '240', '￥300', '怀乐婴幼儿早教卡通软胶摇铃牙胶不倒翁洞洞球', '150', '644', '1');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(60) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,`username`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', '10086', '10086');
INSERT INTO `login` VALUES ('2', '1', '1');
INSERT INTO `login` VALUES ('3', '2', '3');
INSERT INTO `login` VALUES ('4', '123465', '99');
INSERT INTO `login` VALUES ('7', '15077265015', '123');
INSERT INTO `login` VALUES ('8', '13907723586', '123');
INSERT INTO `login` VALUES ('9', '15077995522', '123456');
INSERT INTO `login` VALUES ('10', '18900990099', '123456');
INSERT INTO `login` VALUES ('11', '18900991199', '1231');
INSERT INTO `login` VALUES ('12', '18900990066', '123456');
INSERT INTO `login` VALUES ('13', '15077884455', '123');
INSERT INTO `login` VALUES ('14', '15007720055', '123');
INSERT INTO `login` VALUES ('15', '15007720056', '123');
INSERT INTO `login` VALUES ('16', '15011112222', '123');
INSERT INTO `login` VALUES ('17', '15077265016', '12');
SET FOREIGN_KEY_CHECKS=1;
