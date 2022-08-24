import { Dispatch } from "react"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { AppDispatch, RootState } from "../store/store"

export interface CardProps {
    item: {
        name: string,
        phone: string,
        age: string,
        url: string,
        id?: number
    },
    setIsOpenEdit: (is: boolean) => void,
}
export type MappedContactItem = {
    name: string,
    phone: string,
    age: string,
    url: string,
    id?: number
}
export type IStateInitial = {
    data: [],
    name: null | string,
    isLoading: boolean,
    error: string,
    currentContact: null | {
        name: string,
        phone: string,
        age: string,
        url: string,
        id?: number
    }
}
export interface ISelectorState {
    dataSlice: IStateInitial
}

export interface IActionTypes {
    type: string,
    payload: MappedContactItem[] | string | boolean | null | get,
}
export interface get {
    getContact?: (dispatch: Dispatch<IActionTypes>) => Promise<void>

}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;