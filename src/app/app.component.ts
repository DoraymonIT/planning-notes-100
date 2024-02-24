import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Challenge } from './challange.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title!: string;
  daysOfChallenge!: number;
  description!: string;

  isShowDiv = false;
  selectedIndexes: number[] = [];
  challenges: Challenge[] = [
    {
      id: 0,
      daysOfChallenge: 5,
      title: 'Go and Rust Learning',
      description: 'Deep dive into the web devlopement journey !',
      selectedDays: [], // Separate list of selected days for each challenge
    },
    {
      id: 1,
      daysOfChallenge: 20,
      title: 'HtmX and yNuxt Learning',
      description: 'Deep dive into the web devlopement journey !',
      selectedDays: [], // Separate list of selected days for each challenge
    },
  ];
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  getNumbers(num: number): number[] {
    return Array.from({ length: num }, (_, i) => i + 1);
  }

  ngSave() {
    console.log(this.title + this.description + this.daysOfChallenge);
    let challenge = {
      id: Math.random(),
      title: this.title,
      description: this.description,
      daysOfChallenge: this.daysOfChallenge,
      selectedDays: [],
    };
    this.challenges.push(challenge);
  }

  toggleColor(challengeId: number, index: number) {
    const currentIndex =
      this.challenges[challengeId].selectedDays.indexOf(index);

    // If the clicked index is the next expected index
    if (
      currentIndex === -1 &&
      index === this.challenges[challengeId].selectedDays.length
    ) {
      // Add it to the selectedIndexes
      this.challenges[challengeId].selectedDays.push(index);
    }
    // If the clicked index is already selected and is the last one
    else if (
      currentIndex ===
      this.challenges[challengeId].selectedDays.length - 1
    ) {
      // Remove it from the selectedIndexes
      this.challenges[challengeId].selectedDays.pop();
    }
    console.log(this.challenges[challengeId].selectedDays);
    this.isChallengeCompleted(challengeId);
  }

  isSelected(challengeId: number, index: number): boolean {
    return this.challenges[challengeId].selectedDays.includes(index);
  }
  isChallengeCompleted(challengeId: number) {
    let selectedDays = this.challenges[challengeId].selectedDays.length;
    let daysOfChallenge = this.challenges[challengeId].daysOfChallenge;

    if (selectedDays === daysOfChallenge) {
    }
  }
}
