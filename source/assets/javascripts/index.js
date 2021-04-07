window.CMS_MANUAL_INIT = true

import CMS from "netlify-cms-app";
import { blog } from "./collections/blog";

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "github",
      repo: "knoxjeffrey/personal_website",
      branch: "main",
    },
    publish_mode: "editorial_workflow",
    media_folder: "source/assets/images",
    collections: [blog]
  },
})

window.CMS = CMS;
