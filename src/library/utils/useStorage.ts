import _ from "lodash";
import Todo from "../types/Todo";

type storageValueProps = 
    |string
    | Todo[]


export function setStorage(key:string, value: storageValueProps) {
    const storageValue = _.isString(value) ? value : JSON.stringify(value);
    localStorage.setItem(key, storageValue);
}

export function getStorage(key: string) {
    const value = localStorage.getItem(key);
    const storageValue = key === 'name' ? value : (value && JSON.parse(value));
    return storageValue
}