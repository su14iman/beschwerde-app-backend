import { AppDataSource } from "./data-source"
import Webserver from "./utilites/webserver";

import RoutesManger from "./utilites/RoutesManger";

// Entities
import Image from "./entity/Image";
import Person from "./entity/Person";
import Location from "./entity/Location";
import Type from "./entity/Type";
import TypeCategory from "./entity/TypeCategory";
import Beschwerde from "./entity/Beschwerde";

AppDataSource.initialize().then( async dataSource => {
    Webserver( app => {
        
        // new RequestController(dataSource, app, Image).getRoutes();
        let routesManger = new RoutesManger(dataSource, app);
        routesManger.addEntityController(Image);
        routesManger.addEntityController(Person);
        routesManger.addEntityController(Location);
        routesManger.addEntityController(Type);
        routesManger.addEntityController(TypeCategory);
        routesManger.addEntityController(Beschwerde);
        routesManger.getRoutes();
        
        app.get(
            "/",
            async (req, res) => {
                res.send("Hello World!");                
            }
        );
    });
})
.catch(error => console.log(error))

