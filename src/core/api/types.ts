export interface ICustomErrorDto {
  errors: [
    {
      detail: string;
      code: string;
      status: string;
    },
  ];
}

export interface ListResponse<T> {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: T[];
}
