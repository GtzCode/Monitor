import * as fs from 'fs';
import { parse } from 'dotenv';
import { join } from 'path';

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        const isDevelomentEnt = process.env.NODE_ENV !== 'production';

        if (isDevelomentEnt) {
            const envFilePath = join(__dirname, '../../.env');

            const existPath = fs.existsSync(envFilePath);

            if (!existPath) {
                console.log('.env file does not exist');
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        } else {
            this.envConfig = {
                PORT: process.env.PORT,
            };
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}
