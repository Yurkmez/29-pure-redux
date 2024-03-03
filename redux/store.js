// Здесь мы не используем установку npm пакетов,
// поэтому воспользуемся cdn для установки библиотеки "reduxjs toolkit"
// поиск в браузере "reduxjs toolkit cdn"
// https://www.jsdelivr.com/package/npm/@reduxjs/toolkit
// можно скачать всю библиотеку, но здесь нам достаточно "configureStore"
import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm';
import reducer from './reducer.js';

export default configureStore({ reducer: reducer });
