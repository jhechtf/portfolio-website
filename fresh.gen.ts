// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/about.tsx";
import * as $3 from "./routes/api/joke.ts";
import * as $4 from "./routes/blog.tsx";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/resume.tsx";
import * as $$0 from "./islands/BlogPosts.tsx";
import * as $$1 from "./islands/DiscordWidget.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/about.tsx": $2,
    "./routes/api/joke.ts": $3,
    "./routes/blog.tsx": $4,
    "./routes/index.tsx": $5,
    "./routes/resume.tsx": $6,
  },
  islands: {
    "./islands/BlogPosts.tsx": $$0,
    "./islands/DiscordWidget.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
