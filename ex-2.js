/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
*/

/// answer
/// 1. ควรใช้ linear search
/// 2. เพราะข้อมูลนี้ไม่มีการจัดเรียง จึงใช้ linear search ในการหาค่าตรงๆเลย โดยการตรวจสอบทีละตัว
/// 3. Big O Notation คือ O(n) เพราะมีการตรวจสอบต่อ n ครั้ง เพื่อหาตำแหน่งที่ต้องการออกมา

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

function findBookIndex(books, searchBook) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === searchBook) {
      return i;
    }
  }
  return -1;
}

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
