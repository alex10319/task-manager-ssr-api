import dotenv from "dotenv";
dotenv.config();

import * as http from 'http';
import App from "./app";
import { PORT } from "./constants";

const server = http.createServer(App);

(() => {
  server.listen(PORT, () => {
      console.log(`[Server] listening on port ${PORT}`);
    }
  );
})()
