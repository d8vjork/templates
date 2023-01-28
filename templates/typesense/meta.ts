// Generated using "yarn build-templates"

export const meta = {
  name: "Typesense",
  description:
    "Typesense is a fast, typo-tolerant search engine for building delightful search experiences.",
  instructions: "Find your API key in the environment tab",
  changeLog: [{ date: "2023-1-25", description: "first release" }],
  links: [
    { label: "Documentation", url: "https://typesense.org/docs/" },
    { label: "Github", url: "https://github.com/typesense/typesense" },
    { label: "Website", url: "https://typesense.org/" },
  ],
  contributors: [
    { name: "Supernova3339", url: "https://github.com/Supernova3339" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "typesense",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "typesense/typesense:0.24.0.rcn58",
      },
    },
  },
  logo: "logo.svg",
  screenshots: [],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}