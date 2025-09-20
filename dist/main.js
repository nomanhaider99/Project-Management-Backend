"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.use(cookieParser());
    app.enableCors({
        origin: ['http://localhost:4200', 'https://project-management-frontend-eosin.vercel.app'],
        credentials: true
    });
    const port = configService.get('PORT') || 8000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map