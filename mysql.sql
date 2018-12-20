SET NAMES UTF8;
DROP DATABASE IF EXISTS my_stark_bucks;
CREATE DATABASE my_stark_bucks CHARSET = UTF8;
USE my_stark_bucks;
#会员表
CREATE TABLE emp(
    eid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(14) UNIQUE,
    password VARCHAR(18),
    gender BOOL,
    addr VARCHAR(40),
    phone VARCHAR(11),
    email VARCHAR(20)
);
INSERT INTO emp VALUES
    (1,'dingding','123456',1,'北京',12345678901,'123@qq.com'),
    (NULL,'dangding','123456',0,'杭州',12345678902,'123@qq.com'),
    (NULL,'ddngding','123456',1,'三亚',12345678903,'123@qq.com');

#图片表
CREATE TABLE img(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    picture VARCHAR(200),
    className VARCHAR(20),
    page VARCHAR(30),
    wenJianJia VARCHAR(50),
    url VARCHAR(80) UNIQUE
);
INSERT INTO img VALUES
    (1,'slider.jpg','轮播图',"img/admin/user.png",'index.html','sliders','img/home/sliders/slider.jpg'),
    (NULL,'slider2.jpg','轮播图',"img/index/logo.svg",'index.html','sliders','img/home/sliders/slider2.jpg'),
    (NULL,'slider3.jpg','轮播图',"img/index/logo.svg",'index.html','sliders','img/home/sliders/slider3.jpg'),
    (NULL,'slider4.jpg','轮播图',"img/index/logo.svg",'index.html','sliders','img/home/sliders/slider4.jpg'),
    (NULL,'slider6.jpg','轮播图',"img/index/logo.svg",'index.html','sliders','img/home/sliders/slider6.jpg'),
    (NULL,'slider8.jpg','轮播图',"img/index/logo.svg",'index.html','sliders','img/home/sliders/slider8.jpg'),
    (NULL,'slider10.jpg','轮播图',"img/index/logo.svg",'index.html','sliders','img/home/sliders/slider10.jpg');
#饮料表
CREATE TABLE drink(
    did INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    name_family VARCHAR(50)
);
INSERT INTO drink VALUES
    (1,'手工调制浓缩咖啡','hand_coffe'),
    (null,'星冰乐®','start_coffe'),
    (null,'茶瓦纳™','tea_coffe'),
    (null,'经典巧克力饮品','chocalte_coffe'),
    (null,'咖啡融合冰淇淋','cream_coffe'),
    (null,'冷萃冰咖啡','cold_coffe'),
    (null,'气致™冷萃咖啡','nitro_coffe'),
    (null,'绵云冷萃冰咖啡','cold_foam_coffe');

#手工调制浓缩咖啡
CREATE TABLE hand_coffe(
    did INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    src VARCHAR(100),
    family VARCHAR(20),
    detail VARCHAR(200)
);
INSERT INTO hand_coffe VALUES
    (1,'美式咖啡（热/冷）','img/drink/caffe-americano.jpg','手工调制浓缩咖啡',"简单即是美味，萃取经典浓缩咖啡，以水调和，香气浓郁蔓溢。"),
    (null,'拿铁（热/冷）','img/drink/caffe-latte.jpg','手工调制浓缩咖啡',"本色的经典咖啡。新鲜萃取的浓缩咖啡中缓缓倒入蒸煮牛奶，覆上轻柔奶泡，简单的香与纯。"),
    (null,'摩卡（热/冷)','img/drink/cappuccino.jpg','手工调制浓缩咖啡',"摩卡最初是指一种带有巧克力风味的咖啡豆，现在，这份巧克力咖啡仍然带给你纯正的温暖。在浓缩咖啡中加入摩卡酱，与蒸煮牛奶一起交织出丝滑与醇厚。"),
    (null,'卡布奇诺（热/冷）','img/drink/caramel-macchiato.jpg','手工调制浓缩咖啡',"蒸煮牛奶与浓缩咖啡相融合，用丰厚绵密的奶泡覆顶，再撒上肉桂粉或可可粉。温馨提示：在奶泡消融前，请尽快享用"),
    (null,'焦糖玛奇朵（热/冷）','img/drink/espresso.jpg','手工调制浓缩咖啡',"玛奇朵在意大利语中的意思是“印记”。从蒸煮牛奶和添加风味糖浆开始，再倒入醇厚的浓缩咖啡，留下属于玛奇朵的独有印记。"),
    (null,'浓缩咖啡','img/drink/flat-white.jpg','手工调制浓缩咖啡',"萃取星巴克浓缩烘焙咖啡豆精华，每一口都馥郁满溢，伴随浓郁的焦糖香及多层次的口感，带你开启星巴克咖啡之旅。"),
    (null,'馥芮白™','img/drink/hazelnut-flavored-latte.jpg','手工调制浓缩咖啡',"选用星巴克精萃浓缩咖啡制成，融合绵密奶泡，风味更浓郁和甘甜。"),
    (null,'榛果风味拿铁（热/冷）','img/drink/vanilla-flavored-latte.jpg','手工调制浓缩咖啡',"榛果风味与醇厚的浓缩咖啡相得益彰，融合在蒸煮牛奶中，带给你特别温暖的醇香。");
#星冰乐
CREATE TABLE start_coffe(
    did INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    src VARCHAR(100),
    family VARCHAR(20),
    detail VARCHAR(200)
);
INSERT INTO start_coffe VALUES
    (1,'焦糖浓缩咖啡星冰乐','img/drink/start_coffe/caramel-espresso-frappuccino.jpg','星冰乐®',"香醇浓缩咖啡融于浓郁的焦糖咖啡星冰乐，最后在顶部的搅打稀奶油上淋上焦糖风味酱。让你停不了口的美味。"),
    (null,'浓缩咖啡星冰乐','img/drink/start_coffe/espresso-frappuccino.jpg','星冰乐®',"在咖啡星冰乐中，加入浓缩咖啡。让每一滴的醇香都冻凝在杯中。"),
    (null,'抹茶星冰乐','img/drink/start_coffe/green-tea-frappuccino.jpg','星冰乐®',"抹茶的清新，加一份牛奶的丝滑，与冰块和稀奶油搅拌出特有的清爽。"),
    (null,'芒果西番莲果茶星冰乐','img/drink/start_coffe/mango-passion-tea.jpg','星冰乐®',"将花草茶的清爽，芒果西番莲果汁的酸甜与冰块融合。无需分清这一口是花香或果香，都是祛暑清凉的好饮品。"),
    (null,'摩卡星冰乐','img/drink/start_coffe/mocha-frappuccino.jpg','星冰乐®',"摩卡酱与星冰乐烘焙咖啡、在牛奶加冰块中绽放快乐，伴着雪白的稀奶油，让你每个瞬间都充满活力。"),
    (null,'摩卡可可碎片星冰乐','img/drink/start_coffe/mocha-java-chip-frappuccino.jpg','星冰乐®',"摩卡酱和咖啡在冰块的碰撞下魅力四射，可可碎片带来不同的口感，顶部覆以稀奶油与摩卡酱，让浓郁变得更加有趣。(可可碎片为代可可脂巧克力)"),
    (null,'香草风味星冰乐','img/drink/start_coffe/vanilla-flavored-cream-frappuccino-blended-beverage.jpg','星冰乐®',"香草风味糖浆与牛奶和冰块搅打出的奶香清甜，口感清爽怡人。");


























