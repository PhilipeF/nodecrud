import { Request, Response } from "express";
import { UpdateVideoService } from "../services/UpdateVideoService";

export class UpdateVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, duration } = request.body;

    const service = new UpdateVideoService();

    const result = service.execute({ id, name, description, duration });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
