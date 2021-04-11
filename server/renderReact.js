import ReactDOMServer from "react-dom/server";
import App from "./index";
import fs from "fs";

module.exports = function(app) {
    app.get('/', (req, res) => {
        const app = ReactDOMServer.renderToString(
            "<App />"
        );

        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }

            return res.send(
                data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            );
        });
    })
}