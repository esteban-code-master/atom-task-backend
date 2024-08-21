import { taskModule } from "./modules/task/task.container";
import { Container } from "inversify";
import { userModule } from "./modules/user/user.container";
import { FirestoreService } from "./shared/interface/firestore.interface";
import { FirestoreServiceImpl } from "./shared/service/firestore.service";

const container = new Container();

container.bind<FirestoreService>(FirestoreService).to(FirestoreServiceImpl);

container.load(taskModule);
container.load(userModule);

export { container };
