import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { AppChildService } from './app-child.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppChildService],
})
export class AppModule {}
