import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  request,
  requestParam,
  response,
} from "inversify-express-utils";
import { Request, Response } from "express";
import { inject } from "inversify";
import { CreateTaskUseCase } from "../../application/use-case/create-task.use-case";
import { validateSchema } from "../../../../shared/middleware/validate.schema";
import {
  createTaskSchema,
  idRequired,
  updateTaskSchema,
} from "../schema/task.schema";
import { FindTaskUseCase } from "../../application/use-case/find-task.use-case";
import { DeleteTaskUseCase } from "../../application/use-case/delete-task.use-case";
import { validateParams } from "../../../../shared/middleware/validate-params.schema";
import { UpdateTaskUseCase } from "../../application/use-case/update-task.use-case";
import { FindByIdTaskUseCase } from "../../application/use-case/find-by-id-task.use-case";
import { CatchAsyncErrors } from "../../../../shared/decorator/error";

@controller("/tasks")
export class TaskController {
  constructor(
    @inject(CreateTaskUseCase) private createTaskUseCase: CreateTaskUseCase,
    @inject(FindTaskUseCase) private findTaskUseCase: FindTaskUseCase,
    @inject(FindByIdTaskUseCase)
    private findByIdTaskUseCase: FindByIdTaskUseCase,
    @inject(DeleteTaskUseCase) private deleteTaskUseCase: DeleteTaskUseCase,
    @inject(UpdateTaskUseCase) private updateTaskUseCase: UpdateTaskUseCase,
  ) {}

  @httpPost("/", validateSchema(createTaskSchema))
  @CatchAsyncErrors()
  public async post(@request() req: Request, @response() res: Response) {
    const task = await this.createTaskUseCase.execute(req.body);
    res.status(201).json(task);
  }

  @httpGet("/")
  @CatchAsyncErrors()
  public async get(@response() res: Response) {
    const task = await this.findTaskUseCase.execute();
    res.status(200).json(task);
  }

  @httpGet("/:id")
  @CatchAsyncErrors()
  public async getById(
    @requestParam("id") id: string,
    @response() res: Response,
  ) {
    const task = await this.findByIdTaskUseCase.execute(id);
    res.status(200).json(task);
  }

  @httpDelete("/:id", validateParams(idRequired))
  @CatchAsyncErrors()
  public async delete(
    @requestParam("id") id: string,
    @response() res: Response,
  ) {
    const task = await this.deleteTaskUseCase.execute(id);
    res.status(200).json(task);
  }

  @httpPut("/:id", validateParams(idRequired), validateSchema(updateTaskSchema))
  @CatchAsyncErrors()
  public async put(
    @requestParam("id") id: string,
    @request() req: Request,
    @response() res: Response,
  ) {
    const task = await this.updateTaskUseCase.execute(id, req.body);
    res.status(200).json(task);
  }
}
