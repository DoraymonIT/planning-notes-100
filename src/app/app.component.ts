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
      id: 1,
      daysOfChallenge: 30,
      title: 'Go and Rust Learning',
      description: 'Deep dive into the web devlopement journey !',
    },
    {
      id: 2,
      daysOfChallenge: 20,
      title: 'Go and Rust Learning',
      description: 'Deep dive into the web devlopement journey !',
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
    };
    this.challenges.push(challenge);
  }

  toggleColor(index: number) {
    const currentIndex = this.selectedIndexes.indexOf(index);

    // If the clicked index is the next expected index
    if (currentIndex === -1 && index === this.selectedIndexes.length) {
      // Add it to the selectedIndexes
      this.selectedIndexes.push(index);
    }
    // If the clicked index is already selected and is the last one
    else if (currentIndex === this.selectedIndexes.length - 1) {
      // Remove it from the selectedIndexes
      this.selectedIndexes.pop();
    }
    console.log(this.selectedIndexes);
  }

  isSelected(index: number): boolean {
    return this.selectedIndexes.includes(index);
  }
}
