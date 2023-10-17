interface IDatabase {
  id: number;
  photo: string;
  division: 'I' | 'II' | 'III' | 'IV' | 'ALL';
  name: string;
  description: string;
}

export default IDatabase;
