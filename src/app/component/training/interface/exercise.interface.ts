export interface Exercise{
  id:string;
  name:string;
  duration:number;
  calorie:number;
  date?:Date;
  state?:'complete' | 'cancel' | null
}
