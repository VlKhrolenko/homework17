// Напишіть функцію, яка приймає масив чисел як аргумент і повертаєPromise
//     .Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.
//
// sumArrayPromise([1,2,3,4,5]).then(console.log)
// // 15;
function sumArrayPromise(numbers) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers)) {
            reject("Input is not an array");
            return;
        }

        setTimeout(() => {
            const sum = numbers.reduce((acc, current) => acc + current, 0);
            resolve(sum);
        }, 3000);
    });
}
sumArrayPromise([1, 2, 3, 4, 5])
    .then(result => {
        console.log(result); // 15
    })
    .catch(error => {
        console.error(error);
    });