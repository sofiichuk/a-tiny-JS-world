/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/sofiichuk/a-tiny-JS-world
   Web app: https://sofiichuk.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
const man = {
        species: 'human',
        name: 'oneArmedBandit',
        gender: 'male',
        legs: 2,
        hands: 1,
        saying: 'Arrrgh!',
        friend: 0
    };

const woman = {
        species: 'human',
        name: 'twoArmedWoman',
        gender: 'female',
        legs: 2,
        hands: 2,
        saying: 'How dare you!',
        friend: 0
};

let dog = {
        species: 'dog',
        name: 'barbosAkaTripod',
        gender: 'male',
        legs: 3,
        hands: 0,
        saying: 'I can speak too. What\'s your problem?',
        friend: 'sheMurzik'
};

const cat = {
        species: 'cat',
        name: 'sheMurzik',
        gender: 'female',
        legs: 4,
        hands: 0,
        saying: 'I\'m just a normal cat. Meow.',
        friend: 'Halle Berry, Tripod'
};

const catWoman = {
        species: 'chimera',
        name: 'halleBerry',
        gender: 'female',
        legs: undefined,
        hands: undefined,
        saying: 'I\'m just a normal cat. Meow.',
        friend: 'sheMurzik'
};

// ======== OUTPUT ========

print(man.species + ';' + man.name + ';' + man.gender + ';' +
    man.legs + ';' + man.hands + ';' + man.saying + ';' + man.friend);
print(woman.species + ';' + woman.name + ';' + woman.gender + ';' +
    woman.legs + ';' + woman.hands + ';' + woman.saying + ';' + woman.friend);
print(dog.species + ';' + dog.name + ';' + dog.gender + ';' +
    dog.legs + ';' + dog.hands + ';' + dog.saying + ';' + dog.friend);
print(cat.species + ';' + cat.name + ';' + cat.gender + ';' +
    cat.legs + ';' + cat.hands + ';' + cat.saying + ';' + cat.friend);
print(catWoman.species + ';' + catWoman.name + ';' + catWoman.gender + ';' +
    catWoman.legs + ';' + catWoman.hands + ';' + catWoman.saying + ';' + catWoman.friend);


// !!!!!!!!!!!!!If you know how to improve the code sample above e.g. employing #Array.join
// !!!!!!!!!!!!!or a function that takes an object
// as an argument and returns a string to feed to print() then go ahead.
//    Testing your app
// To see how things work just open index.html with your browser.
// Press Ctrl-Shift-J in Google Chrome or Mozilla Firefox to see developer's console for possible errors.
// You may want to prettify the output, but try focusing more on code itself.
// Doing var object1 = object2 and object2.name='Anny' results in changing name of object1 to Anny as well?


// Додаткові вимоги
//
// Властивості об’єкта, які є частинами рядка представлення об’єкта, мають бути явно перераховані/вказані
//
// Object методи, такі як keys, values, entries не слід використовувати для створення рядка презентації об’єкта оскільки вони не гарантують певного порядку ключів/значень
//
// Ваш код DRY, що означає, що коли ви бачите патерн у вашому коді, його слід уникати. Приклади:
// !!!!!!!!!!!!!! print(dog); print(cat); etc ... слід переробити, використовуючи як мінімум Array.forEach
// !!!!!!!!!!!!!!`${obj.prop1}; ${obj.prop2}; ${obj.prop3};` (так, рядки/літерали шаблону є формою коду)
// необхідно переробити з використанням відповідних методів Array (ви знайдете map і join найбільш зручними)
//
// Після завершення виконайте наступне:
//?????????? MERGE OR PR-request ?????????????????
//     Для цього завдання вам знадобиться review коду:
//     Для студентів курсу Frontend 2022: будь ласка, дотримуйтесь цих інструкцій
// Для студентів p2p course: будь ласка, дотримуйтесь цих інструкцій
// Зауважте, що особливо це завдання вимагає від вас подання один файл (index.js лише) до frontend-2022-homeworks або frontend-2019-p2p репозиторію для перевірки коду.
//     Чудова робота! Якщо ваш PR вже продивились ментори, узгодили та вмерджили (його статус змінено на merged з фіолетовою іконкою), то прийшов час ділитись своїми досягненнями з іншими – опублікуйте повідомлення в course channel: A Tiny JS World — #done (або A Tiny JS World — #p2p_done якщо ви студент курсу p2p) і додайте посилання до свого репо. Цей крок важливий, оскільки він допомагає наставникам відстежувати ваш прогрес!
//     Прочитайте одну-дві статті про ООП за посиланнями в цьому репо
// Готово?
// ➡️ Ідіть далі Object-Oriented JavaScript