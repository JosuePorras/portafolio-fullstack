import { httpClient } from "../htttp";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactService {
  static async sendMessage(payload: ContactPayload) {
    const response = await httpClient.post("/contact", payload);
    return response.data;
  }
}