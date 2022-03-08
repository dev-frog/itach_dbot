import { config } from 'dotenv';
config();
import { createApp } from "./utils/createApp";

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