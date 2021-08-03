export default class SelectboxService{
    setValueAndText(arr,valKey,textKey){
        const selectOptions = new Array();
        arr.map((val)=>(selectOptions.push({value:val[valKey],text:val[textKey]})));
        console.log(selectOptions);
        return selectOptions;
        

    }
}