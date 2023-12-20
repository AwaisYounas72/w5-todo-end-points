import express from "express"
const app = express()
const port = 3000
import ConnectToDB from "./ConnectToDB.js"
import bodyParser from "body-parser"
import cors from "cors"
import Todo from "./Routes/Todo.js"

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        Create_Todo:"localhost:3000/api/add-todo",
        Get_ALl_Todo:"localhost:3000/api/get-all-todo",
        Update_Todo:"localhost:3000/api/update-todo/:id",
        delete_Todo:"localhost:3000/api/delete-todo/:id",
    })
})

app.use("/api",Todo)
ConnectToDB();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})