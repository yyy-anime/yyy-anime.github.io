const animeList = [
  {
    title: "One Piece Season 21 – วันพีช ซีซั่น 21 เกาะอนาคตเกาะเอ็กเฮด ตอนที่ 1089-1134 ซับไทย",
    img: "https://img2.pic.in.th/pic/One-Piece-Season-21-4.jpg",
    type: "ตอนที่ 1089-1134 ซับไทย",
    link: "One-Piece-Season-21"
  },
  {
    title: "Black Clover แบล็คโคลเวอร์ ตอนที่ 1-170 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/bf26af8a102711cdc85dc1befc400c4e.jpg",
    type: "ตอนที่ 1-170 พากย์ไทย",
    link: "black-clover-thai"
  },
  {
    title: "Fights Break Sphere Season 5 สัประยุทธ์ทะลุฟ้า ภาค 5 ตอนที่ 1-153 ซับไทย",
    img: "https://img2.pic.in.th/pic/Fights-Break-Sphere-Season-5-1_11zon3cf7c93b89dc03bb.jpg",
    type: "ตอนที่ 1-153 ซับไทย Ss5",
    link: "Fights-Break-Sphere-Season-5"
  },
  {
    title: "Fights Break Sphere Season 4 สัประยุทธ์ทะลุฟ้า ภาค 4 ตอนที่ 1-24 ซับไทย",
    img: "https://img2.pic.in.th/pic/Fights-Break-Sphere-Season-4-1_11zon.jpg",
    type: "ตอนที่ 1-24 ซับไทย Ss4",
    link: "Fights-Break-Sphere-Season4"
  },
  {
    title: "Fights Break Sphere Season 3 สัประยุทธ์ทะลุฟ้า ภาค 3 ตอนที่ 1-12 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Fights-Break-Sphere-Season-3-1-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย Ss3",
    link: "Fights-Break-Sphere-Season-3"
  },
  {
    title: "Fights Break Sphere Season 2 สัประยุทธ์ทะลุฟ้า ภาค 2 ตอนที่ 1-12 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Fights-Break-Sphere-Season-2-1-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย Ss2",
    link: "Fights-Break-Sphere-Season-2"
  },
  {
    title: "Fights Break Sphere Season 1 สัประยุทธ์ทะลุฟ้า ภาค 1 ตอนที่ 1-12 ซับไทย",
    img: "https://img2.pic.in.th/pic/Fights-Break-Sphere-e1701447291695-1-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย Ss1",
    link: "Fights-Break-Sphere-Season-1"
  },
  
  {
    title: "One Piece Season 21 – วันพีช ซีซั่น 21 เกาะอนาคตเกาะเอ็กเฮด ตอนที่ 1089-1122 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/One-Piece-Season-21-4.jpg",
    type: "ตอนที่ 1089-1122 พากย์ไทย",
    link: "One-Piece-Season-21-thai"
  },
  {
    title: "Perfect World โลกอันสมบูรณ์แบบ ตอนที่ 1-221 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Perfect-World-1.jpg",
    type: "ตอนที่ 1-220 ซับไทย",
    link: "Perfect-World"
  },
  {
  
    title: "Perfect World โลกอันสมบูรณ์แบบ ตอนที่ 1-212 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Perfect-World-1.jpg",
    type: "ตอนที่ 1-212 พากย์ไทย",
    link: "Perfect-World-thai"
  },
    {
  
    title: "Douluo Dalu II: Jueshi Tangmen ตำนานจอมยุทธ์ภูตถังซาน 2: สำนักถังเลิศภพจบแดน ตอนที่ 1-104 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Soul-Land-2-Peerless-Tang-Sect-768x1077_11zon.webp",
    type: "ตอนที่ 1-105 พากย์ไทย Ss2",
    link: "Douluo-Dalu-2-thai"
  },
  {
  
    title: "Douluo Dalu II: Jueshi Tangmen ตำนานจอมยุทธ์ภูตถังซาน 2: สำนักถังเลิศภพจบแดน ตอนที่ 1-106 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Soul-Land-2-Peerless-Tang-Sect-768x1077_11zon.webp",
    type: "ตอนที่ 1-107 ซับไทย Ss2",
    link: "Douluo-Dalu-2"
  },
  {
  
    title: "Douluo Dalu (Soul Land) ตำนานจอมยุทธ์ภูตถังซาน ตอนที่ 1-265 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/images-2-1bc9fc8f7380b3ec3.jpeg",
    type: "ตอนที่ 1-265 พากย์ไทย",
    link: "Douluo-Dalu"
  },
  {
  
    title: "Shen Yin Wangzuo ผนึกเทพบัลลังก์ราชันย์ ตอนที่ 1-165 ซับไทย",
    img: "https://img2.pic.in.th/pic/GoOnlineTools-image-downloader-1_11zon-1.jpeg",
    type: "ตอนที่ 1-166 ซับไทย",
    link: "Shen-Yin-Wangzuo"
  },
  {
  
    title: "Tunshi Xingkong มหาศึกล้างพิภพ ตอนที่ 1-176 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Tunshi-Xingkong-1-1.jpg",
    type: "ตอนที่ 1-176 พากย์ไทย",
    link: "Tunshi-Xingkong-Thai"
  },
  {
  
    title: "Blue Lock ขังดวลแข้ง ตอนที่ 1-24 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Blue-Lock--300x450-1.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย",
    link: "Blue-Lock-Thai"
  },
  {
  
    title: "Blue Lock ขังดวลแข้ง ตอนที่ 1-24 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Blue-Lock--300x450-1.jpg",
    type: "ตอนที่ 1-24 ซับไทย",
    link: "Blue-Lock"
  },
  {
  
    title: "Blue Lock vs. U-20 Japan – ขังดวลแข้ง ภาค 2 ตอนที่ 1-14 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Blue-Lock-2nd-Season_11zon-1.jpg",
    type: "ตอนที่ 1-14 พากย์ไทย Ss2",
    link: "Blue-Lock-Ss2-Thai"
  },
  {
  
    title: "Blue Lock vs. U-20 Japan – ขังดวลแข้ง ภาค 2 ตอนที่ 1-14 ซับไทย",
    img: "https://img2.pic.in.th/pic/Blue-Lock-2nd-Season_11zon-1.jpg",
    type: "ตอนที่ 1-14 ซับไทย Ss2",
    link: "Blue-Lock-Ss2"
  },
  {
  
    title: "Akuyaku Reijou Tensei Ojisan เมื่อตาลุงเกิดใหม่เป็นนางร้ายที่ต่างโลก ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Akuyaku-Reijou-Tensei-Ojisan-1_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Akuyaku-Reijou-Tensei-Ojisan-Thai"
  },
  {
  
    title: "Akuyaku Reijou Tensei Ojisan เมื่อตาลุงเกิดใหม่เป็นนางร้ายที่ต่างโลก ตอนที่ 1-12 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Akuyaku-Reijou-Tensei-Ojisan-1_11zon-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ตอนที่ 1-13 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/sSQb1160-2.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย",
    link: "Arifureta-Shokugyou-de-Sekai-Saikyou-Thai"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ตอนที่ 1-13 ซับไทย",
    img: "https://img2.pic.in.th/pic/sSQb1160-2.jpg",
    type: "ตอนที่ 1-13 ซับไทย",
    link: "Arifureta-Shokugyou-de-Sekai-Saikyou"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou Season 2 อาชีพกระจอกแล้วทำไมยังไงข้าก็เทพ ภาค 2 ตอนที่ 1-13 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-Season-2-1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย Ss2",
    link: "Arifureta-Shokugyou-de-Sekai-Saikyou-Ss2-Thai"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou Season 2 อาชีพกระจอกแล้วทำไมยังไงข้าก็เทพ ภาค 2 ตอนที่ 1-13 ซับไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-Season-2-1.jpg",
    type: "ตอนที่ 1-13 ซับไทย Ss2",
    link: "Arifureta-Shokugyou-de-Sekai-Saikyou-Ss2"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou 3 อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ภาค 3 ตอนที่ 1-16 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-3_11zon-1.jpg",
    type: "ตอนที่ 1-16 พากย์ไทย Ss3",
    link: "Arifureta-Shokugyou-de-Sekai-Saikyou-Ss3-Thai"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou 3 อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ภาค 3 ตอนที่ 1-16 ซับไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-3_11zon-1.jpg",
    type: "ตอนที่ 1-16 ซับไทย Ss3",
    link: "Arifureta-Shokugyou-de-Sekai-Saikyou-Ss3"
  },
  {
  
    title: "100-man no Inochi no Ue ni Ore wa Tatteiru ข้าก้าวข้ามผ่าน 1 ล้านชีวิตเพื่อพิชิตเกมมรณะ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/image043c099756e68774.md-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "100-man-Ss1"
  },
  {
  
    title: "100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season ข้าก้าวข้ามผ่าน 1 ล้านชีวิตเพื่อพิชิตเกมมรณะ ภาค 2 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/58a7029892aee6c084ee06d046220592-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "100-man-Ss2"
  },
  {
  
    title: "Cherry Magic 30 ยังซิงกับเวทมนตร์ปิ๊งรัก ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Cherry-Magic-30-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
{
  
    title: "Kimetsu no Yaiba ดาบพิฆาตอสูร ตอนที่ 1-26 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Kimetsu-no-Yaiba-1.jpg",
    type: "ตอนที่ 1-26 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Kimetsu no Yaiba: Mugen Ressha-hen ดาบพิฆาตอสูร ศึกรถไฟสู่นิรันดร์ ตอนที่ 1-7 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Kimetsu-no-Yaiba-Mugen-Ressha-hen--1.jpg",
    type: "ตอนที่ 1-7 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Kimetsu no Yaiba: Yuukaku-hen ดาบพิฆาตอสูร ซีซั่น 2 ย่านเริงรมย์ ตอนที่ 1-11 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Kimetsu-no-Yaiba-Yuukaku-hen--1.jpg",
    type: "ตอนที่ 1-11 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Kimetsu no Yaiba: Katanakaji no Sato-hen ดาบพิฆาตอสูร ซีซั่น 3 บทหมู่บ้านช่างตีดาบ ตอนที่ 1-11 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Kimetsu-no-Yaiba_-Katanakaji-no-Sato-hen-1.jpg",
    type: "ตอนที่ 1-11 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Kimetsu No Yaiba: Hashira Geiko-Hen ดาบพิฆาตอสูร ซีซั่น 4 ภาคการสั่งสอนของเสาหลัก ตอนที่ 1-8 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Kimetsu-no-Yaiba-Hashira-Geiko-hen-1.jpg",
    type: "ตอนที่ 1-8 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Mashle ศึกโลกเวทมนตร์คนพลังกล้าม ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Mashle-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "MF Ghost 2nd Season – เอ็มเอฟ โกส ซีซั่น 2 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/MF-Ghost-2nd-Season-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "MF Ghost เอ็มเอฟ โกส ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/132348l-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Mashle 2nd Season ศึกโลกเวทมนตร์คนพลังกล้าม ภาค 2 ตอนที่ 1-12 พากย์ไทยย",
    img: "https://img5.pic.in.th/file/secure-sv1/140458l-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Tensei shitara Slime Datta Ken เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ตอนที่ 1-24 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Tensei-shitara-Slime-Datta-Ken--1.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Tensei shitara Slime Datta Ken 2nd Season เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ภาค 2 ตอนที่ 1-24 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Tensei-Shitara-Slime-Datta-Ken-2nd-Season-1.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Tensei Shitara Slime Datta Ken 3rd Season เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ภาค 3 ตอนที่ 1-24 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Tensei-shitara-Slime-Datta-Ken-3rd-Season-1.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย Ss3",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Tensura Nikki: Tensei Shitara Slime Datta Ken เดอะ สไลม์ ไดอารี่ ตอนที่ 1-12 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/112268-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Record of Ragnarok มหาศึกคนชนเทพ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Record-of-Ragnarok-1_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Record of Ragnarok มหาศึกคนชนเทพ ตอนที่ 1-12 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Record-of-Ragnarok-1_11zon-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Record of Ragnarok II มหาศึกคนชนเทพ ซีซั่น 2 ตอนที่ 1-15 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Record-of-Ragnarok-II_11zon-1.jpg",
    type: "ตอนที่ 1-15 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Record of Ragnarok II มหาศึกคนชนเทพ ซีซั่น 2 ตอนที่ 1-15 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Record-of-Ragnarok-II_11zon-1.jpg",
    type: "ตอนที่ 1-15 ซับไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Akuma no Riddle ปริศนาสั่งฆ่า ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/imagef57b588161b19259-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "DANDADAN ดันดาดัน ตอนที่ 1-12 ซับไทย",
    img: "https://img2.pic.in.th/pic/Dandadan-1_11zon-1.jpg",
    type: "ตอนที่ 1-12 ซับไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "DANDADAN ดันดาดัน ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Dandadan-1_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
 
  {
  
    title: "YoukosoJitsuryoku Shijou Shugi no Kyoushitsu e โรงเรียนแห่งความเป็นเลิศ ภาค 1 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-1-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e Season 2 โรงเรียนแห่งความเป็นเลิศ ภาค 2 ตอนที่ 1-13 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-Season-2--1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd โรงเรียนแห่งความเป็นเลิศ ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ภาค 3 ตอนที่ 1-13 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e-3rd-Season-1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย Ss3",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Zom 100: Bucket List of the Dead สิ่งที่อยากทำก่อนจะกลายเป็นซอมบี้ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/136408l_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Yuusha Party wo Tsuihou sareta Beast Tamer เทมเมอร์ถูกทิ้งกับเด็กหญิงหูแมวสุดแกร่ง ตอนที่ 1-13 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Yuusha-Party-wo-Tsuihou-sareta-Beast-Tamer_11zon-1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Yuusha ga Shinda! เมื่อผู้กล้าลาโลกแล้ว! ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Yuusha-ga-Shinda-768x1086_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Watashi no Shiawase na Kekkon ขอให้รักเรานี้ได้มีความสุข ตอนที่ 1-25 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/0bc886c4e33e3c71279abbdb9a1da4b6_11zon-1.jpg",
    type: "ตอนที่ 1-25 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dr. Stone Season 1 ด็อกเตอร์สโตน ภาค 1 ตอนที่ 1-24 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/a33437be50f5ec0cdff786f6b03dbde3_11zon-1.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dr. Stone: Stone Wars ด็อกเตอร์สโตน ภาค 2 ตอนที่ 1-11 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/a195799bbd731a074594a9e97bc9abcd_11zon-1.jpg",
    type: "ตอนที่ 1-11 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dr. Stone Ryusui ด็อกเตอร์สโตน (ภาคพิเศษ) พากย์ไทย",
    img: "https://img2.pic.in.th/pic/ff7259d26a389f55d7d5aa96795342e6_11zon.jpg",
    type: "ตอนพิเศษริวซุย ซับไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dr. Stone: New World Season 3 ด็อกเตอร์สโตน ภาค3 ตอนที่ 1-11พากย์ไทย",
    img: "https://img2.pic.in.th/pic/b880d2850446f7565380933f41074a61_11zon-1.jpg",
    type: "ตอนที่ 1-11 พากย์ไทย Ss3",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dr. Stone: New World Season 3 Part 2 ด็อกเตอร์สโตน ภาค3 พาร์ท 2 ตอนที่ 1-11พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/375dcb550836eb4e6c6ce48ced07a374_11zon-1.jpg",
    type: "ตอนที่ 1-11 พากย์ไทย Ss3 part2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dr.Stone Season 4 – ด็อกเตอร์สโตน ภาค 4 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/c7f230d5b15588b8d678c9174092d7f1_11zon.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss4",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Eiyuuou, Bu wo Kiwameru Tame Tenseisu ราชาวีรชน เกิดใหม่เพื่อขัดเกลาวิถีต่อสู้ และกลายเป็นอัศวินฝึกหัดที่แกร่งสุดในโลก ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Eiyuuou-Bu-wo-Kiwameru-Tame-Tenseisu-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Dungeon Meshi สูตรลับตำหรับดันเจี้ยน ตอนที่ 1-24 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Dungeon-Meshi.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Shikkakumon no Saikyou Kenja ปราชญ์หนึ่งในใต้หล้ากับตราสุดอัปยศ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Shikkakumon-no-Saikyou-Kenja-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Isekai de Cheat Skill wo Te ni Shita Ore wa สกิลโกงไร้เทียมทาน สร้างตำนานในสองโลก ตอนที่ 1-13 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Isekai-de-Cheat-Skill-wo-Te-ni-Shita-Ore-wa-1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Lookism คนมันหล่อช่วยไม่ได้ ตอนที่ 1-8 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Lookism-1.jpg",
    type: "ตอนที่ 1-8 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Seirei Gensouki Spirit Chronicles ตำนานวิญญาณแฟนซี ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Seirei-Gensouki-Spirit-Chronicles--1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Shangri-La Frontier เมื่อนักล่าเกมขยะท้าสู้ในเกมเทพ ตอนที่ 1-25 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Shangri-La-Frontier_11zon-1.jpg",
    type: "ตอนที่ 1-25 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },

  {
  
    title: "Shangri-La Frontier Season 2 – เมื่อนักล่าเกมขยะท้าสู้ในเกมเทพ ซีซั่น 2 ตอนที่ 1-25 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Shangri-La-Frontier-Season-2-1.jpg",
    type: "ตอนที่ 1-25 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Sousou no Frieren คำอธิษฐานในวันที่จากลา ฟรีเรน ตอนที่ 1-28 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/55a552c29d3fd34de11ae06de15c1895-1.jpg",
    type: "ตอนที่ 1-28 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Spy x Family ครอบครัวปลอมๆ เฉพาะกิจ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/912e02686624c724f01969f236db3b55-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Spy x Family Part 2 ครอบครัวปลอม ๆ เฉพาะกิจ พาร์ท 2 ตอนที่ 1-13 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Spy-x-Family-Part-2-1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย part2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Spy x Family Season 2 ครอบครัวปลอมๆ เฉพาะกิจ ภาค 2 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/602e7fd58119c10a0a0bb75bee05979e-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Sono Bisque Doll wa Koi wo suru หนุ่มเย็บผ้ากับสาวนักคอสเพลย์ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/51aeb16ebabcbc4ae07862a5fd9dc948_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Noumin Kanren no Skill ผมเอาแต่อัปสกิลทำฟาร์ม แต่ไม่รู้ทำไมผมถึงได้แข็งแกร่งขึ้นซะงั้น ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/7202f9e40be5751b5639a40b8e190708-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri น้องโล่สายแทงก์ แกร่งเกินร้อย ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/imagee5ed422bc3381fdb-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
    {
  
    title: "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu 2 น้องโล่สายแทงก์แกร่งเกินร้อย ภาค 2 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/44144bce108e3ff5f5b36f63e184e4ae-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Kage no Jitsuryokusha ni Naritakute ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา ตอนที่ 1-20 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/228671e16bf0463551ec32aca593b345-1.jpg",
    type: "ตอนที่ 1-20 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Kage no Jitsuryokusha ni Naritakute 2nd Season ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา ภาค 2 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/7cbe1308b07b6441733ec65d70d866ae_11zon-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Jujutsu Kaisen มหาเวทย์ผนึกมาร ตอนที่ 1-24 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/imagebceac6e7447e6cdb.jpg",
    type: "ตอนที่ 1-24 พากย์ไทย",
    link: "Cherry-Magic-30-Thai"
  },
  {
  
    title: "Jujutsu Kaisen Season 2 มหาเวทย์ผนึกมาร ภาค 2 ตอนที่ 1-23 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/c218ba824cbe197958791a3185a02e80_11zon-1.jpg",
    type: "ตอนที่ 1-23 พากย์ไทย Ss2",
    link: "Cherry-Magic-30-Thai"
  },
  





  // เพิ่มรายการอนิเมะได้เรื่อย ๆ
];
