

export interface UniversityState {
    id: string;
    webPage: string[],
    name: string,
    thumbsUp: number
};

export interface UniversitiesState {
    universities: UniversityState[],
    status: string
};

export interface FetchPayLoadState {
    country: string,
    universities: UniversityState[],

}