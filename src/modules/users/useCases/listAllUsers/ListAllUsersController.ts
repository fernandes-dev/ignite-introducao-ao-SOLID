import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers as { user_id: string };

      if (!user_id)
        return response.status(401).json({ error: "Not authorized" });

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (error) {
      return response
        .status(400)
        .json({ error: error instanceof Error ? error.message : error });
    }
  }
}

export { ListAllUsersController };
