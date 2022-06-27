export interface StockDTO {
  page: number;
  per_page: number;
  total: 1;
  total_pages: number;
  date: dataDTO[];
}
interface dataDTO {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}
