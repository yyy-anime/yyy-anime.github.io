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
    type: "ตอนที่ 1-105 พากย์ไทย",
    link: "Douluo-Dalu-2-thai"
  },
  {
  
    title: "Douluo Dalu II: Jueshi Tangmen ตำนานจอมยุทธ์ภูตถังซาน 2: สำนักถังเลิศภพจบแดน ตอนที่ 1-106 ซับไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Soul-Land-2-Peerless-Tang-Sect-768x1077_11zon.webp",
    type: "ตอนที่ 1-107 ซับไทย",
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
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ตอนที่ 1-13 ซับไทย",
    img: "https://img2.pic.in.th/pic/sSQb1160-2.jpg",
    type: "ตอนที่ 1-13 ซับไทย",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou Season 2 อาชีพกระจอกแล้วทำไมยังไงข้าก็เทพ ภาค 2 ตอนที่ 1-13 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-Season-2-1.jpg",
    type: "ตอนที่ 1-13 พากย์ไทย Ss2",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou Season 2 อาชีพกระจอกแล้วทำไมยังไงข้าก็เทพ ภาค 2 ตอนที่ 1-13 ซับไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-Season-2-1.jpg",
    type: "ตอนที่ 1-13 ซับไทย Ss2",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou 3 อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ภาค 3 ตอนที่ 1-16 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-3_11zon-1.jpg",
    type: "ตอนที่ 1-16 พากย์ไทย Ss3",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Arifureta Shokugyou de Sekai Saikyou 3 อาชีพกระจอกแล้วทำไม ยังไงข้าก็เทพ ภาค 3 ตอนที่ 1-16 ซับไทย",
    img: "https://img2.pic.in.th/pic/Arifureta-Shokugyou-de-Sekai-Saikyou-3_11zon-1.jpg",
    type: "ตอนที่ 1-16 ซับไทย Ss3",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "100-man no Inochi no Ue ni Ore wa Tatteiru ข้าก้าวข้ามผ่าน 1 ล้านชีวิตเพื่อพิชิตเกมมรณะ ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/image043c099756e68774.md-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season ข้าก้าวข้ามผ่าน 1 ล้านชีวิตเพื่อพิชิตเกมมรณะ ภาค 2 ตอนที่ 1-12 พากย์ไทย",
    img: "https://img2.pic.in.th/pic/58a7029892aee6c084ee06d046220592-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย Ss2",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },
  {
  
    title: "Cherry Magic 30 ยังซิงกับเวทมนตร์ปิ๊งรัก ตอนที่ 1-12 พากย์ไทย",
    img: "https://img5.pic.in.th/file/secure-sv1/Cherry-Magic-30-1.jpg",
    type: "ตอนที่ 1-12 พากย์ไทย",
    link: "Akuyaku-Reijou-Tensei-Ojisan"
  },

  // เพิ่มรายการอนิเมะได้เรื่อย ๆ
];
