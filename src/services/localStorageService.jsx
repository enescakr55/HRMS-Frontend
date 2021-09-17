export default class LocalStorageService{
    addItem(name,value){
        localStorage.setItem(name,value);
        console.log(name + "--> " + value);
    }
    getItem(name){
        return localStorage.getItem(name);
    }
    removeItem(name){
        localStorage.removeItem(name);
        return true;
    }
}