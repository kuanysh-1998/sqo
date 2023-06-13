export interface IServices {
  items: [
    {
      id: number;
      title: string;
      image: string;
      hashName: string;
      landservices: [
        {
          id: number;
          description: string;
          getservice: string;
          ruleservice?: string;
          deadline?: string[];
          documents?: string[];
          videoinstruction?: string;
        }
      ];
    },
    {
      id: number;
      title: string;
      image: string;
      hashName: string;
      landservices: [
        {
          id: number;
          description: string;
          getservice: string;
          ruleservice?: string;
          deadline?: string[];
          documents?: string[];
          videoinstruction?: string;
        }
      ];
    },
  ];
}
