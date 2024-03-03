import store from './redux/store.js';
import { addCurrentTime, clearAllTimes } from './redux/actionCreators.js';

const addTimeBtn = document.getElementById('addTime');
addTimeBtn.addEventListener('click', () => {
    store.dispatch(addCurrentTime());
});

const clearTimesBtn = document.getElementById('clearTimes');
clearTimesBtn.addEventListener('click', () => {
    store.dispatch(clearAllTimes());
});

const timesList = document.getElementById('timesList');
// Подписываемся
store.subscribe(() => {
    // очищаем список
    timesList.innerHTML = '';
    // получаем массив сохраненных данных
    const times = store.getState();
    // пробегаемся по ним
    times.forEach((time) => {
        // создаем пункт списка как элемент разметки
        let li = document.createElement('li');
        // вносим в него содержание
        li.innerText = time;
        // добавляет узел в качестве последнего дочернего узла в указанный родительский элемент
        timesList.appendChild(li);
    });
});

// store.subscribe(() =>
//     console.log(`Redux store just changed! ${store.getState()}`)
// );
// Можно присвоись результат переменной, которая по сути выполняет ф-цию
//  отказа от подписки и далее ниже на определенном этапе ее использовать
// const unsubscribe = store.subscribe(() =>
//     console.log(`Redux store just changed! ${store.getState()}`)
// );

// store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: '11:30',
// });

// store.dispatch({
//     type: 'ADD_CURRENT_TIME',
//     payload: '12:30',
// });

// // unsubscribe()
// store.dispatch({
//     type: 'CLEAR_ALL_TIME',
// });
