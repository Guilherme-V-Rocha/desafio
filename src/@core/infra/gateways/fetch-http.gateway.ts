import { HttpGateway } from "@/@core/domain/gateways";
import { HttpRequest } from "@/data/protocols/http/http-client";

export class FetchHttpGateway implements HttpGateway {
  private baseUrl =
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1";

  async request<T>(data: HttpRequest): Promise<T> {
    const response = await fetch(this.makeUrl(data.url, data.baseUrl), {
      body: data.body ? JSON.stringify(data.body) : undefined,
      method: data.method,
      headers: this.makeHeaders(data.headers),
    });
    await this.interceptError(response);
    const responseData = await response.json();
    return responseData as T;
  }

  private makeUrl(url: string, baseUrl?: string) {
    if (baseUrl) return `${baseUrl}${url}`;
    return `${this.baseUrl}${url}`;
  }

  private makeHeaders(headers: any) {
    const contentType = headers?.["Content-Type"];
    return {
      "Content-Type": contentType ?? "application/json",
      ...headers,
    };
  }

  private async interceptError(response: Response) {
    if (!response.ok) {
      const text = await this.tryGetResponseText(response);
      const error = this.tryParseError(text);
      throw error;
    }
  }

  private async tryGetResponseText(response: Response) {
    try {
      return await response.text();
    } catch (error) {
      return "";
    }
  }

  private async tryParseError(error: string) {
    try {
      return JSON.parse(error);
    } catch (error) {
      return error;
    }
  }
}
