import { Dispatch } from 'react';
import { IActionTypes, MappedContactItem } from '../interface';
import DataService from '../Service';
import { dataSlice } from "./DataSlice";

export const getName = (navigate: Function | null = null) => async(dispatch: Dispatch<IActionTypes>): Promise<void> =>{
    dispatch(dataSlice.actions.dataFetchingLoading(true));

    const name: string = JSON.parse(localStorage.getItem('name') || '[]');

    if (name && name.length) {
        dispatch(dataSlice.actions.userName(name));
        navigate && navigate('/')
    } else {
        dispatch(dataSlice.actions.userName(null));
    }
}

export const getContact = () => async (dispatch: Dispatch<IActionTypes>): Promise<void> => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));

    const { data } = await DataService.$getContact();

    if (data.length) {
        dispatch(dataSlice.actions.dataFetch(data));
    }

}
export const searchContact = (query: string) => async (dispatch: Dispatch<IActionTypes>): Promise<void> => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));
 
    if (query.length) {
        const { data } = await DataService.$sortContact(query);

        if (data.length)
            dispatch(dataSlice.actions.dataFetch(data));

    } else {
        getContact()(dispatch);
    }
}

export const addContact = (obj: MappedContactItem) => async (dispatch: Dispatch<IActionTypes>): Promise<void> => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));

    const { data } = await DataService.$addContact(obj);
    
    if (data.length) {
        dispatch(dataSlice.actions.dataFetch(data));
    } else {
        dispatch(dataSlice.actions.dataFetchingError('error'))
    }
    getContact()(dispatch)
}

export const editContact = (obj: MappedContactItem) => async (dispatch: Dispatch<IActionTypes>): Promise<void> => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));

    const { data } = await DataService.$editContact(obj);
    
    if (data.length) {
        dispatch(dataSlice.actions.dataFetch(data));
    } else {
        dispatch(dataSlice.actions.dataFetchingError('error'))
    }
    getContact()(dispatch)
}

export const removeContact = (id: number) => async (dispatch: Dispatch<IActionTypes>): Promise<void> => {
    dispatch(dataSlice.actions.dataFetchingLoading(true));
    const { data } = await DataService.$removeContact(id);    
    getContact()(dispatch)
}