import { AppDataSource } from "../data-source"
import express from "express";

import type { Request, Response } from "express";

export type { 
    ObjectLiteral, 
    EntityTarget, 
    FindManyOptions, 
    SaveOptions,
    UpdateResult,
    DeleteResult
} from "typeorm";


/*****  AppDataSource *****/
// type of TypeORM dataSource
type IAppDataSource = Awaited<ReturnType<typeof AppDataSource.initialize>>;
// type of express app
type IApp = express.Application;

/*****  RequestController *****/
// type of RouteHandler 
// type of APIRegeisters
type APIRegeister = {
    path: string;
    handler: (req: Request, res: Response) => Promise<void>;
    medthod: "GET" | "POST" | "PUT" | "DELETE";
}



export {
    IAppDataSource,
    IApp,
    APIRegeister
}