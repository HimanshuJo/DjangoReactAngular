<!-- src/app/app.component.html -->

<div class="container mt-5">
  <h1 class="text-center mb-4">Language Translation App</h1>
  <div class="form-group">
    <label for="originalText">Original Text:</label>
    <textarea class="form-control" id="originalText" [(ngModel)]="originalText"></textarea>
  </div>
  <div class="form-group mt-3">
    <button class="btn btn-primary" (click)="handleTranslate()">Translate</button>
  </div>
  <div *ngIf="translatedText" class="mt-4">
    <label>Translated Text:</label>
    <div class="alert alert-success" role="alert">
      {{ translatedText }}
    </div>
  </div>
</div>