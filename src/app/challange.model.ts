export interface Challenge {
  id: number;
  title: string;
  description: string;
  daysOfChallenge: number;
  selectedDays: number[] // Separate list of selected days for each challenge
}
