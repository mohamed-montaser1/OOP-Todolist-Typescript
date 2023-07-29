namespace App {
  // Drag & Drop Interfaces
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }
  export interface DragTarget {
    dragOverHanlder(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandler(event: DragEvent): void;
  }
}
