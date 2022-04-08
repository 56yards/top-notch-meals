import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import express from 'express';
import RecipeController from './controllers/recipes';

const app = express();

export default class Application {
  constructor() {
    Application.setupApplicationSettings();
    Application.setupControllers();
    Application.listen();
  }

  static setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  static setupControllers() {
    app.post('/recipes', RecipeController.handleCreate);
    app.get('/recipes/:id', RecipeController.handleGet);
    app.get('/recipes', RecipeController.handleAll);
  }

  static listen() {
    app.listen(3080, () => {
      // eslint-disable-next-line no-console
      console.log('Listening on port 3080');
    });
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const application = new Application();
