import rawData from "../generated/cv-data.json";

export interface CvMeta {
  name: string;
  email: string;
  phone: string;
  website: string;
  affiliation: string;
}

export interface CvData {
  meta: CvMeta;
  employment: string[];
  education: string[];
  research_areas: string[];
  publications: string[];
  work_in_progress: string[];
  teaching: string[];
  invited_talks: string[];
  honors_grants: string[];
  service: string[];
  _unparsed: Array<{ section: string; text: string }>;
}

const cvData = rawData as CvData;
export default cvData;
