import type { 
    IAppDataSource, 
    IApp, 
    ObjectLiteral, 
    EntityTarget,
} from "../@types";

import AbstractRequestController from "./AbstractRequestController";


export default class RequestController<Entity extends ObjectLiteral> extends AbstractRequestController<Entity>
{
    constructor( dataSource: IAppDataSource, app: IApp, entity: EntityTarget<Entity>)
    {
        super(dataSource, app, entity);
    }

    public override initialize() : void
    {
        
        // find
        this.registerAPI({
            medthod: "GET",
            path: "/",
            handler: async (req, res) => {
                let data = await this.queryManger.find();
                res.json(data);
            }
        });
        // get
        this.registerAPI({
            medthod: "GET",
            path: "/:id",
            handler: async (req, res) => {
                let data = await this.queryManger.get(parseInt(req.params.id));
                res.json(data);
            }
        });
        // create
        this.registerAPI({
            medthod: "POST",
            path: "/",
            handler: async (req, res) => {
                const data = await this.queryManger.create(req.body);
                res.json(data);
            }
        });
        // update
        this.registerAPI({
            medthod: "PUT",
            path: "/:id",
            handler: async (req, res) => {
                const data = await this.queryManger.update(
                    parseInt(req.params.id), 
                    req.body
                );
                res.json(data);
            }
        });
        // delete
        this.registerAPI({
            medthod: "DELETE",
            path: "/:id",
            handler: async (req, res) => {
                const data = await this.queryManger.delete(parseInt(req.params.id));
                res.json(data);
            }
        });
    }

}