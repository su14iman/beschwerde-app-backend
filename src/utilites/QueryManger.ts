import type { 
    IAppDataSource,
    ObjectLiteral, 
    EntityTarget, 
    FindManyOptions, 
    SaveOptions,
    UpdateResult,
    DeleteResult
} from "../@types";

export default class QueryManger<Entity extends ObjectLiteral>   
{
    private dataSource: IAppDataSource;
    private entity: EntityTarget<Entity>;

    constructor( dataSource: IAppDataSource, entity: EntityTarget<Entity> )
    {
        this.dataSource = dataSource;
        this.entity = entity;
    }

    public async find(options?: FindManyOptions<Entity>) : Promise<Entity[]>
    {
        return this.dataSource.manager.find(this.entity, options);
    }

    public async get(optionsOrID: FindManyOptions<Entity> | number) : Promise<Entity | null>
    {
        
        let queryOptions: FindManyOptions<Entity> = {};
        if( typeof optionsOrID === "number" ) {
            queryOptions.where = { id: optionsOrID } as unknown as FindManyOptions<Entity>["where"];
        }else{
            queryOptions = optionsOrID;
        }


        return this.dataSource.manager.findOne(
            this.entity,
            queryOptions
        );
    }

    public async create(data: Entity, options?: SaveOptions) : Promise<Entity>
    {
        return this.dataSource.getRepository(this.entity).save(data, options);
    }


    public async update(criteria: Partial<Entity> | string | string[] | number | number[], partialEntity: Partial<Entity>) : Promise<UpdateResult>
    {
        return this.dataSource.manager.update(this.entity, criteria, partialEntity);
    }

    public async delete(criteria: Partial<Entity> | string | string[] | number | number[]) : Promise<DeleteResult>
    {
        return this.dataSource.manager.delete(this.entity, criteria);
    }
    

}