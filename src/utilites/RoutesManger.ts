import type { 
    IAppDataSource, 
    IApp, 
    ObjectLiteral, 
    EntityTarget,
} from "../@types";

import RequestController from "./RequestController";

export default class RoutesManger
{

    private dataSource: IAppDataSource;
    private app: IApp;
    private controllers: RequestController<ObjectLiteral>[] = [];

    constructor( dataSource: IAppDataSource, app: IApp)
    {
        this.dataSource = dataSource;
        this.app = app;
    }

    public addEntityController<Entity extends ObjectLiteral>(entity: EntityTarget<Entity>) : void
    {
        this.controllers.push(
            new RequestController(this.dataSource, this.app, entity) as RequestController<ObjectLiteral>
        );
    }

    public getRoutes() : void
    {
        this.controllers.forEach( controller => {
            controller.getRoutes();
        });
    }

}