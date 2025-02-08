import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

/**
 * Webserver
 * @param callback setup express app
 * @param debug print debug message
 * @returns void
 * @usage 
 * 
 * import webserver from "./webserver";
 * webserver( app => {
 *    app.get(
 *       "/",
 *      (req, res) => {
 *         res.send("Hello World!")
 *      }
 *    );
 * });
 * 
 */
export default function webserver(
    callback: (app: express.Application) => void, 
    debug:boolean = false 
) : void {
    
    const app: express.Application = express();
    const HTTP_PORT: number = parseInt(process.env.HTTP_PORT?.toString() || "3000");
    app.use(express.json())

    app.use(cors(
        {
            origin: "*"
        }
    ));

    callback(app);
    
    app.listen(
        HTTP_PORT,
        () => {
            // if process.env.DEBUG is set to 1 
            if(debug || process.env.DEBUG === "1") console.log(` 🚀 Listening on port http://localhost:${HTTP_PORT} `);
        }
    );
}

export const jsonParser = bodyParser.json();
export const urlencodedParser = bodyParser.urlencoded({ extended: false });