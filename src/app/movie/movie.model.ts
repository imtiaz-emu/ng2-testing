/**
 * Created by emu on 10/5/16.
 */

export class Movie {
  name: string;
  link: string;
  votes: number;

  constructor(name: string, link: string, votes?: number) {
    this.name = name;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
