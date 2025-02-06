import { AppDataSource } from "./data-source"
import Webserver from "./utilites/webserver";

// import Image from "./entity/Image";

AppDataSource.initialize().then( async dataSource => {
    Webserver( app => {
        app.get(
            "/",
            async (req, res) => {
                res.send("Hello World!")
                
                // const image = new Image();
                // image.url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
                // await dataSource.manager.save(image);

                // const images = await dataSource.manager.find(Image);
                // console.log(images);
            }
        );
    });
})
.catch(error => console.log(error))

