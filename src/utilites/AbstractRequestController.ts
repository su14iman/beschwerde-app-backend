import type { 
    IAppDataSource, 
    IApp, 
    ObjectLiteral, 
    EntityTarget,
    APIRegeister
} from "../@types";

import QueryManger from "./QueryManger";

export default abstract class AbstractRequestController<Entity extends ObjectLiteral>
{
    protected app: IApp;
    protected queryManger: QueryManger<Entity>
    protected scope: string;
    protected apis: APIRegeister[];
    protected entity: EntityTarget<Entity>;

    constructor( dataSource: IAppDataSource, app: IApp, entity: EntityTarget<Entity>)
    {

        this.app = app;
        this.entity = entity;
        this.queryManger = new QueryManger(dataSource, entity);

        this.scope = (entity as Function).name.toLowerCase() + "s";
        this.apis = [];
        
    }

    protected registerAPI( { path, handler, medthod } : APIRegeister ) : void
    {
        this.apis.push({ path, handler, medthod });
    }

    protected initialize() : void
    {}


    public getRoutes() : void
    {
        this.initialize();
        this.apis.forEach( api => {
            let path = `/${this.scope}${api.path}`;
            if( api.medthod === "GET" ){
                this.app.get( path, api.handler.bind(this) );
            }
            else if( api.medthod === "POST" ){
                this.app.post( path, api.handler.bind(this) );
            }
            else if( api.medthod === "PUT" ){
                this.app.put( path, api.handler.bind(this) );
            }
            else if( api.medthod === "DELETE" ){
                this.app.delete( path, api.handler.bind(this) );
            }
            else{
                this.app.get( path, api.handler.bind(this) );
            }
        });
    }
}