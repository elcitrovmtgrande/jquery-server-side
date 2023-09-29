import express, { Application } from 'express';

export class jQueryServer {
  private _app: Application;
  private _port: number;

  constructor(_port: number) {
    this._port = _port;
    this._app = express();
    this._app.listen(_port, () => {
      console.log(`jQuery server's running on port ::${_port}`);
    });
  }
}

export const $ = new jQueryServer(3000);

export default $;
