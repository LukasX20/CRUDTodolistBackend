const express = require('express')
const cors = require('cors')
const port = 3000
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
app.use(express.json())
app.use(cors())
app.use('/tarefas', tarefasRoutes);

app.listen(port, () => {
    try {
        console.log(`Server is running on port http://localhost:${port}`)
    
} catch {
    console.error('Error starting the server:', error)
}
    

});