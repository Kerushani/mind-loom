//Local storage

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//delete function
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}