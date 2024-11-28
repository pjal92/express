import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.set("views", join(__dirname, "views"));

app.use(indexRoutes);
app.use(express.static(join(__dirname, "public")));

app.listen(app.get("port"));
console.log("Server is listening on port", app.get("port"));
