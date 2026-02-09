import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: false,
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard {
  @Input() post: any;
  @Output() emitChanges = new EventEmitter<any>();

  selectedPost(id: number) {
    this.emitChanges.emit({ triggerName: "PostId", id })
  }

  postEdit(post: any) {
    this.emitChanges.emit({ triggerName: "edit", details: post })
  }

  postDelete(id: number) {
    this.emitChanges.emit({ triggerName: "delete", id })
  }
}
