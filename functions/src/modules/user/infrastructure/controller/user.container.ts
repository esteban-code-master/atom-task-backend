import {
  controller,
  httpGet,
  httpPost,
  queryParam,
  request,
  response,
} from "inversify-express-utils";
import { Request, Response } from "express";
import { inject } from "inversify";
import { validateSchema } from "../../../../shared/middleware/validate.schema";
import { CreateUserUseCase } from "../../application/use-case/create-user.use-case";
import { createUserSchema, queryParams } from "../schema/user.schema";
import { validateQuery } from "../../../../shared/middleware/validate-query.schema";
import { FindByEmailUserUseCase } from "../../application/use-case/fin-by-email.use-case";
import { CatchAsyncErrors } from "../../../../shared/decorator/error";

@controller("/users")
export class UserController {
  constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
    @inject(FindByEmailUserUseCase)
    private findByEmailUserUseCase: FindByEmailUserUseCase,
  ) {}

  @httpPost("/", validateSchema(createUserSchema))
  @CatchAsyncErrors()
  public async post(@request() req: Request, @response() res: Response) {
    const task = await this.createUserUseCase.execute(req.body);
    res.status(201).json(task);
  }

  @httpGet("/", validateQuery(queryParams))
  @CatchAsyncErrors()
  public async getById(
    @queryParam("email") email: string,
    @response() res: Response,
  ) {
    const task = await this.findByEmailUserUseCase.execute(email);
    res.status(200).json(task);
  }
}
