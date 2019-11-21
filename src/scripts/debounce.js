const debounce = (func, wait = 300) => {
    let timeout;

    /* Именно function declaration, т.к. нужно сохранить контекст передаваемой функции. */
    return function(...args) {
        const next = () => func.apply(this, args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
};

export default debounce;
