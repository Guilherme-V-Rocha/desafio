export type HttpRequest = {
  url: string;
  baseUrl?: string;
  method: HttpMethod;
  body?: unknown;
  headers?: any;
  params?: any;
  responseType?: "json" | "text" | "blob" | "arraybuffer" | "stream";
};

export type HttpMethod = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

export type HttpErrorResponse = {
  status: number;
  errors: Array<string>;
};
