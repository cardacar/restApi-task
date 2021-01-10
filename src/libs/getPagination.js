
export const getPagination = (page, size) => {
    //Si existe un zise lo inicializo, de lo contrario por defecto es 3
    const limit = size ? +size : 3;

    const offset = page ? page * limit : 0;
    return {limit, offset};
}