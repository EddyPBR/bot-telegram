import { Request, Response } from "express";

import PurchaseModel from "../models/PurchaseModel";

import "../models/PurchaseModel";

interface IClient {
  client_name: string;
}

class PurchaseController {
  async search(request: Request, response: Response) {
    const client_name = request.params?.client_name as string;

    if (!client_name || client_name === "") {
      return response.status(402).json({
        error: "Missing request body",
      });
    }

    try {
      const client = await PurchaseModel.findOne({ client_name });

      if (!client) {
        return response.status(404).json({
          error: "Client not found",
        });
      }

      return response.status(200).json({
        _id: client._id,
        client_name: client_name,
      });
    } catch {
      return response.status(500).json({
        error: "Internal server error",
      });
    }
  }

  async create(request: Request, response: Response) {
    const { client_name }: IClient = request.body;

    if (!client_name) {
      return response.status(402).json({
        error: "Missing request body",
      });
    }

    try {
      const client = await PurchaseModel.create({ client_name });
      return response.status(202).json({ client });
    } catch {
      return response.status(500).json({
        error: "Internal server error",
      });
    }
  }
}

export default PurchaseController;
