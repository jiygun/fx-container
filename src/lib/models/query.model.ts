export class QueryModel{
    private _queryMedia:string;
    private _queryStyleProperty:string;
    constructor(queryMedia:string,queryStyleProperty:string){
        this._queryMedia=queryMedia;
        this._queryStyleProperty=queryStyleProperty;
    }
    get queryMedia():string{
        return this._queryMedia;
    }
    get queryStyleProperty():string{
        return this._queryStyleProperty;
    }
    set queryStyleProperty(queryStyleProperty:string){
        this._queryStyleProperty=queryStyleProperty;
    }
}