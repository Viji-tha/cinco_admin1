export interface ApiResponse<T> {
   
statusCode:number;
message:string
response: T[];

}