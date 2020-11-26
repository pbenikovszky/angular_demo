import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';
import { ITag } from './tags';

@Component({
  styleUrls: ['./tag-list.component.css'],
  templateUrl: './tag-list.component.html',
})
export class TagListComponent implements OnInit {

  _listFilter: string;

  pageTitle: string = 'Tags';
  errorMessage: string;

  tags: ITag[];
  filteredTags: ITag[];

  // Getters and Setters
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTags = this.listFilter ? this.filterTags(this.listFilter) : this.tags;
  }

  filterTags(filterBy: string): ITag[] {
    return this.tags.filter((tag: ITag) => tag.description_en.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
  }

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe({
      next: tags => {
        this.tags = tags.data;
        this.filteredTags = this.tags;
      },
      error: err => this.errorMessage = err
    });

  }

}
