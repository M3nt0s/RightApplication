export class Device{
    public id:number;
    public model:string;
    public color:string;
    public state:string;
  
    constructor(id:number, model:string, color:string, state:string){
      this.id = id;
      this.model = model;
      this.color = color;
      this.state = state
    }
  }