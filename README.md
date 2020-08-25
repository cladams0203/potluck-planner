# potluck-planner

## Deployed at https://the-potluck-planner.herokuapp.com/

## Routes Table

| Method | Endpoint            | Access | Description                   |
| ------ | ------------------- | ------ | ----------------------------- |
| POST   | `/user/register`    | all    | Register new User             |
| POST   | `/user/login`       | all    | Login User                    |
| GET    | `/event`            | token  | Get all Events                |
| GET    | `/event/:id`        | token  | Get Event by id               |
| POST   | `/event`            | token  | Add new Event                 |
| PUT    | `/event/:id`        | token  | Edit existingEvent            |
| DELETE | `/event/:id`        | token  | Remove Event                  |
| GET    | `/menu/:id`         | token  | Get menu item by id           |
| GET    | `/menu/event/:id`   | token  | Get all event menu items      |
| POST   | `/menu`             | token  | Add a new menu item           |
| PUT    | `/menu/:id`         | token  | Edit existing menu item by id |
| DELETE | `/menu/:id`         | token  | Remove menu item              |
| GET    | `/guest/:id`        | token  | Get guest by id               |
| GET    | `/guest/user/email` | token  | Get guest by email            |
| GET    | `/guest/event/:id`  | token  | Get all guests by event id    |
| POST   | `/guest`            | token  | Add a new guest               |
| PUT    | `/guest/:id`        | token  | Edit guest by id              |
| DELETE | `/guest/:id`        | token  | Remove guest by id            |
