/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
*/

/// Answers
/// 1.ควรใช้  Linear Search
/// 2. เพราะว่า ข้อมูลไม่มีการจัดเรียง จึงใช้  algorithm นี้
/// 3.  Big O Notation คือ  O(n) เพราะต้องตรวจสอบทุกค่าด้วยการ วน loop

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

function findStudentIndex(students, searchStudent) {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
