import express from 'express';

export const server = express();

export const $ = function (_: any) {
  // Si c'est une URL, on stocke l'URL en prop de l'objet et on retourne l'objet pour faire du property chain
  if (isUrl(_)) {
    // @ts-ignore
    $.route = _;
  }
  return $;
};

$.use = function (_: any) {
  if (typeof _ === 'function') {
    // @ts-ignore
    server.use($.route, _);
  }
  return $;
}

$.get = function (_: any) {
  if (typeof _ === 'function') {
    // @ts-ignore
    server.get($.route, _);
  } else if (typeof _ === 'string') {
    // @ts-ignore
    server.get($.route, (req, res) => {
      console.log(_);
      res.send(_);
    });
  }
  return $;
}

$.post = function (_: any) {
  if (typeof _ === 'function') {
    // @ts-ignore
    server.post($.route, _);
  }
  return $;
}

$.put = function (_: any) {
  if (typeof _ === 'function') {
    // @ts-ignore
    server.put($.route, _);
  }
  return $;
}

$.delete = function (_: any) {
  if (typeof _ === 'function') {
    // @ts-ignore
    server.delete($.route, _);
  }
  return $;
}

$.start = function (p?: number) {
  const port = process.env.PORT
    ? parseInt(process.env.PORT, 10) : (p || 5555);
  server.listen(port, () => {
    console.log(`jQuery server's running on port ::${port}`);
  });
}


function isUrl(str: string): boolean {
  const regex = /^(?!https?:\/\/).+/;
  return regex.test(str);
}


export default $;
