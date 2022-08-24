import axios from "axios";
import { MappedContactItem } from "../interface";

type Endpoints = {
    contact: string,
    authorize: string,
    sort: string
};
const base_url: string = 'http://localhost:3000'

const endpoints: Endpoints = {
    contact: '/contacts',
    authorize: '/authorize',
    sort: '?q='
}

export default class ProfileService {
    static async $getContact () {
        return await axios.get(base_url + endpoints.contact)
    }

    static async $addContact (data: MappedContactItem) {
        return await axios.post(base_url + endpoints.contact, data)
    }

    static async $removeContact (id: number) {
        return await axios.delete(base_url + endpoints.contact + `/${id}`)
    }

    static async $editContact (data: MappedContactItem) {
        return await axios.put(base_url + endpoints.contact + `/${data.id}`, data)
    }

    static async $sortContact (query: string) {
        return await axios.get(base_url + endpoints.contact + endpoints.sort + query)
    }
}