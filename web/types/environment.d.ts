declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_MARKER_ENV: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_SANITY_DATASET: string;
      MJ_APIKEY_PUBLIC: string;
      MJ_APIKEY_PRIVATE: string;
      MJ_API_TOKEN: string;
      BREVO_SMTP_KEY: string;
      BREVO_API_KEY: string;
      DO_CHROMIUM_URL: string;
      SECRET_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
