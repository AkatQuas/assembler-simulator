import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InstructionComponent } from './instruction/instruction.component';
import { LabelsComponent } from './labels/labels.component';
import { OutputComponent } from './output/output.component';
import { RegistersComponent } from './registers/registers.component';
import { NzIcons, NzModule } from './shared/nz.module';
import { SharedModule } from './shared/shared.module';
import { SimulatorComponent } from './simulator/simulator.component';
import { UploaderComponent } from './uploader/uploader.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstructionComponent,
    OutputComponent,
    LabelsComponent,
    RegistersComponent,
    SimulatorComponent,
    FooterComponent,
    UploaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NzModule,
    NzIconModule.forRoot(NzIcons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
