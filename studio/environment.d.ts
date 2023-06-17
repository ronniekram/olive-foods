declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SANITY_STUDIO_BASE_URL: string;
      SANITY_STUDIO_API_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
