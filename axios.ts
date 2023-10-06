import axios, { AxiosError } from "axios";

import { AxiosResponse, isAxiosError } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Config<D = any> {
  method?: "get" | "post";
  url: string;
  data?: D;
}

interface A {
  get: <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>;
  post: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data: any
  ) => Promise<R>;
  isAxiosError: (error: unknown) => error is AxiosError;
  (config: Config): void;
  (url: string, config: Config): void;
}

const a: A = axios;
(async () => {
  try {
    const res = await a.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(res.data);

    const res2 = await a.post<Post>(
      "https://jsonplaceholder.typicode.com/posts",
      {}
    );
  } catch (error) {
    if (a.isAxiosError(error)) {
      const axiosError: AxiosError<{ message: string }> = error;
      if (axiosError.response) {
        console.error(axiosError.response.data.message);
      } else {
        console.error(axiosError.message);
      }
    }
  }
})();
