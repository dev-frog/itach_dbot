import { config } from 'dotenv';
import { createApp } from "./utils/createApp";
import './database'

config();
const PORT = process.env.PORT || 3001;


async function main() {
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))
    } catch (error) {
        console.error(error);
    }
}

main();