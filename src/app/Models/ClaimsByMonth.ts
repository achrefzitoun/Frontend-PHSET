export interface ClaimsByMonth {
    [month: string]: {
      [state: string]: number;
    };
  }