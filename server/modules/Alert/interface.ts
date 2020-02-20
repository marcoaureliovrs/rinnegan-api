export interface IAlert {
    id: number,
    server: string,
    description: string,
    created_at: string,
    server_type: string,
  }
  
  export interface IAlertDetail extends IAlert {
    id: number,
    server: string,
    description: string,
    created_at: string,
    server_type: string,
  }
  
  export function createAlert({id, server, description, created_at, server_type,}: any): IAlert{
    return {
        id, 
        server, 
        description,
        created_at,
        server_type,
    }
  }
  
  export function createAlerts(data: any[]): IAlert[] {
    return data.map(createAlert)
  }
  
  export function createAlertById({id, server, description, created_at, server_type,}: any): IAlertDetail{
    return {
        id, 
        server, 
        description,
        created_at,
        server_type,
    }
  }
  