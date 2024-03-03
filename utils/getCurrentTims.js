function getCurrentTime() {
    const now = new Date();
    // Ф-ция padStart(2, '0') указывает, что у нас 2 символа и если
    // одного не хватает, то на первой позиции ставим "0"
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    return currentTime;
}

export default getCurrentTime;
