function slugify(title) {
  // Розбиваємо рядок на слова
  let words = title.toLowerCase().split(" ");

  // Об'єднуємо слова за допомогою дефіса
  let slug = words.join("-");

  // Видаляємо дефіси, що стоять поспіль slug = slug.replace(/--+/g, '-');
  
    return slug;
    
    
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"