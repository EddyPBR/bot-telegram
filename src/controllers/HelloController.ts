import { Request, Response } from "express";

class HelloController {
  async index(request: Request, response: Response) {
    return response.status(200).json({
      message: "Hello world",
    });
  }
}

export default HelloController;
