/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
*/

// Answer
// 1.ใช้  bubble sort
// 2. เพราะมีการให้ฟังชั่นจัดเรียงข้อมูลจากมากไปน้อย จึงต้องมีการวนลูปค่า เพื่อเปรียบเทียบ และสลับค่า rating
// 3. Big O Notation คือ O(n²) เพราะมีการวนลูปชั้นในและชั้นนอก

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

function sortByRating(shops) {
  const n = shops.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (shops[j].rating < shops[j + 1].rating) {
        let temp = shops[j];
        shops[j] = shops[j + 1];
        shops[j + 1] = temp;
      }
    }
  }

  return shops;
}

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
