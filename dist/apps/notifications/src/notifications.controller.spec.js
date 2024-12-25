"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const notifications_controller_1 = require("./notifications.controller");
const notifications_service_1 = require("./notifications.service");
describe('NotificationsController', () => {
    let notificationsController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [notifications_controller_1.NotificationsController],
            providers: [notifications_service_1.NotificationsService],
        }).compile();
        notificationsController = app.get(notifications_controller_1.NotificationsController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
        });
    });
});
//# sourceMappingURL=notifications.controller.spec.js.map