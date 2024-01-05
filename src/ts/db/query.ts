import { API } from "../const";

export const fetchGet = async (table: string, id: number = -1) => {
    let query: string = `${API}get?table=${table}`;
    if (id !== -1) {
        query += `&id=${id}`;
    }
    const response = await fetch(query);
    const data = await response.json();
    return data.values;
}