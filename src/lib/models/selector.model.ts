import { QueryModel } from './query.model';

export class SelectorModel{
    private _name:string;
    private _mediaQueries:Array<QueryModel>;
    constructor(name:string,mediaQueries:Array<QueryModel>){
        this._name=name;
        this._mediaQueries=mediaQueries;
    }
    get name():string{
        return this._name;
    }
    get mediaQueries():Array<QueryModel>{
        return this._mediaQueries;
    }
    set mediaQueries(mediaQueries:Array<QueryModel>){
        this._mediaQueries=mediaQueries;
    }
}