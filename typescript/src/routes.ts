import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'felipe@gmail',
    password: '123456',
    techs: [
      'Node.js', 
      'React.JS',
      {title: 'Js', experience: 100},
    ],
  });


  return response.json({ message: 'Hello Word' });
}