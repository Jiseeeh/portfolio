export default interface IProject {
  title: string;
  description: string;
  projectImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  deploymentLink: string;
  repositoryLink: string;
  technologiesUsed: string[];
}
