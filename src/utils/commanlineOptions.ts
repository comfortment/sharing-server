import nopt from "nopt";


const longOpts = {
  "environment": String
}

const shortOpts = {
  "env": ["--environment"]
}

const parsed = nopt(longOpts, shortOpts, process.argv, 2);
export const env: string = parsed.argv.original[0];


