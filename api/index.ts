import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

export default class Application {
  constructor() {
    Application.setupApplicationSettings();
    Application.setupControllers();
  }

  static setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  static listen() {
    app.listen(3080, () => {
      // eslint-disable-next-line no-console
      console.log('Listening on port 3080');
    });
  }

  static setupControllers() {
    app.get('/recipes', (req: Request, res: Response) => {
      res.status(200).send('');
    });
    app.get('/recipes/:id', (req: Request, res: Response) => {
      res.status(200).send('');
    });
    app.post('/recipes', (req: Request, res: Response) => {
      res.status(200).send('');
    });
    app.delete('/recipes/:id', (req: Request, res: Response) => {
      res.status(200).send('');
    });
  }
}

Application.listen();
