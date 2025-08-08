import express from 'express';
import cors from 'cors';

const configureMiddleware = (app) => {
  app.use(express.json());
  app.use(cors());
};

export default configureMiddleware;
