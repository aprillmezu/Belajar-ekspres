# galat

```ts
import { BaseError } from 'galat';

class MyError extends BaseError<'TestError' | 'ValidationError'> {}

throw new MyError({
  name: 'ValidationError',
  message: 'Validation Error',
  cause: [],
});
```

```ts
import { BaseError, ErrorPayload } from 'galat';

type ErrorNames = 'UnprocessableEntity' | 'BadRequest';

class HttpError extends BaseError<ErrorNames> {
  status: number;

  constructor(error: ErrorPayload<ErrorNames>, status: number = 500) {
    super(error);

    this.status = status;
  }
}

throw new HttpError(
  {
    name: 'BadRequest',
    message: 'Validation Error',
    cause: [],
  },
  400,
);
```
