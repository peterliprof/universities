import { UniversityState } from '../../app/types';

export const getUniversities=(universitiesData: any)=>{

    const universities: UniversityState[] = [];
    let id=1;
    universitiesData.forEach((data: any) => {
        const university: UniversityState = {id:id.toString(), webPage: data.web_pages || [], name: data.name, thumbsUp: 0 };
        id+=1;
        universities.push(university);
    });
 
    return universities;
}