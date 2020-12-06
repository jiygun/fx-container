import { SelectorModel } from "./selector.model";
import { QueryModel } from "./query.model";

export module MediaQueries{
    export function container(){
        return new SelectorModel("container",new Array(new QueryModel('(max-width: 599px)','100%'),new QueryModel('(min-width: 600px) and (max-width: 959px)','100%'),
        new QueryModel('(min-width: 960px) and (max-width: 1279px)','930px'),new QueryModel('(min-width: 1280px) and (max-width: 1919px)','1250px'),new QueryModel('(min-width: 1920px) and (max-width: 5000px)','1440px')));;
    }
}