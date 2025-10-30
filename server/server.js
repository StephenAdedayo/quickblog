import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"
import adminRouter from "./routes/adminRoutes.js"
import blogRouter from "./routes/blogRoutes.js"



const app = express()
await connectDB()

// middlewares
app.use(cors())
app.use(express.json())



app.get("/", (req, res) => res.send("Api working"))
app.use("/api/admin", adminRouter)
app.use("/api/blog", blogRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`))


export default app