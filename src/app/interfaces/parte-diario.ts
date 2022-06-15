/* eslint-disable @typescript-eslint/naming-convention */
export interface ParteDiario {
  id?:          number;
  userId:      string;
  fecha:       string;
  HoraEntrada: string;
  HoraSalida:  string;
  TotalHoras?:  string;
  almuerzo:    string;
  comida:      string;
  merienda:    string;
  updated_at?: string;
  created_at?: string;
}

