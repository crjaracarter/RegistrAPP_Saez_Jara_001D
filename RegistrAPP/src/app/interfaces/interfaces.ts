export interface RespuestaTopHeadLines {
    status: string;
    data: Data[];
  }
  
export interface Data{
    date: Date;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}